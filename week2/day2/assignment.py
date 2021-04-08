# 1
# Create a user class, that has the ability to 
# print the users name                                        <------------------- DO THIS FIRST
# The ability to print the users age 

# Create a TempUser class, that has the ability to only print his name.

# Create a function that asks you to give the user a name,
# and give the user an age, and will then create the user for you
# and print it to the screen. The user will have a choice to either be a temp user or a user.



class OrigUser:
    def __init__(self, name, age):
        self.name = name
        self.age = age 
        self.type = "permanent"
        
        
    def printUser(self):
        print(self.name)
        print(self.age) 

class TempUser:
    def __init__(self, name):
        self.name = name
        self.type = "temporary"

    def printTemp(self):
        print(self.name)       
        
    
def userInput():
    userInfo = ""
    userName = input("What would you like your name to be?")
    userAge = input("How old are you?")
    userChoice = input("Are you Temporary or Regular user? (Please type out full word.)")

    if userChoice == "Regular":
        userInfo == OrigUser(userName, userAge)
        userInfo.printUser()

    elif userChoice == "Temporary":
        userInfo == TempUser(userName)
        userInfo.printTemp()
    else :
        pass
    

userInput()


    # print(userName)
    # print(userAge)
    


# user = OrigUser("Carlo", 25)
# user.printUser()      





# user2 = TempUser("Jimmy")
# user2.printTemp()








    
    


