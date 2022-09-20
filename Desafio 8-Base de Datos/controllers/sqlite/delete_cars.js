const { optionsSQLite3 } = require('../../options/config.js');
const knex = require('knex')(optionsSQLite3);

knex.from('products').del()
	.then(() => console.log('All cars deleted'))
	.catch(err => { console.log(err); throw err })
	.finally(() => knex.destroy())