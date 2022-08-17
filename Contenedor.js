const {promises: fs} = require('fs') 
// Sirve para llamar al Fs si agrego {promises: fs} me ahorro de poner en el await y en otros lados que haga el llamado fs.promises.writeFile(ejemplo)


class Contenedor{

    constructor(ruta){
        this.ruta =ruta;
    }

    async save(nuevoObjeto){
        // obtiene todos los datos que ya existen en el archivo a traves de la funcion getALL
        const objetos =await this.getAll()


        // creador del nuevo id
        let newId

        if(objetos.length == 0){
            newId = 1
        }else{
            const ultimoId = parseInt(objetos[objetos.length - 1].id)
            newId = ultimoId + 1;
            // pq menos 1 ?? pq arranca desde 0
        }

        // agregar el nuevo objeto al array que existe en el archivo
        
        objetos.push({id: newId , ...nuevoObjeto})

        // el JSON me pasa el objeto a string si pusiera data directamente en el writefile falla porque pide solo STRINGS

        // guardar el nuevo array con el objeto agregado
        try{
        await fs.writeFile(this.ruta, JSON.stringify(objetos, null , 2))
        return newId
        } catch (error){
            return []
        }
        return id;
    }

    async getAll() {

        try {
        
        const objetos = await fs.readFile("./productos.txt", "utf-8");
        
        console.log(objetos);
        
        return JSON.parse(objetos);
        
        } catch (error) {
        
        return [];
        
        }
        
        }


    async getById(id){
        const objetos =await this.getAll()
        
        const ObjetoID= objetos.filter(elemento => elemento.id !== id)
        
        if(ObjetoID.length === objetos.length){
            throw new Error(`No se encontro el id ${id}`)
        }

        try{
            await fs.readFile(this.ruta, JSON.stringify(ObjetoID,null,2))
            console.log(ObjetoID)
        }catch(error){

        }
    }

    async getAll(){
        try{
            const objetos = await fs.readFile(this.ruta,'utf-8')
            return JSON.parse(objetos)
        }catch(error){
            return []
        }
    }

    // siempre que tengas una funcion asincrona siempre hay que usar el try y el catch

    async deleteById(id){
         // obtiene todos los datos que ya existen en el archivo a traves de la funcion getALL
         const objetos =await this.getAll()
    
        //  filtra los datos para identificar el objetoa eliminar por id
        // opcion 1
        
        const nuevoObjeto= objetos.filter(elemento => elemento.id !== id)
        
        if(nuevoObjeto.length === objetos.length){
            throw new Error(`Error al borrar:no se encontro el id ${id}`)
        }

        try{
            await fs.writeFile(this.ruta, JSON.stringify(nuevoObjeto,null,2))
        }catch(error){

        }



        // // opcion 2
        // const objs = await this.getAll()
        // const index = objs.findIndex(o => o.id == id)
        //  if (index == -1) {
        //   throw new Error(`Error al borrar: no se encontró el id ${id}`)
        //   }
        
    }

    async deleteAll(){
        fs.unlink('./productos.txt', (error) => {
            if (error) {
                console.log('error:', error)
            } else {
                console.log('archivo borrado!');
            }
        });
    }

}

const listaProductos= new Contenedor('./productos.txt')

module.exports = new Contenedor();

// ----------------Adicion de objetos------------------------------------- 

// listaProductos.save({title:'Dying Light 2', Price:'44 USD',thumbnail :'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S4_1200x1600-b3d66b4576fd6488b674710e13493435' })
// listaProductos.save({title:'Star Wars :Battlefront 2', Price:'60 USD',thumbnail :'https://image.api.playstation.com/vulcan/img/rnd/202005/1908/REtp963wSMPqrbE8ugiKaGKA.png' })
// listaProductos.save({title:'Sims 4', Price:'30 USD',thumbnail :'https://media.vandal.net/t200/21058/los-sims-4-201494113415_1.jpg' })
// listaProductos.save({title:'Hogwarts Legacy', Price:'55 USD',thumbnail :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29vImnfiX7NIhZhTzXHMTrHpVX_5rk3GlwQKWF8uVxLzdByE75ZCRHKKL01aRRahi0jo&usqp=CAU'})

// --------------Borra el objeto por id------------------

// listaProductos.deleteById(2)


// -----------------Busca por ID----------------------------

// listaProductos.getById(1)

// -----------------Borra el archivo-------------------------

// listaProductos.deleteAll()
