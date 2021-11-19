// 1.   //Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'

for(let i= 0; i<= 30; i++){
    console.log('the current index is '+i)
 }

// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index

for(let i= 1; i<= 10; i+=2){
    console.log(i)
 }

// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.

let celebName = ['Mary J. Blige', 'Lauren Hill', 'Simone Biles', 'Queen Latifah', 'Morris Chestnut'];
for (let i = 0; i <celebName.length; i++){
    console.log(celebName[i]);
 }

// // 4.   Loop over your celebrity list and 
// //      If a celebrity's full name has an even number of characters log it to the console

let celebName = ['Mary J. Blige', 'Lauren Hill', 'Simone Biles', 'Queen Latifah', 'Morris Chestnut'];
for(let i = 0; i < celebName.length; i++){
     if(celebName[i].length % 2 === 1){

     }
         console.log(celebName[i]);
}

// // 5.   Use the your celebrity array for this question
// //      Create a for loop which will iterate over each element and output a new array of only first names

let firstNames = [];
 for(let i =0; i < celebName.length; i++){
     firstNames.push(celebName[i].split(' ')[0]);

 }
 console.log(firstNames);

// // 6.   Use the your celebrity array for this question
// //      Create a for loop which will output two separate arrays, one with only initials, one with only last names

 let initials = [];
 let lastNames = [];
 for(let i = 0; i < celebName.length; i++){
     let currentName = celebName[i];
     let arrOfNames = currentName.split(' ');
     let firstIni = arrOfNames[0][0];
     let secondIni = arrOfNames[1][0];

     lastNames.push(arrOfNames[1]);
     initials.push(firstIni+secondIni);
 console.log(initials, lastNames);
 }

// // 7.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

  celebName = ['Mary J. Blige, Lauren Hill, Simone Biles, Queen Latifah, Morris Chestnut'];
 let capCelebs = [];
 for(let i = 0; i < celebName.length; i++){
     capCelebs.push(celebName[i].toUpperCase().split(' ').join('-'));
 console.log(celebName, capCelebs);
 }


// // 8.   Index your array to find your favorite celebrity. 
// //      Save that name to a variable
// //      Loop over the array until you find that individual
// //      Log that name to the console and break out of the loop

let fav = celebName[0];
for(let i = 0; i < celebName.length; i++){
let currentCeleb = celebName[i];
if (currentCeleb === fav){
  console.log(currentCeleb)
  break;
  }
}




// //BONUS:
// //      Write a loop that iterates from zero until 30
// //      If an index is divisible by 2 log 'fizz'
// //      If an index is divisible by 3 log 'buzz'
// //      If an index is divisible by both 2 & 3, log 'fizz-buzz'
// //      Otherwise print the index to the console