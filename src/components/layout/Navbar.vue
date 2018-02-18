<template>
  <div class="menu">
    <ul>
      <li v-for="(item, i) in menu" :key="i"></li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({ menu: 'menuitems' })
    }
  }
</script>