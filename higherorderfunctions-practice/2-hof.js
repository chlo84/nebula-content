// 1.   Write a higher order function that manipulates every number in an array 
//      Ex: changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
//      Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
//      Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]

// console.log(mapOver([1,2,3,4,5], doubler))

// what it looks like using map
// const mapOver = [1,2,3,4,5].map(doubler)

const minNums = ['1','2','3','4','5'];
const allNums = minNums.map(minNums => doubler + minNums);
console.log(allNums)



// 2.   Write a higher order function that calculates some features of a string
//      Ex: stringInfo(length, 'Howdy Partner!') => 14
//      Ex: stringInfo(vowels, 'Howdy Partner!') => 3
//      Ex: stringInfo(capitals, 'Howdy Partner!') => 2
//      Ex: stringInfo(nonLetters, 'Howdy Partner!') => 2

const myStr = 'Howdy Partner!'
let output1 = (myStr.reduce((accumalter)))


// 3.   Write a higher order function that minimizes a given list of numbers into one number
//      Ex: minimizeNums(add, [2,3,5,8]) => 18