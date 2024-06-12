// Напишите функцию, которая принимает
// массив и значение, и возвращает true, если
// это значение присутствует в массиве, и false,
// если нет. Используйте строгий режим

"use strict";

const isDublicate = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value && typeof arr[i] == typeof value) {
      return true;
    }
  }
  return false;
};

console.log(isDublicate([1, "str1", "str2", 2, 3, 4], "str2")); // true
console.log(isDublicate([1, "str1", "str2", "2", 3, 4], 2)); // false
console.log(isDublicate([1, "str1", "str2", 2, 3, 4], 0)); // false
