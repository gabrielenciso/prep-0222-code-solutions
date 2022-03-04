function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  return (hours * 60);
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('Gabriel');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var factor5 = addAndMultiplyBy5(10, 5);
console.log('factor of 5:', factor5);

function multiplyAndDivideby5(num1, num2) {
  return (num1 * num2) / 5;
}

var multAndDivBy5 = multiplyAndDivideby5(35, 10);
console.log('multiplied and divided by 5:', multAndDivBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

function getCircleCircumfrence(radius) {
  return 2 * Math.PI * radius;
}

var circumfrence = getCircleCircumfrence(5);
console.log('circumfrence:', circumfrence);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Gabriel', 'Enciso');
console.log('full name:', fullName);

function cube(number) {
  return number ** 3;
}

var cubed = cube(5);
console.log('cubed:', cubed);
