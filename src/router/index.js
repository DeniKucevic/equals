import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "@/views/News.vue";
import Publications from "@/views/Publications.vue";
import OneNews from "@/views/OneNews.vue";
import OneNews2 from "@/views/OneNews2.vue";
import OneNews3 from "@/views/OneNews3.vue";
import OneNews4 from "@/views/OneNews4.vue";
import OneNews5 from "@/views/OneNews5.vue";
import OneNews6 from "@/views/OneNews6.vue";
import OneNews7 from "@/views/OneNews7.vue";
import OneNews8 from "@/views/OneNews8.vue";
import OneNews9 from "@/views/OneNews9.vue";
import OneNews10 from "@/views/OneNews10.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/publications",
    name: "Publications",
    component: Publications,
  },
  {
    path: "/news/oneNews",
    name: "OneNews",
    component: OneNews,
  },
  {
    path: "/news/oneNews2",
    name: "OneNews2",
    component: OneNews2,
  },
  {
    path: "/news/oneNews3",
    name: "OneNews3",
    component: OneNews3,
  },
  {
    path: "/news/oneNews4",
    name: "OneNews4",
    component: OneNews4,
  },
  {
    path: "/news/oneNews5",
    name: "OneNews5",
    component: OneNews5,
  },
  {
    path: "/news/oneNews6",
    name: "OneNews6",
    component: OneNews6,
  },
  {
    path: "/news/oneNews7",
    name: "OneNews7",
    component: OneNews7,
  },
  {
    path: "/news/oneNews8",
    name: "OneNews8",
    component: OneNews8,
  },
  {
    path: "/news/oneNews9",
    name: "OneNews9",
    component: OneNews9,
  },
  {
    path: "/news/oneNews10",
    name: "OneNews10",
    component: OneNews10,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
