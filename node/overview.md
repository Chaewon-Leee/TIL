HTML을 직접 수정하는 것과 소유자만 수정할 수 있다는 점이 불편했다
-> 자바스크립트를 사용하면서 서버쪽 어플리케이션을 만들도록
-> node.js가 내장하고 있는 서버의 기능을 살려서 한다

## node 작동 방법

- node 입력 후, enter
- 중단시
  ```ctrl + cc
    .exit
  ```
- 해당 폴더로 이동 >>
  ```
  node 폴더명
  ```

## url

protocol://domain:port/path?queryString
domain : 인터넷에 접속되어있는 각 컴퓨터 주소
port : 한 대의 컴퓨터 안 여러대의 서버가 있을수 있다
path : 디렉토리를 전달 (파일 위치)
queryString : 사용자가 전달받기를 원하는 데이터

## 동기와 비동기

동기 : 오래 걸리더라도 하나하나 차근차근 해내가는 것
비동기 : 병렬구조로 여러개를 동시에 할 수 있는 것

## PM2

```
pm2 start app.js --watch (실행시킬 js 파일) // 파일 실행
pm2 monit // 현재 실행시킨 파일들의 상황 확인
pm2 list // 현재 실행시킨 파일들의 목록 확인
pm2 stop main // 실행시켜놓은 파일 멈춤
pm2 log // 에러같은 문제가 발생하면 보여주는 것
```

## request & resoponse

request : 사용자가 요청할 때의 정보
resoponse : 응답할 때 전송할 정보

## 내용 수정 부분에서 오류... 46번,,
