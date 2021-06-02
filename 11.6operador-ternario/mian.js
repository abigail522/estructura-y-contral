/*valida 2 condiciones de una manera más simplificar que un if else */
/*const autentico = true;
const saldo=true;*/

const autenticado = false;
const saldo=true;

console.log(autenticado && saldo ? "continua para finalizar tu compra":"no puedes continuar");
/*ternario anidado:*/
const auntenticado1= false;
const saldo1=true;

console.log(auntenticado1 ? saldo ? 'continua para finalizar tu compra':'debes aunteticar para poder continuar':'debes tenre saldo suficiente para continuar');

