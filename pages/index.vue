<template>
  <section class="container">
    <el-carousel :autoplay="true" :interval="4000" type="card" height="500px" style="width: 1200px">
      <el-carousel-item v-for="item in logos" :key="item.title">
        <img :src="item.img" />
      </el-carousel-item>
    </el-carousel>
  <div class="loginDiv">
    <el-button-group>
      <el-button type="success" @click="login">登录</el-button>
      <el-button type="info" @click="register">注册</el-button>
    </el-button-group>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      size: 'lg',
      logos: [
        {title: ' ', img: '/carousel/spring.jpg'},
        {title: '', img: '/carousel/summer.jpg'},
        {title: '', img: '/carousel/autumn.jpg'},
        {title: '', img: '/carousel/winter.jpg'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    login () {
      location.href = '/login'
    },
    register () {
      location.href = '/register'
    }
  },
  components: {
  }
}
</script>

<style>
  .loginDiv{
    width: 200px;
    position: absolute;
    z-index: 1000;
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
