Currently, the Tensorflow model is only able to predict based off of hero selection at the start of a match with around 71% accuracy. We are in the process of releasing our second Tensorflow model, which is able to predict matches that are in progress. To retrieve match information, the user need only enter their summoner name and be in an active match. This model is predicting with around 98% accuracy on completed matches, though we can expect this number to be lower, around 90%, with the lower amount of data available before a match is complete.

The datasetAggregateFinal.py file is what I have created to crawl and format data from the Riot Games API to train our neural net. We will soon be applying for a Production API Key so as to make our website available for anyone to use!

![alt text](https://i.imgur.com/UStyyyf.jpg)
