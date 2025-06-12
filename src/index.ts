import { select, spinner, text, confirm } from '@clack/prompts'
import fs from 'fs-extra'
import { fileURLToPath } from 'url'
import path from 'path'
import SQLiteDatabasesConfigs, { getSQLiteDatabasesConfigs } from './configs/databases/sqlite'
import PostgresqlDatabasesConfigs, { getPostgresqlDatabasesConfigs } from './configs/databases/postgres_sql'
import updateEnvFile from './utils/env-update'
import createConfigFile from './utils/drizzle-config-update'
import pkgMangerRun from './utils/pkg-manger-run'
import dbLists, { dbListsByValue } from './configs/dblists'
import UpdateScripts from './utils/update-scripts'
import MySQLlDatabasesConfigs, { getMySQLlDatabasesConfigs } from './configs/databases/mysql'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const databaseConfigs = [...PostgresqlDatabasesConfigs, ...SQLiteDatabasesConfigs, ...MySQLlDatabasesConfigs]

const databaseGroups = {
	PostgreSQL: getPostgresqlDatabasesConfigs(),
	SQLite: getSQLiteDatabasesConfigs(),
	MySQL: getMySQLlDatabasesConfigs(),
}

const dbGroup = await select({
	message: 'Pick a database group',
	options: dbLists,
})

if (dbGroup === undefined) {
	console.log('Operation cancelled.')
	process.exit(0)
}

const dbOption = await select({
	message: `Pick a ${dbListsByValue(dbGroup.toString())?.label} database`,
	options: databaseGroups[dbListsByValue(dbGroup.toString())?.label!],
})

if (dbOption === undefined) {
	console.log('Operation cancelled.')
	process.exit(0)
}

const dbPath = await text({
	message: 'Database folder path',
	initialValue: './src/db',
})

if (dbPath === undefined) {
	console.log('Operation cancelled.')
	process.exit(0)
}

// move to template = dbPath
const dbConfig = databaseConfigs.find((config) => config.path === dbOption)

if (dbConfig === undefined) {
	console.log('Operation cancelled.')
	process.exit(0)
}

const templatePath = path.join(__dirname, `${dbConfig.template_path}/db`)
const drizzle_configPath = path.join(__dirname, `${dbConfig.template_path}/drizzle.config.ts`)
const envVar = dbConfig.env_var
const targetPath = path.resolve(process.cwd(), dbPath.toString())
const drizzle_configTargetPath = path.resolve(process.cwd(), 'drizzle.config.ts')
const scriptJsonPath = path.resolve(process.cwd(), 'package.json')

try {
	if (await fs.pathExists(targetPath)) {
		console.log(`❌ Folder already exists at ${targetPath}. Aborting.`)
		process.exit(1)
	}

	await fs.copy(templatePath, targetPath)
	// console.log(`  📁 Template copied to ${dbPath.toString()}`)
} catch (error) {
	console.error('🚨 Error copying template:', error)
	process.exit(1)
}

try {
	await createConfigFile(drizzle_configTargetPath, drizzle_configPath, dbPath.toString())
	// console.log(`  🛠 drizzle.config.ts added!`)
} catch (error) {
	console.error('🚨 Error copying and modifying drizzle.config.ts:', error)
}

try {
	await updateEnvFile(envVar as unknown as Record<string, string>)
	// console.log(`⚙ .env file updated with ${envVar} at top`)
} catch (error) {
	console.error('🚨 Error updating .env file:', error)
}

// ask update scripts in package.json
const updateScripts = await confirm({
	message: 'Update package.json scripts?',
	initialValue: true,
})

if (updateScripts === true) {
	try {
		await UpdateScripts(scriptJsonPath)
		// console.log('  📑 package.json scripts updated!')
	} catch (error) {
		console.error('🚨 Error updating package.json scripts:', error)
	}
}

const pkg_manger = await select({
	message: 'Pick a package manager',
	options: [
		{ label: 'pnpm', value: 'pnpm' },
		{ label: 'bun', value: 'bun' },
		{ label: 'npm', value: 'npm' },
		{ label: 'yarn', value: 'yarn' },
	],
})

if (!pkg_manger) {
	console.log('❌ Operation cancelled.')
	process.exit(0)
}

const s = spinner({})
s.start(`Installing ${dbConfig.packages.join(', ')} with ${pkg_manger.toString()}...`)

try {
	await pkgMangerRun(pkg_manger, dbConfig)
	s.stop?.('All packages installed successfully', 0)
	console.log(
		`\n📁 Template copied to ${dbPath.toString()}
		\n⚙  .env file vars at on top updated!
		\n🛠  drizzle.config.ts added!
		\n📑 package.json scripts updated!
		\n✅ Drizzle Setup completed!`,
	)
} catch (err) {
	s.stop('🚨 Failed to install packages')
	console.error(
		'😞 Installation failed. Please check your internet connection and \nverify that your package manager is installed and functioning correctly.',
	)
	process.exit(1)
}
