import { execa } from 'execa'

async function pkgMangerRun(
	pkg_manger: symbol | 'bun' | 'yarn' | 'pnpm' | 'npm',
	dbConfig: {
		packages: string[]
	},
) {
	for (const rawPkg of dbConfig.packages) {
		const parts = rawPkg.trim().split(' ')
		const pkg = parts[0]
		const isDev = parts.includes('-D')

		const args =
			pkg_manger === 'bun'
				? isDev
					? ['add', '-D', pkg]
					: ['add', pkg]
				: pkg_manger === 'yarn'
					? isDev
						? ['add', '--dev', pkg]
						: ['add', pkg]
					: isDev
						? ['install', pkg, '--save-dev']
						: ['install', pkg]

		await execa(pkg_manger.toString(), args, { stdio: 'ignore' })
	}
}

export default pkgMangerRun
