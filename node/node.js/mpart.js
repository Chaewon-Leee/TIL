var M = {
  v:'v',
  f:function() {
    console.log(this.v);
  }
}

module.exports = M;
// M 객체를 바깥쪽에서도 사용할 수 있도록 하겠다