// Создайте класс под названием
// «Прямоугольник» со свойствами ширины и
// высоты. Включите два метода расчета
// площади и периметра прямоугольника.
// Создайте экземпляр класса «Прямоугольник»
// и вычислите его площадь и периметр.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  p() {
    return (this.width + this.height) * 2;
  }

  s() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(2, 5);

console.log(`P = ${rect.p()} S = ${rect.s()}`); // P = 14 S = 10
