import torch

import pandas as pd
from torch.utils.data import Dataset

class TatanicDataset(Dataset):
    def __init__(self,  csv_file, transform=None) -> None:
        self.data = pd.read_csv(csv_file)       
        self.transform = transform
        
        if self.transform:
            self.data  = self.transform(self.data)
    
    def __getitem__(self, index):
        if torch.is_tensor(index):
            idx = idx.tolist()
        
        
        sample = self.data.iloc[index]
        
        target = sample["Survived"]
        input_features = sample.drop("Survived").values
        

        
        return input_features, target
    
    def __len__(self) -> int:
        return len(self.data)