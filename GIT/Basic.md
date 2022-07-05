Git file status (command, terminal 사용방식)

ㅇ git init

- Working directory 선언 (현재 사용하는 저장소)

- Git init로 지정한 폴더에서 파일 생성 및 관리??

맨처음 프로젝트를 올릴 때 해주는 것

git을 초기화할 경우 기본적으로 master branch 생성

ㅇ git add

- 파일 생성 / 업데이트시 이를 track할 수 있도록 해주는 것..?

- Git add [파일명]

- git add . 도 가능!! --> 지양함

git add \*.txt --> 해당 확장자명 [txt]로 끝나는 모든 걸 추가

ㅇ git commit

- 현재 상태를 저장하는 것

실제 버전을 만들어주고, 메시지를 남겨 해당 버전에 대한 설명 추가

- Git add만으로는 저장이 안됨! --> commit이 실제 history를 만들어주는것

- Git commit [파일명] -m '[남길 메시지]' --> 여러개의 파일 commit : git commit [파일명] [파일명] -m '[메시지]'

git commit -am [메시지]' --> add와 commit을 동시에 하는 법

단 새로 추가된 (untracked)된 파일이 없을 때 한정

파일 삭제시 그냥 파일을 지우게 될 경우, commit된 파일은 실제로 지워지지 않는 경우가 존재

ㅇ git rm

commit된 파일 삭제

git rm [파일명]

git rm --cached \* : 모든 파일 삭제

ㅇ git mv

파일명을 바꾼다

git mv [파일명] [바꾸고자 하는 파일명]

ㅇ git status

- 현재의 상태를 볼 수 커맨드

변경사항들 뜸

ㅇ staged Filed vs Committed File

Staged File : 아직 commit하기 이전 상태, git add만 한 상태 —> 해당 파일의 변화를 지켜보는 것

Committed File : 현재 상태를 git repository에 저장하는 것, commit 이후

ㅇ Tracked File vs staged Filed

Tracked File : 변화 중인 작업물

staged Filed : commit을 하기 직전 최종본

Committed File : 디렉토리에 저장된 최종본 (코딩 되돌림을 하는 파일?)

ㅇ gitignore : 배제할 요소 지정

- 설정 파일, 기본적으로 깔려있는 파일, 보안상 민감한 파일 등 관리할 필요가 없는 파일들에게 적용

tracking하고 싶지 않은 파일을 저장

- .gitignore 파일 생성 —> mv .gitignore.txt .gitignore

- 해당 파일 안에 있는 [파일명] 들은 git이 무시하게 됨

파일명 뿐만 아니라 \*.[확장자명] / 디렉토리 경로 등 다양하게 추가 가능

!not_ignore_this.[확장자명] --> 무시해야할 확장자지만 해당 파일은 무시하지 않겠다

ㅇ git diff

어떤 파일이 변화되었는지 이전 버전과 비교하여 확인

변경사항을 좀 더 구체적으로 보여주는 명령어

▲ Git Log

ㅇ 이전으로 돌리는 두가지 방법 reset vs Revert

reset : 이전으로 돌아갔을 때 해당 이후 행적들은 모두 지움

git reset --hard [커밋 해시]

revert : 과거 이후 행적을 거꾸로 수행 (마이너스하기??) 한 결과물을 새롭게 추가하는 방식

이미 지나온 과거 중 하나만 딱 잘못했을때 해당 과거만 가져와서 지울 수 있는 느낌

git revert [커밋 해시]

ㅇ git log

그간의 git 기록 정보 보여줌

commit [hash code]

Author : [git config 사용자 정보]

Date : [git을 한 시간]

[저장된 메시지]

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

깃 명령어 확인 :

https://git-scm.com/docs


