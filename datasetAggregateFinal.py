import requests
from requests.auth import HTTPDigestAuth
import json
import time
import re

rawData = ""
with open('gameIdsFile.txt', 'r') as myfile:
    rawData = myfile.read()
myfile.close()
rawData = ''.join('' if c is " " or c is "\'" or c is "{" or c is "}" or c is "\n" else c for c in rawData)
gameIds = re.split(",", rawData)
api_key = "?api_key=..."
crawl_ids = set()
currentId = ""
count = 1
lanes = {"TOP" : 0, "BOTTOM" : 1, "MIDDLE" : 2, "JUNGLE" : 3}
spells = {"1" : 0, "3" : 1, "4" : 2 ,"6" : 3,"7" : 4,"11" : 5,"12" : 6,"13" : 7,"14" : 8,"21" : 9}


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

count = 0
tensors = []
dataset = open("dataset.txt", "w")
print(heroes)

for gameid in gameIds:
    try:
        url = 'https://na1.api.riotgames.com/lol/match/v3/matches/' + str(gameid) + api_key
        count += 1
        print(count)
        if count % 100 == 0:
            time.sleep(122)
        myResponse = requests.get(url)
        if(myResponse.ok):
            jData = myResponse.json()
            t1 = []
            t2 = []
            tensor = []
            for team in jData["teams"]:
                team2 = team["teamId"]
            for participantDto in jData["participants"]:
                if participantDto["teamId"] != team2:
                    t1.append(participantDto)
                else:
                    t2.append(participantDto)
            for participantDto in t1:
                tensor.append(lanes[participantDto["timeline"]["lane"]])
                tensor.append(heroes[str(participantDto["championId"])])
                tensor.append(spells[str(participantDto["spell1Id"])])
                tensor.append(spells[str(participantDto["spell2Id"])])
            for participantDto in t2:
                tensor.append(lanes[participantDto["timeline"]["lane"]])
                tensor.append(heroes[str(participantDto["championId"])])
                tensor.append(spells[str(participantDto["spell1Id"])])
                tensor.append(spells[str(participantDto["spell2Id"])])
            team1 = jData["teams"][0]
            team2 = jData["teams"][1]
            if team1["firstDragon"]:
                tensor.append(0)
            else:
                tensor.append(1)
            if team1["firstInhibitor"]:
                tensor.append(0)
            else:
                tensor.append(1)
            if team1["firstRiftHerald"]:
                tensor.append(0)
            else:
                tensor.append(1)
            if team1["firstBaron"]:
                tensor.append(0)
            else:
                tensor.append(1)
            if team1["firstBlood"]:
                tensor.append(0)
            else:
                tensor.append(1)
            if team1["firstTower"]:
                tensor.append(0)
            else:
                tensor.append(1)
            tensor.append(team1["baronKills"] - team2["baronKills"])
            tensor.append(team1["riftHeraldKills"] - team2["riftHeraldKills"])
            tensor.append(team1["vilemawKills"] - team2["vilemawKills"])
            tensor.append(team1["inhibitorKills"] - team2["inhibitorKills"])
            tensor.append(team1["towerKills"] - team2["towerKills"])
            tensors.append(tensor)
        else:
            print(gameid, "matches not found")
    except KeyboardInterrupt:
        break
    except KeyError:
        print("keyerror")
dataset.write(str(tensors))
