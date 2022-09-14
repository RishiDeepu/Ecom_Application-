import { createRouter, createWebHistory } from 'vue-router'
import home from './components/home.vue'
import signup from './components/signUp.vue'
import login from './components/login.vue'
const routes = [
    {
        name: 'Home',
        component: home,
        path: '/home'
    },
    {
        name: 'SignUp',
        component: signup,
        path: '/'
    },
    {
        name: 'Login',
        component: login,
        path: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router