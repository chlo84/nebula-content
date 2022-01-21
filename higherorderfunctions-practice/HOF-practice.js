
/* Write a class that creates shoes. The shoe should have a size, color, type, and age. 
Initialize 3 shoes with your class & log a sentence to the console: 
ex:`My flipflops are yellow, size 9, and 6 years old.` */

class shoe{
constructor(size,color,type,age){
    this.size = size
    this.color = color
    this.type = type
    this.age = age
    console.log(this.reference())
} 
shoeSize(){
    console.log('my shoe size is ${this.size}')
}
shoeColor(){
    console.log('the shoe is ${this.color}')
}
shoeType(){
    console.log('the shoe is ${this.type}')
}
shoeAge(){
    console.log('the shoe is ${this.age}')
}
shoeDiscription(){
console.log('${this.type} is a size ${this.size}')
}
}





/* Given the following class that can create shapes, 
write an extension which will calculate the Surface Area and Volume of a given shape. 
Note, one class extension will likely not be able to handle all shapes, you'll have to extend shape for each unique shapeLog to the console a sentnece about your shape:`Given a cylander of 2 height and 2 width. It will have a volume of 6.28 and a surface area of 18.84.` */// class Shape {//     constructor(height, diameter){//         this.height = height;//         this.diameter = diameter;//     }// }// Extend 4 classes off of shapes// Rectangle(A=bh), Triangle(A=1/2bh), Circle(A=πr2) and Trapezoid(A=1/2h(b1+b2))// Have methods to find the areas of the differnt shapes


class Shape {
    constructor(height){
        this.height = height;
    }
}

class Rectangle extends Shape{
constructor(height,width){
    super(height)
    this.width = width
}

area(){
    console.log(this.height * this.width)
}
}
const cube = new Rectangle(5,8)


class Triangle extends Shape {
constructor(height,width){
    super(height)
    this.width = width
}
area(){
    console.log((this.height * this.width/2))
}
}
class Circle extends Shape{
    constructor(height){
    super(height)
 }
     area(){
     console.log((this.height ** 2 * Math.PI))
     }
}


















// const tri = new Triangle(3,9)
// tri.area()

// class Circle extends Shape{
// constructor(height){
//     super(height)
// }
// area(){
//     console.log(Math.PI * Math.pow(this.height/2,2))
// }
// }

// const roundShape = new Circle(7)
// roundShape.area()

// class Trapezoid extends Shape{
// constructor(height,widthA, widthB){
//     super(height)
//     this.widthA = widthA
//     this.widthB = widthB
// }

// area(){
//     console.log((this.height/2) * (this.widthA + this.widthB))
// }
// }

// const trap = new Trapezoid(3,9,8)
// trap.area()
