<template>
  <section class="container">
    <div>
      <b-form>
        <b-form-fieldset for="userName"  label="用户名" >
          <b-form-input  type="text" :value="userHome" target="userName" />
        </b-form-fieldset>
        <b-form-fieldset for="password"  label="密码" >
          <b-form-input type="password" :value="password" target="password" />
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
        userHome: '',
        password: ''
      }
    },
    methods: {
      login () {
        alert(this.userHome + '_' + this.password)
      }
    },
    components: {
    }
  }
</script>
<style>

</style>
