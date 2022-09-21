// var M = {
//   v:'v',
//   f:function{
//     console.log(this.v)
//   }
// }

var part = require('./mpart.js');
console.log(part); // 모듈에 대입한 결과를 받아온다

part.f(); // 함수 실행되는 것 볼 수 있으
// M.f();