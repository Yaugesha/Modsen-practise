// Напишите функцию, которая принимает
// массив и значение, и возвращает true, если
// это значение присутствует в массиве, и false,
// если нет. Используйте строгий режим

"use strict";

const include = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

console.log(include([1, "str1", "str2", 2, 3, 4], 2)); // true
console.log(include([1, "str1", "str2", 2, 3, 4], 0)); // false
console.log(include([1, "str1", "str2", 2, 3, 4], "str2")); // false
