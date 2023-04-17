var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {
  console.log(filelist); // 현재 testFolder에 존재하는 파일명 출력
});