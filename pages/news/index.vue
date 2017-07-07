<template>
  <div class="news">
    <div>新闻列表</div>
    <div>
      <el-row>
        <el-col :span="24" v-for="(news,index) in newsList" :key="news._id" :offset="0">
          <el-card :body-style="{ padding: '0px' }" >
            <div style="padding: 14px;">
              <span @click="toDetail(news)">{{news.title}}</span>
              <div class="bottom clearfix" @click="toDetail(news)">
                <template v-for="image in news.images">
                  <img :src="image | getImageSrc" class="image">
                </template>
              </div>
            </div>
            <time class="time">{{ news.time }}</time>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        page: 1,
        per_page: 10
      }
    },
    computed: {
      ...mapGetters([
        'newsList'
      ])
    },
    mounted () {
      this.$store.dispatch('getNews', {page: this.page, per_page: this.per_page})
    },
    asyncData (contxt, callback) {
      console.log(contxt.params)
      callback()
    },
    methods: {
      toDetail (news) {
        this.$router.push('/news/' + news._id)
      }
    },
    filters: {
      getImageSrc: function (image) {
        if (!image) return ''
        return '/newsImages/' + image
      }
    }
  }
</script>
<style scoped>
  .image {
    width: 260px;
    height: 180px;
    margin: 10px;
  }
</style>
