import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            alias: '/borrow'
        },
        {
            path: "/money",
            name: "money",
            component: Money
        },
        {
            path: "/",
            name: "borrow",
            component: Home,
            alias: '/borrow'
        },
        {
            path: "/money",
            name: "me",
            component: Money,
            alias: '/me'
        }

    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
