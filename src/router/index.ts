import { createRouter, createWebHistory } from 'vue-router'
import AdminAuth from '../components/admin/AdminAuth.vue'
import HomePage from '../components/HomePage.vue'
import Profile from '../components/admin/user/ProfileUser.vue'
import EditReviews from '../components/admin/EditReviews.vue'
import TariffsBlock from '../components/TariffsBlock.vue'
import DashboardAdmin from '../components/admin/DashboardAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/tariffs',
      name: 'traffic',
      component: TariffsBlock,
    },
    {
      path: '/admin',
      name: 'admin-auth',
      component: AdminAuth,
      meta: {
        layout: 'auth-layout'
      }
    },
    {
      path: '/admin/profile',
      name: 'profile',
      component: Profile,
      meta: {
        layout: 'admin-layout'
      }
    },
    {
      path: '/admin/reviews',
      name: 'edit-reviews',
      component: EditReviews,
      meta: {
        layout: 'admin-layout'
      }
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: DashboardAdmin,
      meta: {
        layout: 'admin-layout'
      }
    }
    // {
    //   path: "*",
    //   component: PageNotFound
    // }
  ]
})

export default router
