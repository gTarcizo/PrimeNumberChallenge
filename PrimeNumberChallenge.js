/* Goals: 
1. Finds all the prime numbers between 1 and 1000. 
2. Sums all the prime numbers that you found between 1 and 1000. 
3. The `main` function should return the sum of all prime numbers. */

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const primeNumbers = new Array(); //The prime numbers between 1 and 1000 will be here!


// Function that sums all array index
const sumAll = () => {
    var sumArray = primeNumbers.reduce((accumulator, value) => {
        accumulator += value;
        return accumulator;
      }, 0);
      console.log(sumArray)
  }


// This function receive the "limit" of 1000
// Then calculate if it's a prime number
// if it is, the prime number will be added on "primeNumbers"

const main = (limit) => {
  for (let number = 2; number <= limit; number++) {
    let primo = true;

    for (let divisor = 2; divisor < number; divisor++) {
      if (number % divisor === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      primeNumbers.push(number);
    }
  }
  return sumAll() //here it's returning the array sum value
};
main(1000); //it's sending the limit

