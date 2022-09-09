//String
let color: string= "blue";
color ='red';
let fullName: string = " Bob Bobbington";
let age: number = 37;
//funciones
function unaFunction(mensaje: string) {
    console.log("El mensaje es: " + mensaje);
}
//Arrays:
let listi: Array<number> = [1, 2, 3];
let lista: number []=[1,2,3] ;
let liste : string []= [ 'pimiento', 'papas', 'tomate'];
let planetas: string[]= ['Mercurio', 'Venus', 'Tierra'];
let masas: number[]= [13, 28, 15] ;
let rocosos: boolean[] = [true, false, false, true]
let perdidos: any[] = [9, true, 'asteroides']
//Tupla, los elementos son limitados y de tipos fijos
let diametro: [string, number] = ['Saturno', 116460]
//Variables
var medida= 10;
var m=10;
let precio=0;
let b= "hola mundo";
// Tipos de Datos
//String
let saludo: string= "hola, mundo";
let colorProducto = 'blue';
//number
let decimal : number 
let codigoProducto: number;
//boolean
let nombreProducto: boolean = false;
// any ---< contiene cualquier elemento
let cantidad: any = 4;
let desc: any [] = [1, true, "verde"]
//void---> es un tipo de retorno de funcion que no devuelve ningun valor
function usuario(): void {
    console.log ("Este es un mensaje para el usuario")
}
//objeto
let persona: object={nombre: "Ana", edad:45}
// Desdestructuración---> Nos permite obtener valores de un array o un objeto
  //objetos
var obj={x:1, y:2, z:3};
console.log(obj.y);
   //arrays
var array=[1, 2, 3];
console.log(array[2]);
     //arrays con destructuración
var array_2=[1, 2, 3, 5];
var [x, y, ...resto]= array_2;
console.log(rest);
//Estructuración
function rest(first,second, ...allOthers)
{console.log(allOthers);}
rest('1', '2', '3','4', '5');
//Crear un objeto Date
let date: Date = new Date();
console.log("Date = " + date);

date=new Date("2021-06-20");
console.log("Date = " + date);

date = new Date(2018, 5, 5, 17, 23, 42, 11);
console.log("Date = " + date) ;
// Metodos que provee el objeto Date
let date: Date = new Date();
date.setDate(13);
date.setMonth(11);
date.setFullYear(2021);

console.log("Year= " + date.getFullYear());
console.log("Date =" + date.getDate());
console.log("Month= " + date.getMonth());
console.log("Day = " + date.getDay());

//Switch
var x = "0";
  switch (x) {
    case "0":
        console.log("off");
         break;
    case "1":
        console.log("On")
        break;
    default:
        console.log("Default")

  }
  //Ejemplo de objeto en TypeScript
  let planet= new Object();
  let planet = {};

  interface Planet{
    name: string;
    galaxy: string;
    numberOfMoons: number;
    weight: number;
  }
  //Object with properties
  let planet: Planet = {
    name: "Earth",
    galaxy: "Milky Way",
    numberOfMoons: 1,
    weight: 100000
  };
  console.log("Planet Name:-" + planet.name);
  console.log("Planet Galaxy:-" + planet.galaxy);
  console.log("Planet Number of Moons:-" + planet.numberOfMoons);
  console.log("Planet Weight:-" + planet.weight);