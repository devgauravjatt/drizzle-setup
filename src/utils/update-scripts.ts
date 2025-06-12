import fs from 'fs-extra'

async function UpdateScripts(packageJsonPath: string) {
	// Define the path to package.json

	// Read the existing package.json file
	await fs.readFile(packageJsonPath, 'utf8', async (readErr, data) => {
		if (readErr) {
			throw readErr
		}

		// Parse the JSON data
		const packageJson = JSON.parse(data)

		// Ensure the scripts section exists
		if (!packageJson.scripts) {
			packageJson.scripts = {}
		}

		// Define the new scripts to add
		const newScripts = {
			'db-push': 'drizzle-kit push',
			'db-generate': 'drizzle-kit generate',
			'db-migrate': 'drizzle-kit migrate',
		}

		// Add or update the scripts in package.json
		Object.assign(packageJson.scripts, newScripts)

		// Convert the updated object back to a JSON string with indentation
		const updatedPackageJson = JSON.stringify(packageJson, null, 2)

		// Write the updated JSON back to package.json
		await fs.writeFile(packageJsonPath, updatedPackageJson, 'utf8')
	})
}

export default UpdateScripts
