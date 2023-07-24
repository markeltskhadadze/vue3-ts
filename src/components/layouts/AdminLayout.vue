<script setup lang="ts">
import { onMounted } from 'vue'
import { auth } from '../../stores/auth'
import { useRouter } from 'vue-router'
import HeaderAdmin from '../admin/HeaderAdmin.vue'
import SideBar from '../admin/SideBar.vue'

const authData = auth()

onMounted(() => {
  const router = useRouter()
  if (localStorage.getItem('token')) {
    authData.setToken(localStorage.getItem('token'))
  }
  if (!authData.isAuthenticated) {
    return router.push('/admin')
  }
})
</script>

<template>
  <section class="admin-panel">
    <HeaderAdmin />
    <div class="flex">
      <SideBar />
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  background: #808080;
}
.admin-panel {
  height: 100vh;
}
</style>