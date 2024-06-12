// Попробуйте объявить переменную с тем же
// именем дважды, используя var, let и const.
// Какие переменные позволяют повторное
// объявление, а какие нет?

var variable1;
var variable1;

console.log(variable1); // undefined

let variable2;
let variable2;

console.log(variable2); // SyntaxError: Identifier 'variable2' has already been declared

const variable3 = 1;
const variable3 = 2;

console.log(variable3); // SyntaxError: Identifier 'variable3' has already been declared
