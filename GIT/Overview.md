# GIT :\U00002753:

## **Git**

- 버전 관리 도구 (Version Control System; VCS)
  - 버전 관리 (형상 관리)
    : 동일한 소스 코드에 대해 여러개의 업데이트 버전을 관리하는 것
- 한 작업물에 대한 모든 버전을 저장하는 것 X
- 프로젝트의 시간과 차원을 관리하는 것! -> 버전을 돌릴 수도, 각 프로젝트의 차원들을 관리
- 이전 작업상태로 돌아가는 방법 또한 제공
- 한 작업물에 대해 여러 업데이트 버전이 있을시 이를 모두 저장하는 것이 아닌 하나의 작업물에서 관리할 수 있도록 도와주는.. 개발된 코드의 이력 (History)를 관리
- 코드 공유 및 Review 수행을 위한 사용
  <br>

## **특징**

- 분산 버전 관리
- 자신의 컴퓨터와 원격지서버에 모두 버전관리 (=Remote Repository)
- 원격지 : 자신의 컴퓨터가 아닌.. 다른 먼 컴퓨터를 사용하는..
  <br>

## **사용하는 이유**

- 코딩 되돌림, 새로운 버전 실험, 코딩 공유, 오픈 소스 운동? 등 —> 분산버전관리 시스템 유용
  <br>

## **workflow**

- working directory : 프로젝트를 수정 및 작업 (untracked file 소유)
- staging area : history에 저장할 파일을 옮겨놓는 공간 (tracked file 소유)
- working directory에서 add할 경우 옮겨짐
- git directory (Git Repository) : 버전의 history 저장 (commited file)
- staging area에서 commit할 경우 .git directory로 옮겨감
- checkout으로 working directory로 옮김
- 작업물을 버전별로 나누어 저장할 수 있는 것
- 하나의 큰 작업물 X -> 세분화한 작업물들을 기능별, 작업별로 나누어 저장하는 것이 좋다! 의미있는 작업을 했을 때 저장하는 것!
- push -> remote로 옮겨줌 / pull -> remote에서 local로 가져옴
- commited file

스냅샙? 된 정보를 기반으로 고유한 정보를 가지는 hash tag를 부가

해당 정보로 버전 정보 참조 가능

버전 정보 관련 정보 포함

ㅇ untracked vs tracked

- untracked : 새로 만든 파일 등 아직 깃에게 알려지지 않은 파일

tracked

unmodified vs modified : 추가, 변경, 삭제 등 수정이 됐는지 아닌지에 따라 나누어짐

unmodified는 이전의 버전과 비교하여 변화가 없으므로 modified된 파일만 staging area로 옮겨갈 수 있다
<br>

## **CLI vs GUI**

Command Line Interface : 명령줄을 입력해 사용

Graphical User Interface : 그래픽 요소를 활용 (소스트리)
