for a in "lightgbm" "xgboost"
do
  echo $a
  python3 main.py --model $a
done

