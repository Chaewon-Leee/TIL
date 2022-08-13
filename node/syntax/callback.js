// function a() {
//   console.log('A');
// }
// a();

var a = function() { //익명함수
  console.log('A');
}
// a(); // 일반 함수와 사용하는 방식은 동일
// 자바스크립트에서는 함수가 값이라서 변수에 넣어도 됨

function slowfunc(callback) {
  callback();
}

slowfunc(a);