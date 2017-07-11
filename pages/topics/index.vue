<template>
  <div class="topics">
    <div v-for="topic in topics" class="oneTopic" >
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple">&nbsp;</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple" @click="showDetail(topic)">{{topic.title}}</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div><img style="width: 30px;height: 30px;" :src="topic | imageSrc" /></el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div>{{topic.create_at | formatDate }}</el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data () {
      return {}
    },
    asyncData (context) {
      return axios.get('/api/topics').then(response => {
        console.log(response)
        return {topics: response.data}
      }).catch(e => {
        return {topics: []}
      })
    },
    methods: {
      showDetail (topic) {
        this.$router.push({ path: 'topics/' + topic._id })
      }
    },
    head () {
      return {
        title: '主题列表'
      }
    },
    filters: {
      imageSrc (topic) {
        return topic.author ? topic.author.avatar_url : ''
      },
      formatDate (date) {
        return moment(date).fromNow()
      }
    }
  }
</script>
<style scoped>
  .oneTopic{
    margin: 10px 0 10px 0;
  }
  .oneTopic > * {
    height: 35px;
  }
  .oneTopic .el-col-12:hover{
    text-decoration: underline;
    background: #f5f5f5;
  }
</style>
