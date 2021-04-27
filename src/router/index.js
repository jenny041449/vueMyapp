import Vue from 'vue'
import VueRouter from 'vue-router'
import Description from '../views/Description.vue'
import About from '../views/About.vue'
import login from '../views/register/login.vue'
import main from '../views/main.vue'
import buy from '../views/buy/buy.vue'
import pay01 from '../views/buy/pay01.vue'
import pay02 from '../views/buy/pay02.vue'
import order1 from '../views/buy/order01.vue'
import question from '../views/question/question.vue'
import register from '../views/register/register.vue'
import message from '../views/message.vue'
import error from '../views/error404.vue'
import hello from '../views/hello.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: main
    },
    {
        path: '/Description',
        name: 'Description',
        component: Description
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },

    {
        path: '/buy/:id',
        name: 'buy',
        component: buy
    },
    {
        path: '/pay01',
        name: 'pay01',
        component: pay01
    },
    {
        path: '/pay02',
        name: 'pay02',
        component: pay02
    },
    {
        path: '/order1',
        name: 'order1',
        component: order1
    },
    {
        path: '/question',
        name: 'question',
        component: question
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/message',
        name: 'message',
        component: message
    },
    {
        path: '/hello',
        name: 'hello',
        component: hello
    },
    {
        path: '/*',
        name: '404page',
        component: error
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router