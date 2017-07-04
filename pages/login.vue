<template>
  <section class="container">
    <div>
      <b-form>
        <b-form-fieldset for="userName"  label="用户名" >
          <b-form-input  type="text" v-model="userName" target="userName" />
        </b-form-fieldset>
        <b-form-fieldset for="password"  label="密码" >
          <b-form-input type="password" v-model="password" target="password" />
        </b-form-fieldset>
        <b-form-fieldset>
          <b-button @click="login" variant="success" :size="lg">登陆</b-button>
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
        userName: '',
        password: ''
      }
    },
    methods: {
      login () {
        if (this.userName && this.password) {
          const user = {
            name: this.userName,
            password: this.password
          }
          this.$store.dispatch('login', {user})
        }
      }
    },
    components: {
    }
  }
</script>
<style>

</style>
