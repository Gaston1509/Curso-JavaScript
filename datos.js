// arrays

// .unship agrega elementos al final

// .ship elimina elementos del principio 

// .pop elimina elementos del final

// .join une los string con - * , ej Luis-dario-gaston

// .indexOf busca el indice donde se ubica el elemento, si no existe devuelve -1

// .includes devuelve un booleano sobre si existe o no el elemento

// .sort ordena alfabeticamente lo elementos

// .reverse invierte los elementos 

// ----OBJETOS LITERALES Y FUNCION FOR OF----

// const productos = [
//     {id: 1, nombre: "arroz"},
//     {id: 2, nombre: "fideos"},
//     {id: 3, nombre: "pan"},

// ]

// for ( const producto of productos){
//     console.log(producto)
// }


// --FUNCION AGREGAR ELEMENTOS AL ARRAYS DE OBJETOS

// const productos = []

// const agregarProducto = () => {
//     const id = prompt('Ingrese el id del producto')
//     const nombre = prompt('ingrese nombre del producto')
//     const producto = {id, nombre}
//     productos.push(producto)
//     console.table(productos)
// }

// agregarProducto()


// OBJETOS LITERALES

// const usuario = {
//     nombre: "Gaston",
//     Email: "sarasa",
//     Edad: 45,
//     mostrarDatos : function(){
//         console.log(`nombre ${usuario.nombre} | e-mail ${usuario.Email} | Edad ${usuario.Edad}`)
//     }
// }

// usuario.mostrarDatos()

// const list = ["manzana", "banana", "uvas", "peras"]

// function frutasindexOf (lista){

//     let indice = list.indexOf(lista)

//         if (indice < 0) {
//             console.log("Fruta no encontrada")
//         } else{
//             console.log(`Frutas ${list[indice]} encontrada` )
            
//         }
//     }

//     console.log(list);

//     frutasindexOf("peras")



// OBJETOS LITERALES  SEMANA 5
// const persona = {
//     nombre: "Gaston",
//     Edad: 45,
//     Calle: "Mendoza 1685"

// }

// console.log(persona.nombre);
// console.log(persona["nombre"]);

// ----CLASS

// class Persona {
//     constructor (nombre, edad, calle){
//         this.nombre = nombre
//         this.edad = edad
//         this.calle = calle

//     }
//     saludar(){
//         console.log("Hola Soy", this.nombre)
//     }
// }

// const persona = new Persona("Gaston", 45, "Mendoza 1685")

// persona.saludar();

// ----FUNCIONES CONSTRUCTORAS

// function Cat (name){
//     this.name = name
//     this.sound = "Miau"
// }

// const cat = new Cat("Tom")
// console.log(cat.sound);

// function Persona(nombre, edad, calle){
//     this.nombre = nombre
//     this.edad = edad
//     this.calle = calle

//     this.hablar = function(){
//         console.log('Hola soy' , this.nombre);
//     }

// }
// const persona = new Persona('Gaston', 45, 'Mendoza 1685')
// persona.hablar()

// --- CLASES

// class Cliente{
//     static id = 0;

//     constructor(nombre, direccion){
//          this.id = ++Cliente.id;

//     let email = '';

//     this.nombre = nombre;
//     this.direccion = direccion;

//     this.getEmail = function(){
//         return email;
//     }
//     this.setEmail = function(nuevoEmail){
//         email = nuevoEmail;
//     }

// }
// }


// const cliente1 = new Cliente('miguel', 'Av de mayo 1');
// const cliente2 = new Cliente('Pedro', 'Av indep 2');
// const cliente3 = new Cliente('Matias', 'Panama 3');

// console.log(cliente1.nombre);
// console.log(cliente1.direccion);

// console.log(cliente1.email);

// console.log(cliente1.getEmail());



// const objeto= {

//     propiedad1: "hola",
//     propiedad2: 455,
//     propiedad3: "Otro hola",
//     metodo: function(){
//         alert("tercer Hola")
//     }

// }
// console.log(objeto);
// console.log(objeto.propiedad1);
// // objeto.metodo()              //llamar al metodo
// objeto.propiedad1= "chau";     //cambiar valores del obj
// objeto.propiedad2 = 342;       //cambiar valores del obj
// objeto.propiedad4 = 545464;    //cambiar valores del obj
// objeto.propiedad3 = "blabla";  //cambiar valores del obj

// ----------FUNCIONES CONSTRUCTORES THIS Y NEW

// const michifus = {
//     nombre : "michifus",
//     maullido: "Miauuuu",
//     edadMeses: 49,
//     maullar: function(){            // ➡ ➡ ➡ ➡ metodo
//         console.log(this.maullido)
//     },
//     presentar: function(){
//         console.log(`Mi gato se llama ${this.nombre} tiene ${this.edadMeses} y maulla de esta manera ${this.maullido}`);
//     },
   

// }
// michifus.maullar();
// michifus.presentar()


//----------- CLASES INICIAN CON MAYUSCULO "Gato"

// function Gato(nombre, edadMeses, maullido){
//     this.nombre = nombre;
//     this.edadMeses = edadMeses;
//     this.especie = "Gato";
//     this.maullido = maullido;
//     this.maullar = function(){ 
//         console.log(this.maullido)

// }
//     this.presentar = function(){
//         console.log(`Mi gato se llama ${this.nombre} tiene ${this.edadMeses} meses y maulla de ésta manera: ${this.maullido}`);
// }
// }

// const ash = new Gato("Ash", 40, "Miauuuuuuusssss");
// console.log(ash);
// ash.presentar()


// const gatos = [
//     new Gato("Ash", 40, "Miauuuuuuusssss"),
//     new Gato("negro", 10, "Miau"),
//     new Gato("manchas", 20, "Miausssss"),
//     new Gato("perro", 30, "Miuuuuuuusssss"),
// ]

// console.log(gatos)
// gatos[3].presentar()


// --------CLASES CONSTRUCTOR
// nombre de la clase inicia con mayuscula y lleva la palabra constructor, tambien this, metodo se escribe sin function

// class Perro{
//     constructor(nombre, genero, edad){
//         this.nombre = nombre
//         this.genero = genero
//         this.edad = edad
//     }
//     ladrar(){
//         console.log("Guau");
//     }
//     presentar(){
//         console.log(`Este es el perrito ${this.nombre} tiene ${this.edad} años y es ${this.genero}`);
//     }
// }

// const manchas = new Perro("manchas", "macho", 18)
// console.log(manchas.presentar());
// const skay = new Perro ("Skay", "hembra", 15)
// console.log(skay.presentar());

// PROPIEDADES SETER AND GETER  🤬 explico como el culo

// class Usuario{
//     constructor(){
//         this.nombre = nombre;
//         this.email = email;
//         this.reviews = 0;
//         this.comentario = 0;

//     }
// }

// PROPIEDAD 👉  STATIC PROPIEDAD QUE NO VA A CAMBIAR 

// class Animal{
//     constructor(especie, cantidadExtremidades){
//         this.especie = especie;
//         this.cantidadExtremidades = cantidadExtremidades;
//     }

//     static descripcion(){
//         console.log("Ese es un animal vivo");
//     }
// }

// const cangrejo = new Animal("cangrejo", 8)
// const insecto = new Animal("insecto", 6)
// const ave = new Animal("pajaro", 5)

// console.log(cangrejo);  //llama las propeidades y el valor
// Animal.descripcion()   //llamaa al metodo y es estatico no cambia

// STORAGE

// localStorage.setItem("gaston", 45)







 
