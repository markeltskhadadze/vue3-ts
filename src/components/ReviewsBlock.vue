<script setup lang="ts">
  import { reactive, onMounted, toRaw, computed } from 'vue'
  import { homePageData } from '../stores/home-page-data'
  import { type TReviews } from '../types'

  const homeData = homePageData()

  const reviews: TReviews[] = reactive(toRaw(homeData.reviews))

  const getIcon = computed(() => {
    return '/'
  })

  onMounted (async () => {
    await homeData.getReviews()
  })
</script>

<template>
  <div class="bg">
    <img
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        :src="getIcon + 'Untitled-7.png'"
        class="review-image"
    />
    <div class="flex flex-col gap-8 reviews-wrapper">
      <h2>Reviews from our users</h2>
      <div class="reviews-content">
        <div data-aos="flip-up" v-for="(review, index) in reviews" :key="index" class="review">
          <img class="avatar" src="" alt="">
          <h3>{{ review.fullName }}</h3>
          <p>{{ review.reviewText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .avatar {
    width: 85px;
    margin-bottom: 20px;
  }
  .bg {
    background: url('/2.jpeg');
    background-size: cover;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    padding: 50px 0;
    flex-wrap: wrap;
  }
  h2 {
    margin-bottom: 50px;
    font-size: 45px;
  }
  .review {
    border: 2px solid;
    border-radius: 8px;
    padding: 60px 55px;
    margin-bottom: 70px;
  }
  .review-image {
    max-height: 500px;
    max-width: 500px;
  }
  .reviews-content {
    display: flex;
    overflow-x: scroll;
  }
  .reviews-wrapper {
    flex: 0 1 30%;
  }
</style>