const optionsSQLite3 = {
	client: 'sqlite3',
	connection: {
		filename: './db/products.sqlite'
	},
	useNullAsDefault: true
}

const optionsMariaDB = {
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		port: 3306,
		user: 'root',
		password: '',
		database: 'DESAFIO_8-BASE_DE_DATOS'
	}
}

module.exports = { optionsSQLite3, optionsMariaDB };