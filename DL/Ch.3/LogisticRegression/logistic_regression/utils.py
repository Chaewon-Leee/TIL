import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import pickle
import torch

def preprocess_titanic_data(df):
    
    df.drop(["PassengerId", "Name", "Ticket", "Cabin"], axis=1, inplace=True)

    df["Age"].fillna(df["Age"].median(), inplace=True)
    df["Embarked"].fillna(df["Embarked"].mode()[0], inplace=True)
    df["Fare"].fillna(df["Fare"].median(), inplace=True)
    
    df["Sex"] = df["Sex"].map({"male" : 0, "female" : 1})
    df["Embarked"] = df["Embarked"].map({"S" : 0, "C" : 1, "Q" : 2})
    
    scaler = MinMaxScaler()
    numerical_features = ["Age", "Fare"]
    df[numerical_features] = scaler.fit_transform(df[numerical_features])
    
    return df

def save_model(model, file_path):
    with open(file_path, 'wb') as f:
        pickle.dump(model, f)

def load_model(model, file_path):
    model.load_state_dict(torch.load(file_path))
    return model