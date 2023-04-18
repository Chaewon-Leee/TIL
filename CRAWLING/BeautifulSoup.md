# ✨ BeautifulSoup ✨

## **beautifulsoup**

- 보통 크롤링이 url를 가져와서 해당 url의 html을 읽어오고 원하는 부분을 읽어오게 됨

```
pip3 install beautifulsoup4
import urllib.request
from bs4 import BeautifulSoup
```

## **기초 메소드**

|                메소드                | return                                                                                                                                                 |
| :----------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `urllib.request.urlopen(url).read()` | 해당 url을 오픈해서 읽어 불러온 html를 저장                                                                                                            |
| `BeautifulSoup(html, 'html.parser')` | html parse                                                                                                                                             |
|   `soup.findall(class='class명')`    | 해당 class명을 가진 class를 soup에서 찾아서 모든 조건에 맞는 걸 출력 <br> class는 이미 파이썬 예약어이기 때문에 \_를 뒤에 붙여준다! <br> 인덱싱 가능 ! |
|    `soup.find(class\_='class명')`    | 해당 class명을 가진 class를 soup에서 찾아서 가장 첫 번째것만 가져온다                                                                                  |
|          `.attrs['title']`           | title라는 attribute를 가져와라                                                                                                                         |

## **사용자 input url에 반영하기**

- 가져올 url이 처음에 지정되어 있으니까 이게 유동적으로 변하도록 하자

  - 베이스 url를 찾자!
  - 파이썬을 입력할 경우 query 뒤 파이썬이 입력되고 자바를 검색할 경우 query 뒤 자바가 입력됨 -> 해당 경우 query 까지만 잘라서 base_url로 지정해놓고 그 이후는 변수로 유동적으로 반응하도록 함!

  ```
      baseurl =
      plusurl = input('')
      url = baseurl + plusurl
  ```

- 단 input을 받게 되면 영어로 입력해야 함! -> 한글로 입력할 경우, 오류가 남

```
import urllib.parse
urllib.parse.quote_plus(plusurl) // 한글로 입력해도 자동으로 변환할 수 있게끔하는 라이브러리
```

## **특정 검색어를 입력시 이미지 모두 가져오기**

- html 검사시 보통 js를 거쳐서 나오게 된다!
  - print시의 결과와 실제로 보는 검사창은 다르게 보임!
- 그래서 print시에 어떻게 보이는지 확인 후 해당 속성을 가져오도록 해야함!

```
from urllib.request import urlopen
from urllib.parse import quote_plus
from bs4 import beatifulSoup

for i in img:
  imgurl = i['data-source'] // 해당 data-source 속성으로 접근할 수 있음!
  with urlopen(imgurl) as f: // imgurl를 열어서 f 객체로 사용하겠다.
    with open('./img/' + plusUrl + str(n) + '.jpg', 'wb') as h:
      img = f.read()
      h.write(img)
      n += 1

```

### **with as 키워드**

- 파이썬 with as 키워드
  - 파일 스트림을 다루는데 있어서 파이썬에서 제공하는 기능 중 하나
  - 파일을 with ...as 구문이 끝나면 자동으로 닫힌다

```
with [expression] as [변수명]
with open(파일 경로, 모드) as 파일 객체 :
open(path+"/"+"test_data.txt", "r", encoding='utf-8') :
```

### **with as 모드 & 옵션**

|      |                                                모드                                                |
| :--: | :------------------------------------------------------------------------------------------------: |
| "r"  |                                    읽기 모드 (파일 없으면 에러)                                    |
| "r+" |                 읽기 또는 쓰기 모드 (파일 없으면 에러, 기존 파일 내용에 덮어쓰기)                  |
| "w"  |                                쓰기 모드 (파일이 없으면 새로 만듦)                                 |
| "w+" | 읽기 또는 쓰기 모드 (r과 다르게 파일이 없으면 새로 만듦, 기존의 파일 내용 다 지워버리고 새로 작성) |
| "a"  |                                       파일 끝에 글 추가 모드                                       |
| "a+" |                                      읽기 또는 파일 추가 모드                                      |

|     |         옵션         |
| :-: | :------------------: |
| "t" |  텍스트 모드로 연다  |
| "b" | 바이너리 모드로 연다 |
