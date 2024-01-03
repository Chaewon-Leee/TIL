import torch
from torch.utils.data import DataLoader
import torch.optim as optim
from utils import save_model

def train_model(model, train_dataset, val_dataset, epochs, lr, model_save_path):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    train_loader = DataLoader(train_dataset, batch_size=1, shuffle=True)
    val_loader = DataLoader(val_dataset, batch_size=1, shuffle=True)

    criterion = torch.nn.BCELoss()
    optimizer = optim.SGD(model.parameters(), lr=lr)
    best_val_loss = float('inf')

    for epoch in range(epochs):
        model.train()
        for i, (inputs, targets) in enumerate(train_loader):
            inputs, targets = inputs.to(device).float(), targets.to(device).float().view(-1, 1)

            optimizer.zero_grad()
            outputs = model(inputs)
            loss = criterion(outputs, targets)

            loss.backward()
            optimizer.step()

        model.eval()
        val_loss = 0
        with torch.no_grad():
            for inputs, targets in val_loader:
                inputs, targets = inputs.to(device).float(), targets.to(device).float().view(-1, 1)
                outputs = model(inputs)
                loss = criterion(outputs, targets)
                val_loss += loss.item()

        val_loss /= len(val_loader)
        print(f"Epoch {epoch+1}/{epochs}, Validation Loss: {val_loss:.4f}")

        # Save the best model
        if val_loss < best_val_loss:
            best_val_loss = val_loss
            save_model(model, model_save_path)
            print(f"Best model saved with validation loss: {best_val_loss:.4f}")
    return model