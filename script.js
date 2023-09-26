/* 
Un Array es un conjunto de datos que se puede almacenar  en una sola variable. Un arreglo es una estructura de datos que podemos definir como una coleccion de variables (que pueden ser diferentes, pero con un mismo contexto).


- El array es un objeto

*/
//Variables que estan "sueltas"
let nombre = "Fatima";
let edad = 26;
let puesto = "Participante";



// Usar un array (arreglo) para "juntar" nuestras variables
//Se utilizan corchetes para los arreglos.
//Agregamos los elementos al array separados por coma.
let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"]; //object
//En este arreglo, son 5 elementos pero tiene 4 posiciones porque se empieza a contar desde el 0

console.log(typeof(personasDeLaCH31));

//Podemos almacenar cualquier tipo de dato en un array
let cosasRandom = ["Pelota", 31, true, undefined, null]; //object

console.log(typeof(cosasRandom));
 
//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object porque los arrays son objetos (después veremos que tenemos muchos tipos de objetos)



/* 
Metodo = accion
Propiedad = Cómo se ve


- Los metodos  son funciones que estás asignadas o que son de un objeto
    **Generalmente las funciones están solas**
*/

/* Los arreglos, al ser objetos, cuentan con metodos que nos permiten manipularlos */


//Ya que tengo mi arreglo, cómo podemos acceder a esa información?
/*Para mostrar la cantidad de elementos que tengo en un arreglo, usamos un metodo llamado lenght
        **Su indice comienza en 0**
*/
    
//Metodo lenght para mostrar los elementos de un array
//               Objeto     . metodo
console.log(personasDeLaCH31.length);

//Declarar un array
[5,4,3,2,1]

//Inicializar un array
let cuentaRegresiva = [5,4,3,2,1];


//Acceder a un elemento en especifico


console.log(personasDeLaCH31[0]); // Felipe
console.log(personasDeLaCH31[25]); // Indefinido porque el elemento todavía no existe pero si está el espacio disponible para asignarle un valor después.  


//También podemos acceder a un elemento de mi arreglo por medio de una variable

//Declaro el indice en una variable //indice es espacio que ocupa un elemento 
let index = 4;

//Paso esta variable como indice del arreglo
console.log(personasDeLaCH31[index]); //Alejandro


//Ejemplo de un array para un consultorio dental

let pacientes = [];

let dentistas = ["Dr. Smith", "Dra. Garcia", "Dr. House", "Dr. Simi"];

//Para hacer modificaciones, usamos el index para acceder al dato  y luego lo reasignamos.

dentistas[3] = "Similares";
dentistas[8] = "Dr. Strange"; // undefined por Dr. Strange

console.log (dentistas [3]);
console.log (dentistas);

//Funcion para imprimir asteriscos y poner una division en la información de mi consola
function imprimirAsteriscos (){
    console.log("***************************************");
}

//Invocacion de la funcion
imprimirAsteriscos();


//Metodos de arrays

let listaDelSuper = ["Gansitos", "Coca-cola", "Arroz", "Atun", "Verduras"];

//Metodo length(): para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de: "  + listaDelSuper.length); 

//Metodo push(): para poner elementos al final de mi array
listaDelSuper.push("Jabon para ropa","Jabon para trastes");

console.log(listaDelSuper);

//Metodo pop(): para eliminar elementos del final del array
listaDelSuper.pop();  //invocar una funcion ---- nombre de la funcion();

console.log(listaDelSuper);


//el lenght se modifica en automatico al agregar o eliminar elementos de la lista
console.log(listaDelSuper.length); //elementos


//Agregar un elemento al principio del array, usamos el metodo unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

//Eliminar el primer elemento del array
//Shift elimina elementos al principio del array.

listaDelSuper.shift();
console.log(listaDelSuper);


//Saber la posición de las verduras
console.log(listaDelSuper.indexOf("Verduras"));

//Metodo splice para agregar, eliminar o reemplazar elementos


//Nombre del arreglo.splice(inicio, cantidadElementosAEliminar,elementoAInserta1, elementoAInsertar2,...)

listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");

console.log(listaDelSuper);


listaDelSuper.splice(5, 2, "Platano");
console.log(listaDelSuper);


//Metodo .map(): 
let numeros = [1, 2, 3, 4, 5]

//crear otro arreglo con los numeros multiplicados x2 [2, 4, 6, 8, 10]

let numerosPorDos = numeros.map(function(numero){
    return numero * 2;
});

console.log(numerosPorDos);

/*
Tenemos un array de pacientes. Este array tiene datos registrados como nombre y edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 años, el paciente necesita una atención especial.

    Aspectos a considerar
    - 2 arreglos (original y modificado)
    - condicion if
    - funcion para agregar el nuevo dato a cada elemento
    - metodo map()


*/

//Arreglo de pacientes original
//Array de objetos JS
let pacientesConsultorio = [
    {
        nombre: "Felipe",
        edad: 31,
    },
    {
        nombre: "Fatima",
        edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 51,
    }

]

// Funcion para agregar el texto "Necesita atención especial"

function agregarEstadoSalud(paciente){ 
    let estado = "Saludable";


    //Si el paciente tiene mas de 40 anios
    if (paciente.edad>40){  //con el paciente.edad es para acceder una caracteristica, elemento o funcion dentro del elemento paciente
        estado = "Necesita atencion especial";
    }

    return {
        ...paciente, //copia dle paciente, los tres puntos hace referencia a las propiedad actuales del objeto
        estadoSalud: estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    };
/* 
    Manera explicita de retornar un nuevo objeto asignando valores a sus propiedades, nombre, edad y estado de salud.
    return {
        nombre: paciente.nombre,
        edad: paciente.edad,
        estadoSalud: estado
    }

    Manera paso por paso de crear y retornar un nuevo objeto asignando valores a sus propiedades
    let nuevoPaciente = {
        nombre: paciente.nombre,
        edad: paciente.edad,
        estadoSalud: estado
    };

    return nuevoPaciente;
    ---------------------------------------------------------------
    Reutilizar el mismo objeto creando una nueva propiedad "estadoSalud" y respetando el valor de sus propiedades actuales.
    paciente.estadoSalud = "Estado loco";

    return paciente;*/
} 

//Vamos a aplicar la cuncion en cada elemento del arreglo con el map
//Los metodos o funciones hacen algo / ejecutan una logica o proceso
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);
let pacientesConsultorioConEstado2 = pacientesConsultorio.map(function(unPaciente){
    return agregarEstadoSalud(unPaciente)
});


console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);
console.log(pacientesConsultorioConEstado2);