<template>
  <div>
    <select @change="changeCity($event)" v-model="selectedCity">
      <!-- @대신 v-on도 가능! -->
      <!-- $event로 보낼 수도 있다 -->
      <option value="">==도시 선택==</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option value="" :key="dong.dongCode" v-for="dong in selectedDongList">
        {{ dong.dongTitle }}
        <!-- selectedDongList에 있는 얘들을 순회 -->
      </option>
    </select>
    <select name="" id="">
      <option
        value=""
        :key="dong.dongCode"
        v-for="dong in dongList.filter(
          (dong) => dong.cityCode === selectedCity
        )"
      >
        <!-- 함수를 사용하지 않고 태그안에 바로 필터링을 넣을 수 있음! -->
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  conponents: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주2동' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  methods: {
    changeCity(event) {
      console.log(event.target.tagName)
      this.selectedDongList = this.dongList.filter(
        // dongList에서 필터링된 얘들만 selectedDongList에 넣어줌
        (dong) => dong.cityCode === this.selectedCity
        // 선택된 dong의 cityCode가 사용자가 선택한 selectedCity와 동일한 경우만 필터링
      )
    }
  }
}
</script>
