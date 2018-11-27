<template>
  <div id="footer">
    <div class="icon">
      <div class="logo" @click="openMainSite()">
        <img src="../../assets/images/icons/logo-min.svg" alt="">
      </div>
      <ul>
        <li v-for="(link, i) in socialLink" :key="i"><a target="_blank" :href="link.href"><font-awesome-icon :icon="link.icon" /></a></li>
      </ul>
      <div class="policy">
        <a v-for="item in policy[language]" target="_blank" :href="item.link" :key="item.name">{{ item.name }}</a>
      </div>
    </div>
    <div class="copyright" v-html="copyright[language]"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: 'zh-TW',
      socialLink: [
        {
          icon: ['fab', 'facebook-f'],
          name: 'Facebook 粉絲專頁',
          href: 'https://fb.com/limeishu.org'
        },
        {
          icon: ['fas', 'phone'],
          name: '電話',
          href: 'tel:0226732333'
        },
        {
          icon: ['fas', 'fax'],
          name: '傳真',
          href: 'tel:0226736077'
        },
        {
          icon: ['fas', 'envelope'],
          name: '電子郵件',
          href: 'mailto:limeishu@gmail.com'
        },
        {
          icon: ['fab', 'github'],
          name: 'GitHub',
          href: 'https://github.com/Limeishu'
        },
        {
          icon: ['fab', 'youtube'],
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCJNhAJ83HO8rTeJHdoMtZJQ'
        }
      ],
      policy: {
        'zh-TW': [
          {
            name: '隱私權政策',
            link: '/about/privacy'
          },
          {
            name: '支持我們',
            link: '/about/sponsor'
          }
        ],
        'en': [
          {
            name: 'Privacy Notice',
            link: '/about/privacy'
          },
          {
            name: 'Sponsor',
            link: '/about/sponsor'
          }
        ],
        'ja': [
          {
            name: 'プライバシー通知',
            link: '/about/privacy'
          },
          {
            name: 'スポンサー',
            link: '/about/sponsor'
          }
        ],
        'ko': [
          {
            name: '개인 정보 보호 알림',
            link: '/about/privacy'
          },
          {
            name: '스폰서',
            link: '/about/sponsor'
          }
        ]
      },
      copyright: {
        'zh-TW': `<p>© 1995 - ${new Date().getFullYear()} 李梅樹紀念館</p><p>本著作係採用 <a href="https://raw.githubusercontent.com/Limeishu/limeishu.org/beta/LICENSE" target="_blank">MIT 授權條款</a> 授權.</p><p>我們推薦使用 <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> 瀏覽以獲得更好的瀏覽體驗。</p>`,
        'en-US': `<p>© 1995 - ${new Date().getFullYear()} Li Mei-shu Memorial Gallery</p><p>This work is licensed under the <a href="https://raw.githubusercontent.com/Limeishu/limeishu.org/beta/LICENSE" target="_blank">MIT License</a>.</p><p>We recommend <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> for a better browsing experience.</p>`,
        'ja': `<p>© 1995 - ${new Date().getFullYear()} 李梅樹記念館</p><p>この作品は、<a href="https://raw.githubusercontent.com/Limeishu/limeishu.org/beta/LICENSE" target="_blank">MIT ライセンス</a> の下でライセンスされています。</p><p>より良いブラウジングエクスペリエンスのために <a href="https://www.mozilla.org/firefox/" target="_blank">Firefox Quantum</a> をお勧めします。</p>`
      }
    }
  },
  methods: {
    openMainSite () {
      window.open('https://limeishu.org.tw')
    }
  }
}
</script>
