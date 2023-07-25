<script setup lang="ts">
  import { useRouter } from "vue-router"

  const router = useRouter()
  function goToAdmin() {
    router.push('/admin')
  }

</script>

<template>
  <div class="flex justify-around items-center header-home">
    <div class="flex">
      <p class="header-link me-3" @click="goToAdmin">Услуги</p>
      <p class="header-link me-3">Тарифы</p>
      <p class="header-link me-3">Блог</p>
    </div>
  </div>
</template>

<style scoped>
  .header-link {
    color: #000000;
  }
  .header-home {
    min-height: 60px;
    min-width: 100%;
    position: fixed;
    background: #ffffffb5;
    z-index: 999;
}
</style>