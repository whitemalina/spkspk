import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import App from "./App.vue";
import Post from "./components/Post.vue";
import Hello from "./components/Hello.vue";

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Post",
      component: Post
    },
    {
      path: "/post/:id",
      name: "post",
      component: Post,
      props: true
    }
  ],
  mode: "history"
});

new Vue({
  el: "#app",
  data: {
    worker: null,
    cab: null,
    problemo: null
  },
  render: h => h(App),
  router
});
// window.addEventListener("load", function() {
// let status = document.getElementsByClassName(`main-request-item-progress`)
// console.log("-----------------------START----------------------------------")
// status[0].firstChild.innerText="Выполняется"
// console.log(status[0].firstChild.innerText)
// });

// function changeStatus() {
//   let status = document.getElementsByClassName(`main-request-item-progress`)
// console.log("-----------------------START----------------------------------")
// status[0].firstChild.innerText="Выполняется"
// console.log()

// }

// setTimeout(changeStatus, 600);
