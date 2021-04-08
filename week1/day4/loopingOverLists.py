pets = ["doggo", "cat", "iguana", "pikachu"]
otherPets = ["mouse", "bird", "rabbit"]
# you can use len to find the length of the list 
# print(len(pets))

# Loop over a list
index = 0
# looping over a list, a while loop requires a condition
# while index < len(pets):
#     pet = pets[index]
#     print("What pet are you? I'm a %s" % pet)
#     index += 1
    # index = index + 1, same as above


# For in loops are better to use for lists than while loops (because they pretty much stop themselves instead of you 
# having to define an index)
# For in loop
# count = 0
# # write for, write the singular name of the lists you are looping over, write of, write the name of the list
# for pet in pets:
#     print(pet)
#     print(count)
#     count += 1
# How do we combine lists?
# combinedLists = pets + otherPets
# print(combinedLists)

# How do we modify a list?

pets[0] = "otter"
print(pets)