class Calculator {
    add(a, b) {
        return a + b;
    } 
    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    }
}


class ScientificCalculator extends Calculator{
    square(a){
        return a*a;
    }
    
    cube(a){
        return a * a * a;
    }

    power(a, b){
        return Math.pow(a, b);
    }
}


const scientificCalculator = new ScientificCalculator();

const additionOutput = Calculator.prototype.add(scientificCalculator, 10, 5);

const subtractOutput = Calculator.prototype.subtract(scientificCalculator, [10, 5]);

const multiplyByTwo = scientificCalculator.multiply.bind(scientificCalculator, 2);

const powerByThree = scientificCalculator.power.bind(scientificCalculator, 3);