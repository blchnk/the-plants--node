import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/components/pages/MainPage";
import CategoryPage from "@/components/pages/CategoryPage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainPage,
        props: true
    },
    {
        path: '/categories',
        component: CategoryPage,
        props: true
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;
