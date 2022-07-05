▲ Git remote Repository

ㅇ remote repository란?

현재의 .git = local repository

나의 local 저장물을 다른 원격 컴퓨터에도 동일하게 저장되어있는 상태

실시간으로 업데이트 되는 것이 아님! --> 공유하고자 하는 목적

가장 대표적인 remote repository = github!

git remote add otigin [Remote repository 이름]

로컬의 git 저장소에 원격 저장소로의 연결을 추가하겠다

원격 저장소 이름에 흔히 origin을 사용하지만, 다른 것으로도 수정 가능

git remote : 원격 목록 보기

git remote -v 로 좀 더 자세한 확인 가능

git remote remove [Remote repository 이름]

해당 원격 이름과의 연결을 끊겠다 --> github의 repository는 지워지지 않음!

ㅇ push

local repository에 나의 commit 상태 업로드

git push -u [Remote repository 이름] [branch 이름]

git push origin master 로컬 저장소의 커밋 내역들을 원격으로 push (업로드) 하겠다

-u 또는 --set -upstream : 현재 브랜치와 명시된 원격 브랜치 기본 연결

-u으로 대상 원격 브렌치를 지정할 경우 --> 이후부터는 git push만 사용해도 가능!

ㅇ remote에서 local로 가져오기

clone : 전체를 가져옴

git clone [Remote repository url 주소]

git 관리내역을 포함해서 다운로드한다

pull : 같은 branch를 합쳐버림

git pull [Remote repository 이름] [branch 이름]

fetch : 변경 내용만 가져오고 안 합침

git fetch [Remote repository 이름] [branch 이름]

git merge [Remote repository 이름]/[branch 이름]

▲ Github을 이용한 코드 공유 방식

ㅇ 깃허브 활용방안

소스 코드 저장 (버전관리)

소스 코드 공유

협엽

ㅇ Fork & Pull Request (PR)

Fork : 남의 Github Repository를 가져오는 것

Pull Request (PR) : Fork로 가져와 수정한 코드를 가져가라고 요청


