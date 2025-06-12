const dbLists = [
	{ label: 'PostgreSQL', value: 'postgres_sql' },
	{ label: 'SQLite', value: 'sqlite' },
	{ label: 'MySQL', value: 'mysql' },
]

export function dbListsByValue(value: string) {
	return dbLists.find((dbList) => dbList.value === value)
}

export default dbLists
