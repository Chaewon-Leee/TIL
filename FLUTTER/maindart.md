```dart
// 플러터 material 라이브러리를 가져와야 플러터의 sdk에 포함된 위젯 등을 사용할 수 있기 때문
import 'package:flutter/material.dart';

// 메인 함수 선언
void main() => runApp(MyApp()); // 위젯(MyApp)을 argument로 받는 최상위 runApp함수를 실행
// MyApp : 사용자의 커스텀 위젯, 스크린 레이아웃을 만드는 위젯
  // 해당 위젯은 틀만 만들어주기 떄문에 정적인, stateless 위젯을 만들 것!
  // 이처럼 항상 위젯을 만들 떄는 stateless 위젯으로 할지, statefull로 할지 결정해야 함!
    // 만약 동적인 요소를 하나라도 포함한다면, statefull로 만들어줘야 한다

// void main() {
//   runApp(const MyApp());
// } -> 동일!

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp( // import한 material 라이브러리를 사용하기 위해 materialApp 생성, 취상위 다음 위젯
      title: 'First App', // 앱을 통칭하는 이름 지정, 앱 이름
      theme: ThemeData( // 앱의 기본적인 디자인 테마를 지정하는 곳
      primarySwatch: Colors.blue// 앱에서 기본적으로 사용하는 색상 지정 -> blue 계열을 사용하겠다
      ),
    home: MyHomePage(), // 앱이 정상적으로 실행되었을 때 가장먼저 보여지는 경로
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appBar(
        title: Text('First App'), // 텍스트와 관련된 디자인적 argument를 가지는 위젯
      ),
    );
  }
}
```

```dart
class MyCard extends StatelessWidget {

@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('BBANTO'),
centerTitle: true, // title를 중앙정렬하는 것
backgroundColor: Colors.purpleAccent, // 색상
elevation: 0.0, // AppBar가 떠있는 효과를 제거
),
body: Center( // 화면의 중앙정렬
child: Column(
// Column은 가로축에 대한 제약이 생겨버림! -> Column + Center 이어도 가로축에 대한 제약이 존재하므로 가로로만 중앙정렬이 이루어지는 것!
mainAxisAlignment: MainAxisAlignment.center, // 화면의 (세로축) 상단, 중단, 하단 정렬할 때 쓰인다
children: <Widget>[
Text('Hello'),
Text('Hello'),
Text('Hello')
],
),
),

    )

}
}
```

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, // 우측 상단 빨간 띠 삭제
      title: 'Charactor card',
      home: MyCard(),
    )
  }
}

