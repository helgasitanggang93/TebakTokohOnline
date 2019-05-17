import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Lobby from "./views/Lobby"
import Waiting from "./views/Waiting"
import Landing from "./views/Landing.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/waiting/:id",
      name: "waiting",
      component: Waiting,
    },
    {
      path: "/lobby",
      name: "lobby",
      component: Lobby,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import(/* webpackChunkName: "game" */ './views/Game.vue'),
    },
    {
      path:'/landing',
      name:'landing',
      component:Landing
    }
  ]
});
