function calculate(num1,operand,num2){
    if (operand == "multiply") {
        console.log(num1*num2)
    }
    else if (operand == "add") {
        console.log(num1+num2)
    }
    else if (operand == "subtract") {
        console.log(num1-num2)
    }
    else if (operand == "divide") {
        console.log(num1/num2)
    }
}

calculate(10,"subtract",4)

