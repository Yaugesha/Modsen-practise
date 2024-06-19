// Напишите функцию, которая принимает
// массив URL-адресов и параллельно
// загружает содержимое каждого URL-адреса с
// помощью Promises

const loadEachUrl = (arr) => {
  arr.forEach((url, i) => {
    new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })
      .then((loadedData) => console.log(i, "Loaded: ", loadedData.title))
      .catch(() => console.log(i, "Error"));
  });
};

const generateUrlArr = () => {
  const api = "https://jsonplaceholder.typicode.com/todos/";
  return new Array(10)
    .fill("")
    .map(() => api + Math.floor(Math.random() * 300));
};

loadEachUrl(generateUrlArr());
