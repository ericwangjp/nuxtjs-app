<template>
  <div>
    <h1>这里是自定义错误页</h1>
    <h2 v-if="error.statusCode === 404">页面不存在</h2>
    <h2 v-else>应用发生错误异常</h2>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  //   layout: 'blog' // 你可以为错误页面指定自定义的布局
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
