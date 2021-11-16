// 1.   Create an array that contains two of your favorite things to do

const hobbies=['travel', 'amusement parks'];


// 2.   Using an array method, add another thing you like to do to that list

hobbies.push("relax!");
console.log(hobbies);


// 3.   Reverse the order of the array (remember, if needed use MDN)

const reverseArray=hobbies.reverse();
console.log(reverseArray)

// 4.   Using this array: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 5.   log the length of the array

console.log(days.length);

// 6.   log the 4th element in the array

console.log(days[3]);


// 7.   Remove the first element in the array. Log the new array and the element removed from the array

days.shift()
console.log(days);


// 8.   Put 'Sunday' back at the beginning of the array (.unshift) and log the new array

days.unshift("Sunday");
console.log(days);

// 9.   Remove the last element in the array. Log the new array and log the element removed

days.pop()
console.log(days)


//10.   Add 'Saturday' back to the end of the array and log the new array

days.push('Saturday');
console.log[days];


//11.   Replace 'Thursday' with 'Friday Junior'

days[4]='Friday Junior'
console.log(days);

//12.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'

const favday=days[6];
console.log('My favorite day of the week is ' + favday);


//13.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
let phoneLaptop = phone.concat(laptop)
console.log(phoneLaptop)

//14.   Write a line of code to test if something is an array or not
const testThis =[6, 5, 4, 3];
console.log(Array.isArray(testThis));
