var http = require('http');
var fs = require('fs');
var url = require('url') // url을 요구한다
// 해당 모듈들을 사용하기 위해 요청

var app = http.createServer(function(request,response){

    var _url = request.url;
    // console.log(_url) // 쿼리스트링을 담고 있다
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    // 존재하지 않는 파일 경로로 접근했을 경우, pathname 뒤에 해당 경로가 붙어서 들어옴!
    // console.log(url.parse(_url, true));

      // parse : request로 요청된 url을 객체로 반환 -> 그 중 query 출력
    // console.log(queryData);
      // 실제 url : http://localhost:3000/?id=HTML 에서 { id: 'HTML' }가 출력되는걸 볼 수 있음

    // if(_url == '/'){
    //   //_url = '/index.html'; // 해당 url로 가도록 했었지만,
    //   title = 'Welcome'
    // }
    // if(_url == '/favicon.ico'){
    //   response.writeHead(404);
    //   response.end();
    //   return;
    // }

    // console.log(__dirname + _url);
      // __dirname : main.js 가 위치하고 있는 디렉토리
      // url : 사용자가 요청한 url
    // response.end(fs.readFileSync(__dirname + _url));
      // 사용자의 요청에 따라 해당하는 파일을 보여주는 역할
    // response.end(queryData.id);
      // 사용자가 입력한 값을 보여주겠다 -> 쿼리스트링에 입력한 value값 (id=value) 나오는 것 확인!

    if (pathname === '/') { // 존재하는 파일일 경우
      if(title === undefined) { // HOME인 경우
        var title = 'Welcome'
        var content = 'Hello!!!'
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=Javascript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${content}</p>
          </body>
          </html>
        `;
        response.writeHead(200); // 제대로 실행됐을 경우, 사용자에게 200 반환
        response.end(template);
      }
      else {
        fs.readFile(`data/${title}`, 'utf8', function(err, content){
          var title = queryData.id
          var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=Javascript">JavaScript</a></li>
              </ol>
              <h2>${title}</h2>
              <p>${content}</p>
            </body>
            </html>
        `;
        response.writeHead(200); // 제대로 실행됐을 경우, 사용자에게 200 반환
        response.end(template);
      })
      }
    }
    else {
      response.writeHead(404); // 제대로 실행되지 않을 경우, 404
    response.end('Not Found');
    }
     // 바뀌었으면 하는 부분만 ${} 으로 넣어준다!
    // 각 링크를 클릭했을 때, 해당 페이지로 전환될 수 있도록 ?id=를 넣어 연결해준다
});
app.listen(3000);
// node main.js 실행 후, localhost:3000으로 실행했을 경우, 잘 동작!
// ctrl + C 를 누르면 꺼짐!