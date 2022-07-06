# ✨ GIT BASIC ✨

## **Git 기본 명령어**

### **init**

- 현재 저장소를 Working directory로 선언
  <br> &rarr; 지정한 폴더에서 파일 생성 및 관리
- 기본적으로 master branch 생성

```
    git init
```

### **add**

- 파일 생성 및 업데이트시 git이 track할 수 있도록 해주는 것

```
    git add [파일명]
    git add . : 모든 변경된 파일 add
    git add \*.[확장자명] : 해당 [확장자명]으로 끝나는 모든 파일 add
```

### **commit**

- 현재 상태를 history에 저장하는 것
- Git add만으로는 저장이 안 됨!
  &rarr; commit이 실제 history를 만들어주는것

```
    git commit [파일명] ... -m " text message "
    git commit -am " text message " : add와 message 동시에 하는 것 (단, 새로 추가된; untracked된 파일이 업을 때 한정)
```

### **rm**

- commit된 파일 삭제
- 파일 삭제시 그냥 파일을 지우게 될 경우, commit된 파일은 실제로 지워지지 않는 경우가 존재 &rarr; git에서 제거 필요

```
    git rm [파일명]
    git rm --cached \* : 모든 파일 삭제
```

### **mv**

- 파일명 변경

```
    git mv [파일명] [바꾸고자 하는 파일명]
```

### **status**

- 현재의 변경사항을 보여줌

```
    git status
```

### **diff**

- 어떤 파일이 변화되었는지 이전 버전과 비교하여 확인
- 변경사항을 좀 더 구체적으로 보여주는 명령어

```
    git diff
    git diff –staged / git diff -cached : 실제 history와 staging area 비교
```

### **status vs diff**

|                       status                       |                                    diff                                     |
| :------------------------------------------------: | :-------------------------------------------------------------------------: |
| working directory와 staging area의 상태만을 보여줌 |     working directory와 staging area를 비교하여 실제 변경사항을 알려줌      |
|        현재 commit 가능 여부 상태를 보여줌         | 수정한 파일을 모두 staging area에 넣는다면 git diff 명령은 아무것도 출력 ❌ |

### **gitignore**

- 배제할 파일을 입력하여 git이 무시하도록 함
- 설정 파일, 기본적으로 깔려있는 파일, 보안상 민감한 파일 등 관리할 필요가 없는 파일들에게 적용 <br>
  = tracking하고 싶지 않은 파일을 저장
- 파일명 뿐만 아니라 \*.[확장자명] / 디렉토리 경로 등 다양하게 추가 가능
  - !not_ignore_this.[확장자명] : 무시해야할 확장자를 사용하지만 해당 파일은 예외

```
    .gitignore 파일 생성 후, mv .gitignore.txt .gitignore
```

## **Git Log 명령어**

### **log**

- 모든 history를 보여줌
- git log의 각 코드 = 해당 상태의 주소
  - 각 코드를 활용하면 해당 상태로 돌아갈 수 있다

```
    git log

    >>
    commit [hash code]
    Author : [git config 사용자 정보]
    Date : [git을 한 시간]

    [저장된 메시지]
```

### **reset vs Revert**

- history를 되돌리는 두 가지 방법
  | reset | revert |
  | :--------------------------------: | :--------------------------------------: |
  | 이전으로 돌아갔을 때 해당 이후 행적들은 모두 지움 | history 중 하나의 행적을 선택하여 이를 거꾸로 수행한 결과물을 새롭게 추가하는 방식 |
  | | 쌓아온 history 중 잘못된 것만 가져와 거꾸로 수행하여 지울 수 있다 |

### **reset**

```
    git reset --hard [커밋 해시]
```

### **reset**

```
    git revert [커밋 해시]
```

### **checkout**

- 되돌리기
- 다시 돌아가려면 현재 상태의 코드를 입력하여 돌아갈 수 있음
- get status로 현재 상태의 코드 확인 가능

```
    git checkout [hash code 앞 6자리]
```

- ### 되돌아가는 것보다 수정을 하는 것이 좋음! &rarr; Branch!

## **[깃 명령어](https://git-scm.com/docs)**
