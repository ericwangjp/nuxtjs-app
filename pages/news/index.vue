<template>
  <div>
    新闻主页
    <el-divider></el-divider>
    <nuxt-link
      :to="{ name: 'news-id', params: { id: 1228, title: '国庆十一黄金周' } }"
    >
      新闻详情
    </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  // middleware: 'states'
  middleware() {
    console.log('middleware in page')
  },
  validate({ params, query }) {
    // 校验参数的合法有效性
    // return /^\d+$/.test(params.id)
    return true
  },
  // transition:'动画名',
  beforeRouteLeave(to, from, next) {
    // 后置路由守卫
    next()
  },
  // 在服务器端调用asyncData时，可以访问用户请求的req和res对象
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios,
  }) {
    // 请检查您是否在服务器端
    // 使用 req 和 res
    if (process.server) {
      return { host: req.headers.host }
    }
  },
  // 会自动将数据同步到vuex
  fetch({ $axios }) {},
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped></style>
