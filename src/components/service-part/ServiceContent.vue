<script setup lang="ts">
  import { type PropType, computed } from 'vue'
  import { type TReviews } from '../../types'

  // const props = defineProps({
  //   services: {
  //     type: Object as PropType<TReviews>,
  //     required: true
  //   }
  // })

  const getIcon = computed(() => {
    return '/'
  })
</script>

<template>
  <div>
    <div class="flex justify-center flex-wrap service-block">
<!--      <div-->
<!--          data-aos="flip-up"-->
<!--          data-aos-easing="linear"-->
<!--          data-aos-duration="500"-->
<!--          v-for="(service, index) in props.services"-->
<!--          :key="index"-->
<!--          class="service-content"-->
<!--      >-->
<!--        <img class="avatar" :src="getIcon + 'img_569204.png'" alt="">-->
<!--        <h3>{{ service.fullName }}</h3>-->
<!--        <p>{{ service.reviewText }}</p>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
  .avatar {
    max-width: 115px;
    max-height: 115px;
  }
  .service-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex: 0 1 20%;
    background: #ffff;
    border-radius: 25px;
    justify-content: center;
    min-height: 295px;
  }
  .service-block {
    gap: 30px;
    padding: 30px 0;
  }
</style>