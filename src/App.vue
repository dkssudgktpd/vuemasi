<template>
  <div class="wrap">
  <GoTop/>
  <ModalView/>
  <MobileMenu/>
  <FixMenu/>
  <HeaderView/>
  <VisualView/>
  <ItemsView/>
  <BeverageView/>
  <FranchView/>
  <FooterView/>
  </div> 
</template>

<script>


import GoTop from '@/components/GoTop.vue';
import ModalView from '@/components/ModalView.vue';
import MobileMenu from '@/components/MobileMenu.vue';
import FixMenu from '@/components/FixMenu.vue';
import HeaderView from '@/components/HeaderView.vue';
import VisualView from '@/components/VisualView.vue';
import ItemsView from '@/components/ItemsView.vue';
import BeverageView from '@/components/BeverageView.vue';
import FranchView from '@/components/FranchView.vue';
import FooterView from '@/components/FooterView.vue';


// 공통으로 관리되는 state를 참조한다.
// 여기서는 actions를 호출하는 용도로 사용.
// vuex를 참조하는 객체를 접근하려고 하면 아래 구문으로 접근
import {useStore} from 'vuex'
export default {
  name : 'App',
  components : {GoTop,ModalView,MobileMenu,FixMenu,HeaderView,VisualView,ItemsView,BeverageView,FranchView,FooterView},
  setup(){
    // 외부에 있는 menu.json 파일을 불러오기위해 actions를 활용
    const store = useStore();
    // actions의 method(function 기능)을 사용할때,
    // store.dispatch('메소드명')
    console.log('step 1 : dispatch')
    store.dispatch('fetchMenudata')
    return{

    }
  },
  
}
</script>

<style>
@charset'utf-8';

/* @import url('nanumsquare/nanumsquare.css'); */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline-style: none; */
  /* outline-style none = tap키 눌렀을때 아무것도 일어나지않음 */
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

img {
  vertical-align: top;
  border: 0;
}

html {
  font-size: 16px;
  overflow-x: hidden;

}

body {
  font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 1.6;
  color: #888;
  overflow-x: hidden;
}

/* 공통(재사용) */
.inner {
  position: relative;
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* float 해제 */
.clearfix::after {
  content: '';
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}
</style>