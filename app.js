// Promise.then() chaining
// slowMath.add(6, 2)
//     .then(value => {
//         console.log(value)
//         return slowMath.multiply(value, 2)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.divide(value, 4)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.subtract(value, 3)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.add(value, 98)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.remainder(value, 2)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.multiply(value, 50)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.remainder(value, 40)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.add(value, 32)
//     })
//     .then(value => {
//         console.log(`The final result is ${value}, where you fill in the balnk with the final result.`)
//     })
//     .catch(err => console.log(err))

// Failing Promise Chain
// slowMath.add(1, 1)
//     .then(value => {
//         console.log(value)
//         return slowMath.multiply(value, 2)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.divide(value, 4)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.subtract(value, 3)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.add(value, 98)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.remainder(value, 2)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.multiply(value, 50)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.remainder(value, 40)
//     })
//     .then(value => {
//         console.log(value)
//         return slowMath.add(value, 32)
//     })
//     .then(value => {
//         console.log(`The final result is ${value}, where you fill in the balnk with the final result.`)
//     })
//     .catch(err => console.log(err))

// Async/Await
async function doMath(a, b) {
    try {
        let value = await slowMath.add(a, b)
        console.log(value)
        let product = await slowMath.multiply(value, 2)
        console.log(product)
        let quotient = await slowMath.divide(product, 4)
        console.log(quotient)
        let difference =  await slowMath.subtract(quotient, 3)
        console.log(difference)
        let sum = await slowMath.add(difference, 98)
        console.log(sum)
        let remainder = await slowMath.remainder(sum, 2)
        console.log(remainder)
        let productTwo = await slowMath.multiply(remainder, 50)
        console.log(productTwo)
        let remainderTwo = await slowMath.remainder(productTwo, 40)
        console.log(remainderTwo)
        let final = await slowMath.add(remainderTwo, 32)
        console.log(`The final result is ${final}, where you fill in the balnk with the final result.`)
    }
    catch (err) {
        console.log(err)
    }
};

doMath(6, 2)
// doMath(1, 1)