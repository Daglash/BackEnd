const { optionsSQLite3 } = require('../../options/config.js');
const knex = require('knex')(optionsSQLite3);

const cars = [
	{ name: 'Audi', price: 52642 },
	{ name: 'Mercedes', price: 57127 },
	{ name: 'Skoda', price: 9000 },
	{ name: 'Volvo', price: 29000 },
	{ name: 'Bentley', price: 350000 },
	{ name: 'Citroen', price: 21000 },
	{ name: 'Hummer', price: 41400 },
	{ name: 'Volkswagen', price: 21600 }
]

knex('products').insert(cars)
	.then(() => console.log('Data inserted'))
	.catch(err => { console.log(err); throw err })
	.finally(() => knex.destroy())

module.exports = cars;