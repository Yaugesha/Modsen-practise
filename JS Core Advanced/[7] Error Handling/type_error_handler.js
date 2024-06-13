// Напишите функцию, которая использует блок
// try-catch для перехвата и обработки ошибки
// TypeError при доступе к свойству
// неопределенного объекта

const handleTypeError = () => {
  try {
    let object;
    object.property(); // попытка обратиться к неопределенному свойству объекта
  } catch (error) {
    console.log(error.name); // TypeError
    console.log(error.message); // Cannot read properties of undefined (reading 'property')
  }
  console.log("continue..."); // continue...
};

handleTypeError();
