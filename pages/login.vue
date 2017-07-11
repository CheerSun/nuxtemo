<template>
  <section class="container">
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="success" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'online'
      ])
    },
    methods: {
      login () {
        if (this.user.name && this.user.password) {
          this.$store.dispatch('login', {user: this.user})
        }
      }
    },
    head () {
      return {
        title: '登录'
      }
    },
    watch: {
      online: function (value) {
        if (value) {
          this.$router.push('main')
        }
      }
    },
    components: {
    }
  }
</script>
<style>

</style>
