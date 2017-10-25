# Copyright 2016 The TensorFlow Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ==============================================================================
"""Example code for TensorFlow Wide & Deep Tutorial using TF.Learn API."""
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import os
import argparse
import sys
import tempfile
import numpy as np

import pandas as pd
from six.moves import urllib
import tensorflow as tf


CSV_COLUMNS = ['266A', '103A', '84A', '12A', '32A', '34A', '1A', '22A', '136A', '268A', '432A', '53A', '63A', '201A', '51A', '164A', '69A', '31A', '42A', '122A', '131A', '36A', '119A', '245A', '60A', '28A', '81A', '9A', '114A', '105A', '3A', '41A', '86A', '150A', '79A', '104A', '120A', '74A', '420A', '39A', '427A', '40A', '59A', '24A', '126A', '202A', '222A', '429A', '43A', '30A', '38A', '55A', '10A', '141A', '85A', '121A', '203A', '240A', '96A', '7A', '64A', '89A', '127A', '236A', '117A', '99A', '54A', '90A', '57A', '11A', '21A', '82A', '25A', '267A', '75A', '111A', '76A', '56A', '20A', '2A', '61A', '516A', '80A', '78A', '133A', '497A', '33A', '421A', '58A', '107A', '92A', '68A', '13A', '113A', '35A', '98A', '102A', '27A', '14A', '15A', '72A', '37A', '16A', '50A', '134A', '223A', '163A', '91A', '44A', '17A', '412A', '18A', '48A', '23A', '4A', '29A', '77A', '6A', '110A', '67A', '45A', '161A', '254A', '112A', '8A', '106A', '19A', '62A', '498A', '101A', '5A', '157A', '83A', '154A', '238A', '115A', '26A', '143A', '266B', '103B', '84B', '12B', '32B', '34B', '1B', '22B', '136B', '268B', '432B', '53B', '63B', '201B', '51B', '164B', '69B', '31B', '42B', '122B', '131B', '36B', '119B', '245B', '60B', '28B', '81B', '9B', '114B', '105B', '3B', '41B', '86B', '150B', '79B', '104B', '120B', '74B', '420B', '39B', '427B', '40B', '59B', '24B', '126B', '202B', '222B', '429B', '43B', '30B', '38B', '55B', '10B', '141B', '85B', '121B', '203B', '240B', '96B', '7B', '64B', '89B', '127B', '236B', '117B', '99B', '54B', '90B', '57B', '11B', '21B', '82B', '25B', '267B', '75B', '111B', '76B', '56B', '20B', '2B', '61B', '516B', '80B', '78B', '133B', '497B', '33B', '421B', '58B', '107B', '92B', '68B', '13B', '113B', '35B', '98B', '102B', '27B', '14B', '15B', '72B', '37B', '16B', '50B', '134B', '223B', '163B', '91B', '44B', '17B', '412B', '18B', '48B', '23B', '4B', '29B', '77B', '6B', '110B', '67B', '45B', '161B', '254B', '112B', '8B', '106B', '19B', '62B', '498B', '101B', '5B', '157B', '83B', '154B', '238B', '115B', '26B', '143B', 'result']

