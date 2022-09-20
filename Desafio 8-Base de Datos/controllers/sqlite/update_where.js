const { optionsSQLite3 } = require('../../options/config.js');
const knex = require('knex')(optionsSQLite3);

knex.from('products').where('price', '9000').update({ price: 9500 })
	.then(() => console.log('Car updated'))
	.catch(err => { console.log(err); throw err })
	.finally(() => knex.destroy())