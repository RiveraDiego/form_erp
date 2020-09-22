import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
import ResultsComponent from "./components/ResultsComponent.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/results/:api_token/:endpoint", component: ResultsComponent },
  { path: "/login", component: LoginComponent },
  { path: "*", component: ErrorComponent }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