'''
gender = tf.feature_column.categorical_column_with_vocabulary_list(
    "gender", ["Female", "Male"])
education = tf.feature_column.categorical_column_with_vocabulary_list(
    "education", [
        "Bachelors", "HS-grad", "11th", "Masters", "9th",
        "Some-college", "Assoc-acdm", "Assoc-voc", "7th-8th",
        "Doctorate", "Prof-school", "5th-6th", "10th", "1st-4th",
        "Preschool", "12th"
    ])
marital_status = tf.feature_column.categorical_column_with_vocabulary_list(
    "marital_status", [
        "Married-civ-spouse", "Divorced", "Married-spouse-absent",
        "Never-married", "Separated", "Married-AF-spouse", "Widowed"
    ])
relationship = tf.feature_column.categorical_column_with_vocabulary_list(
    "relationship", [
        "Husband", "Not-in-family", "Wife", "Own-child", "Unmarried",
        "Other-relative"
    ])
workclass = tf.feature_column.categorical_column_with_vocabulary_list(
    "workclass", [
        "Self-emp-not-inc", "Private", "State-gov", "Federal-gov",
        "Local-gov", "?", "Self-emp-inc", "Without-pay", "Never-worked"
    ])

# To show an example of hashing:
occupation = tf.feature_column.categorical_column_with_hash_bucket(
    "occupation", hash_bucket_size=1000)
native_country = tf.feature_column.categorical_column_with_hash_bucket(
    "native_country", hash_bucket_size=1000)

# Continuous base columns.
age = tf.feature_column.numeric_column("age")
education_num = tf.feature_column.numeric_column("education_num")
capital_gain = tf.feature_column.numeric_column("capital_gain")
capital_loss = tf.feature_column.numeric_column("capital_loss")
hours_per_week = tf.feature_column.numeric_column("hours_per_week")

# Transformations.
age_buckets = tf.feature_column.bucketized_column(
    age, boundaries=[18, 25, 30, 35, 40, 45, 50, 55, 60, 65])

# Wide columns and deep columns.
base_columns = [
    gender, education, marital_status, relationship, workclass, occupation,
    native_country, age_buckets,
]

crossed_columns = [
    tf.feature_column.crossed_column(
        ["education", "occupation"], hash_bucket_size=1000),
    tf.feature_column.crossed_column(
        [age_buckets, "education", "occupation"], hash_bucket_size=1000),
    tf.feature_column.crossed_column(
        ["native_country", "occupation"], hash_bucket_size=1000)
]

deep_columns = [
    tf.feature_column.indicator_column(workclass),
    tf.feature_column.indicator_column(education),
    tf.feature_column.indicator_column(gender),
    tf.feature_column.indicator_column(relationship),
    # To show an example of embedding
    tf.feature_column.embedding_column(native_country, dimension=8),
    tf.feature_column.embedding_column(occupation, dimension=8),
    age,
    education_num,
    capital_gain,
    capital_loss,
    hours_per_week,
] '''
tf.logging.set_verbosity(tf.logging.ERROR)
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

feature_columns = []
for i in range(len(CSV_COLUMNS) - 1):
  feature_columns.append(tf.feature_column.numeric_column(CSV_COLUMNS[i]))

def maybe_download(train_data, test_data):
  """Maybe downloads training data and returns train and test file names."""
  if train_data:
    f = open(train_data, "r")
    print(f.name)
    train_file_name = f.name
    f.close()
  else:
    train_file = tempfile.NamedTemporaryFile(delete=False)
    urllib.request.urlretrieve(
        "https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data",
        train_file.name)  # pylint: disable=line-too-long
    train_file_name = train_file.name
    train_file.close()
    print("Training data is downloaded to %s" % train_file_name)

  if test_data:
    f = open(test_data, "r")
    print(f.name)
    test_file_name = f.name
    f.close()
  else:
    test_file = tempfile.NamedTemporaryFile(delete=False)
    urllib.request.urlretrieve(
        "https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.test",
        test_file.name)  # pylint: disable=line-too-long
    test_file_name = test_file.name
    test_file.close()
    print("Test data is downloaded to %s"% test_file_name)

  return train_file_name, test_file_name


def build_estimator(model_dir, model_type):
  """Build an estimator."""
  if model_type == "wide":
    m = tf.estimator.LinearClassifier(
        model_dir=model_dir, feature_columns=feature_columns)
  elif model_type == "deep":
    m = tf.estimator.DNNClassifier(
        model_dir=model_dir,
        feature_columns=feature_columns,
        hidden_units=[100])
  else:
    m = tf.estimator.DNNLinearCombinedClassifier(
        model_dir=model_dir,
        linear_feature_columns=feature_columns,
        dnn_feature_columns=feature_columns,
        dnn_hidden_units=[100, 50],
        linear_optimizer=tf.train.FtrlOptimizer(
          learning_rate=0.1,
          l1_regularization_strength=1.0,
          l2_regularization_strength=1.0))
  return m


