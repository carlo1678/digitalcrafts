# # add your info
# digitalCraftsStudent = {
#     "name": "Carlo Carbonell",
#     "city": "Tampa",
#     "computer": ["Custom Windows Gaming PC"],

# }
# # print out your computer information in the terminal
# # add a platform, add your skill level
# gamer = {
#     "platform": "PC",
#     "gamingHours": [{"weekday": "Whenever I'm Free!"}, {"weekends": "anytime"}],
#     "skill": 'Absolute Decimator'
# }
# # print on the terminal, what time would you game?
# print(digitalCraftsStudent["computer"][0])
# print(gamer["gamingHours"][1]["weekends"])

# car = {
#     "model": "",
#     "image": "",
#     "year": "",
#     "engineChoices": [

#         {
#             "v4": {
#                 "horsepower": 230
#             }
#         },
#         {
#             "v6": {
#                 "horsepower": 300
#             }
#         },
#         {
#             "v8": {
#                 "horsepower": 400
#             }
#         },
#         {
#             "v12": {
#                 "horsepower": 900
#             }
#         }
#     ],

# }
# 1. print out a list of engine choices (the whole list)
# 2. print out the horsepower values only (all of them)
# 3. check to see if the value "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value
car = {
    "model": "Subaru WRX",
    "image": "",
    "year": "2017",
    "engineChoices": [
        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],
}

# print(car["engineChoices"])
for hpValue in car["engineChoices"]:
    for key,value in hpValue.items():
        print(value["horsepower"])





# # add your info
# digitalCraftsStudent = {
#     "name": "",
#     "city": "",
#     "computer": ["mac os big sur"],
# }
# print(digitalCraftsStudent["computer"][0])
# print out your computer information in the terminal
# add a platform, ps5,pc,xbox 1,switch, add your skill level ("noob","not" "noob", "pwner")
# gamer = {
#     "platform": "",
#     "gamingHours": [
#         {"weekday": "9-5"}, {"weekends": "anytime"}
#     ],
#     "skill": ''
# }
# # print(gamer["gamingHours"][0]["weekday"])
# stonks = {
#     "name": "Game Doge",
#     "ticker": "GGDOG",
#     "pricePerShare": 1,
#     "denomination": "cent",
#     "volume": 25,
#     "volatility": "low",
#     "startOfDayPrice": 2,
#     "endOfDayPrice": 4,
#     "market": ["US", "Europe"],
#     "dividends": 4,
#     "shareHolders":
#     [
#         {"name": "James Walden"},
#         {"name": "LeRon Rovira"},
#         {"name": "Kendall Burdette"},
#         {"name": "Randi Reyna"},
#         {"name": "Nischal Pahari"},
#     ]
# }
# print(stonks["name"])
# print(stonks['ticker'])
# stonks["dividends"] = 1
# print(stonks["shareHolders"][0]["name"])