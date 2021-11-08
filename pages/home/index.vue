<template>
  <div>
    这里是Home主页
    <el-divider></el-divider>
    <nuxt-link
      :to="{ name: 'news', params: { id: 1228, title: '国庆十一黄金周' } }"
    >
      读新闻
    </nuxt-link>

    <hr />
    <nuxt-link to="/users">跳转users主页</nuxt-link>
    <nuxt-link to="/users/1001">跳转用户详情</nuxt-link>
    <el-divider></el-divider>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'home',
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
