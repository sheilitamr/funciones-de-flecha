const sayHello = name => `Hola ${name}`;
console.log(sayHello('Sheila'));

const calculateSquareArea = side => `El área del cuadrado es ${side * side}`;
console.log(calculateSquareArea(2));

const calculateTriangleArea = (base, height) =>
  `El área del triángulo es ${(base * height) / 2}`;
console.log(calculateTriangleArea(5, 3));

const calculateCircleArea = radius =>
  `El área del círculo es ${Math.PI * radius * radius}`;
console.log(calculateCircleArea(6));

const celsiusToFahrenheit = celsius =>
  `${celsius} grados celsius en grados fahrenheit son ${celsius * 1.8 + 32} `;
console.log(celsiusToFahrenheit(25));

const fahrenheitToCelsius = fahrenheit =>
  `${fahrenheit} grados fahrenheit en grados celsius son ${
    (fahrenheit - 32) / 1.8
  }`;
console.log(fahrenheitToCelsius(77));

const totalPrice = price =>
  `El precio ${price} con IVA es ${price + price * 0.21}`;
console.log(totalPrice(25));

const writeMessage = (name, material, size, note) =>
  `${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`;
console.log(writeMessage('Sheila', 'metal', 'pequeño', 'Muchas gracias'));

const average = (number1, number2, number3) =>
  `La media es ${(number1 + number2 + number3) / 3}`;
console.log(average(5, 5, 5));

const discount = (price, discount) => {
  const totalDiscount = (discount * price) / 100;
  return price - totalDiscount;
};
console.log(discount(100, 25));

const words = (word1, word2) => `Palabras unidas por guión ${word1}-${word2}`;
console.log(words('Nala', 'Anubis'));

const kilometersToMeters = kilometer => kilometer * 1000;

console.log(kilometersToMeters(50));

const hoursToSeconds = hours => hours * 3600;
console.log(hoursToSeconds(2));

const metersPerSecond = speed => {
  const totalMeters = kilometersToMeters(speed);
  const totalSeconds = hoursToSeconds(1);
  return totalMeters / totalSeconds;
};
console.log(metersPerSecond(90));
