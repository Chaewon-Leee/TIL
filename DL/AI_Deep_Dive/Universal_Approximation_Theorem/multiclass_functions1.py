import torch
from torch import nn, optim
from torchvision import datasets,transforms
import numpy as np # confusion matrix 사용시
import matplotlib.pyplot as plt
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

def Train(model, train_DL, criterion, optimizer, LR, EPOCH):
    # train_DL : train dataloader, optimizer : Adam
    NoT=len(train_DL.dataset) # Number of training data
    loss_history = []

    model.train() # train mode로!
    for ep in range(EPOCH):
        rloss = 0
        for x_batch, y_batch in train_DL:
            # 32개를 기준으로 끊어 리턴 > 마지막이 32개 미만일 경우에도 그냥 내보냄
            x_batch = x_batch.to(DEVICE)
            y_batch = y_batch.to(DEVICE)
            # inference
            y_hat = model(x_batch)
            # cross entropy loss
            loss = criterion(y_hat, y_batch)
            # update
            optimizer.zero_grad() # gradient 누적을 막기 위한 초기화
            loss.backward() # backpropagation
            optimizer.step() # weight update
            # loss accumulation
            loss_b = loss.item() * x_batch.shape[0] # batch loss
            # BATCH_SIZE 만큼 Loss에 곱채줌
            # BATCH_SIZE 로 하면 마지막 16개도 32개로 계산해버림
            rloss += loss_b # running loss = loss 총합
        # print loss
        loss_e = rloss/NoT # epoch loss
        # 각 batch 개수별로 loss를 곱해줬으므로, 최종 loss 평균은 총 데이터 개수로 나누어줌
        # batch size가 딱 맞아떨어지면, * x_batch.shape[0] 필요없고, 마지막 loss_e = rloss/NoT도 몫(전체 데이터 개수/ 배치사이즈)으로 나누어주면 된다
        loss_history += [loss_e]
        print(f"Epoch: {ep+1} train loss: {round(loss_e,3)}")
        print("-"*20)

    return loss_history