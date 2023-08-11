<script setup lang="ts">
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import ChartBar from './chart-bar/ChartBar.vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'

  const modules = [Navigation, Pagination, Scrollbar, A11y]

</script>

<template>
  <div class="cases-wrapper">
    <swiper
        :modules="modules"
        :slides-per-view="2"
        navigation
        :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <div class="cases-container">
          <div class="site-info">
            <div class="header-block">
              <p>Название сайта</p>
              <p>Часто та посещения за 12 месяцев</p>
              <p>Ссылка на сайт</p>
            </div>
            <div class="chart-container">
              <ChartBar />
            </div>
            <p>0 -> 2000</p>
            <p>0 -> 200</p>
            <button>Хочу так же</button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="cases-container">
          <div class="site-info">
            <div class="header-block">
              <p>Название сайта</p>
              <p>Часто та посещения за 12 месяцев</p>
              <p>Ссылка на сайт</p>
            </div>
            <div class="chart-container">
              <ChartBar />
            </div>
            <p>0 -> 2000</p>
            <p>0 -> 200</p>
            <button>Хочу так же</button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="cases-container">
          <div class="site-info">
            <div class="header-block">
              <p>Название сайта</p>
              <p>Часто та посещения за 12 месяцев</p>
              <p>Ссылка на сайт</p>
            </div>
            <div class="chart-container">
              <ChartBar />
            </div>
            <p>0 -> 2000</p>
            <p>0 -> 200</p>
            <button>Хочу так же</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
  .site-info{
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 25px;
  }
  .cases-wrapper {
    margin: 0 150px;
    padding: 50px 0;
  }
  .chart-container {
    max-height: 150px;
    max-width: 500px;
    padding: 0 50px;
  }
  .cases-container {
    max-width: 400px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0 10px 20px rgba(72, 192, 227, 0.12);
    border-radius: 30px;
 }
  .header-block {
   display: flex;
   flex-direction: column;
   gap: 10px;
 }
</style>