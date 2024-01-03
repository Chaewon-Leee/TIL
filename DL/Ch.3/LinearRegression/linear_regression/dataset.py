import torch

from sklearn.datasets import load_boston
from torch.utils.data import Dataset

# Dataset class that calls the Boston Housing Dataset
class BostonHousingDataset(Dataset):
    def __init__(self) -> None:
        data = load_boston()
        self.X = torch.tensor(data.data, dtype=torch.float32)
        self.y = torch.tensor(data.target, dtype=torch.float32).view(-1, 1)

    def __getitem__(self, index):
        return self.X[index], self.y[index]

    def __len__(self) -> int:
        return len(self.X)