<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-header"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="home">首页</el-menu-item>
          <el-submenu index="products">
            <template slot="title">产品服务</template>
            <el-menu-item index="products/vegetables">买菜</el-menu-item>
            <el-menu-item index="products/shopping">购物</el-menu-item>
            <el-menu-item index="products/take-out">外卖</el-menu-item>
            <el-submenu index="food">
              <template slot="title">吃喝玩乐</template>
              <el-menu-item index="products/tea">茶饮咖啡</el-menu-item>
              <el-menu-item index="products/food">甜点美食</el-menu-item>
              <el-menu-item index="products/fried">炸鸡快餐</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="message">消息中心</el-menu-item>
          <el-menu-item index="order"> 订单管理 </el-menu-item>
          <el-menu-item index="about">关于我们</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          Main
          <nuxt-child />
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'home',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header {
  background-color: #fff;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: auto;
  line-height: 600px;
}

.el-menu-header {
  width: 100%;

  .el-link {
    font-weight: normal;
  }
}
</style>
