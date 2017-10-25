import os
import argparse
import sys

import tflearn
import numpy as np
import pandas as pd
import tensorflow as tf

TRAIN_DIR = "./new_data/cleaned_train.txt"
TEST_DIR = "./new_data/cleaned_test.txt"

# with open('./new_data/dataset.txt','r') as f:
#     lines = f.read().splitlines()
# cleaned = lines[0][2:-2].split('], [') #[2:-2] to remove '[[' and  ']]', then separate each row

# data_size = len(cleaned)
# test_set_size = int(np.floor(0.2 * data_size))
# train_set_size = int(data_size - test_set_size)

# #create new text file with cleaned train data
# with open(TRAIN_DIR, 'w') as f:
#     for row in cleaned[:train_set_size]:
#         f.write("%s\n" % row)

# #create new text file with cleaned test data
# with open(TEST_DIR, 'w') as f:
#     for row in cleaned[train_set_size:]:
#         f.write("%s\n" % row)

def load_train_data():
  df_train = pd.read_csv("./tensorflow/data/training_set_15000.txt", names=CSV_COLUMNS)
  df_train["opposite_result"] = df_train["result"].map(lambda x: 1 if x == 0 else 0)
  X_train = df_train.iloc[:, :-2].as_matrix()
  Y_train = labels = df_train[["result", "opposite_result"]].as_matrix()
  return X_train, Y_train

def load_test_data():
  df_test = pd.read_csv("./tensorflow/data/test2.txt", names=CSV_COLUMNS)
  df_test["opposite_result"] = df_test["result"].map(lambda x: 1 if x == 0 else 0)
  X_test = df_test.iloc[:, :-2].as_matrix()
  Y_test = labels = df_test[["result", "opposite_result"]].as_matrix()
  return X_train, Y_train

# Create neural network model
def create_model(num_features, lr=1E-3, two_fc=True, board_dir="", dropout=0.5, activation="relu"):
  net = tflearn.input_data(shape=[None, num_features])
  net = tflearn.fully_connected(net, 100, activation=activation)
  #two_fc: whether to use 1 hidden layer or 2
  if two_fc:
    #dropout to prevent overfitting
    net = tflearn.dropout(net, dropout)
    net = tflearn.fully_connected(net, 80, activation=activation)
  net = tflearn.fully_connected(net, 2, activation='softmax')
  net = tflearn.regression(net, optimizer='adam', loss='categorical_crossentropy', learning_rate=lr)
  #name of tensorboard file
  tensorboard_dir = "/tmp/tflearn_logs/lol/" + board_dir
  # Define model
  model = tflearn.DNN(net, tensorboard_verbose=2, tensorboard_dir=tensorboard_dir)
  return model

def fit_model(model, x_train, y_train, x_test, y_test, epoch=8):
  # Start training (apply gradient descent algorithm)
  model.fit(x_train, y_train, n_epoch=epoch, validation_set=(x_test, y_test),
          snapshot_step=100, show_metric=True, run_id="lol")

# Generate unique file name for tensorboard visualization
def make_hparam_string(learning_rate=1E-3, use_two_fc=True, epoch=5, dropout=0.5):
  layers = "2" if use_two_fc else "1"
  return "lr=" + str(learning_rate) + ",fc=" + layers + ",epochs=" + str(epoch) + ",dropout=" + str(dropout)

# Find the optimal learning rate and number of layers
def find_optimal_lr_and_fc():
  for learn_rate in [1E-3, 1E-4, 1E-5]:
    for use_two_fc in [True, False]:
      param_string = make_hparam_string(learning_rate=learn_rate, use_two_fc=use_two_fc)
      model = create_model(num_features=X_train.shape[1], lr=learn_rate, two_fc=use_two_fc, board_dir=param_string)
      fit_model(model, X_train, Y_train, X_test, Y_test)

# Finds optimal # of epochs
def find_optimal_epochs():
  for epoch in [5, 6, 7, 8, 9, 10]:
    param_string = make_hparam_string(epoch=epoch)
    model = create_model(num_features=X_train.shape[1], board_dir=param_string, dropout=dropout)
    fit_model(model, X_train, Y_train, X_test, Y_test, epoch=epoch)
    # weird bug, have to reset graph every time fit_model run again
    tf.reset_default_graph()

X_train, Y_train = load_train_data()
X_test, Y_test = load_test_data()

# fit_model(model, X_train, Y_train, X_test, Y_test)

# find_optimal_lr_and_fc()
# OPTIMAL LR: 1E-3
# OPTIMAL LAYERS: Two hidden layers (0.6664 log loss vs 0.6669 log loss)

# find_optimal_epochs()
# OPTIMAL EPOCHS: Around 8 (minimal differences)

FLAGS = None


def main(_):
  model = create_model(num_features=X_train.shape[1])
  model.load('./tensorflow/model/tflearnlol.model')
  if FLAGS.user_input:
    y = np.array(eval(FLAGS.user_input)).reshape(1, 276)
  #   print("HI")
  #   return model.predict(y)

if __name__ == "__main__":
  parser = argparse.ArgumentParser()
  parser.register("type", "bool", lambda v: v.lower() == "true") #can accept booleans as well
  parser.add_argument(
      "--user_input",
      type=str,
      default="",
      help="String of an array representing new user input."
  )
  FLAGS, unparsed = parser.parse_known_args()
  tf.app.run(main=main, argv=[sys.argv[0]] + unparsed)
