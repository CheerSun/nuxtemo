<template>
  <div class="topic-detail">
    <div class="topic-detail-div">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark topic-detail-title">
            {{topic.title}}&nbsp;<br/>
            <hr/>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <div v-html="topic.content"></div>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {}
    },
    asyncData (context) {
      const {params} = context
      return axios.get(`/api/topics/` + params.detail).then(response => {
        console.log(response)
        return {topic: response.data}
      }).catch(e => {
        return {topic: 'Api 未找到'}
      })
    },
    head () {
      return {
        title: '主题详情'
      }
    }
  }
</script>

<style scoped>
  .topic-detail {
    margin: 0 50px 0 50px;
  }
  .topic-detail-div{
    margin-top: 10px;
  }
  .topic-detail-title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
</style>
