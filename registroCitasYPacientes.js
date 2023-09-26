//Funcion para imprimir asteriscos y poner una division en la información de mi consola
function imprimirAsteriscos (){
    console.log("***************************************");
}

//Invocacion de la funcion
imprimirAsteriscos();


/*Sistema para registrar pacientes y citas de estos pacientes, utilizando metodos de arrays

Lista de cosas por hacer / cosas por tomar en cuenta

- Un array para pacientes
- Un array para citas

- Prompt para registrar los datos
    datos a registrar: nombre, apellido, edad, fecha, hora, especialista.

- Funcion registrarPaciente
- Funcion registrarCita
- Metodos para modificar los arreglos
    (push, forEach, splice)

*/
//Crear un array para almacenar mis pacientes

//La variable pacientes esta declarada e inicializada (tiene un nombre y tiene un valor, a pesar de que su arreglo este vacio)

//Los indices del arreglo estan indefinidos, porque no hay elementos pero si hay espacios disponibles
let pacientes = []; 


// funcion para registrar un nuevo paciente
// Paso 1. Ejecucion de mi funcion, pido dos datos
function registrarPaciente(nombre, edad){

    //crear un array dentro de otro array
    //Paso 2. Guardo cada par de datos (nombre y edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas : []
        };

    // Agregar paciente al array
    // Paso 3. Ya que tengo el par de datos, le hago un push a mi areglo para guardar al paciente.
    pacientes.push(paciente);
    return paciente; //Return nos permite dos cosas: que se detenga la funcion y 

}

//funcion para registrar citas de un paciente
function registrarCita(paciente, fecha, hora){

    //Cuando tenga estos datos, buscare dentro del paciente el apartado citas para hacerle un push ahi
    paciente.citas.push(
        {
            fecha,
            hora 

        }

    );
}

//Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " + paciente.edad);
    console.log("Citas registradas: ");

    //ForEach para imprimir citas
    paciente.citas.forEach((cita, indice) =>{
        console.log("Indice: " + indice + "Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });


}

/*El foreach es un ciclo especial para arreglos
Funcionamiento del foreach anterior
1. Definir una variable temporal llamada cita y otra variable temporal llamada indice
2. Cada que se ejecuta el foreach, busca y encuentra una cita, asigna esa informacion a las variables temporales e imprime la informacion.
3. Vuelve a buscar y encontrar una cita y reasigna esa informacion a las variables temporales.*/







//Registrar un paciente desde la invocacion de la funcion
let paciente1 = registrarPaciente("Fatima", 26);
let paciente2 = registrarPaciente("Cesar", 26);
let paciente3 = registrarPaciente("Dr. Simi", 50);

//Registrar la cita de un paciente desde la invocacion de la funcion registrarCita
registrarCita(paciente1, "2023-09-12", "1:00 PM");

//Mostrar informacion del paciente
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);
mostrarInfoPaciente(paciente3);



/*ForEach
Es un metodo de arrays, que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una funcion establecida.

Generalmente el ForEach se utiliza para imprimir la informacion del arreglo.

Sintaxis de un ForEach

array.ForEach(function(elemento, indice, arreglo))

  -  elemento: elemento actual del arreglo que se esta procesando. 
  -  indice: posicion del elemento actual en el array
  -  arreglo: el array que se está recorriendo

Ejemplo del supermercado
  - elemento: producto que compré y que está en el carrito.
  - indice: la posicion de ese producto. 
  - arreglo: carrito del super

*/


let carritoSuper = ["Manzanas", "Papitas", "Huevo", "Jabon para trastes", "Pan"];


//Para cada elemento del tipo "producto" que tenga una posicion dentro del arreglo llamado "carritoSuper", vas a hacer algo
carritoSuper.forEach(function(producto, indice){
    console.log("Producto: " + producto + " con la posicion: " + indice);
});
