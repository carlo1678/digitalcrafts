num1 = int(input('Enter your first number: '))
operand = input("Enter an operand: ")
num2 = int(input('Enter your second number: '))

def add(num1, num2):
    return print(num1 + num2)
def multiply(num1, num2):
    return print(num1 * num2)
def division(num1, num2):
    return print(num1 // num2)
def subtract(num1, num2):
    return print(num1 - num2)
if (operand == "+"):
    add(num1,num2)
elif (operand == "*"):
    multiply(num1,num2)
elif (operand == "//"):
    division(num1,num2)
elif (operand == "-"):
    subtract(num1,num2)
else:
    print(" ")


    








