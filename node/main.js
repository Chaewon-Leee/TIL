var http = require('http');
var fs = require('fs');
var url = require('url')

function templateHTML(title, _list, body) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${_list}
    ${body}
  </body>
  </html>
`
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
      if(queryData.id === undefined) {
        fs.readdir('./data', function(error, filelist) {
          var title = 'Welcome'
           var content = 'Hello!!!'
          var list = '<ol>';
          var i =0;
          while(i<filelist.length) {
            list = list + '<li>';
            list = list + `<a href="/?id=${filelist[i]}">${filelist[i]}</a>`;
            list = list + '</li>';
            i=i+1
          }
          list = list + '</ol>';
        var template = templateHTML(title, list, `<h2>${title}</h2>${content}`);
        response.writeHead(200);
        response.end(template);
        });
      } else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, content){
          var title = queryData.id
          fs.readdir('./data', function(error, filelist) {
            var list = '<ol>';
            var i =0;
            while(i<filelist.length) {
              list = list + '<li>';
              list = list + `<a href="/?id=${filelist[i]}">${filelist[i]}</a>`;
              list = list + '</li>';
              i=i+1
            }
            list = list + '</ol>';
            var template = templateHTML(title, list, `<h2>${title}</h2>${content}`);
        response.writeHead(200);
        response.end(template);
      })
        })
    }
}else {
  response.writeHead(404);
  response.end('Not Found');
}
});
app.listen(3000);