<template lang="html">
  <div class="post" v-if="post">


    <div class="main-request">
    <div class="main-request-item " v-if="post">
        <p> {{ post.date }} </p>
    </div>
    <div class="main-request-item">
        <p>{{ post.worker }}</p>
    </div>
    <div class="main-request-item">
        <p>{{ post.cab }}</p>
    </div>
    <div class="main-request-item">
        <p>{{ post.problem }}</p>
    </div>
    <div class="main-request-item-progress">
        <p>{{ post.status }}</p>
        <img class="rot" src="assets/img/progress.svg" alt="">
    </div>

            </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    props: ['id'],
    metaInfo() {
      return {
        title: this.post && this.post.title,
      };
    },
    data() {
      return {
        post: null,
        endpoint: 'http://3612d488699a.ngrok.io/posts/',
      }
    },
    methods: {
      getPost(id) {
        axios(this.endpoint + id)
          .then(response => {
            this.post = response.data
            console.log(response.data.id)
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      }
    },
    
    created() {
      this.getPost(this.id);
    },

    watch: {
      '$route'() {
        this.getPost(this.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>