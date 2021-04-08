tasks = []
# list
# print a welcome message ++
# print this welcome message ina function ++
# add a task
# delete a task
# view a task
# quit (how do we quit?)

def welcomeMessage():
    message = """
    Welcome to your TODO list!!
    Please choose from these four items!!
    "Press 1 to add task"
    "Press 2 to delete task"
    "Press 3 to view all tasks"
    "Press q to quit"
    """
    return print(message) 

def addTask():
    tasks1 = {}
    userInput = input("What task would you like to add?")
    userPriority = input("What priority is this task?")
    tasks1["title"] = userInput
    #go inside tasks1, see if this value exists, if not, make a key called "title" and give it a value of whatever is on the right side of the equal sign
    # go inside tasks1, find something with the name "title", if it doesn't exist, make it, if does exists, overwrite it with the thing on the right of the =
    tasks1["priority"] = userPriority
   
    print(tasks1)
    #list
    tasks.append(tasks1)
    return

def deleteTask():
    # to delete something, i use the word del >>> tasks
    # figure out how to get the index
    return

def printTask():
    print(tasks)
    return
addTask()
# printTask()
# welcomeMessage() 



    
