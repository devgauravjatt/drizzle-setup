import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'

const db = drizzle(process.env.DATABASE_URL!)

export default db
