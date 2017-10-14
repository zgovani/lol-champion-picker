import requests
from requests.auth import HTTPDigestAuth
import json
import time
import re


rawData = ""
with open('accountIdsFile.txt', 'r') as myfile:
    rawData = myfile.read()
myfile.close()
rawData = ''.join('' if c is " " or c is "\'" or c is "{" or c is "}" or c is "\n" else c for c in rawData)
accountIds = re.split(",", rawData)
api_key = "?api_key=..."
crawl_ids = set()
currentId = ""
count = 1

gameIdsFile = open("gameIdsFile.txt", "w")
for accountId in accountIds:
    try:
        if count % 100 == 0:
            time.sleep(122)
        url = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + str(accountId) + api_key
        count += 1
        myResponse = requests.get(url)
        if(myResponse.ok):
            jData = myResponse.json()
            for match in jData["matches"]:
                crawl_ids.add(str(match["gameId"]))
                print(len(crawl_ids))
        else:
            print("matches not found")
    except KeyboardInterrupt:
        break
gameIdsFile.write(str(crawl_ids))
