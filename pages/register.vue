<template>
  <section class="container">
    <div>
      <el-form ref="form" :model="user" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="user.rePassword"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="success" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          password: '',
          rePassword: ''
        }
      }
    },
    methods: {
      register () {
        if (this.user.password !== this.user.rePassword) {
          this.$message({
            message: '两次密码不一致',
            type: 'warning'
          })
          return false
        }
        delete this.user.rePassword
        this.$store.dispatch('register', {user: this.user})
      }
    },
    head () {
      return {
        title: '注册'
      }
    },
    components: {
    }
  }
</script>
<style>

</style>