class MyCard extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber[800], // 배경색상
      appBar: AppBar(
        title: Text('BBANTO'),
        backgroundColor: Colors.amber[700],
        centerTitle: true,
        elevation: 0.0,
      ),
      body: Padding(
        padding: EdgeInsets.fromLTRB(30.0, 40.0, 0.0, 0.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start, // 시작점 정렬
          children: [
            Center(
              child: CircleAvatar( // 원모양으로 넣음
                backgroundImage: AssetImage('assets/test1.png'),
                radius: 60.0,
              ),
            ),
            Divider(
              height: 60.0, // Divider 자체의 높이가 아닌 윗 간격과 아래의 간격을 더한게 60이라는 뜻
              color: Colors.grey[800],
              thickness: 0.5, // 선의 두께
              endIndent: 30.0, // 끝에서부터 얼마나 떨어져야 하는지
            ), // 구분을 위한 선
            Text('NAME',
            style: TextStyle(
              color: Colors.white,
              letterSpacing: 2.0, // 철자간의 간격주기
            ),
            ), // text에 스타일 주기
            SizedBox(
              height: 10.0,
            ), // 글자 사이 간격을 주기 위한 빈 공간
            Text('BBANTO',
            style: TextStyle(
              color: Colors.white,
              letterSpacing: 2.0,
              fontSize: 28.0,
              fontWeight: FontWeight.bold// 글자 굵기
            ),
            ),
            SizedBox(
              height: 30.0,
            ),
            Text('BBANTO POWER LEVEL',
            style: TextStyle(
              color: Colors.white,
              letterSpacing: 2.0,
            ),
            ),
            SizedBox(
              height: 10.0,
            ),
            Text('14',
            style: TextStyle(
              color: Colors.white,
              letterSpacing: 2.0,
              fontSize: 28.0,
              fontWeight: FontWeight.bold
            ),
            ),
            SizedBox(
              height: 30.0,
            ),
            Row(children: <Widget>[
              Icon(Icons.check_circle_outline),
              SizedBox(width: 10.0,),
              Text('using lightsaber',
              style: TextStyle(
                fontSize: 16.0,
                letterSpacing: 1.0
              ),
              )
            ],
            ),
            Row(children: <Widget>[
              Icon(Icons.check_circle_outline),
              SizedBox(width: 10.0,),
              Text('face hero tattoo',
              style: TextStyle(
                fontSize: 16.0,
                letterSpacing: 1.0
              ),
              )
            ],
            ),
            Row(children: <Widget>[
              Icon(Icons.check_circle_outline),
              SizedBox(width: 10.0,),
              Text('fire flames',
              style: TextStyle(
                fontSize: 16.0,
                letterSpacing: 1.0
              ),
              )
            ],
            ),
            Center(
              child: CircleAvatar(
                backgroundImage: AssetImage('assets/test2.png'),
                radius: 40.0,
                backgroundColor: Colors.amber[800],
              ),
            )
          ],
        ),
      ),
    );
  }
}
```

## 게임 캐릭터 화면

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, // 우측 상단 빨간 띠 삭제
      title: 'Charactor card',
      home: MyCard(),
    )
  }
}

class MyCard extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber[800], // 배경색상
      appBar: AppBar(
        title: Text('BBANTO'),
        backgroundColor: Colors.amber[700],
        centerTitle: true,
        elevation: 0.0,
      ),
      body: Padding(
        padding: EdgeInsets.fromLTRB(30.0, 40.0, 0.0, 0.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start, // 시작점 정렬
          children: [
            Center(
              child: CircleAvatar( // 원모양으로 넣음
                backgroundImage: AssetImage('assets/test1.png'),
                radius: 60.0,
              ),
            ),
            Divider(
              height: 60.0, // Divider 자체의 높이가 아닌 윗 간격과 아래의 간격을 더한게 60이라는 뜻
              color: Colors.grey[800],
              thickness: 0.5, // 선의 두께
              endIndent: 30.0, // 끝에서부터 얼마나 떨어져야 하는지
            ), // 구분을 위한 선
            Text('NAME',
            style: TextStyle(
              color: Colors.white,
              letterSpacing: 2.0, // 철자간의 간격주기
            ),
            ), // text에 스타일 주기
            SizedBox(
              height: 10.0,
            ), // 글자 사이 간격을 주기 위한 빈 공간
            Text('BBANTO',
            style: TextStyle(
              color: Colors.white,
              letterSpacing: 2.0,
              fontSize: 28.0,
              fontWeight: FontWeight.bold// 글자 굵기
            ),
            ),
            SizedBox(
              height: 30.0,
            ),
            Text('BBANTO POWER LEVEL',
            style: TextStyle(
              color: Colors.white,
              letterSpacing: 2.0,
            ),
            ),
            SizedBox(
              height: 10.0,
            ),
            Text('14',
            style: TextStyle(
              color: Colors.white,
              letterSpacing: 2.0,
              fontSize: 28.0,
              fontWeight: FontWeight.bold
            ),
            ),
            SizedBox(
              height: 30.0,
            ),
            Row(children: <Widget>[
              Icon(Icons.check_circle_outline),
              SizedBox(width: 10.0,),
              Text('using lightsaber',
              style: TextStyle(
                fontSize: 16.0,
                letterSpacing: 1.0
              ),
              )
            ],
            ),
            Row(children: <Widget>[
              Icon(Icons.check_circle_outline),
              SizedBox(width: 10.0,),
              Text('face hero tattoo',
              style: TextStyle(
                fontSize: 16.0,
                letterSpacing: 1.0
              ),
              )
            ],
            ),
            Row(children: <Widget>[
              Icon(Icons.check_circle_outline),
              SizedBox(width: 10.0,),
              Text('fire flames',
              style: TextStyle(
                fontSize: 16.0,
                letterSpacing: 1.0
              ),
              )
            ],
            ),
            Center(
              child: CircleAvatar(
                backgroundImage: AssetImage('assets/test2.png'),
                radius: 40.0,
                backgroundColor: Colors.amber[800],
              ),
            )
          ],
        ),
      ),
    );
  }
}
```

