// Напишите функцию, которая извлекает
// данные из API и отменяет запрос, если он
// занимает больше указанного времени

const request = (url, time) => {
  new Promise(async (resolve, reject) => {
    setTimeout(() => {
      reject("Time out");
    }, time);

    const res = await fetch(url);
    resolve(res.json());
  })
    .then((data) => console.log("Success:", data))
    .catch((error) => console.log("Failed:", error));
};

const url = "https://jsonplaceholder.typicode.com/posts/5";

request(url, 1000); // Success: {...}

setTimeout(() => {
  request(url, 10);
}, 1000); // Failed: Time out
