<template>
  <div class="news">
    <div>新闻列表</div>
    <div>
      <div v-for="news in newsList">
          <img src="news.img" />
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {

      }
    },
    asyncData ({ params }, callback) {
      console.log('我在里面呢')
      axios.get('http://127.0.0.1:8888/api/news').catch(function (data) {
        return {newsList: [data]}
      }).catch(function () {
        return {newsList: []}
      })
    },
    methods: {

    }
  }
</script>
<style scoped>

</style>
