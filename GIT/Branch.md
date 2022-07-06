# ✨ GIT BRANCH ✨

## **Branch 개념**

### **branch란?**

- 현재의 상태에서 갈랫길을 만들어 여러가지 시도를 해볼 수 있는 것
- 프로젝트를 하나 이상의 모습으로 관리해야할 때 사용
- 기본적으로 master branch 생성됨

### **head**

- 현재 branch상 최상위 branch

## **Branch 명령어**

### **branch**

- 현재 상태에서 새로운 branch명으로 선언할 경우, 현재 상태를 기반으로 한 branch 여러개 생성 가능 &rarr; 각 branch를 관리

```
git branch : 현재 존재하는 모든 branch 목록 확인
git branch [branch명] : 현재의 history를 해당 branch명으로 선언
git branch -m [기존 branch명] [새로운 branch명] : branch명 바꾸기
git branch -d / -D [branch명] : branch 삭제 (단, 해당 branch에 유일한 내용이 존재할 경우 강제 삭제 -D 필요)
```

### **checkout**

- **현재는 switch & restore로 분리!**

```
git checkout [branch명] : branch에서 작업 실행
```

### **switch**

- branch로 이동

```
git switch [branch명] : 해당 branch로 이동
git switch -c [branch명] : branch 생성과 동시에 이동
```

### **merge vs rebase**

- branch를 합치는 방식 두 가지

|                                                  merge                                                   |                     rebase                      |
| :------------------------------------------------------------------------------------------------------: | :---------------------------------------------: |
|                                  현재 상태에서 다른 branch 작업을 합침                                   | 브랜치의 변화된 부분을 다른 브랜치에 이어붙인다 |
|                              모든 변화가 통합된 새로운 하나의 history 생성                               |        병합하여 한 줄로 정리된 내역 유지        |
|                                          브랜치 사용내역을 남김                                          |              하나의 라인으로 정리               |
| reset으로 되돌리기 가능 &rarr; 하나의 commit이므로 merge를 하기 전 branch의 마지막 시점으로 돌릴 수 있음 |                                                 |

### **merge**

```
git merge [branch명]
```

### **rebase**

- 병합당할 branch로 이동 &rarr; merge는 기록에 남아있을 브렌치에서 함 &rarr; main 브랜치로 이동후 fast-forward

```
git rebase [병합될 branch명]
git merge [해당 branch명]
>> 병합된 branch는 삭제 (-d 사용)
```

## **병합 충돌 발생**

### **방안**

- 만약 브랜치간 같은 내용에 대해 충돌이 일어날 경우 &rarr; 오류 메시지와 git status 확인

### **merge 충돌**

- 당장 해결이 어려울 경우

```
gir merge --abort : merge 중단
```

- 해결 가능시

```
충돌 부분 수정 후, git add . & git commit 으로 병합
```

### **rebase 충돌**

- 당장 해결이 어려울 경우

```
gir rebase --abort : rebase 중단
```

- 해결 가능시

```
충돌 부분 수정 후, git add .
git rebase --continue : 계속 진행
```
