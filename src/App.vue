<template>
  <div class="wrap">
  <GoTop/>
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
import MobileMenu from '@/components/MobileMenu.vue';
import FixMenu from '@/components/FixMenu.vue';
import HeaderView from '@/components/HeaderView.vue';
import VisualView from '@/components/VisualView.vue';
import ItemsView from '@/components/ItemsView.vue';
import BeverageView from '@/components/BeverageView.vue';
import FranchView from '@/components/FranchView.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  components : {GoTop,MobileMenu,FixMenu,HeaderView,VisualView,ItemsView,BeverageView,FranchView,FooterView},
  setup(){
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