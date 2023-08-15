<script setup lang="ts">
import {computed, ref, type Ref, onMounted, reactive, toRaw} from 'vue'
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import { homePageData } from '../stores/home-page-data'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import ChartBar from './chart-bar/ChartBar.vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'
  import { type TProjectInfo } from "@/types";

  const modules = [Navigation, Pagination, Scrollbar, A11y]
  const homeData = homePageData()
  const projectInfo: TProjectInfo[] = reactive(toRaw(homeData.projectInfo))
  const width: Ref<number> = ref(0)
  const testArray = ref([
    {
      name: 'slider 1',
      month: 12,
      chart_data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          data: [10, 15, 7, 12, 9],
          backgroundColor: [
            'rgb(255, 99, 132)'
          ],
          borderWidth: 1
        }]
      }
    },
    {
      name: 'slider 12',
      month: 10,
      chart_data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          data: [1, 1, 1, 1, 1],
          backgroundColor: [
            'rgb(255, 99, 132)'
          ],
          borderWidth: 1
        }]
      }
    },
    {
      name: 'slider 10',
      month: 9,
      chart_data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          data: [12, 12, 12, 12, 12],
          backgroundColor: [
            'rgb(255, 99, 132)'
          ],
          borderWidth: 1
        }]
      }
    }
  ])

  const getCountSlider = computed(() => {
    if (width.value <= 1200) {
      return 1
    } else {
      return 2
    }
  })

  onMounted (async () => {
    width.value = window.innerWidth
    await homeData.getProjectInfo()
  })
</script>

<template>
  <div class="cases-wrapper">
    <swiper
        :modules="modules"
        :slides-per-view="getCountSlider"
        navigation
        :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(siteInfo, index) in testArray" :key="index">
        <div class="cases-container">
          <div class="site-info">
            <div class="header-block">
              <p>{{ siteInfo.project_name }}</p>
              <p>Часто та посещения за 12 месяцев</p>
              <p>{{ siteInfo.project_link }}</p>
            </div>
            <div class="chart-container">
              <ChartBar :selectedDataBar="siteInfo.chart_data" />
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
  @media(max-width: 1200px) {
    .cases-wrapper {
      margin: 0 20px;
      padding: 50px 0;
    }
  }
</style>