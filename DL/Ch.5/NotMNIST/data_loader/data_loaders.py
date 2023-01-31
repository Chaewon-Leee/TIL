from pathlib import Path
from torchvision import datasets, transforms
# from torch.utils.data import DataLoader
from base import BaseDataLoader
from skimage import io
import torch


class CustomDataset:

    def __init__(self, data_path: str, transform: bool = True):
        self.transform = transform
        self.data, self.targets = self._load_data(data_path)

        self.trsfm = transforms.Compose([
            transforms.ToTensor(),
            transforms.Normalize((0.1307,), (0.3081,))
        ])
        self.classes = {
            "A": 0,
            "B": 1,
            "C": 2,
            "D": 3,
            "E": 4,
            "F": 5,
            "G": 6,
            "H": 7,
            "I": 8,
            "J": 9
        }

    def __getitem__(self, index):
        img = io.imread(self.data[index])

        if self.transform == True:
            img = self.trsfm(img)

        label = self.targets[index]
        label = torch.tensor(self.classes[label])

        return img, label

    @staticmethod
    def _load_data(path: str):
        data = []
        targets = []

        for i in Path(path).glob("**/*.png"):
            data.append(i)
            targets.append(str(i).split('/')[1])
        return data, targets

    def __len__(self):
        return len(self.data)


class NotMnistDataLoader(BaseDataLoader):
    def __init__(self, data_dir, batch_size, shuffle=True, validation_split=0.0, num_workers=1):
        self.data_dir = data_dir
        self.dataset = CustomDataset(data_path=self.data_dir, transform=True)
        super().__init__(self.dataset, batch_size, shuffle, validation_split, num_workers)


class MnistDataLoader(BaseDataLoader):
    """
    MNIST data loading demo using BaseDataLoader
    """

    def __init__(self, data_dir, batch_size, shuffle=True, validation_split=0.0, num_workers=1, training=True):
        trsfm = transforms.Compose([
            transforms.ToTensor(),
            transforms.Normalize((0.1307,), (0.3081,))
        ])
        self.data_dir = data_dir
        self.dataset = datasets.MNIST(
            self.data_dir, train=training, download=True, transform=trsfm)
        super().__init__(self.dataset, batch_size, shuffle, validation_split, num_workers)
