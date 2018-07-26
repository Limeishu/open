<template>
  <div>
    <Banner/>
    <div id="how" class="spotlight">
      <div class="paragraph">
        <h1><span class="tag">開源</span>，一種生活態度</h1>
        <p>
          開源一詞是「開放原始碼」的簡稱，<br/>
          英文稱為「Open Source」。<br/>
          原指透過開放程式的程式碼公開給使用者做修改，<br/>
          看似僅用在軟體開發上，<br/>
          但其實它也可以在藝術、文化與歷史上被應用。
        </p>
        <router-link to="" v-scroll-to="'#project, 0px'" class="link"><span>一起參與李梅樹紀念館的開源專案</span><font-awesome-icon icon="angle-right" /></router-link>
      </div>
    </div>
    <div id="project" class="spotlight has-bg blue">
      <h1>我們的開源專案</h1>
      <div class="card-container">
        <div class="card" v-for="(item, i) in project" :key="i">
          <div class="image" v-if="item.meta" :style="{ 'background-image': `url(${item.meta.image})` }"></div>
          <div class="content">
            <h2>{{ item.name }}</h2>
            <p>{{ item.content }}</p>
            <a :href="item.meta.link" target="_blank" class="link"><span>{{ item.meta.link ? '了解更多' : '敬請期待' }}</span><font-awesome-icon icon="angle-right" /></a>
          </div>
        </div>
      </div>
    </div>
    <div id="team" class="spotlight has-bg">
      <header>
        <h1>我們的團隊</h1>
        <p>
          我們是一群熱愛資訊的學生，<br>
          因為一個契機，我們今天在李梅樹紀念館，把新的資訊技術回饋給地方。
        </p>
      </header>
      <div class="people-container">
        <div class="people" v-for="(item, i) in people" :key="i">
          <div class="image" :style="{ 'background-image': `url(${item.meta.image})` }"></div>
          <div class="content">
            <div class="link-bar">
              <a :href="item.url" :class="item.icon[1]" target="_blank" class="icon" v-for="(item, i) in item.link" :key="i">
                <font-awesome-icon :icon="item.icon" />
              </a>
            </div>
            <h2>{{ item.name }}</h2>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import layout from '@/components/layout'
  export default {
    data () {
      return {
        project: [
          {
            name: '新版李梅樹官方網站',
            content: '利用 Vue.js 為框架打造的紀念館網站，擁有良好的多重裝置支援性、高效率與瀏覽速度。我們的網站原始碼完全開源，歡迎多加利用。',
            meta: {
              image: 'https://image.limeishu.org.tw/images/code.jpg',
              link: 'https://github.com/Limeishu/limeishu.org'
            }
          },
          {
            name: 'LMS API',
            content: '採用輕巧 Koa 框架與 MongoDB 打造的紀念館 API，尊照 RESTful 風格、簡單易用。我們的原始碼完全開源，歡迎多加利用。',
            meta: {
              image: 'https://image.limeishu.org.tw/images/code.jpg',
              link: 'https://github.com/Limeishu/LMS-API'
            }
          },
          {
            name: '維基館藏數位開放專案計畫',
            content: '李梅樹紀念館維基館藏數位開放專案為李梅樹紀念館與社團法人中華民國維基媒體協會共同合作，踏出台灣館聯計畫(GLAM program)的第一步。',
            meta: {
              image: 'https://api.limeishu.org.tw/images/2018/02/19/94bf8b93-bc7d-4e30-8422-68b35ce32276.jpg',
              link: 'https://limeishu.org.tw/culture/news/5a8a404d34c8a8787241bb56/index.html'
            }
          },
          {
            name: 'LCMS',
            content: '全新設計、基於 Vuejs 打造的內容管理系統，高效能、高安全性、支援文檔編輯即時預覽。我們的原始碼完全開源，歡迎多加利用。',
            meta: {
              image: 'https://api.limeishu.org.tw/images/2018/05/06/03a42017-33f9-458e-9d55-313c4ed8e34c.jpg',
              link: 'https://github.com/Limeishu/LCMS'
            }
          }
          // {
          //   name: 'LMS Open Design',
          //   content: '整合 Google Material Design、Apple Human Interface 及 Mozilla Open Desin 並取其精髓加以優化，創造了 LMS Open Desin。我們將其整理、條列化後加以說明，歡迎多加利用。',
          //   meta: {
          //     image: 'https://image.limeishu.org.tw/images/code.jpg',
          //     link: ''
          //   }
          // }
        ],
        people: [
          {
            name: 'EU｜王文岳',
            content: '現任李梅樹紀念館資訊組召集人、大安高工電腦研究社客座老師、中崙高中資訊研習社指導老師。在館內負責專案接洽、行政作業程序處理、館內硬體設備規劃與採購。',
            meta: {
              image: 'https://i.imgur.com/h0xf6ew.jpg'
            },
            link: [
              {
                icon: ['fab', 'facebook-f'],
                url: 'https://www.facebook.com/allen.wang.1675'
              },
              {
                icon: ['fab', 'github'],
                url: 'https://github.com/Allenwang6212'
              }
            ]
          },
          {
            name: 'Aries Cs｜白羊',
            content: '現任李梅樹紀念館資訊組 RD、中崙高中資訊研習社網頁設計專任講師。負責李梅樹紀念館相關官方網站之開發、設計、規劃與伺服器維護等工作。',
            meta: {
              image: 'https://i.imgur.com/QnYZZgw.jpg'
            },
            link: [
              {
                icon: ['fab', 'facebook-f'],
                url: 'https://www.facebook.com/aries0d0f'
              },
              {
                icon: ['fab', 'github'],
                url: 'https://github.com/Aries0d0f'
              }
            ]
          },
          {
            name: 'Monica｜咪咕',
            content: '現任李梅樹紀念館資訊組 IT。負責李梅樹紀念館資訊組行政及活動協助、IT 業務、數位化專案監督等工作。',
            meta: {
              image: 'https://i.imgur.com/p0M7DwM.jpg'
            },
            link: [
              {
                icon: ['fab', 'facebook-f'],
                url: 'https://www.facebook.com/monica2014939'
              },
              {
                icon: ['fab', 'github'],
                url: 'https://github.com/MonicaMigu'
              }
            ]
          }
        ]
      }
    },
    components: layout
  }
</script>