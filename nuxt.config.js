export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css?family=Roboto',
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // 不支持 ssr 的系统，插件只在浏览器里使用，可以用 ssr: false
    // 您可以通过检测process.server这个变量来控制插件中的某些脚本库只在服务端使用。
    // 当值为 true 表示是当前执行环境为服务器中
    // 可以通过检查process.static是否为true来判断应用是否通过nuxt generator生成
    // ssr:false 在下一个主要版本中弃用,将过渡为 mode: 'client'
    // 可能的值是：client 或 server
    '@/plugins/element-ui',
    { src: '~/plugins/common.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true }, // ssr:true 开启服务端渲染
    // 如果假设插件仅在 客户端 或 服务器端 运行，则 .client.js 或 .server.js可以作为插件文件的扩展名应用，
    // 该文件将自动包含在相应客户端或者服务端上
    // '~/plugins/foo.client.js', // only in client side
    // '~/plugins/bar.server.js', // only in server side
    // '~/plugins/baz.js' // both client & server
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // Nuxt 可以在您的模板中使用时自动导入您的组件,在 components 目录中创建组件后，
  // 它们将在整个应用程序中可用，而无需导入它们。
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // 随处直接使用定义过的变量或函数
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // 配置开发代理
    // proxy:true
    // prefix: '/api', // baseUrl
  },
  // proxy:{
  //   '/api': {
  //     target: 'http://localhost:3000',
  //     changeOrigin:true,
  //     pathRewrite: {
  //       '^/api' : '/'
  //     }
  // }

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  //  加载进度条配置
  loading: {
    color: '#459997',
    height: '3px',
  },
  // 或者直接指定自定义的loading组件
  // loading:'~/components/loading.vue'
  router: {
    // 中间件
    middleware: 'auth',
    // 扩展路由
    // extendRoutes(routes, resolve) {
    // routes.push({
    //   name: 'home',
    //   path: '/index',
    //   components: resolve(__dirname, 'pages/home/index.vue'),
    // })
    // },
  },
  // publicRuntimeConfig在服务端和客户端都可用。通过$config
  // publicRuntimeConfig: {
  //   baseURL: process.env.BASE_URL,
  // },
  // privateRuntimeConfig只在服务端可用。通过$config
  // privateRuntimeConfig: {
  //   baseURL: '${PUBLIC_URL}${BASE_URL}',
  //   API_SECRET: '${API_SECRET}' // similar to using process.env.API_SECRET
  // },
  env: {
    // 可以通过以下两种方式来使用 baseUrl 变量：
    // 通过 process.env.baseUrl
    // 通过 context.baseUrl
    // asyncData(context) {
    // return { url: context.baseUrl }
    // }
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  server: {
    // port: 8000, // default: 3000
    // host: '0.0.0.0' // default: localhost,
  },
  // 用于设置页面切换过渡效果的默认属性值
  // Nuxt.js 默认使用的过渡效果名称为 page
  // transition: 'page'
  // or
  transition: {
    // name: 'page',  // default value
    // mode: 'out-in',  // default value
    // beforeEnter (el) {
    //   console.log('Before enter...');
    // }
  },
}
