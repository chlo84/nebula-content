// 1.   Write a hof function which returns the first number larger than 100
const nums = [23,89,300,45,2, 120]

let largeNum = nums.find((nums) => {
    return nums > 100;
})
console.log(largeNum)

// 2.   Write a hof which lists a set of people based on their birth year
const people = [
    { name: "Dan", birthYear: 1981 },
    { name: "Joe", birthYear: 2005 },
    { name: "Samantha", birthYear: 2000 },
    { name: "Jocelyn", birthYear: 1995 },
    { name: "Sasha", birthYear: 1997 },
    { name: "Tim", birthYear: 2003 },
    ];
people.sort((a,b) => a.birthYear > b.birthYear ? 1 : -1);

// 3.   Given an array of cars only list cars that are build pre-2000
const cars = [{model: "Dodge", make: 2001},{model:"Ford", make:2012},{model:"Honda", make:1989},{model:"Hondi",make:1990}]

cars.filter(car => car.make < 2000);

// 4.   Given an array of phone numbers return an array of protected phone numbers so that it has this structure:
//      input: 555-555-5555, output: 5##-###-#555
const phoneNums = [
    "718-647-9876",
    "516-722-3845",
    "631-477-9988",
    "917-987-2125", 
    "347-123-4567",
];
let maskedPhones = phoneNums.map(phoneNum => {
    let arr = phoneNum.split('').map((digit, index) => {
        if(index == 0 || digit == '' || index == phoneNum.length -3){
            return digit;
        }else{
            return '#'
        }
    })
}).join('')

// 5.   Given an array of numbers write a HOF that logs to the console:
//      `Thats a big number!` if it's larger than 1000 or
//      `This number isnt so big...` if its smaller than or equal to 1000
// const nums1 = [345,57,765,2345,1098,32,9876]

phoneNums.forEach(num => console.log(num > 1000 ? `Thats a big number!` : `This number isnt so big...`))


// 6.   Given an array of people's names write a hof that returns only people with names longer than 5 characters

people.filter(person => person.name.length > 5)

// 7.   Given a list of people (all objects) list people over the age of 20 and under the age of 35 in order of youngest to oldest
const people1 = [
    { name: "Dan", age: 12 },
    { name: "Joe", age: 33 },
    { name: "Samantha", age: 67 },
    { name: "Jocelyn", age: 23 },
    { name: "Sasha", age: 65 },
    { name: "Tim", age: 25 },
];

people1.filter((person => person.age > 20 && person.age < 35).sort((a,b) => a.age = b.age)) 


// 8.   Given an array of objects, each object is a food, including an expiration date
//      return the food that will expire soonest
//      ex food: {name: 'banana', expiration: "Dec 21, 2022"}
//      hint: JavaScript Date object may be helpful
//      // new Date(year, monthIndex, day)
        // const d1 = new Date(2010, 3, 28) => April, 28, 2010

const food = [
    { name: "Banana", exp: new Date(2021, 11, 21) },
    { name: "Steak", exp: new Date(2022, 0, 5) },
    { name: "Milk", exp: new Date(2022, 0, 8) },
    { name: "Eggs", exp: new Date(2021, 11, 28) },
    { name: "Bread", exp: new Date(2021, 11, 20) },
];

let oldestFood = food.sort((a,b) => +a.exp - +b.exp)[0]
console.log(oldestFood)