import torch
import pandas as pd
from torch.utils.data import DataLoader
from utils import load_model
from custom_dataset import TatanicDataset

def evaluate_model(model, test_dataset, model_save_path):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

    test_loader = DataLoader(test_dataset, batch_size=32, shuffle=False)

    model = load_model(model, model_save_path).to(device)
    model.eval()

    correct = 0
    total = 0
    predictions = []
    with torch.no_grad():
        for inputs, targets in test_loader:
            inputs, targets = inputs.to(device).float(), targets.to(device).float().view(-1, 1)
            outputs = model(inputs)
            predicted = (outputs > 0.5).float()
            total += targets.size(0)
            correct += (predicted == targets).sum().item()
            predictions.extend(predicted.cpu().numpy().flatten().tolist())

    accuracy = 100 * correct / total

    # Save predictions and evaluation metrics
    save_predictions(predictions)
    save_evaluation_metrics(accuracy)

def save_predictions(predictions):
    df = pd.DataFrame({'Survived': predictions})
    df.to_csv('output/predictions.csv', index=False)

def save_evaluation_metrics(accuracy):
    with open('output/evaluation_metrics.txt', 'w') as f:
        f.write(f'Accuracy: {accuracy:.2f}%')