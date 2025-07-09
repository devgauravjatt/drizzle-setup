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
	{
		name: 'PlanetScale',
		path: 'planetscale',
		template_path: 'templates/mysql/planetscale',
		env_var: {
			DATABASE_HOST: '',
			DATABASE_USERNAME: '',
			DATABASE_PASSWORD: '',
			DATABASE_URL: '',
		},
		packages: ['drizzle-orm', '@planetscale/database', 'dotenv', 'drizzle-kit -D'],
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
