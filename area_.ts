class Circle{
    private radius: number;

    constructor(radius){
        this.radius = radius;
    }

    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.calculateArea());