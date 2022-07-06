# ✨ GIT OVERVIEW ✨

## **Git**

- 버전 관리 도구 (Version Control System; VCS)
  - _버전 관리_ (형상 관리) : 동일한 소스 코드에 대해 여러개의 업데이트 버전을 관리하는 것
    - 모든 수정본을 저장하는 파일 서버 기반 개발 관리의 문제점과 단점을 보완하기 위해 개발
- 한 작업물에 대한 모든 버전을 저장 ❌ &rarr; 개발된 코드의 이력 (History) 관리

## **Git VS Github**

|                Git                 |                  Github                  |
| :--------------------------------: | :--------------------------------------: |
|       버전관리 **프로그램**        | git을 관리하는 웹 기반 **호스팅 서비스** |
| 로컬저장소 (다른 작업자와 공유 ❌) |    분산 버전 관리; 다른 작업자와 공유    |

## **특징**

- _분산 버전 관리_ : 중앙 서버에 접속하지 않고 개발자가 독립적으로 작업 수행 후 병합하여 관리하는 방식
- 자신의 컴퓨터와 원격지서버(=Remote Repository), 모두 버전관리

## **사용하는 이유**

- 이전 작업상태로 돌아가는 방법 제공
- 코드 공유 및 Review 수행을 위한 사용
- 이외에도 새로운 버전 실험, 오픈 소스 등에 활용 <br>
  &rarr; 분산버전관리 시스템 이용!

## **workflow**

#### _working directory &rarr; git.add &rarr; staging area &rarr; git.commit &rarr; git directory_

- working directory : 수정 및 작업 파일 (untracked file)
- staging area : history에 저장할 파일을 옮겨놓는 공간 (tracked file, staged file)
- git directory (Git Repository) : 실제적인 history 저장물 (commited file)

## **modified file**

- working directory에서 이전 버전과 비교하여 추가, 변경, 삭제 등의 변화가 생긴 것
- modified된 파일만 staging area로 옮겨갈 수 있다

## **commited file**

- 고유한 정보를 가지는 hash tag 부가 &rarr; 해당 tag를 사용하여 버전 정보 참조 가능
- Staged File vs Committed File
  - Staged File : 아직 commit하기 이전, add만 한 상태 &rarr; 아직은 파일의 변화를 지켜보는 단계
  - Committed File : 현재 상태를 commit하여 git repository에 저장하는 것 &rarr; 유의미한 결과가 나온 경우

## **untracked vs tracked**

|                     untracked                     |           tracked            |
| :-----------------------------------------------: | :--------------------------: |
| 새로 만든 파일 등 아직 git에게 알려지지 않은 파일 | 한번이라도 git에 노출된 파일 |

## **Staged vs tracked**

|         untracked         |     tracked      |
| :-----------------------: | :--------------: |
| commit을 하기 직전 최종본 | 변화 중인 작업물 |

## **CLI vs GUI**

| Command Line Interface | Graphical User Interface |
| :--------------------: | :----------------------: |
|  명령줄을 입력해 사용  |    그래픽 요소를 활용    |
