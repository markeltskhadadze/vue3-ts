<script setup lang="ts">
  import Header from '../HeaderBlock.vue'
</script>
<template>
  <div>
     <Header />
    <div class="main-panel">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>