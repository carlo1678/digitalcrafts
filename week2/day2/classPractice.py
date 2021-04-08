# Two characters, a Hero and a Goblin
# Let them fight, whoever wins, will be printed out in a victory message. (Fancy way of saying a function that prints)
# whoever is defeated can be printed out in that message as well

# Hero (name, attack, defense, hp)
# Goblin (name, attack, defense, hp, clan)
# Hero and Goblin must be made into a class since they have the same attributes

class Hero: 
    def __init__(self, name, hp):
        self.name = name
    def takeDamage(self):
        self.hp -= 5 

class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
    
    

class Knight:
    def __init__(self, name, hp):
        self.name = name

def HeroAttacksGoblin(hero, goblin):
    print(f"{hero.name} attacks {goblin.name}")
    goblin.takeDamage()
    print(f"{goblin.name} takes 5 damage")
    print(f"{goblin.name} has {goblin.hp} left")

bob = Goblin("Bob", 10)
phillip = Hero("Phillip", 10)
whitney = Hero("Whitney", 10)
randy = Goblin("Randy", 10)
randi = Hero("Randi", 10)
carlo = Knight("Carlo", 10)

print("the name of this character", bob)
print("the name of this character", phillip)
print("the name of this character", whitney)
print("the name of this character", randy)
print("the name of this character", randi)
print("the name of this character", carlo)

# randi to punch randy, simulating your character attacking another character 
# punches give 5 damage
# I ask the user to type in their name
# I give them health values
# I print out their health values
# I then set a global variable to be the while loop condition

HeroAttacksGoblin(randi, randy)
