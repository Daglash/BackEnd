class Usuario {
    constructor(Nombre,Apellido){
        this.Nombre=Nombre;
        this.Apellido=Apellido;
        this.Libros=[];
        this.Mascotas=[];
    }
    
    // Metodos

    // adicione otras opciones en comentario 

    getFullName= () =>{
        // return this.Usuario
       return console.log(`${this.Nombre} ${this.Apellido}`)
    }

    addMascota = (mascota) =>{
        this.Mascotas.push(mascota);
    }

    countMascotas = () =>{
        console.log(this.Mascotas);
        let conteo = this.Mascotas.length;
        return console.log(conteo)
        // console.log(this.Mascotas.length)
    }

    addBook = (titulo,autor) =>{
        this.Libros.push(titulo,autor);
        return console.log(`Libro: ${titulo} - Autor: ${autor}`);
        
    }

    
    getBookNames = () =>{
        this.Libros.map((libro) => {return libro.titulo})
    };
               
    
}


// Hice dos Clientes para comprobar la funcionalidads

let Cliente1 = new Usuario("Pablo","Martinez");
let Cliente2 = new Usuario("Gabriela","Perez");


Cliente1.getFullName();
Cliente1.addMascota("Violeta");
Cliente1.addMascota("Juanita");
Cliente1.addMascota("pepita");
Cliente1.countMascotas();
Cliente1.addBook("Fundacion","Isacc Asimov")
Cliente1.addBook("El señor de las moscas","William Golding")
Cliente1.getBookNames();



// Cliente2.getFullName();
// Cliente2.addMascota("Titus");
// Cliente2.addMascota("Dante");
// Cliente2.addMascota("Zira");
// Cliente2.addMascota("Kiara");
// Cliente2.countMascotas();
// Cliente2.addBook("El Facundo","Domingo Faustino")
// Cliente2.addBook("El Visitante","Alma Maritano")
// Cliente2.getBookNames();