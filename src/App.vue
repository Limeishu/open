<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex' 
  import layout from '@/components/layout'
  export default {
    components: layout,
    computed: {
      ...mapGetters(['scrollHeight'])
    },
    mounted () {
      window.addEventListener('scroll', this.scroll)
    },
    methods: {
      ...mapActions(['setScrollHeight']),
      async scroll () {
        await this.setScrollHeight(document.querySelector('#app').getBoundingClientRect().y)
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
