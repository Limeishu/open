<template>
  <div class="banner">
    <div class="bubble-container">
      <div class="bubble" v-for="i in 120" :key="i" :style="{ 'transform': `perspective(600px) translate3d(${animate(i)})` }"></div>
    </div>
    <header>
      <h1>開源×文史</h1>
      <p><span class="tag">藝術</span><span>，可以</span><span class="tag">不只是藝術</span><span>｜</span><span class="tag">More Than Art.</span></p>
    </header>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        scrollHeight: 0
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scroll)
    },
    methods: {
      animate (index) {
        let x = -Math.cos(index / 30 * Math.PI) * 600
        let y = 2 * (this.scrollHeight) * Math.cos(index)
        let z = Math.sin(index / 30 * Math.PI) * 600 * Math.cos(index)
        // let z = 0
        return `${x}px, ${y}px, ${z}px`
      },
      scroll () {
        this.scrollHeight = document.querySelector('#app').getBoundingClientRect().y
      }
    }
  }
</script>