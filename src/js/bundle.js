import '../styles/style.scss';

class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear();
    }


    clear() {
        this.previousNumber = '';
        this.currentNumber = '';
        this.operation = undefined;
    }

    delete() {
        this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }

    appendNumbers(number) {
        if(number === '.' && this.currentNumber.includes('.')) { return };
        this.currentNumber = this.currentNumber.toString() + number.toString();
        
    }

    chosenOperation(operationSign) {
        if(this.currentNumber === '') { return };
        if(this.previousNumber !== '') {
            this.calculate();
        }
        this.operation = operationSign;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    calculate() {
        let result 
        const prev = parseFloat(this.previousNumber);
        const curr = parseFloat(this.currentNumber);
        if(isNaN(prev) || isNaN(curr)) { return };

        switch(this.operation) {
            case '/':
                result = prev / curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            default:
                return
        }

        this.currentNumber = result;
        this.operation = undefined;
        this.previousNumber = '';
    }

    update() {
        this.currentOperand.innerText = this.currentNumber;
        if(this.operation != undefined) {
            this.previousOperand.innerText = `${this.previousNumber} ${this.operation}`;
        } else {
            this.previousOperand.innerText = '';
        }
    }
}


const previousOperand = document.querySelector('[data-previous]');
const currentOperand = document.querySelector('[data-current]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const operationBtns = document.querySelectorAll('[data-operation]');
const numberBtns = document.querySelectorAll('[data-number]');
const equalBtn = document.querySelector('[data-equal]');

const calculator = new Calculator(previousOperand, currentOperand);

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNumbers(btn.innerText);
        calculator.update();
    })
})

operationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chosenOperation(btn.innerText);
        calculator.update();
    })
})

equalBtn.addEventListener('click', () => {
    calculator.calculate();
    calculator.update();
})

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.update();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.update();
})