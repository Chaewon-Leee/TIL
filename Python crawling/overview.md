키보드 자동화 pyautogui 기초

- 마우스와 비코드를 제어
- 마우스를 어디로 움직이고, 클릭 키보드 타입핑 등 매크로 (자동화 시스템)을 만들때 사용
- 마우스를 움직이기 위해선 좌표를 알아야 한다
- 밑 터미널 창에서 python을 열어놓고 하는게 훨씬 편하다!

```
pip3 install pyautogui
import pyautogui

pyautogui.position() // 마우스 커서의 좌표 알아내기
>> (141, 429) // (x, y) 좌표 알아냄

pyautogui.moveTo(x좌표, y좌표, 시간) // 시간초 동안 해당 좌표로 마우스 커서 위치 이동 (절대적 위치)
pyautogui.moveRel(x좌표, y좌표, 시간) // 현재 주어진 위치에서 상대적으로 시간초 동안 x좌표, y좌표만큼 움직임

pyautogui.click(clicks=횟수, interval=시간) // 실제 클릭하는 것 -> 클릭을 횟수만큼 클릭하는데, 시간초 텀을 둔다 -> interval을 빼면 연속 클릭

pyautogui.doubleClick // 더블 클릭

pyautogui.typewrite('텍스트') // 열리는 시간까지 기다리고 입력해야 한다! >> 기다리고 나면 텍스트를 입력해줌
pyautogui.typewrite(['enter']) // 엔터키 입력 >> 키 입력 제어

import time
time.sleep(시간) // 몇 초 쉬고 시작한다

// 이미지를 인식해서 출력하고자 한다 -> 절댓값으로 계속 하게 될 경우, 위치가 바뀔 때마다 알아야 하니까!

pip3 install opencv-python
pyautogui.locateOnScreen('이미지 위치') // 폴더에 이미지를 넣어놓고 해당 이미지 위치를 가져오는 것
>> (x좌표, y좌표, width, height)
pyautogui.center() // 네개의 값이 괄호안에 있으므로 click이나 position 안에 넣어주지 못함! -> center 안에 넣어서 좌표만 뽑아올 수 있게 함

pyautogui.locateCenterOnScreen('이미지 위치') // 이미지 위치의 아예 좌표만 나오게 함

내가 이미지를 저장하고 누르는게 아니라 화면상에 알아서 스크린샷을 해서 알아서 누르게끔 하자!
>> 이때 스크린샷 하는 거는 왼쪽 상단부터 시작해서 네모낳게 스크린샷을 남기기 때문에 중앙이 아닌 왼쪽 상단에서 시작해야함!

pyautogui.screenshot('이미지 이름', region=(x좌표, y좌표, width, height))
// 해당 이미지 이름으로 x좌표, y좌표로 가서 해당 크기 만큼의 네모 스크린샷을 남김
그 이후는
pyautogui.locateCenterOnScreen('이미지 위치') + pyautogui.click() 해서 저장된 이미지를 참고하라고 함
```

BeautifulSoup를 이용한 파이썬 크롤링

```
pip3 install beautifulsoup4
import urllib.request
from bs4 import BeautifulSoup

- 보통 크롤링이 url를 가져와서 해당 url의 html을 읽어오고 원하는 부분을 읽어오게 됨

url = //가져올 url 지정
// url를 하게 되면 전체 html을 가져오게 되니까 개발자도구(f12)에서
html = urllib.request.urlopen(url).read() // 해당 url을 오픈해서 읽겠다 불러온 html를 저장할 변수
= urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

title = soup.find_all(class_='class명') // 해당 class명을 가진 class를 soup에서 찾아서 title 변수에 넣어라
// class는 이미 파이썬 예약어이기 때문에 _를 뒤에 붙여준다!
-> 인덱싱 가능하다! title[0]
title = soup.find(class_='class명') // find_all은 모든 조건에 맞는 걸 가져오는 것 -> find는 가장 첫 번째 껏만 가져오게 됨

for i in title:
    print(i.attrs['title'])
// 해당 title 변수를 돌아서 title라는 attribute를 가져와라

url = // 가져올 url이 처음에 지정되어 있으니까 이게 유동적으로 변하도록 함
베이스 url를 찾자! -> 파이썬을 입력할 경우 query 뒤 파이썬이 입력되고 자바를 검색할 경우 query 뒤 자바가 입력됨 -> 해당 경우 query 까지만 잘라서 base_url로 지정해놓고 그 이후는 변수로 유동적으로 반응하도록 함!

baseurl =
plusurl = input('')
url = baseurl + plusurl

단 input을 받게 되면 영어로 입력해야 함! -> 한글로 입력할 경우, 오류가 남

import urllib.parse
urllib.parse.quote_plus(plusurl) // 한글로 입력해도 자동으로 변환할 수 있게끔하는 라이브러리
```

