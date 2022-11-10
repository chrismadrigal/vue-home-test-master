import { createRouter, createWebHistory } from "vue-router";

import ProductsView from "@/views/ProductsView.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/product/:id",
    name: "product",
    // Wait to load this component until we need it.
    component: () =>
      import(/* webpackChunkName: "products" */ "@/views/ProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
