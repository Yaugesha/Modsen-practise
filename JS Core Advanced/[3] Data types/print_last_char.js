// Напишите функцию, которая принимает
// строку и выводит в консоль последний
// символ строки

const printLastChar = (str) => {
  console.log(str.at(-1));
};

printLastChar("Hello"); // o
printLastChar("John Doe"); // e