## Drawer 메뉴 만들기

- 이미지 사용하기 위해서는 pubsoec.yaml 에 추가하는 과정을 거쳐야 함!!

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Appbar',
      theme: ThemeData(primarySwatch: Colors.red),
      home: MyPage(),
    );
  }
}

class MyPage extends StatelessWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('AppBar menu icon'),
        centerTitle: true,
        elevation: 0.0,
        leading: IconButton(
          // 간단한 위젯이나 아아콘 등을 앱바 왼쪽에 위치시키는 역할
          icon: Icon(Icons.menu),
          onPressed: () {
            // 함수의 형태로 일반 버튼이나 아이콘 버튼을 터치했을 때 일어나는 이벤트를 정의하는 곳
            print('menu button is clicked');
          },
        ),
        actions: <Widget>[
          // 복수의 아이콘 버튼 등을 앱바의 오른쪽에 위치할 때
          IconButton(
            icon: Icon(Icons.shopping_cart),
            onPressed: () {
              print('shopping cart button is clicked');
            },
          ),
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              print('search button is clicked');
            },
          ),
        ],
      ),
    );
  }
}
      drawer: Drawer(
        // 옆 사이드바
        child: ListView(
          // 여러줄로 정보를 보여주는 목록
          padding: EdgeInsets.zero,
          children: <Widget>[
            // listview의 children을 담는 위젯
            UserAccountsDrawerHeader(
              currentAccountPicture: CircleAvatar(
                backgroundImage: AssetImage('assets/test1.png'),
                backgroundColor: Colors.white,
              ),
              otherAccountsPictures: [
                CircleAvatar(
                  backgroundImage: AssetImage('assets/test2.png'),
                  backgroundColor: Colors.white,
                ) // 우측 상단에 다른 이미지 추가
              ], // 다른 계정의 이미지 추가
              accountName: Text('chae'),
              accountEmail: Text('cw001121@naver.com'),
              onDetailsPressed: () {
                print('꺄아');
              }, // 클릭을 하면 밑으로 펼쳐지는 것
              decoration: BoxDecoration(
                  color: Colors.red[200], // 배경색상
                  borderRadius: BorderRadius.only(
                    // 곡선 효과
                    bottomLeft: Radius.circular(40.0),
                    bottomRight: Radius.circular(40.0),
                  )),
            ),
            ListTile(
              leading: Icon(Icons.home, color: Colors.grey[800]),
              title: Text('home'),
              onTap: () {
                print(
                    'HOme is clicked'); // onpressed랑 동일한 역할이지만, onpressed는 버튼에 많이 쓰임!
              },
              trailing: Icon(Icons.add), // 오른쪽 끝에 '+' 추가되도록
            ),
            ListTile(
              leading: Icon(Icons.settings, color: Colors.grey[800]),
              title: Text('setting'),
              onTap: () {
                print(
                    'setting is clicked'); // onpressed랑 동일한 역할이지만, onpressed는 버튼에 많이 쓰임!
              },
              trailing: Icon(Icons.add), // 오른쪽 끝에 '+' 추가되도록
            ),
            ListTile(
              leading: Icon(Icons.question_answer, color: Colors.grey[800]),
              title: Text('Q&A'),
              onTap: () {
                print(
                    'Q&A is clicked'); // onpressed랑 동일한 역할이지만, onpressed는 버튼에 많이 쓰임!
              },
              trailing: Icon(Icons.add), // 오른쪽 끝에 '+' 추가되도록
            )
          ],
        ),
      ),
    );
  }
}

