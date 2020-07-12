import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VueRouter from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { index: 1 }
    },
    {
      path: "/about",
      name: "about",
      meta: { index: 2 },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      children: [
        {
          path: "",
          name: "profile",
          component: () =>
            import(/* webpackChunkName: "profile" */ "./views/Profile.vue")
        },
        {
          path: "address",
          name: "address",
          component: () =>
            import(/* webpackChunkName: "address" */ "./views/Address.vue")
        },
        {
          path: "service",
          name: "service",
          component: () =>
            import(/* webpackChunkName: "service" */ "./views/Service.vue")
        },
        {
          path: "favorite",
          name: "favorite",
          component: () =>
            import(/* webpackChunkName: "favorite" */ "./views/Favorite.vue")
        },
        {
          path: "mall",
          name: "mall",
          component: () =>
            import(/* webpackChunkName: "mall" */ "./views/Mall.vue")
        },
        {
          path: "order",
          name: "order",
          component: () =>
            import(/* webpackChunkName: "order" */ "./views/Order.vue")
        },
        {
          path: "userInfo",
          name: "userInfo",
          component: () =>
            import(/* webpackChunkName: "userInfo" */ "./views/UserInfo.vue")
        }
      ]
    },
    {
      path: "/friends",
      name: "friends",
      meta: { index: 3 },
      component: () =>
        import(/* webpackChunkName: "friends" */ "./views/Friends.vue")
    },
    {
      path: "/cart",
      name: "cart",
      meta: { index: 4 },
      component: () => import(/* webpackChunkName: "cart" */ "./views/Cart.vue")
    }
  ]
});

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
