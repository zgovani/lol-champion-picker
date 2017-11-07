import requests
from requests.auth import HTTPDigestAuth
import json
import time
# API Script 1
accountIdsFile = open("accountIdsFile.txt", "w")
api_key = "?api_key= ... "
crawl_start_basic = "MLGB Blade"
crawl_ids = set()
already_crawled = set()
currentId = ""
gameIdList = []
count = 1


url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + crawl_start_basic + api_key
myResponse = requests.get(url)
if(myResponse.ok):
    jData = myResponse.json()
    crawl_ids.add(str(jData["accountId"]))
    currentId = str(jData["accountId"])
    print("Id found", currentId)
else:
    print("response not found")

already_crawled.add(currentId)
while len(crawl_ids):
    try:
        if count % 100 == 0:
            time.sleep(122)
        url = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + str(currentId) + api_key
        count += 1
        myResponse = requests.get(url)
        if(myResponse.ok):
            jData = myResponse.json()
            for match in jData["matches"]:
                gameIdList += [str(match["gameId"])]
        else:
            print("matches not found")
        for gameId in gameIdList:
            url = 'https://na1.api.riotgames.com/lol/match/v3/matches/' + str(gameId) + api_key
            count += 1
            if count % 100 == 0:
                time.sleep(122)
            myResponse = requests.get(url)
            if(myResponse.ok):
                jData = myResponse.json()
                for participantIdentityDto in jData["participantIdentities"]:
                    crawl_ids.add(str(participantIdentityDto["player"]["accountId"]))
                    print(len(crawl_ids))
            else:
                print("match data not found")
        currentId = crawl_ids.difference(already_crawled).pop()
        already_crawled.add(currentId)
        crawl_ids = crawl_ids.union(already_crawled)
        gameIdList = []
    except KeyboardInterrupt:
        break
accountIdsFile.write(str(crawl_ids))
