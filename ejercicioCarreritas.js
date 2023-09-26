console.log("Je suis Vivante")


let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];

console.log(corredores);

// Utilizar index
//Jorge adelanta a Roberto (cambiamos las posiciones  de Jorge y Roberto)
corredores.splice(corredores.indexOf("Jorge"), 1);
corredores.unshift("Jorge");
console.log(corredores);

//Ramiro adelanta a Jorge (cambiamos las posiciones de Ramiro y Jorge)
corredores.splice(corredores.indexOf("Ramiro"), 1);
corredores.unshift("Ramiro");
console.log(corredores);

//Roberto se lesiona y sale de la carrera (eliminamos el primer elemento)
corredores.splice(corredores.indexOf("Roberto"), 1);
console.log(corredores);

//Andrea baja una posicion (intercambiamos las posicones de Andrea y del ultimo corredor)
corredores.splice(corredores.indexOf("Andrea"), 1);
corredores.push("Andrea");
console.log(corredores);

//El quinto corredor es reemplazado por Jose (cambiamos las posiciones del ultimo corredor con Jose)
corredores.push("Jose");
console.log(corredores);
//Imprimimos arreglo final

//Orden final
// [Ramiro, Jorge, Sofia, Andrea, Jose]

