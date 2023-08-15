<script setup lang="ts">
  import { reactive, ref, type Ref, onMounted, onUnmounted, toRaw } from 'vue'
  import { homePageData } from '../stores/home-page-data'
  import { type TPosts } from '../types'

  const homeData = homePageData()

  let width: Ref<number> = ref(window.innerWidth)

  const posts: TPosts[] = reactive(toRaw(homeData.posts))

  function updateWidth (): void {
    width.value = window.innerWidth
  }

  onMounted (async () => {
    window.addEventListener('resize', updateWidth)
    await homeData.getPosts()
  })


  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })
</script>

<template>
  <h2>Blogs</h2>
  <div class="flex justify-around flex-wrap blogs-content">
    <div data-aos="flip-left" class="blog-width" v-for="(post, index) in posts" :key="index">
      <img :src=post.img alt="" :class="{ 'blog-img': width > 1200, 'blog-img-modile': width < 1200 }">
      <hr>
      <h3>{{ post.title }}</h3>
      <p class="description">{{ post.description }}</p>
    </div>
    <button v-if="posts.length > 6" variant="dark">Load More</button>
  </div>
</template>

<style scoped>
  .possibilities-block {
    flex: 50%;
  }
  hr {
      margin: 1rem 0;
      color: inherit;
      border: 0;
      border-top: 2px solid #000;
      opacity: 0.25;
      max-width: 50px;
  }
  h3 {
    text-align: left;
  }
  .description {
    text-align: left;
    color: #ffffff;
  }
  .blogs-content {
    margin: 80px 0px;
  }
  .blog-img {
    width: 500px;
  }
  .blog-img-modile {
    width: 250px;
  }
  .blog-width {
    flex: 33.333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
</style>