import fs from 'fs-extra'

async function createConfigFile(
	drizzle_configTargetPath: string,
	drizzle_configPath: string,
	dbPath: string,
) {
	// Read the template file content as text
	let content = await fs.readFile(drizzle_configPath, 'utf-8')

	// Replace placeholder {{path}} with targetPath
	content = content.replace(/{{path}}/g, dbPath.toString().replace(/\\/g, '\\\\'))

	// Write the modified content to destination
	await fs.writeFile(drizzle_configTargetPath, content)

	return true
}

export default createConfigFile
