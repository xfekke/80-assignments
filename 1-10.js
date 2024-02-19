const fs = require('fs');
const prompt = require('prompt-sync')();

console.log('What do you want to do? Enter a number.');
console.log('1. Square root of: ?');
console.log('2. Salesman salary');
console.log('3. Hours to minutes and seconds');
console.log('4. Add 3 numbers and average number');
console.log('5. Convert SEK to pounds and dollars');

let menyOption = prompt('Enter your option: ');

let optionNumber = parseInt(menyOption);

if (!isNaN(optionNumber)) {
  console.log('You entered a valid option!')
} else {
  console.log('You entered a unvalid number. Program closing!')
}

switch (menyOption) {

  case "1":
    console.log('You chose option 1');
    sqrtRoot();
    break;

  case "2":
    console.log('You chose option 2');
    salesmanSalary();
    break;

  case "3":
    console.log('You chose option 3');
    hoursToMins();
    break;

    case "4":
      console.log('You chose option 4');
      add3Average();
      break;

      case "5":
        console.log('You chose option 5');
        convertCurrency();
        break;

  default:
    console.log('You chose nothing!');

}

function sqrtRoot() {
  const number = prompt('Enter the number: ');

  const result = Math.sqrt(number);
  console.log(`The square root of ${number} is ${result}`);
}

function salesmanSalary() {
  console.log('A salesman has a provisionary salary. He makes 80 000 SEK each month and in addition he earns 9% of what he sells.');
  console.log('Enter a number of how much he sells for in 1 month to find out his monthly pay.');

  const number = prompt('How much he sold for: ');

  let result = number / 100;

  let result2 = result * 9;

  let result3 = result2 + 80000;

  console.log(`His monthly pay is time is: ${result3}, his commision from sales is ${result2}`);
}

function hoursToMins() {
  console.log('How many minutes and seconds are there in an hour?');

  const number = prompt('Enter the amount of hours you want to convert to minutes and seconds: ');

  let resultMinutes = number * 60;
  let resultSeconds = resultMinutes * 60;

  console.log(`In ${number} hours there is ${resultMinutes} minutes and ${resultSeconds} seconds.`)
}

function add3Average() {
  const number1 = prompt('Enter number 1:');

  if (!isNaN(number1)) {
    console.log('You entered a valid option!')
  } else {
    console.log('You entered a unvalid number. Program closing!')
  }

  const number2 = prompt('Enter number 2:');

  if (!isNaN(number2)) {
    console.log('You entered a valid option!')
  } else {
    console.log('You entered a unvalid number. Program closing!')
  }

  const number3 = prompt('Enter number 3:');

  if (!isNaN(number3)) {
    console.log('You entered a valid option!')
  } else {
    console.log('You entered a unvalid number. Program closing!')
  }

  totalNumber = parseInt(number1) + parseInt(number2) + parseInt(number3);
 
  let avgNumber = totalNumber / 3;

  console.log(`The total number is ${totalNumber} and the average number is ${avgNumber}`);
}

function convertCurrency() {
  console.log(`What amount of SEK do you want to convert into pounds and dollars?`);
  const number = prompt(`Enter SEK here: `);

  if (!isNaN(number)) {
    console.log('You entered a valid option!')
  } else {
    console.log('You entered a unvalid number. Program closing!')
  }

  numberPound = parseInt(number) / 10;
  numberDollar = parseInt(number) / 6;

  console.log(`${number} is equals ${numberPound} in pounds and ${numberDollar} in dollars`);
}