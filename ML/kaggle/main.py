import os
import argparse
import logging
import numpy as np
import pandas as pd
from tqdm import tqdm

from sklearn.model_selection import cross_validate, cross_val_score
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score, make_scorer

# from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet
# from sklearn.tree import DecisionTreeRegressor
# from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor

from xgboost import XGBRegressor
import xgboost as xgb
from lightgbm import LGBMRegressor

import json


def rmse(y_true, y_pred):
    return np.sqrt(mean_squared_error(np.array(y_true), np.array(y_pred)))


def mae(y_true, y_pred):
    return mean_absolute_error(np.array(y_true), np.array(y_pred))


def rmsle(y_true, y_pred):
    log_actual_values = np.log1p(y_true)
    log_predicted_values = np.log1p(y_pred)
    squared_error = np.square(log_predicted_values - log_actual_values)
    rmsle = np.sqrt(np.mean(squared_error))
    return rmsle


def r2(y_true, y_pred):
    return r2_score(y_true, y_pred)


MODELS = {
    # "linear": LinearRegression(),
    #         "ridge": Ridge(),
    #         "Lasso": Lasso(),
    #         "elastic": ElasticNet(),
    #         "decision_tree": DecisionTreeRegressor(),
    #         "random_forest": RandomForestRegressor(),
    #         "gradient_boosting": GradientBoostingRegressor(),
    "xgboost": XGBRegressor(),
    "lightgbm": LGBMRegressor()
}


def main(args):
    logger = logging.getLogger(__name__)
    logging.basicConfig(
        format="%(asctime)s - %(levelname)s - %(name)s - %(message)s",
        datefmt="%m/%d/%Y %H:%M:%S",
        level=logging.INFO
    )

    logger.info("***** Data Information *****")

    df = pd.read_csv(os.path.join(args.data_path, "RFE_df.csv"))

    number_of_train_dataset = df.sales.notnull().sum()

    train = df.iloc[:, :-1][:number_of_train_dataset]
    # test = df.iloc[:, :-1][number_of_train_dataset:]
    y_true = df['sales'][:number_of_train_dataset]

    # logger.info("***** Data Information *****")
    # logger.info("열 개수 : {0}, 데이터 개수 : {1}".format(
    #     len(df.columns.to_list()), len(df)))
    # logger.info("columns : {0}".format(train.columns.to_list()))

    logger.info("***** Model *****")
    logger.info(f"Call model {args.model}")

    output = cross_validate(MODELS[args.model], train, y_true, cv=5,
                            scoring={'RMSLE': make_scorer(rmsle), 'R-squared': make_scorer(r2),
                                     'MAE': make_scorer(mae), 'RMSE': make_scorer(rmse)}, )

#     mean_scores = {key: np.mean(output[key]) for key in output.keys()}

#     logger.info("***** Result *****")
#     for k, v in mean_scores.items():
#         logger.info(f"{k} : {v}")

#     with open(f'data/model_{args.model}.json', 'w') as f:
#         json.dump(mean_scores, f)

#     logger.info(
#         "***************************************************************************")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--data_path", default="data/",
                        type=str)
    parser.add_argument("--model", type=str, default="linear", required=True)

    args = parser.parse_args()
    main(args)
