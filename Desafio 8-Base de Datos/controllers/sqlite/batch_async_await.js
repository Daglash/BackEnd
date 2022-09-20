const { optionsSQLite3 } = require('../../options/config.js');
const knex = require('knex')(optionsSQLite3);
const cars = require('./insert_cars.js');

(async () => {
	try {
		console.log('--> Borramos todos los autos');
		await knex('products').del()

		console.log('--> Insertamos autos');
		await knex('products').insert(cars)

		console.log('--> Leemos todos los autos');
		let rows = await knex.from('products').select('*')
		for (row of rows) console.log(`${row['id']} ${row['name']} ${row['price']}`);

		console.log('--> Insertamos un auto más');
		await knex('products').insert({ name: 'Fiat', price: 7777 })

		console.log('--> Leemos los autos actualizados');
		rows = await knex.from('products').select('*')
		for (row of rows) console.log(`${row['id']} ${row['name']} ${row['price']}`);
	}
	catch (err) {
		console.log(err);
	}
	finally {
		knex.destroy();
	}
})()