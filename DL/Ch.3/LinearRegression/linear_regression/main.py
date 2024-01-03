import argparse

from model import LinearRegressionModel
from utils import train
from utils import test
from utils import get_data_loader
from dataset import BostonHousingDataset

import torch
import matplotlib.pyplot as plt

parser = argparse.ArgumentParser()
## add arguments here for epcohs, learning_rate, model_path
parser.add_argument("--epochs", type=int, default=1000)
parser.add_argument("--lr", type=float, default=0.00000000001)
parser.add_argument("--model_path", type=str, default="model.pth")
args = parser.parse_args()


dataset = BostonHousingDataset()
train_loader, test_loader = get_data_loader(dataset, train_ratio=0.8, batch_size=10)

model = LinearRegressionModel(13, 1)
losses = train(model, train_loader, epochs=args.epochs, lr=args.lr)
predictions = test(model, test_loader=test_loader)

plt.plot(range(100, 1001, 100), losses)
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.title('Loss vs. Epoch')
plt.savefig('loss_vs_epoch.png', dpi=300, bbox_inches='tight')

print("Predictions: ", predictions)

# Save the trained model
torch.save(model.state_dict(), args.model_path)
