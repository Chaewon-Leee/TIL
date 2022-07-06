# ✨ GIT BASIC ✨

## **Git 기본 명령어**

- ### init
  - 현재 저장소를 Working directory로 선언 &rarr; 지정한 폴더에서 파일 생성 및 관리
  - 기본적으로 master branch 생성됨

```
  git init
```

- ### add
  - 파일 생성 및 업데이트시 git이 track할 수 있도록 추가

```
  git add [파일명]
  git add . : 모든 변경사항 추가
  git add \*.[확장자명]  : 해당 확장자명으로 끝나는 모든 변경사항 추가
```

- ### commit
  - Git add만으로는 저장이 안 됨! &rarr; 실제 history를 만들어주는 것 = commit 사용
  - 파일 삭제시 그냥 파일을 지우게 될 경우, commit된 파일은 실제로 지워지지 않는 경우가 존재 &rarr; git에서 제거 필요

```
  git commit [파일명] ... -m " text message "
  git commit -am " text message " : add와 message 동시에 하는 것 (단, 새로 추가된; untracked된 파일이 없을 때 한정)

```

- ### rm
  - commit된 파일 삭제

```
  git rm [파일명]
  git rm --cached \* : 모든 파일 삭제
```

- ### mv
  - 파일명 바꾸기

```
  git mv [파일명] [바꾸고자 하는 파일명]
```

- ### status
  - 현재 상황에서 변경사항이 존재하는 파일 파악

```
  git status
```

- ### diff
  - 라인 추가, 삭제 등 파일 내부 내용이 변경되었는지 알려줌
  - 변경사항을 좀 더 구체적으로 보여주는 명령어

```
  git diff
  git diff --cached [특정 파일명] : 특정 파일명에 대한 diff
```

- ### status vs diff

  - status : commit을 할 수 있는 파일과 아닌 파일만을 보여줌
  - diff : working directory와 staging area에 있는 것을 비교하여 변경사항을 보여줌
    - staging area에 모두 있을 경우, git diff는 아무것도 출력하지 않음!

- ### gitignore
  - commit을 배제할 파일 지정
  - 설정 파일, 기본적으로 깔려있는 파일, 보안상 민감한 파일 등 관리할 필요가 없는 파일들에게 적용
    <br> = tracking하고 싶지 않은 파일을 저장
  - gitignore 파일 안에 있는 [파일명]들은 git에게 전송 ❌
    - 파일명 뿐만 아니라 \*.[확장자명] / 디렉토리 경로 등 다양하게 추가 가능
    - !not_ignore_this.[파일명] : 배제해야하는 확장자명이지만 해당 파일은 포함시키지 않을 경우 사용

```
  .gitignore 파일 생성 후 mv .gitignore.txt .gitignore 필요
```

## **Git Log 명령어**

- ### Log
  - commit된 history를 살펴보는 것

```
  commit [hash code]
  Author : [git config 사용자 정보]
  Date : [git을 한 시간]

  [저장된 메시지]
```

- ### reset vs Revert

  - 둘다 이전 history로 돌리는 방법
  - reset : 이전으로 돌아갔을 때 해당 이후 행적들은 모두 지움
  - revert : 과거 이후 행적을 거꾸로 수행한 결과물의 history 새롭게 추가하는 방식
    - revert의 경우, 이미 지나온 history 중 잘못된 부분만 거꾸로 수행하여 해당 파일만 취소 가능

- ### reset

```
  git reset --hard [커밋 해시]
```

- ### Revert

```
  git revert [커밋 해시]
```

ㅇ git checkout

되돌리기

git log의 각 코드 = 해당 상태의 주소

각 코드를 활용하면 해당 상태로 돌아갈 수 있다

git checkout [hash code 앞 6자리]

git log도 해당 상태로 되돌아감

다시 돌아가려면 현재 상태의 코드를 입력하여 돌아갈 수 있음

get status로 현재 상태의 코드 확인 가능

별로 좋은 방법이 아님

ㅇ 되돌아가는 것보다 수정을 하는 것이 좋음!

또한 test를 위한 새로운 갈래를 만들어서 test를 실행 -> Branch!

## **[깃 명령어](https://git-scm.com/docs)**
