<script setup lang="ts">
  import BlogsPage from './BlogsPage.vue'
  import OurServices from './OurServices.vue'
  import ReviewsBlock from './ReviewsBlock.vue'
  import SubmitForm from './SubmitForm.vue'
  import FooterBlock from './FooterBlock.vue'
  import BannerHome from './BannerHome.vue'
  import SuccessFuture from './SuccessFuture.vue'
  import CounterBlock from './CounterBlock.vue'
  import AnalyticsBock from './AnalyticsBock.vue'
  import WhyWe from './WhyWe.vue'
</script>

<template>
  <div class="text-center">
    <BannerHome />
  </div>
  <OurServices />
  <SuccessFuture />
  <CounterBlock />
  <AnalyticsBock />
  <WhyWe />
<!--  <BlogsPage />-->
  <ReviewsBlock />
<!--  <SubmitForm />-->
  <FooterBlock />
</template>
