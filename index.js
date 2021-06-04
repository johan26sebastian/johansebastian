// este es un comentario de una sola linea
/* este es un comentario 
de linea multiple*/
// las variables se crean con las palabras clave var, let
// hay tipos de datos: el tipo string me agrupa el tipo cadena de texto.
console.log ('hola compañeros');
let variable = 0;
console.log (variable);
variable = '20';
console.log (variable);
// esta variabre guarda un dato tipo numero
variable = 20;
console.log (variable);
var salario = 200000;
// '' poner esto lo cambia a tipo texto, si se lo quito puede cambiar el Boolean
var sueldo = '200000';
// hay un tipo de dato llamado Boolean, el cual tiene dos valores: true y false
// > esto significa mayor, < menor, == igual, <= menor o igula, >= mayor o igual, === completamente igual
var comparacion = sueldo >= salario;
console.log (comparacion);
var comparacion = sueldo <= salario;
console.log (comparacion);
var comparacion = sueldo == salario;
console.log (comparacion);
var comparacion = sueldo === salario;
console.log (comparacion);

// ¡importante! siempre para abrir esa pestaña de abajo es hundir en el teclado control+ñ
/* ¡importante! para actualisar la pestaña de abaja primero guardar la informacion de esta rama 
y luego escribir al lado de <johan/desktop/sistemas/sublimetext/johansebastian> !node index.js¡*/
// 26/05/2006
var suma = 0;
suma = suma + 26;
console.log (suma);
suma = suma + 5;
console.log (suma);
suma = suma + 2;
console.log (suma);
suma = suma + 0;
console.log (suma);
suma = suma + 0;
console.log (suma);
suma = suma + 6;
console.log (suma);
// existen operadores logicos en javascript los cuales son:
// para & es shift + 6
// Y = &&
// alt gr + 1 de arriba = ||
// O = ||
// ejemplo con &&
//true && true = true
//true && false = false
//false && true = false
//false && false = false
// ejemplo con ||
//true || true = true
//true || false = true
//false || true = true
//false || false = false

// para poder poner [] hay que undir alt gr + la tecla de la tilde

let arr = []

let arreglo = ['samuel', 'juan', 'maria jose', 'fabian'];

//console.log (arr);
//console.log (arreglo);
// agregarlo a, con el nombre.push(nombre que quiere añadir) 
// y abajo volver a poner console.log( nombre del grupo ej: arreglo)
arreglo.push('david');
//console.log (arreglo);
arreglo.push('karen');
//console.log (arreglo);
// al poner los de arriba de comentario me pone los nombre separados como una lista
// ejemplo:
//juan
//maria
//karen

// si elimino lo de abajo y dejo los de arriba normales me los ponen en conjunto ejemplo:(juan,karen,daniel)
console.log (arreglo[0]);
console.log (arreglo[1]);
console.log (arreglo[2]);
console.log (arreglo[3]);
console.log (arreglo[4]);
console.log (arreglo[5]);

// esto me dice cuantos elementos tienes adentro del conjunto
console.log (arreglo.length);

// cuando pones ++ es igual a 1
// si lo pones al principio de la suma  se suma antes de la siguiente pero si se pone al final se suma despues
/*ej: suma = suma + 6;
console.log (++suma);*/
                        //para poder sumar cuando la pones al final hay que hacerla asi:
/* ej: suma = suma + 6;
console.log (suma++);*/
//console.log (suma)

for (let i = 0; i < arreglo.length; i++) {
    let nombre = arreglo[i];
    //console.log (i);
    console.log ('hola ' + nombre + ' ¿como estas?');

    
}

let i = 6;
while (i < arreglo.length ) {
    let nombre = arreglo[i];
    console.log ('hola ' + nombre + ' Dios te bendiga');
    i++;
}

do { let nombre = arreglo[i];
    console.log ('hola ' + nombre + ' Dios te bendiga');
    i++;
} while (i < arreglo.length);
console.log (i);
//shift enter para bajar
// esto sirve para poner un nombre
//poner: let arr = []  y luego :
let nombre = prompt ('ingrese su nombre por favor');
console.log (arr);
arr.push (nombre);
console.log (arr);
// esta sirve para poner 6 nombres
//nota para el profe :poner: let arr = [] al principio si no no sirve, y luego :
//ojo solo para esta 
for (let i = 0; i < 6; i++) {
    let nombre = prompt ('ingrese su nombre por favor');
    console.log (arr);
    arr.push (nombre);
    console.log (arr);
    
}
// pone el apellido al nombre correspondiente segun los turnos de digitacion
for (let i = 0; i < 6; i++) {
    let apellido = prompt ('ingrese su apellido por favor');
    arr[i] = arr[i] + ' ' + apellido;
}
console.log (arr); 

let newArr = [];
for (let i = 0; i < 6; i++) {
    let deporte = prompt ('ingrese su deporte por favor');
    //newArr[i] = newArr[i] + ' ' + deporte;
}
newArr.push (arr);
console.log (newArr); 

alert ('hola bienvenido');