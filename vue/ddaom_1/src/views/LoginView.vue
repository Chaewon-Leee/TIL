<template>
  <div>
    <div class="totalContainer">
      <h2>DDAOM</h2>
      <div class="loginContainer">
        <p></p>
        <form class="ddaomLogin" action="백그라운드url" method="get">
          <label for="userID"><b>아이디</b></label>
          <input type="text" placeholder="Enter ID" name="userID" required />
          <label for="psw"><b>비밀번호</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit">로그인</button>
        </form>
        <button>회원가입</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
/* header */
h2 {
  text-align: center;
}
/* container */
.totalContainer {
  /* width: 100%;
  height: 100%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loginContainer {
  border-top: solid rgb(53, 99, 16);
}
/* input box */
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(172, 171, 171);
  box-sizing: border-box;
}

/* 로그인 button*/
button[type='submit'] {
  background-color: #fcc820;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/*회원가입 button*/
button {
  float: right;
  border: none;
  background-color: white;
}

/*button hover*/
button:hover {
  opacity: 0.3;
}
</style>
