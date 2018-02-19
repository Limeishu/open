<template>
  <div class="banner">
    <div class="bubble-container">
      <div class="bubble" v-for="i in 120" :key="i" :style="{ 'transform': `perspective(600px) translate3d(${animate(i)})` }"></div>
    </div>
    <header>
      <h1>開源×文史</h1>
      <p><span class="tag">藝術</span><span>，可以</span><span class="tag">不只是藝術</span><span>｜</span><span class="tag">More Than Art.</span></p>
      <div class="next" v-scroll-to="'#how, 0'"><img src="@/assets/images/down-arrow.svg" alt=""></div>
    </header>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['scrollHeight', 'deviceHeight'])
    },
    methods: {
      animate (index) {
        let height = this.scrollHeight < -this.deviceHeight ? -this.deviceHeight : this.scrollHeight
        let x = parseInt(-Math.cos(index / 30 * Math.PI) * 600)
        let y = parseInt(2 * height * Math.cos(index))
        let z = parseInt(Math.sin(index / 30 * Math.PI) * 600 * Math.cos(index))
        return `${x}px, ${y}px, ${z}px`
      }
    }
  }
</script>