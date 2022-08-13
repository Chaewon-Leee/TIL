var fs = require('fs');

// readFileSync

// console.log('A')
// var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
// console.log(result)
// console.log('C')

// readFile

console.log('A')
fs.readFile('syntax/sample.txt', 'utf-8', function(error, result) {
  // 세번쨰로 준 함수를 실행시키면서 error 인자와 result 인자를
  console.log(result)
});
console.log('C')