// 1.   Write a HOF to find the first number greater than 10 in an array
const nums = [1,2,3,15, 4, 80, 34]

let firstBiggest = nums.find((num) => {
    return num > 10;
});
console.log(firstBiggest)

// 2.   Write a HOF to find the first string in an array
const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]
const firstStr = arr.find(ele => typeof ele === 'string');
console.log(firstStr)


// 3.   Write a HOF to find the first instance of null in an array
const firstNull = arr.find(ele => ele === null);
console.log(firstNull) 




// 1.   Write a HOF to sort an array of numbers from largest to smallest

const nums = [1,25,6,3,88,45,0]

nums.sort((a,b) => a > b ? -1 : 1);
console.log()


// 2.   Write a HOF to sort an array of numbers from smallest to largest

nums.sort((a,b) => a < b ? 0 : 88);
console.log(nums)
 
// 3.   Write a HOF to sort peoples names by their length

const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

partyPeople.sort((ele) => partyPeople.length);
console.log(partyPeople)

// 4.   Write an HOF to sort an array of objects of people by their age youngest to oldest



// 5.   Write an HOF to sort an array of strings by the last letter of the string

const strings = ['sam', 'john', 'daniel', 'vanessa']