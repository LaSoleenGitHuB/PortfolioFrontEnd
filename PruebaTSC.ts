tsc
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
tsc app/app.ts
let message: String= 'Hello world';
console.log (message);

function DecoradorPersona(data:string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {

        array = data.split (",");
        Nombre=this.array[0];
        Apellido=this.array[1];
        
        }

    }
}
@DecoradorPersona ('Juan,López')
class Persona {
    private nombre:string="";
    private apellido:string="";
    private añoNac:number=0;

  constructor(nombre:string, apellido:string) {
    this.nombre = nombre;
    this.apellido=apellido;
    
    let persona = new Persona ("Juan, López") ; 
    console.log (persona.toString()) ;
    }
}