<template>
  <div class="main">
    <el-menu theme="dark" :default-active="'home'" class="" mode="horizontal">
      <el-menu-item index="home"><a>管理系统</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
    <el-row class="tac">
      <el-col :span="3"theme="dark">
        <el-menu default-active="0" class="" @open="handleOpen" @close="handleClose" theme="dark" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">工作区域</template>
            <el-menu-item-group title="管理员">
              <el-menu-item index="admin/edit_user">管理用户</el-menu-item>
              <el-menu-item index="admin/set_auth">设置权限</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="物流查询">
              <el-menu-item index="wuliu/sf">顺丰</el-menu-item>
              <el-menu-item index="wuliu/jd">京东</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="hotal">酒店管理</el-menu-item>
          <el-menu-item index="food">餐饮管理</el-menu-item>
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
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
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
