// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)

const vehicle ={
    type: 'Jaguar',
    color: 'Rose Gold',
    windows: 'tinted',
    speed: '200 mph',
    engine: 'V8',
    tires: 'sports'
    
}

// 2.   Using dot-notation Log to the console 3 properties from the previous object

console.log(vehicle.type);
console.log(vehicle.color);
console.log(vehicle.windows);

// 3.   Using bracket-notation Log to the console 3 properties from the previous object

console.log (vehicle['speed']);
console.log (vehicle['engine']);
console.log (vehicle['tires']);

// 4.   Try and log a property that doesn't already exist - what output do we get?

console.log(vehicle['Insurance']);
// undefined

// 5.   Add a new key-value pair to the vehicle. 

vehicle['insurance'] = 'Nationwide'
console.log(vehicle);

// 6.   Using bracket-notation update a property on the vehicle. 

vehicle['engine']= 'V6'
console.log(vehicle);

// 7.   Using dot-notation update a property on the vehicle. 
vehicle.speed = '250 mph'
console.log(vehicle);

// 8.   Create a method for turning your vehicle on

function turnOnVehicle(){
    vehicle['carOn'] = true;
}
vehicle.turnOnVehicle = turnOnVehicle

// 9.   Create a method for turning your vehicle off
function turnOffVehicle(){
    vehicle['carOn'] = false;
}
vehicle['turnOffVehicle'] = turnOffVehicle


//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)

if(!vehicle['carOn']){
    vehicle['turnOnVehicle']
}else{
   vehicle['turnOffVehicle'] 
}
console.log(vehicle)
