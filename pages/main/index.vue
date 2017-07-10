<template>
  <div class="main">
    <el-menu theme="dark" :default-active="'0'" class="" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><a>管理系统</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
    <el-row class="tac">
      <el-col :span="3"theme="dark">
        <el-menu default-active="0" class="" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="1">
            <template slot="title">工作区域</template>
            <el-menu-item-group title="管理员">
              <el-menu-item index="1-1">管理用户</el-menu-item>
              <el-menu-item index="1-2">设置权限</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="物流查询">
              <el-menu-item index="1-3">顺丰</el-menu-item>
              <el-menu-item index="1-4">京东</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">酒店管理</el-menu-item>
          <el-menu-item index="3">餐饮管理</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <div>
          <template>
            <el-alert
              title="成功提示的文案"
              type="success">
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info">
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning">
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error">
            </el-alert>
            <el-alert
              title="成功提示的文案"
              type="success">
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info">
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning">
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error">
            </el-alert>
            <el-alert
              title="成功提示的文案"
              type="success">
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info">
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning">
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error">
            </el-alert>
            <el-alert
              title="成功提示的文案"
              type="success">
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info">
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning">
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error">
            </el-alert>

            <el-alert
              title="成功提示的文案"
              type="success">
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info">
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning">
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error">
            </el-alert>

          </template>
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
      handleSelect (va) {
        console.log(va)
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
