/* Goals: 
1. Finds all the prime numbers between 1 and 1000. 
2. Sums all the prime numbers that you found between 1 and 1000. 
3. The `main` function should return the sum of all prime numbers. */

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

const primeNumbers = new Array

const main = (n)=>{
    if(n <= 1) return
    if(n % 2 === 0 || n % 3=== 0) return
    if(n <= 3) return primeNumbers.push(n)

    for(let i = 5; i * i <= n; i+=6){
        if(n % i === 0 || n % (i+2) === 0) return
    }
    primeNumbers.push(n)
    return sumArray
}

for(let i = 1; i <= 1000; i++){ 
    main(i)
}

var sumArray = primeNumbers.reduce((accumulator, value)=>{
    accumulator += value
    return accumulator
}, 0)

console.log(sumArray)