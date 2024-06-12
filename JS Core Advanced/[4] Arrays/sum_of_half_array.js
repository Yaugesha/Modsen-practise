// Напишите функцию, которая принимает
// массив с числами и находит сумму первой
// половины элементов этого массива

const sum_of_half_array = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sum_of_half_array([1, 8, -4, 16, 25, -10])); //5
console.log(sum_of_half_array([1, 8, -4, 16])); //9
