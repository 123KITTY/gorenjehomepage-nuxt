export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'gorenjechina',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width user-scalable=no initial-scale=1.0 maximum-scale=1.0 minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Gorenje集团诞生于1950年，总部位于斯洛文尼亚。欧洲四大家电集团之一，企业经过近70载的发展，成为彩色家电第一品牌，在我们的产品中，家电不仅仅是黑色和白色，而是色彩缤纷的，能给消费者带来全新的美学体验。跟gorenje合作的世界顶级设计室或设计师不胜枚举，如意大利跑车设计工作室宾尼法利纳（Pininfarina）、法国鬼才设计师OraIto、法国教父级设计师菲利普 斯塔克（Philippe Starck）、美国设计师卡里姆拉希德（Karim Rachid）等' },
      { hid: 'keywords', name: 'keywords', content: 'gorenje,gorenje官网,gorenje中国官网,gorenje保温抽屉,gorenje冰箱,gorenje干衣机,gorenje厨房电器,gorenje油烟机,gorenje烤箱,gorenje微波炉gorenje吸尘器,gorenje咖啡机,gorenje灶具,gorenje吸尘器,gorenje嵌入式咖啡机' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router:{
    base: "./" //此为根目录，如果有具体目录需求按实际情况写
  },    
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/view-design', ssr: true},
    { src: '~plugins/vue-awesome-swiper', ssr: true }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^view-design/],
    postcss: {
      plugins: {
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
          autoprefixer: {
            grid: true
          }
        }
      }
  }
}
