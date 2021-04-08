# Take the users first name
nameOfUser = input("What is your first name?")
# Store the users first name into a number 
lengthOfUserName = len(nameOfUser)
while(lengthOfUserName < 1):
    nameOfUser = input("What is your first name?")
    lengthOfUserName = len(nameOfUser)

lastNameOfUser =input("What is your last name?")

lengthOfUserLastName = len(lastNameOfUser)
while(lengthOfUserLastName < 1):
    lastNameOfUser =input("What is your last name?")
    lengthOfUserLastName = len(lastNameOfUser)

if lengthOfUserName > 0:
#     # if this username length is greater than 0, aka it returns TRUE, we do the code in here 
    nameOfFriend = input("What is your friends name?")
    print("Your friends name is ", nameOfFriend)
else:
    print("Please enter at least one letter...literally one letter")

# While loop
# A condition will have to be true, then your loop will keep running
# while (lengthOfUserName < 0):
    

# Take the users last name
lastNameOfUser = input("What is your last name?")
lengthOfUserLastName = len(lastNameOfUser)
print("This is the length of the user name ", lengthOfUserName)
print("This is the length of the user name ", lengthOfUserLastName)
print("The user name is %s %s " % (nameOfUser,lastNameOfUser))
print("Hello %s %s, welcome to python" % (nameOfUser, lastNameOfUser))
# If statements. Do something if a certain condition happens or doesn't happen.
# Underneath the if statement, you need to indent your code to let the if statement know what code belongs to it.
# If statements have if _your condition_ : 
# else: code goes below it
if lengthOfUserName > 0:
    # if this username length is greater than 0, aka it returns TRUE, we do the code in here 
    nameOfFriend = input("What is your friends name?")
    print("Your friends name is ", nameOfFriend)
else:
    print("Please enter at least one letter...literally one letter")

 
