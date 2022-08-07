<template>
  <div>
    <div>
      <select name="" id="" v-model="defau">
        <option value="031">경기도</option>
        <option :value="city.code" :key="city.code" v-for="city in cities">
          <!-- cities 배열을 순회하면서 city로 가져오겠다 -->
          <!-- city의 code를 key 속성에 바인딩하겠다 -->
          {{ city.title }}
          <!-- 화면상에 보여 사용자가 선택할 수 있는 옵션 -->
        </option>
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="drink.drinkId" v-for="drink in drinkList">
            <!-- <tr :key="index v-for="(drink,index) in drinkList">drinkList[i]<tr> -->
            <!-- 사용할 유일한 key가 없는 경우 -->
            <!-- 반복문을 돌린 요소를 컴퓨터가 구분하기 위해 쓴다 -> 반복문을 돌면서 변하는 요소르 key에 작성 -->
            <td>{{ drink.drinkId }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.price }}</td>
            <td><input type="number" name="" id="" v-model="drink.qty" /></td>
            <!-- 수량은 입력할 수 있도록 qty로 가져옴 -->
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      defau: '031',
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '커피',
          price: 500,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '물',
          price: 700,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: '보리차',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '6',
          drinkName: '포카리',
          price: 1000,
          qty: 1
        },
        {
          drinkId: '7',
          drinkName: '뽀로로',
          price: 1300,
          qty: 1
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
