import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/ChecklistController",
    name: "ChecklistController",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/ChecklistController.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function nextCheck(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMidd = nextCheck(context, middleware, index + 1);
    nextMiddleware({ ...context, next: nextMidd });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];

    const ctx = {
      from,
      next,
      router,
      to,
    };

    const nextMiddleware = nextCheck(ctx, middleware, 1);

    return middleware[0]({ ...ctx, next: nextMiddleware });
  }
  return next();
});

export default router;
