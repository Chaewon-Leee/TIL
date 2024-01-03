import torch
from torch.utils.data import DataLoader
from torch.utils.data import random_split

def get_data_loader(dataset, train_ratio=0.8, batch_size=80):
    
    train_len = int(len(dataset) * train_ratio)
    test_len = len(dataset) - train_len
    
    train_data, test_data = random_split(dataset, [train_len, test_len])
    
    train_loader = DataLoader(train_data, batch_size=batch_size, shuffle=True)
    test_loader = DataLoader(test_data, batch_size=batch_size, shuffle=True)
    
    return train_loader, test_loader
    

def train(model, train_loader, epochs, lr):

    criterion = torch.nn.MSELoss()
    optimizer = torch.optim.SGD(model.parameters(), lr=lr)
    losses = []
    for epoch in range(epochs):
        for inputs, targets in train_loader:
            optimizer.zero_grad()
            outputs = model(inputs)
            
            
            loss = criterion(outputs, targets)
            loss.backward()
            optimizer.step()
        
        if (epoch + 1) % 100 == 0:
            print(f"Epoch: {epoch + 1}, loss = {loss.item():.4f}")
            losses.append(loss.item())
    return losses

def test(model, test_loader):
    for inputs, targets in test_loader:
        outputs = model(inputs)
    criterion = torch.nn.MSELoss()
    loss = criterion(outputs, targets)
    print(f"test loss = {loss.item():.4f}")
    return outputs.detach().numpy()