const { optionsSQLite3 } = require('../../options/config.js');
const knex = require('knex')(optionsSQLite3);

knex.from('products').where('price', '>', '50000').del()
	.then(() => console.log('Cars deleted'))
	.catch(err => { console.log(err); throw err })
	.finally(() => knex.destroy())