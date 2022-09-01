import {createStore} from 'vuex'
// 모든 vue 화면에서 공유되어질 state(데이터)관리 *목적*
export default createStore({
  // 데이터를 모아서 관리하는 객체
  state : {},
  // 서버연동 파일연동 성공 실패여부체크 후 mutation 실행
  actions : {},
  // state 업데이트 자리
  mutations : {},
  // state를  컴포넌트에 전달, 출력 자리
  getters : {}
})