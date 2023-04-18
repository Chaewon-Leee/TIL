# ✨ SELENIUM ✨

## **selenium**

- selenium을 사용한 구글 크롤링

```
pip3 install selenium
pip3 install beautifulsoup4
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver
```

### **selenium vs Beatifulsoup**

|        selenium        |                      Beatifulsoup                      |
| :--------------------: | :----------------------------------------------------: |
| 드라이버 브라우저 제어 | 자바스크립트로 생성된 동적인 오브젝트를 가져올 수 없음 |

- 왜 beatidulsoup을 사용하지 않는가?
  - 실제 검사창에서 본 클래스 네임과 실제로 가져와서 확인했을 때 이름이 다름!!
  - 하나하나 확인해서 클래스를 확인하게 될 경우, 만들 수는 있음! -> 하려면 hdr = {'User-Agent' : 'Mozilla/5.0'}해서 Request함수 속성 headers에 넣어줘야 함
- 근데 이런걸 하나하나 확인하기 좀 힘드므로, 실제 웹 브라우저를 사용하는 selenium을 사용하는 것!

### **selenium 메소드**

|            메소드            |                                      return                                       |
| :--------------------------: | :-------------------------------------------------------------------------------: |
|     `driver.page_source`     | 열린 페이지 소스를 받는다 <br> 받은 페이지 소스를 BeautifulSoup()에 넣어주고 선언 |
|     `.select('선택자')`      |               find&find_all이랑 동일하게 선택자 사용해서 받아오는거               |
| `.select_one('선택자').text` |               select는 text로 가져올 수 없기 떄문에 select_one 사용               |
|      `.a.attrs['href']`      |                       i안 a 태그에서의 href 속성을 들고 옴                        |

- Chrome의 경우, chromedriver을 다운 필요 !

## **크롤링 결과 csv 파일로 저장하기**

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
