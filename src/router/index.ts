import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
