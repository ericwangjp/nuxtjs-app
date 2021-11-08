<template>
  <div>
    <h3>这里是新闻详情页</h3>
    <h4>asyncData：{{ name }}</h4>
    <h4>asyncData,文件名：{{ fName }}</h4>
    <p>基于动态路由，新闻id：{{ newsId }}</p>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  // 在任何 Vue 组件的生命周期内，只有 beforeCreate 和 created 这两个方法会在客户端和服务端被调用。
  // 其他生命周期函数仅在客户端被调用
  // 参数校验，不合法，则跳转404
  validate({ params }) {
    //   必须是数字
    return /^\d+$/.test(params.id)
  },
  head() {
    return {
      // 设置传入的页面标题
      title: this.title,
      meta: [
        //   hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'news-detail',
          name: 'aa',
          content: 'content desc',
        },
      ],
    }
  },
  transition: 'test',
  // 默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
  // scrollToTop:false,
  asyncData(context) {
    // console.log('新闻详情：', context)
    const fName = context.params.id
    return { name: 'hello world', fName }
  },
  // fetch	与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。
  // 不同的是 fetch 方法不会设置组件的数据
  fetch() {},
  // 使用watchQuery属性可以监听参数字符串的更改。 如果定义的字符串发生变化，
  // 将调用所有组件方法(asyncData, fetch, validate, layout, ...)。 为了提高性能，默认情况下禁用
  // 如果您要为所有参数字符串设置监听， 请设置： watchQuery: true
  // watchQuery: ['page'],
  components: {},
  data() {
    return {
      title: this.$route.params && this.$route.params.title,
    }
  },
  computed: {
    newsId() {
      return this.$route.params && this.$route.params.id
    },
  },
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
.test-enter-active,
.test-leave-active {
  transition: opacity 0.5s;
}

.test-enter,
.test-leave-active {
  opacity: 0;
}
</style>
