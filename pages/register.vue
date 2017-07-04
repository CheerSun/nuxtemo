<template>
  <section class="container">
    <div>
      <b-alert variant="danger" dismissible :show="warn" @dismissed="warn=false">
        两次密码不一致
      </b-alert>
      <b-form>
        <b-form-fieldset label="用户名" >
          <b-form-input  type="text" v-model="userName" target="userName" />
        </b-form-fieldset>
        <b-form-fieldset   label="密码" >
          <b-form-input type="password" v-model="password" target="password" />
        </b-form-fieldset>
        <b-form-fieldset   label="确认密码" >
          <b-form-input type="password" v-model="rePassword" target="password" />
        </b-form-fieldset>
        <b-form-fieldset>
          <b-button @click="register" variant="success" :size="lg">注册</b-button>
        </b-form-fieldset>
      </b-form>
    </div>
  </section>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    data () {
      return {
        lg: 'lg',
        warn: false,
        userName: '',
        password: '',
        rePassword: ''
      }
    },
    methods: {
      register () {
        if (this.password !== this.rePassword) {
          this.warn = true
          return false
        }
        this.warn = false
        const user = {
          name: this.userName,
          password: this.password
        }
//        alert('登陆成功' + user.name)
        this.$store.dispatch('register', {user})
      }
    },
    components: {
    }
  }
</script>
<style>

</style>
