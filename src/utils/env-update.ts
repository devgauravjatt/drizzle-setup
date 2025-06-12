import path from 'path'
import fs from 'fs-extra'
import { glob } from 'glob'

async function updateAllEnvFiles(envVars: Record<string, string>) {
	const cwd = process.cwd()

	// Find all .env* files in current directory
	const envFiles = await glob('.env*', { cwd, dot: true })

	// If no .env files exist, create a default .env file
	if (envFiles.length === 0) {
		envFiles.push('.env')
	}

	for (const envFile of envFiles) {
		const envFilePath = path.join(cwd, envFile)

		let lines: string[] = []
		const envMap = new Map<string, string>()

		// Load existing content if file exists
		const exists = await fs.pathExists(envFilePath)
		if (exists) {
			const content = await fs.readFile(envFilePath, 'utf-8')
			lines = content.split('\n')
		}

		// Parse existing variables to check what exists
		for (const line of lines) {
			const match = line.match(/^([^=]+)=(.*)$/)
			if (match) {
				envMap.set(match[1]!.trim(), match[2]!)
			}
		}

		// Add new variables that don't exist
		const newVars: string[] = []
		for (const [key, value] of Object.entries(envVars)) {
			if (!envMap.has(key)) {
				newVars.push(`${key}=${value}`)
			}
		}

		// Write updated content
		if (exists && lines.length > 0) {
			// Preserve existing content and add new vars
			const content = lines.join('\n') + (newVars.length > 0 ? `\n${newVars.join('\n')}` : '')
			await fs.writeFile(envFilePath, content)
		} else {
			// Create new file with new vars
			await fs.writeFile(envFilePath, newVars.join('\n'))
		}
	}
}

export default updateAllEnvFiles
