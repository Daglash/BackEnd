const { optionsSQLite3 } = require('../../options/config.js');
const knex = require('knex')(optionsSQLite3);

knex.from('products').select('*')
	.then(rows => {
		for (row of rows) {
			console.log(`${row['id']} ${row['name']} ${row['price']}`);
		}
	}).catch(err => { console.log(err); throw err })
	.finally(() => knex.destroy())