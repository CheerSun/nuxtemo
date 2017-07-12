<template>
  <div class="main">
    <el-menu theme="dark" :default-active="'home'" class="" mode="horizontal">
      <el-menu-item index="home"><a>管理系统</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
    <el-row class="tac">
      <el-col :span="3"theme="dark">
        <el-menu default-active="0" class="" @open="handleOpen" @close="handleClose" theme="dark" @select="handleSelect">
          <template v-for="menu in menuList">
            <el-submenu v-if="menu.child" :index="menu.index" :key="menu.key">
              <template slot="title">{{menu.title}}</template>
              <el-menu-item-group v-for="(children,onkey) in menu.child" :title="children.title" :key="onkey">
                <el-menu-item v-for="subChildren in children.child" :index="subChildren.index" :key="subChildren.index">{{subChildren.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else  :index="menu.index">{{menu.title}}</el-menu-item>
          </template>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <div class="main-content">
          <nuxt-child  />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    computed: {
      ...mapGetters([
        'menuList'
      ])
    },
    mounted () {
    },
    head () {
      return {
        title: '后台'
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect (index) {
        this.$router.push('/main/' + index)
      }
    }
  }
</script>
<style scoped>
  .amap-wrapper {
    width: 500px;
    height: 500px;
  }
</style>
