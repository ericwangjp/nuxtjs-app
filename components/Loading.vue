<template>
  <div>
    <div v-if="showLoading">加载中...</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showLoading: false,
    }
  },
  computed: {},
  methods: {
    // nuxt约定好的这2个控制进度条方法
    start() {
      this.showLoading = true
    },
    finish() {
      this.showLoading = false
    },
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped></style>
