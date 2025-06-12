const PostgresqlDatabasesConfigs = [
	{
		name: 'PostgreSQL',
		path: 'postgres_sql',
		template_path: 'templates/postgres/postgres',
		env_var: {
			DATABASE_URL: 'postgres://postgres:postgres@localhost:5432/postgres',
		},
		packages: ['drizzle-orm', 'pg', 'dotenv', '@types/pg -D', 'drizzle-kit -D'],
	},
	{
		name: 'Neon',
		path: 'neon',
		template_path: 'templates/postgres/neon',
		env_var: {
			DATABASE_URL: '',
		},
		packages: ['drizzle-orm', '@neondatabase/serverless', 'dotenv', 'drizzle-kit -D'],
	},
	{
		name: 'Vercel Postgres',
		path: 'vercel_postgres',
		template_path: 'templates/postgres/vercel-postgres',
		env_var: {
			POSTGRES_URL: '',
		},
		packages: ['drizzle-orm', '@vercel/postgres', 'dotenv', 'drizzle-kit -D'],
	},
]

export function getPostgresqlDatabasesConfigs() {
	return PostgresqlDatabasesConfigs.map((config) => {
		return {
			label: config.name,
			value: config.path,
		}
	})
}

export default PostgresqlDatabasesConfigs
