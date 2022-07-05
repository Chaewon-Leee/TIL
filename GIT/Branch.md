▲ Git Branch

ㅇ branch란?

프로젝트를 하나 이상의 모습으로 관리해야할 때

여러 작업들이 각각 독립되어 지냉될 때

각각의 차원에서 작업 후 확정된 것만 메인 차원에 통합

ㅇ git checkout master

현재의 상태를 메인 branch로 잡는 것

ㅇ git branch

git branch [branch 이름]

현재의 상태를 새로운 branch 이름으로 정해주는 것..

master인 상태에서 git branch [new_test]를 할 경우, 현재의 상태에서 master과 new_test인 두 개의 branch가 공존!

new_test인 상태에서 새롭게 변화를 주고, master인 상태에서 새롭게 변화를 줌 --> 이를 병합할 수 있다?

git branch만 할 경우, 현재 존재하는 모든 branch 목록 확인

git branch -d [branch 이름]

브랜치 삭제

지워질 브랜치에 유일한 내용의 커밋이 있을 경우 (다른 브렌치엔 없는 내용이 있을 경우) --> -D (대문자)로 강제 삭제 필요

git branch -m [기존 branch 이름] [새로운 branch 이름]

브랜치 이름 ㅂㅏ꾸기

ㅇ git checkout [branch 이름]

해당 branch에서 내가 작업을 실행하겠다 (add -> commit)

현재의 상태에서 갈랫길을 만들어 여러가지 시도를 해볼 수 있는 것

ㅇ checkout 명령어 --> switch & restore로 분리

ㅇ switch

git switch [branch 이름]

해당 branch로 이동한다

git switch -c [branch 이름]

브랜치 생성과 동시에 이동

ㅇ restore

ㅇ head : 현재 branch상 최상위 branch

브랜치를 합치는 두 방식 merge & rebase

ㅇ git merge

현재 상태에서 다른 branch 작업을 병합 --> 모든 변화가 통합된 새로운 commit?생성

브랜치 사용내역을 남김

git merge [branch 이름]

merge는 reset으로 되돌리기 가능 --> 하나의 커밋이기 때문에 merge를 하기 전 브랜치의 마지막 시점으로 돌릴 수 있다

병합된 브랜치는 삭제 (-d 사용)

ㅇ git rebase

브랜치의 변화된 부분을 다른 브랜치에 이어붙인다 --> 한 줄로 정리된 내역 유지

협엽하는 경우, merge 권장!

병합당할 브랜치로 이동!! --> merge는 병합할 main 브렌치에서 함!

git rebase [병합될 branch 이름]

main 브랜치는 뒤쳐지게 됨

main 브랜치로 이동후 fast-forward

git merge [해당 브랜치 이름]

ㅇ gitk

전체적인 모든 branch를 그림으로 확인

ㅇ 충돌 발생

만약 브랜치간 같은 내용에 대해 충돌이 일어난다면?

오류 메시지와 git status 확인

ㅇ merge 충돌

당장 해결이 어려울 경우

gir merge --abort : merge 중단

해결 가능시

충돌 부분 수정 후, git add . & git commit 으로 병합

ㅇ rebase 충돌

당장 해결이 어려울 경우

gir rebase --abort : merge 중단

해결 가능시

충돌 부분 수정 후, git add .

git rebase --continue : 계속 진행하라