```

## builder를 사용한 snackbar

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Appbar',
      theme: ThemeData(primarySwatch: Colors.red),
      home: MyPage(),
    );
  }
}

class MyPage extends StatelessWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Snack Bar'),
          centerTitle: true,
        ),
        body: Builder(
          builder: (BuildContext ctx) {
            // builder가 존재하지 않을 경우, build로 가서 그보다 위에를 거슬러 올라가 찾기 떄문에
            // scaffold를 못찾게 됨. 그래서 Center와 FlatButton을 가지는 builder를 따로 만들어줘서 이 위부터 탐색하도록 함
            return Center(
              child: FlatButton(
                child: Text(
                  'Show me',
                  style: TextStyle(color: Colors.white),
                ),
                color: Colors.red,
                onPressed: () {
                  Scaffold.of(ctx).showSnackBar(SnackBar(
                    content: Text('Hellow'),
                    // SnackBar에 표시될 내용
                  )); // 가장 가까운 위치를 지니는 scaffold를 찾아서 해당 위에서 실행된다
                },
              ),
            );
          },
        ));
  }
}

```

## builder없는 snackbar

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Snack Bar'),
        centerTitle: true,
      )
      body: MySnackBar(),
    );
  }
}

class MySnackBar extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Center(
      child: RaisedButton(
        child: Text('Show me'),
        onPressed: (){
          Scaffold.of(context).showSnackBar(SnackBar(content: Text('Hellow',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white // 텍스트 색상 지정
          ),
          ),
          backgroundColor: Colors.teal, // 스넥바 색상
          duration: Duration(milliseconds: 1000), // 시간 지정
          ),
          );
          // MySnackBar에 있는 context를 전달받아서 위로 올라가기 때문에 문제 없이 출력가능!
      }),
    )
  }
}
```

## 토스트 메시지

- 토스트 메시지를 사용하기 위해 라이브러리 import를 해야하는데, 해당 라이브러리는 기본 패키지가 아니기 떄문에 pubsoec.yaml에 추가 필요!
  - dependencies: / flutter: / sdk: flutter / cupertino_icons: ^1.0.2 밑
    - fluttertoast: ^3.1.3 추가
    - 저장하고 exit code 0가 뜨면 잘된 것!

```dart
import 'package:fluttertoast/fluttertoast.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Snack Bar'),
        centerTitle: true,
      )
      body: Center(
        child: FlatButton(
          onPressed: (){
            fluttertoast();
          },
          // 토스트메시지는 위젯트리와 상관이 없으므로 토스트 메시지를 실행할 함수를 만들어서 onPressed로 불러오면 된다
          child: Text('toast'),
          color: Colors.black,
        ),
      ),
    );
  }
}

void fluttertoast() {
  Fluttertoast.showToast(msg: 'flutter',
  gravity: ToastGravity.BOTTOM,
  backgroundColor: Colors.redAccent,
  fontSize: 20.0,
  textColor: Colors.white,
  toastLength: Toast.LENGTH_SHORT
  );
}
```

## 컨테이너

```dart
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Snack Bar'),
        centerTitle: true,
      )
      body: SafeArea( // 화면 바깥으로 나가는 걸 방지해줄 수 있음
        child: Container(
          color: Colors.red,
          width: 100,
          height: 100,
          margin: EdgeInsets.symmetric(
            vertical: 50, // 상하로 50씩 크기
            horizontal: 10, // 좌우로 10씩 크기
          ),
          padding: EdgeInsets.all(40), // all이랑 symmetric이랑 무슨 차이인지는 ...
          child: Text('hellow'),
      ),)
    );
  }
}
```

##

```dart

```
