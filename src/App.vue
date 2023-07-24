<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const layout = ref<string>('')
const router = useRouter()


const updateLayout = computed(() => {
  const route = router.currentRoute.value
  if (typeof route?.meta?.layout === 'string') {
    return route.meta.layout
  }
  return 'base-layout'
})
</script>

<template>
  <component :is="updateLayout">
    <router-view></router-view>
  </component>
</template>
