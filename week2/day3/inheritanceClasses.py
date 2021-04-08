class Currency:
    def __init__(self, name, homeNationCurrency, price):
        self.name = name
        self.homeNationCurrency = homeNationCurrency
        self.price = price
    
    def printCurrency(self):
        print(f"{self.homeNationCurrency} {self.name} {self.price}")

    def addQuantity(self, amount):
        self.quantity += amount
        # return self.quantity = self.quantity + amount 


  

yen = Currency("Yen", "Japan", 20)
# print(f"This currency is {yen.name}")
yen.printCurrency()

dollar = Currency("US Dollar", "US", 1)
dollar.printCurrency()
# print(f"This currency is {dollar.name}")

# if you need to reference the values of the object you originally constructed in your __init__ method, you need to give your methods (self). 
# dollar.addQuantity(5)
# print(dollar.quantity)

