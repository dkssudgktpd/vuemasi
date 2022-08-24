<template>
      <!-- visual -->
    <section class="visual">
      <Swiper 
      :modules="modules"
      :autoplay ="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :loop="true"
      :navigation="{
        prevEl : '.sw-visual-prev',
        nextEl : '.sw-visual-next'
      }"
      class="sw-visual">
        <!-- 슬라이드 내용 -->
        <SwiperSlide>
          <a href="#" class="sw-visual-1"></a>
          </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="sw-visual-2"></a>
          </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="sw-visual-3"></a>
          </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="sw-visual-4"></a>
          </SwiperSlide>
        <!-- 슬라이드 좌우버튼 -->
        <button class="sw-visual-prev"></button>
        <button class="sw-visual-next"></button>
      </Swiper>

    </section>
</template>

<script>
import {Autoplay, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
export default {
  components:{
    Swiper,SwiperSlide
  },
  setup(){
    return{
      modules:[Autoplay,Navigation]
      
    }
  }
}
</script>

<style scoped>
/* visual */
.visual {
  position: relative;
  display: block;
  height: 700px;
}

.sw-visual {
  width: 100%;
  height: 100%;
}

.sw-visual a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.sw-visual-1 {
  background: url('@/assets/images/main_visual01.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-2 {
  background: url('@/assets/images/main_visual02.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-3 {
  background: url('@/assets/images/main_visual03.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-4 {
  background: url('@/assets/images/main_visual04.jpg') no-repeat center;
  background-size: cover;
}

.sw-visual-prev {
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  width: 55px;
  height: 98px;
  background: url('@/assets/images/btn_arrow.png') no-repeat left top;
  background-size: cover;
  z-index: 99;
  border: 0;
  cursor: pointer;
}

.sw-visual-next {
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  width: 55px;
  height: 98px;
  background: url('@/assets/images/btn_arrow.png') no-repeat right top;
  background-size: cover;
  z-index: 99;
  border: 0;
  cursor: pointer;
}

/* visual PC버전 */
/* visual 반응형버전 */
@media all and (max-width:1000px) {
  .visual {
    height: 70vw;
  }

  .sw-visual-next,
  .sw-visual-prev {
    width: 5.5vw;
    height: 9.8vw;
  }
}

</style>