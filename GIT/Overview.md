# ✨ GIT OVERVIEW ✨

## **Git**

- 버전 관리 도구 (Version Control System; VCS)
  - _버전 관리_ (형상 관리) <br>
    동일한 소스 코드에 대해 여러개의 업데이트 버전을 관리하는 것
- 한 작업물에 대한 모든 버전을 저장 ❌ <br> `개발된 코드의 이력 (History) 관리`

## **특징**

- 분산 버전 관리
- 자신의 컴퓨터와 원격지서버에 모두 버전관리 (=Remote Repository)

## **사용하는 이유**

- 이전 작업상태로 돌아가는 방법 제공
- 코드 공유 및 Review 수행을 위한 사용
- 이외에도 새로운 버전 실험, 오픈 소스 등
  `분산버전관리 시스템`

## **workflow**

#### `working directory > git.add > staging area > git.commit > git directory`

- working directory : 수정 및 작업 파일 (untracked file 소유)
- staging area : history에 저장할 파일을 옮겨놓는 공간 (tracked file 소유)
- git directory (Git Repository) : history 저장 (commited file)

## **untracked vs tracked**

- untracked : 새로 만든 파일 등 아직 git에게 알려지지 않은 파일
- tracked : 한번이라도 git에 노출된 파일

## **unmodified vs modified**

- working directory에서 추가, 변경, 삭제 등 수정 유무에 따라 나눔
- unmodified : 이전의 버전과 비교하여 변화가 없는 것
  - modified된 파일만 staging area로 옮겨갈 수 있다

## **commited file**

- 고유한 정보를 가지는 hash tag를 부가
- 해당 정보로 버전 정보 참조 가능

## **CLI vs GUI**

- Command Line Interface : 명령줄을 입력해 사용
- Graphical User Interface : 그래픽 요소를 활용
