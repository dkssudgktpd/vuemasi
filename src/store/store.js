import {createStore} from 'vuex'
// 모든 vue 화면에서 공유되어질 state(데이터)관리 *목적*
import axios from 'axios'
export default createStore({
  // 데이터를 모아서 관리하는 객체
  state : {
    menuData : []
  },
  // 서버연동 파일연동 성공 실패여부체크 후 mutation 실행
  actions : {
    // 메뉴 데이터 json 로딩
    fetchMenudata({commit}){

      axios.get('/data/menu.json')
      .then(response => {
        // 서버 또는 파일이 결과가 있을때
        console.log('step 2 : axios', response.data)
        commit('MENU_DATA_INIT', response.data);
        // context.commit()
      })
      .catch(err => console.log(err));
    }
  },
  // state 업데이트 자리
  mutations : {
    MENU_DATA_INIT(state, payload){
      state.menuData = payload
      console.log('step 3 : mutation', payload)
    }
  },
  // state를  컴포넌트에 전달, 출력 자리
  getters : {
    getMenuData(state){
      console.log('step 4 : getters')
      return state.menuData;
    }
  }
})