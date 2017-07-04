<template>
  <section class="container">
    <div>
      <b-form>
        <b-form-fieldset>
          <b-button-group>
            <b-button variant="success" size="size" href="/login">登陆</b-button>
            <b-button variant="info" size="size" href="/register">注册</b-button>
          </b-button-group>
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
      size: 'lg'
    }
  },
  methods: {
    login () {

    }
  },
  components: {
  }
}
</script>

<style>
.container
{
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
</style>
