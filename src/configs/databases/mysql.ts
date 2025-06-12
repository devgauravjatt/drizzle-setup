const MySQLlDatabasesConfigs = [
	{
		name: 'MySQL',
		path: 'mysql',
		template_path: 'templates/mysql/mysql',
		env_var: {
			DATABASE_URL: 'jdbc:mysql://localhost:3306/your_database_name',
		},
		packages: ['drizzle-orm', 'mysql2', 'dotenv', 'drizzle-kit -D'],
	},
]

export function getMySQLlDatabasesConfigs() {
	return MySQLlDatabasesConfigs.map((config) => {
		return {
			label: config.name,
			value: config.path,
		}
	})
}

export default MySQLlDatabasesConfigs
