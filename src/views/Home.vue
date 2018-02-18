<template>
  <div>
    <Banner/>
    <div id="how" class="spotlight">
      <div class="paragraph">
        <h1><span class="tag">開源</span>，一種生活態度</h1>
        <p>
          開源一詞是"開放原始碼"的簡稱，<br/>
          英文稱為「Open Source」。<br/>
          原指透過開放程式的程式碼公開給使用者做修改，<br/>
          看似僅用在軟體開發上，<br/>
          但其實它也可以在藝術、文化與歷史上被應用。
        </p>
        <router-link to="" v-scroll-to="'#project, 50px'" class="link"><span>一起參與李梅樹紀念館的開源專案</span><font-awesome-icon icon="angle-right" /></router-link>
      </div>
    </div>
    <div id="project" class="spotlight"></div>
  </div>
</template>

<script>
  import layout from '@/components/layout'
  export default {
    components: layout
  }
</script>