def input_fn(data_file, num_epochs, shuffle):
  """Input builder function."""
  df_data = pd.read_csv(
      tf.gfile.Open(data_file),
      names=CSV_COLUMNS,
      skipinitialspace=True,
      engine="python",
      skiprows=1)
  labels = df_data["result"]
  return tf.estimator.inputs.pandas_input_fn(
      x=df_data,
      y=labels,
      batch_size=100,
      num_epochs=num_epochs,
      shuffle=shuffle,
      num_threads=5)


def train_and_eval(model_dir, model_type, train_steps, train_data, test_data,
    train_new, eval_new, user_input):
    """Train and evaluate the model."""
    #print(train_new, eval_new)
    model_dir = tempfile.mkdtemp() if not model_dir else model_dir

    m = build_estimator(model_dir, model_type)
    # set num_epochs to None to get infinite stream of data.
    if train_new:
        print('TRAINING ...')
        train_file_name, test_file_name = maybe_download(train_data, test_data)
        m.train(
            input_fn=input_fn(train_file_name, num_epochs=None, shuffle=True),
            steps=train_steps)

    if eval_new:
        print('EVALUATING ...')
        train_file_name, test_file_name = maybe_download(train_data, test_data)
        # set steps to None to run evaluation until all data consumed
        results = m.evaluate(
            input_fn=input_fn(test_file_name, num_epochs=1, shuffle=False),
            steps=None)
        for key in sorted(results):
            print("%s: %s" % (key, results[key]))

    if user_input:
        #print('PREDICTING ...')
        arr = eval(user_input)
        #new_sample = np.array(arr, dtype=np.int32)
        x = {}
        for i in range(len(arr)):
            x[CSV_COLUMNS[i]] = np.array([arr[i]], dtype=np.int32)
        predict_input_fn = tf.estimator.inputs.numpy_input_fn(
            x=x,
            num_epochs=1,
            shuffle=False)
        predictions = list(m.predict(input_fn=predict_input_fn))
        #print(predictions)
        predicted_classes = [p["class_ids"] for p in predictions]
        #print(predicted_classes)
        print(predicted_classes[0][0])

    print("model directory = %s" % model_dir)

FLAGS = None

def main(_):
    return train_and_eval(FLAGS.model_dir, FLAGS.model_type, FLAGS.train_steps,
        FLAGS.train_data, FLAGS.test_data, FLAGS.train_new,
        FLAGS.eval_new, FLAGS.user_input)


if __name__ == "__main__":
  parser = argparse.ArgumentParser()
  parser.register("type", "bool", lambda v: v.lower() == "true")
  parser.add_argument(
      "--model_dir",
      type=str,
      default="./model_combined",
      help="Base directory for output models."
  )
  parser.add_argument(
      "--model_type",
      type=str,
      default="wide_and_deep",
      help="Valid model types: {'wide', 'deep', 'wide_n_deep'}."
  )
  parser.add_argument(
      "--train_steps",
      type=int,
      default=2000,
      help="Number of training steps."
  )
  parser.add_argument(
      "--train_data",
      type=str,
      default="./data/training_set_15000.txt",
      help="Path to the training data."
  )
  parser.add_argument(
      "--test_data",
      type=str,
      default="./data/test2.txt",
      help="Path to the test data."
  )
  parser.add_argument(
      "--train_new",
      type=bool,
      default=False,
      help="Whether we want to train a new model."
  )
  parser.add_argument(
      "--eval_new",
      type=bool,
      default=False,
      help="Whether we want to evaluate a new model."
  )
  parser.add_argument(
      "--user_input",
      type=str,
      default="",
      help="String of an array representing new user input."
  )
  FLAGS, unparsed = parser.parse_known_args()
  tf.app.run(main=main, argv=[sys.argv[0]] + unparsed)
