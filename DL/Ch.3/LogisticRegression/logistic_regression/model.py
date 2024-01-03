import torch
import torch.nn as nn

class LogisticRegressionModel(nn.Module):
    def __init__(self, input_dim):
        super(LogisticRegressionModel, self).__init__()
        self.linear = nn.Linear(input_dim, 1)
        
    def forward(self, x):
        out = self.linear(x)
        y_pred = torch.sigmoid(out)
        return y_pred # y = sigmoid(wx + b)