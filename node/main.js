var http = require('http');
var fs = require('fs');
var url = require('url')
var qs = require('querystring')
// Refactoring : 내부기능은 유지하면서 코드를 효율적으로 바꾸는 행위
var template = require('./lib/template.js')
// 입력정보에 대한 보안
var path = require('path');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if(queryData.id === undefined) {
      fs.readdir('./data', function(error, filelist) {
        var title = 'Welcome'
        var content = 'Hello!!!'
        var list = template.List(filelist);
        var html = template.HTML(title, list, `<h2>${title}</h2>${content}`, `<a href="/create">create</a>`);
        response.writeHead(200);
        response.end(html);
      });
    } else {
      var filterdId = path.parse(queryData.id).base;
      fs.readFile(`data/${filterdId}`, 'utf8', function(err, content){
        var title = queryData.id
        fs.readdir('./data', function(error, filelist) {
          var list = template.List(filelist);
          var html = template.HTML(title, list, `<h2>${title}</h2>${content}`,
          `<a href="/create">create</a>
          <a href="/update?id=${title}">update</a>
          <form action="delete_process" method="post">
            <input type="hidden" name="id" value=${title}>
            <input type="submit" value="delete">
          </form>
          `);
          response.writeHead(200);
          response.end(html);
        })
      })
    }
} else if(pathname === '/create') {
  fs.readdir('./data', function(error, filelist) {
    var title = 'web-create'
    var list = template.List(filelist);
    var html = template.HTML(title, list, `
    <form action="http://localhost:3000/create_process" method="post">
    <p><input type="text" name="title" placeholder = "title"></p>
    <p>
      <textarea name="desc" placeholder = "description"></textarea>
    </p>
    <p>
      <input type="submit">
    </p>
  </form>
    `, '');
    response.writeHead(200);
    response.end(html);
  });
} else if(pathname === '/create_process') {
  var body = '';
  request.on('data', function(data) {
    body = body + data; // 조각으로 묶어서 가져옴
  }); // post로 전송되는 데이터가 많은 경우를 대비하여 서버에서 수신할 때마다 해당 함수를 콜백함
  request.on('end', function(data) { // 더이상 들어올 정보가 없을 경우, end 함수 콜백
    // end에 해당되는 콜백이 실행될 경우, 수신이 끝났다고 생각할 수 있음
    var post = qs.parse(body); // 사용자가 작성한 값이 객체로 post안에 담아짐!
    // {title: ...., desc: .... }으로 들어옴
    var title = post.title;
    var desc = post.desc;
    fs.writeFile(`data/${title}`, desc, 'utf-8', function(err){
      // 콜백이 실행될 경우, 파일 저장이 끝났다는 의미!
      response.writeHead(302, {Location: `/?id=${title}`}); // 200은 성공, 302은 redirection 뜻!
      // 해당 타이틀이 있는 곳으로 이동시킨다!
      response.end(); // 정상적으로 된 것이므로, success를 넣어준다!
      // 사용자가 새로 생긴 파일로 이동 시키고 싶다 -> redirectiion!
    })
  });
}
else if(pathname === '/update'){
  var filterdId = path.parse(queryData.id).base;
      fs.readFile(`data/${filterdId}`, 'utf8', function(err, content){
        var title = queryData.id
        fs.readdir('./data', function(error, filelist) {
          var list = template.List(filelist);
          var html = template.HTML(title, list,
            // 타이틀의 경우, 사용자가 변경하면 안됨!
            // hidden이라는 type을 이용해서 id라는 name&value쌍으로 받아오게 함
            // 즉, 기존 타이틀명은 id로 받되, 수정해야할 값은 title로 받아 id를 title로 수정하면 됨!
            `
            <form action="http://localhost:3000/create_process" method="post">
            <input type="hidden" name="id" value=${title}>
            <p><input type="text" name="title" placeholder = "title" value=${title}></p>
            <p>
              <textarea name="desc" placeholder = "description">${content}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `, `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
          response.writeHead(200);
          response.end(html);
        })
      })
}
else if(pathname === '/update_process') {
  var body = '';
  request.on('data', function(data) {
    body = body + data;
  });
  request.on('end', function(data) {
    var post = qs.parse(body);
    var title = post.title;
    var desc = post.desc;
    var id = post.id;

    fs.rename(`data/${id}`, `data/${title}`, function(error){
      fs.writeFile(`data/${title}`, desc, 'utf-8', function(err){
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
      })
    });

  });
}
else if(pathname === '/delete_process') {
  var body = '';
  request.on('data', function(data) {
    body = body + data;
  });
  request.on('end', function(data) {
    var post = qs.parse(body);
    var id = post.id;
    var filterdId = path.parse(id).base;
    fs.unlink(`data/${filterdId}`, function(error) {
      response.writeHead(302, {Location: `/`});
      response.end();
    })
  });
}
else {
  response.writeHead(404);
  response.end('Not Found');
}
});
app.listen(3000);