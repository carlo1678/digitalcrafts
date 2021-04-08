# This is a list
pets = ["doggo", "cat", "iguana", "pikachu"]
# We access lists variables by their index, which starts at 0
dog = pets[0]

# If we try to access something that is not ni the list, aka not indexed, we get an error
# dog = pets[9]

# If you give a negative INDEX, you access the end of the list
# demonSpawn = pets[-2]
# print(demonSpawn)
# If you want to access a range of values in a list, yo use a number
# and a colon : and then end of the range you want to access 
# myFavoriteTwoAnimals = pets
# print(myFavoriteTwoAnimals)

# If you start your index range with a negative, it starts from the end of the list, and then goes back however
# many times you want depending on the second number of the range.

demonSpawns = pets[-1: 1]
print(demonSpawns)
# print(dog)