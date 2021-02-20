import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Requests from "../views/Requests.vue";
import CustomerAddress from "../components/CustomerAddress.vue";
import CustomerStores from "../components/CustomerStores.vue";
import CustomerSchemes from "../components/CustomerSchemes.vue";
import CustomerBanks from "../components/CustomerBanks.vue";
import CustomerPacks from "../components/CustomerPacks.vue";
import CustomerPayments from "../components/CustomerPayments.vue";
import CustomerRequests from "../components/CustomerRequests.vue";
import CustomerDetails from "../components/CustomerDetails.vue";
import Customer from "../views/Customer.vue";

import store from '../store/index.js';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },{
    path: "/search",
    name: "Search",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/requests",
    name: "Requests",
    component: Requests,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/customer",
    name: "Customer",
    component: Customer,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "details",
        name: "CustomerDetails",
        component: CustomerDetails
      },
      {
        path: "address",
        name: "CustomerAddress",
        component: CustomerAddress
      },
      {
        path: "stores",
        name: "CustomerStores",
        component: CustomerStores
      },
      {
        path: "schemes",
        name: "CustomerSchemes",
        component: CustomerSchemes
      },
      {
        path: "banks",
        name: "CustomerBanks",
        component: CustomerBanks
      },
      {
        path: "packs",
        name: "CustomerPacks",
        component: CustomerPacks
      },
      {
        path: "payments",
        name: "CustomerPayments",
        component: CustomerPayments
      },
      {
        path: "requests",
        name: "CustomerRequests",
        component: CustomerRequests
      }

    ]
  }
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && store.state.jwtToken === '') next({ name: 'Login' })
  else if (to.name === 'Login' && store.state.jwtToken !== '') next({ name: 'Search' })
  next()
})

export default router;
