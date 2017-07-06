<template>
  <div>
    <header>{{project}}</header>
  </div>
</template>
<script>
//  import axios from 'axios'
  export default {
    data () {
      return {}
    },
    asyncData (context) {
      return { project: 'nuxt' }
    },
    async fetch ({ store, params }) {
//      let { data } = await axios.get('/api/user')
//      store.commit('update', data)
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>
