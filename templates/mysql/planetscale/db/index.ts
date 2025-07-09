import 'dotenv/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'

const db = drizzle({
	connection: {
		host: process.env.DATABASE_HOST!,
		username: process.env.DATABASE_USERNAME!,
		password: process.env.DATABASE_PASSWORD!,
	},
})

export default db
