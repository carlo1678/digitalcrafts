nameOfUser = input("What is your first name?")
lengthOfUserName = len(nameOfUser)
while(lengthOfUserName <2):
    nameOfUser = input("What is your first name?")
    lengthOfUserName = len(nameOfUser)
lastNameOfUser = input("What is your last name?")
lengthOfUserLastName = len(lastNameOfUser)
while(lengthOfUserLastName <2):
    lastNameOfUser = input("What is your last name?")
    lengthOfUserLastName = len(lastNameOfUser)
print("Your name is %s %s" % (nameOfUser, lastNameOfUser))
friendsFirstName = input("What is your friends first name?")
lengthOfFriendsFirstName = len(friendsFirstName)
while(lengthOfFriendsFirstName <2):
    friendsFirstName = input("What is your friends first name?")
    lengthOfFriendsFirstName = len(friendsFirstName)
friendsLastName = input("What is your friends last name?")
lengthOfFriendsLastName = len(friendsLastName)
while(lengthOfFriendsLastName <2):
    friendsLastName = input("What is your friends last name?")
    lengthOfFriendsLastName = len(friendsLastName)
print("%s %s is friends with %s %s." % (nameOfUser, lastNameOfUser, friendsFirstName, friendsLastName))




