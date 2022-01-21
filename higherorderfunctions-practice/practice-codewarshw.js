class Labrador extends Dog {
    constructor(name, age, gender, master) {
      super(name,age,gender,"Labrador","Large",master,true)
    }
  }

  class Shark extends Animal {
    constructor(name,age,status) {
      super(name,age,0,"shark",status);
      
    }
    
  }
  
  class Cat extends Animal {
    constructor(name,age,status){
      super(name,age,4,"cat",status)
    }
    introduce(){
      return `${super.introduce()}  Meow meow!`
    }
  }
  
  class Dog extends Animal {
    constructor(name,age,status,master){
      super(name,age,4,"dog",status)
      this.master = master
    }
    greetMaster(){
      return `Hello ${this.master}`
    }
  }

  class Person {
    constructor(firstName= "John",lastName= "Doe",age= 0,gender= "Male"){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      
      
    }
    sayFullName(){
      return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName){
      return `Welcome to Planet Earth ${raceName}`
    }
    
      
    }