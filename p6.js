// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

class Shape {
    constructor(sides = []){
        //console.log("step 1")
        this.sides = sides;
    }
    perimeter() {
        //console.log("step 2")
        return this.sides.length > 0 ? this.sides.reduce((sum,side) => sum + side) : 0;
    }
}

class Rectangle extends Shape{
    constructor(length = 0, width = 0) {
        super([length,width,length,width]);
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}

class Triangle extends Shape {
    constructor(sideA = 0,sideB = 0,sideC = 0) {
        super([sideA,sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area(){
        let s = (this.sideA+this.sideB+this.sideC)/2
        return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
    }
}


function explaineShapes(data) {
    for (const sides of data){
        let obj = null;
        //console.log(sides,obj)
        switch(sides.length){
            case 2:
                obj = new Rectangle(...sides);
                console.log(`Triangle with sides ${sides.toString()} has a perimeter of ${obj.perimeter()} and an area of ${obj.area()}`);
                break
            case 3:
                obj = new Triangle(...sides);
                console.log(`Rectangle with sides ${sides.toString()} has a perimeter of ${obj.perimeter()} and an area of ${obj.area()}`);
                break

            default:
                console.log(`shape with ${sides.length} side/s is unsupported`)

        }

    }
}

/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

console.log(explaineShapes(data))