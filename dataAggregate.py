import requests
from requests.auth import HTTPDigestAuth
import json
import time

baseData = ["MLGB Blade", "Liquid Mickey", "Danskvand", "Licorice", "Pobelter", "eLLi nOISE", "Imaqtpie", "Gaston", "Linsanity", "MLGB Clown", "Jòéy", "dawolfsfang", "19950307", "She Limp", "Jurassiq", "SpaghettiBud9", "C9 Gun", "Pants are Dragon", "hi its viper", "Rikara", "Somin", "Wiggily", "iWeixin VinLeous", "Kingslayer Sheep", "Ablazeolive", "Humble Diligent", "Acoldblazeolive", "Fanatiik", "Bobjenkins", "Hungry Like", "GangstahSwerve", "W0WFIXZ", "FallenBandit", "Apdo dogjj", "C9 Sneaky", "Arceent Censer", "big brain gamer", "Oddiee", "Morïarty", "Falcon God", "SoloQ Antihero", "Little Baiano", "Vulcan1", "RyuShoryu", "Eitori", "enaek", "Kazahana", "Jayms", "salt on bench", "Oneself", "Daarr", "Revenge", "LittleFrosty", "TLB Tarzaned", "Scrandor", "Win or Learn", "NintendudeX", "Midnight Train", "i need some suga", "Ash", "Sophist Sage", "C9 Smoothie", "Piggy Kitten", "feedlancer", "Jue Viole Grace", "Tuesdayy", "Value", "Iron Pyrite", "CLA Tuesday", "Ild i piben", "ybooks", "Kitty Ears", "Akaadian4", "Julien", "Ssita", "Winter", "NoahMost", "League", "Rohammers", "Chapanya", "MRTONERBONER", "Phaxen", "Implicit", "NaGeNanHai", "Berta Lovejoy", "fragas1", "5word", "Autolycus1", "SleepyzLOL", "Ivan Pavlov", "WildTurtle", "Rodov", "Lebron James", "CHIEF KEITH", "717J", "Chubakaaa", "LHHS", "WorthyOfLohpally", "Myloo", "Flaresz"]

baseData2 = ["WildTurtle", "Chimonaa1", "Maxtrobo", "I Love Cindy Fu", "Pennie", "kWeixin Vinleous", "Jako5000", "never loses", "Rich Homie Jayms", "19981015", "Erry", "Johnson", "Descraton", "Allorim", "XueGao", "PunOko", "bugslife", "yeedam", "Slash", "1onz", "dun is washed up", "GL IM ZWAG", "5fire", "Brother Dyrus", "FlyQ Hai", "828", "Pransie", "DopaSenKer", "MLGB Blade", "be small", "Easley", "Yassuo", "Dubehavior", "Dhokla", "goldenglue", "Tawnington", "MrPresidentObama", "cackdeus", "t d", "Hakuho", "KitKatxz", "Teamfighting", "joong ki song", "Strompest LFT", "Huhi", "baia baia", "Paid By Steve", "Peridot", "And July", "mvsh", "fwii", "TLB Adrian Riven", "717 J", "4994", "Qissaruj", "Ew Michelle", "Anivia Kid", "Grow Gaiy", "Doubtfull", "FateFalls", "Baekk", "Faith in Myself", "Fas the Magi", "Grigne", "rhubarbs", "Prismal", "shabudaba", "Kostyantyn", "Manifest", "CaillouX", "mnesty247", "1 baron", "Ahigholive", "Weeknd", "Osama", "Yur1 Boyka", "Liquid Lourlo", "BukZacH", "rovex2", "watercold", "Legend Never Die", "MLGB Grae", "Jia", "always plan ahea", "Achilles Heal", "FOX Brandini", "SandPaperX", "N For New York", "ChaoZxl", "insanity", "Pocket Rhino", "we gg na", "245 979", "highimpactplayer", "1T 1T 1T 1T 1T", "MLGB Blade"]

accountIds = ""
api_key = "?api_key=RGAPI-210f1e27-46d3-41b9-a5e9-907d79fdeb85"

# # API Script 1
# count = 0
# text_file = open("accountIds.txt", "w")
# for summoner in baseData2:
#     count += 1
#     print(count)
#     if count % 100 == 0:
#         time.sleep(122)
#     url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + summoner + api_key
#     myResponse = requests.get(url)
#     if(myResponse.ok):
#         jData = myResponse.json()
#         accountIds += str(jData["accountId"]) + " "
#     else:
#         print(summoner, "response not found")
# text_file.write(accountIds)
# text_file.close()


# # API Script 2
# with open('accountIds.txt', 'r') as myfile:
#     data = myfile.read()
# myfile.close()
# game_file = open("gamesByUser.txt", "w")
#
# userGames = ""
# count = 0
# for accountId in data.split():
#     count += 1
#     print(count)
#     if count % 100 == 0:
#         time.sleep(122)
#     url = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + str(accountId) + api_key
#     myResponse = requests.get(url)
#     if(myResponse.ok):
#         jData = myResponse.json()
#         for match in jData["matches"]:
#             userGames += str(match["gameId"]) + " "
#     else:
#         print(accountId, "matches not found")
# game_file.write(userGames)
# game_file.close()

# API Script 3
with open('heroStaticData.txt', 'r') as myfile:
    data2 = myfile.read()
myfile.close()
j = json.loads(data2)

heroFrequency = {}
idToHero = {}
preHeroes = {}
for hero in j["data"]:
    heroName = str(j["data"][hero]["name"])
    heroId = str(j["data"][hero]["id"])
    heroFrequency[heroId] = 0
    idToHero[heroId] = heroName
    preHeroes[heroName] = heroId

sortedHeroes = [value for (key, value) in sorted(preHeroes.items())]

heroes = {}
arrayIndex = 0
for heroID in sortedHeroes:
    heroes[heroID] = arrayIndex
    arrayIndex += 1

# API Script 4
with open('gamesByUser.txt', 'r') as myfile:
    data2 = myfile.read()
myfile.close()
game_file = open("formattedDataset2.txt", "w")

enter = 0
count = 0
for gameid in data2.split():
    url = 'https://na1.api.riotgames.com/lol/match/v3/matches/' + str(gameid) + api_key
    count += 1
    print(count)
    if count % 100 == 0:
        time.sleep(122)
    myResponse = requests.get(url)
    if(myResponse.ok):
        didTeamWin = {}
        output = [0] * 277
        jData = myResponse.json()
        team2 = ""
        for team in jData["teams"]:
            team2 = team["teamId"]
            if 'win' in team:
                didTeamWin[str(team["teamId"])] = team["win"]
        for participantDto in jData["participants"]:
            if participantDto["teamId"] != team2:
                heroId = str(participantDto["championId"])
                heroFrequency[heroId] += 1
                heroIndex = heroes[heroId]
                output[heroIndex] = 1
            else:
                heroId = str(participantDto["championId"])
                heroFrequency[heroId] += 1
                heroIndex = heroes[heroId] + 134
                output[heroIndex] = 1
        if output.count(1) == 10:
            if didTeamWin["100"] == "Win":
                output[len(output) - 1] = 1
            game_file.write(str(output) + "\n")
    else:
        print(gameid, "matches not found")
game_file.close()
for heroId in idToHero:
    print(idToHero[heroId] + " with count: " + str(heroFrequency[heroId]))
