<template>
  <section class="container">
    <el-carousel :autoplay="true" :interval="5000" type="card" height="500px" style="width: 1200px" @change="indexChange">
      <el-carousel-item v-for="item in logos" :key="item.id">
        <img :src="item.img" />
        <div class="loginDiv">
          <el-button-group v-show="selectedIndex === item.id">
            <el-button :type="btnType" @click="onClick">{{methodTitle}}</el-button>
          </el-button-group>
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  data () {
    return {
      size: 'lg',
      selectedIndex: 0,
      btnType: 'success',
      methodTitle: '登录',
      logos: [
        {id: 0, img: '/carousel/spring.jpg'},
        {id: 1, img: '/carousel/summer.jpg'},
        {id: 2, img: '/carousel/autumn.jpg'},
        {id: 3, img: '/carousel/winter.jpg'},
        {id: 4, img: '/carousel/node.jpg'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    indexChange (index) {
      this.selectedIndex = index
      switch (index) {
        case 0:
          this.btnType = 'success'
          this.methodTitle = '登录'
          break
        case 1:
          this.btnType = 'warning'
          this.methodTitle = '注册'
          break
        case 2:
          this.btnType = 'danger'
          this.methodTitle = '新闻'
          break
        case 3:
          this.btnType = 'info'
          this.methodTitle = '后台'
          break
        case 4:
          this.btnType = 'info'
          this.methodTitle = 'cnodeJs主题'
          break
      }
      console.log(index)
    },
    onClick () {
      let router
      switch (this.selectedIndex) {
        case 0:
          router = '/login'
          break
        case 1:
          router = '/register'
          break
        case 2:
          router = '/news'
          break
        case 3:
          router = '/main'
          break
        case 4:
          router = '/topics'
      }
      location.href = router
    }
  },
  head () {
    return {
      title: '欢迎您'
    }
  },
  components: {
  }
}
</script>

<style>
  .loginDiv{
    position: absolute;
    z-index: 1000;
    bottom: 45%;
    left: 40%;
  }
.container
{
  background: aquamarine;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.image {
  display: block;
}
</style>
