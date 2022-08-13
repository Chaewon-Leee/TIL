module.exports = {
  HTML : function (title, _list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB2 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${_list}
      ${control}
      ${body}
    </body>
    </html>
  `;},
  List : function (filelist) {
    var list = '<ol>';
    var i =0;
    while(i<filelist.length) {
      list = list + '<li>';
      list = list + `<a href="/?id=${filelist[i]}">${filelist[i]}</a>`;
      list = list + '</li>';
      i=i+1
    }
    list = list + '</ol>';
    return list
  }
}
