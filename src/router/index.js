import {createRouter, createWebHistory} from 'vue-router'
// router는 링크기능
// 모든 vue에서 사용하기위해 export함
// router라는 객체에다 기능을 담는다.
const router = createRouter({
  // 웹브라웢 주소창을 깨끗하게(# 없게)
  history: createWebHistory(),
  // {path: '/home', name: 'Home', component: HomeView}
  // {path: '/good', name: 'Good', component: GoodView}
  routes : []

});
// 외부로 내보내서 사용하도록 함
export default router