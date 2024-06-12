// Напишите функцию для применения
// алгоритма сортировки пузырьком.

const bubbleSort = (arr) => {
  let length = arr.length;
  while (length > 1) {
    let newLength = 0;
    for (let index = 0; index < length; index++) {
      if (arr[index] < arr[index - 1]) {
        let bubble = arr[index - 1];
        arr[index - 1] = arr[index];
        arr[index] = bubble;
        newLength = index;
      }
    }
    length = newLength;
  }
  return arr;
};

console.log(bubbleSort([4, 3, 78, 2, 0, 2])); // [ 0, 2, 2, 3, 4, 78 ]
console.log(bubbleSort([0, -23, 4, 20, -10, 5])); // [ -23, -10, 0, 4, 5, 20 ]
