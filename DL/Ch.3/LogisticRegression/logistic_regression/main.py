import argparse
from custom_dataset import TatanicDataset
from utils import preprocess_titanic_data

from torch.utils.data import random_split

from model import LogisticRegressionModel
from train import train_model
from evaluate import evaluate_model

def main(args):
    train_dataset = TatanicDataset(csv_file = "data/train.csv", 
                             transform=preprocess_titanic_data)
    
    train_len = int(0.8 * len(train_dataset))
    val_len = len(train_dataset) - train_len
    train_set, val_set = random_split(train_dataset, [train_len, val_len])
    
    test_dataset = TatanicDataset(csv_file = "data/test.csv", 
                             transform=preprocess_titanic_data)
    
    model = LogisticRegressionModel(input_dim=train_set[0][0].shape[0])
    model.to("cuda:0")
    epoch = args.epochs
    lr = args.lr
    saved_path =  args.model_save_path
    
    trained_model = train_model(model, train_set, val_set, 
                                epoch, lr, saved_path)
    
    # Evaluate the model
    evaluate_model(trained_model, test_dataset, args.model_save_path)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    
    parser.add_argument('--epochs', type=int, default=50, help='Number of epochs for training')
    parser.add_argument('--lr', type=float, default=0.01, help='Learning rate for optimizer')
    parser.add_argument('--model_save_path', type=str, default='output/model.pth', 
                        help='Path to save the best model')

    args = parser.parse_args()

    main(args)
