// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
//          Ex: calculate(subtract, 2,4) => -2
//          Ex: calculate(exponent, 2,4) => 16

function multiplyTwoNumbers(num1, num2){
    return num1 * num2
}
const divideTwoNumbers = (num1, num2) => {
    return num1/num2
}
const subtractTwoNumbers = (num5, num6) =>{
    return num1 - num2
}
console.log(calculateThis(2, 4, multiplyTwoNumbers))
console.log(calculateThis(2, 4, divideTwoNumbers))
console.log(calculateThis(2, 4, subtractTwoNumbers))

// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14

const calculateAll = (func, nums) => {
    return func(nums)
}
const mult = (arr) =>{
    let solution = arr[0];
    for(let i = 0; i < arr.length; i++){
        solution = solution * arr[i]
    }
    return solution;
}
console.log(calculate(mult, [1,2,3,4]))
//An array of numbers
// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]