- 어떤 검색어를 입력했을 때 이미지 모두 가져오기

```
from urllib.request import urlopen
from urllib.parse import quote_plus
from bs4 import beatifulSoup

html 검사시 보통 js를 거쳐서 나오게 된다! -> 프린트 했을 때와 실제로 보는 검사창은 다르게 보임!
--> 그래서 프린트 문에 어떻게 보이는지 확인 후 해당 속성을 가져오도록 해야함!

for i in img:
    i['data-source'] // 해당 data-source 속성으로 접근할 수 있음!
    with urlopen(imgurl) as f: // imgurl를 열어서 f 객체로 사용하겠다.
        with open('./img/' + plusUrl + str(n) + '.jpg', 'wb') as h:
            img = f.read()
            h.write(img)
    n += 1
```

- 파이썬 with as 키워드
  - 파일 스트림을 다루는데 있어서 파이썬에서 제공하는 기능 중 하나
  - 파일을 with ...as 구문이 끝나면 자동으로 닫힌다

```
with [expression] as [변수명]
with open(파일 경로, 모드) as 파일 객체 :
open(path+"/"+"test_data.txt", "r", encoding='utf-8') :

# 모드
"r" : 읽기 모드 (파일 없으면 에러)
"r+" : 읽기 또는 쓰기 모드 (파일 없으면 에러, 기존 파일 내용에 덮어쓰기)
"w" : 쓰기 모드 (파일이 없으면 새로 만듦))
"w+" : 읽기 또는 쓰기 모드 (r과 다르게 파일이 없으면 새로 만듦, 기존의 파일 내용 다 지워버리고 새로 작성)
"a" : 파일 끝에 글 추가 모드
"a+" : 읽기 또는 파일 추가 모드
- 옵션
"t" : 텍스트 모드로 연다
"b" : 바이너리 모드로 연다
"wb" ...

# 메소드
파일 객체.write() : 파일 읽기
.open : 파일 열기
f.readline() : 첫 줄 읽어오기

```

- selenium을 사용한 구글 크롤링
  - selenium : 드라이버 브라우저 제어
  - Beatifulsoup 라이브러리는 '자바스크립트로 생성된 동적인 오브젝트'를 가져올 수 없음

```
pip3 install selenium
pip3 install beautifulsoup4
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver

// chromedriver을 다운받아서 동일한 폴더에 저장해줌
webdriver.Chrome()
driver.get(url)
html = driver.page_source // 열린 페이지 소스를 받는다
BeautifulSoup(html)

r=soup.select('선택자') // find&find_all이랑 동일하게 선택자 사용해서 받아오는거
r=soup.select_one('선택자').text // select는 text로 가져올 수 없기 떄문에 select_one 사용

.a.attrs['href'] // i안 a 태그에서의 href 속성을 들고 옴

-> 왜 beatidulsoup을 사용하지 않는가?
    - 실제 검사창에서 본 클래스 네임과 실제로 가져와서 확인했을 때 이름이 다름!!
    --> 하나하나 확인해서 클래스를 확인하게 될 경우, 만들 수는 있음!
    (하려면 hdr = {'User-Agent' : 'Mozilla/5.0'}해서 Request함수 속성 headers에 넣어줘야 함)
    -- 근데 이런걸 하나하나 확인하기 좀 그러니까. 실제 웹 브라우저를 사용하는 selenium을 사용하는 것!

```

- 크롤링 결과 csv 파일로 저장하기

```
import csv
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver

html = urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser') // 읽어오겠다

total = soup.select('.api_txt_lines.total_tit') // 해당 클래스를 가져오겠다.

for i in total:
    print(i.txt) // 텍스트만 가져오겠다
    print(i.attrs['href']) // href 속성만 가져오겠다

f = open(f'{search}.csv', 'w', encoding='utf-8', newline='')
// search라는 이름으로 파일 오픈, w -> 파일이 없으면 새로 만들도록, newline -> 줄 생김 방지 => 해당 파일명을 가진 csv 파일 생성

csvWriter = csv.wirter(f) // 해당 파일안에 내용을 쓰겠다.
csvWriter.writerow() // 해당 파일 객체에 내용 추가하기
```
