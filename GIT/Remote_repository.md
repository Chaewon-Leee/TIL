# ✨ GIT REMOTE REPOSITORY ✨

## **Remote Repository 명령어**

### **Remote Repository**

- 사용자의 컴퓨터 = local repository
- Remote repository : 나의 local 저장물을 다른 원격 컴퓨터에도 동일하게 저장
  <br> &rarr; 가장 대표적인 remote repository = github!

### **remote**

- 원격 관련 명령어 수행
- 원격 저장소 이름에 흔히 origin을 사용하지만, 다른 것으로도 수정 가능

```
    git remote : 원격 목록 보기
    git remote -v : 자세히 확인
    git remote add [원격 저장소명] [원격 저장소 주소] : 로컬 저장소에 원격 저장소로의 연결을 추가
    git remote remove [원격 저장소명] : 원격 저장소와 연결 끊기
```

### **push**

- 원격 저장소에 로컬 저장소 파일 **업로드**
- 원격 저장소 이름에 흔히 origin을 사용하지만, 다른 것으로도 수정 가능

```
    git push [원격 저장소명] [branch명] : 원격 저장소에 해당 branch 데이터 업로드
    git push -u / --set -upstream [원격 저장소명] [branch명] : 원격 저장소와 현재의 branch 디폴트 연결
        >> 이후부터는 git push만 사용해도 가능!
```

### **clone vs pull vs fetch**

- 로컬 저장소 파일을 원격 저장소로 불러오기 = **다운로드**
  | clone | pull | fetch |
  | :--------------------------------: | :--------------------------------------: |:--------------------------------------: |
  | 원격 저장소에 로컬 저장소 파일 전체 가져오기 | 현재의 branch에 추가된 내용만 덧붙인다 | 변경 내용만 가져오고 안 합치지 않음|
  | 새로 원격 저장소의 파일을 받아와 프로젝트 작업을 시작할 때 사용 | | 원격 저장소 내용만 확인하고 로컬 저장소와 합치지 않는 경우 활용|

### **clone**

```
    git clone [원격 저장소 주소]
```

### **pull**

```
    git pull [원격 저장소명] [branch명]
```

### **fetch**

```
git fetch [원격 저장소명] [branch명]
```

## **Github을 이용한 코드 공유 방식**

### **깃허브 활용방안**

- 소스 코드 저장 (버전관리), 소스 코드 공유, 협엽

### **Fork & Pull Request (PR)**

|                Fork                 |             Pull Request (PR)              |
| :---------------------------------: | :----------------------------------------: |
| 남의 원격 저장소 파일을 가져오는 것 | 수정한 코드 남의 원격 저장소에 업로드 요청 |
