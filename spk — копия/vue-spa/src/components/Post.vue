<template lang="html">
  <div class="post " v-if="post">
    <div class="main-request">
      <div class="main-request-item ">
        <p>{{ date }}</p>
      </div>
      <div class="main-request-item">
        <p>{{ post.worker }}</p>
      </div>
      <div class="main-request-item">
        <p>{{ post.cab }}  {{ post.sp }}</p>
      </div>
      <div class="main-request-item problem">
        <p>{{ post.problem }}</p>
      </div>
      <div class="main-request-item-progress">
        <p v-if="wait" class="statusWait ">{{ status }}</p>
        <p v-if="loading" class="statusLoading ">{{ status }}</p>
        <p v-if="ready" class="statusReady ">{{ status }}</p>
        <img v-if="loading" class="rot" src="assets/img/progress.svg" alt="" />
        <img v-if="wait" class="r" src="assets/img/clock.svg" alt="" />
        <img v-if="ready" class="r" src="assets/img/check.svg" alt="" />
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  metaInfo() {
    return {
      title: this.post && this.post.title
    };
  },
  data() {
    return {
      post: null,
      endpoint: "http://localhost:3000/requests/id/"
    };
  },
  methods: {
    getPost(id) {
      axios(this.endpoint + id)
        .then(response => {
          var dates = [];
          var status = [];
          var utcDate = response.data.date;
          var reqStatus = response.data.status;

          //     Получение даты в норальном формате
          utcDate = new Date(utcDate);
          dates.month = utcDate.getMonth();
          dates.day = utcDate.getDate();
          dates.year = utcDate.getFullYear();

          this.date = `${dates.day}.${dates.month}.${dates.year}`;
          console.log(response.data.date);
          switch (reqStatus) {
            case 1:
              this.status = "Ожидание";
              this.wait = "wait";

              break;
            case 2:
              this.status = "Выполняется";
              this.loading = "loading";

              break;
            case 3:
              this.status = "Выполнена";
              this.ready = "ready";
              break;
            
          }
          

          this.post = response.data;
        })

        .catch(error => {
          console.log("-----error-------");
          console.log(error);
        });
    }
  },

  created() {
    this.getPost(this.id);
  },

  watch: {
    $route() {
      this.getPost(this.id);
    }
  }
};
</script>

<style lang="css" scoped>

</style>
