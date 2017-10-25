# League of Legends Outcome Predictor

This was a project my team started at Cal-hacks last month. We aimed to predict the winners of a League of Legends match based on champions selected by each player of each team Using Tensorflow and TFLearn, I implemented a neural network with 2 hidden layers. 

We were originally only able to achieve around 71% accuracy after training the model on 25,000 data samples (training set - 20000, validation set - 5000) using only the champions selected by each player as features. We then decided to aggregate more data (~35,000 samples) that contained additional features such as spells selected by each player and various in-game statistics such as which team got the first kill. After adding more features and tuning various hyperparameters with TensorBoard, I got the model to achieve 95% accuracy on the test set.
