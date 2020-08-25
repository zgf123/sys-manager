<template>
  <div class="home">
    <el-container class="container">
      <Header />
      <el-container>
        <SideMenu />
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './home/header.vue'
import SideMenu from './home/side-menu.vue'

@Component({
  components: {
    Header,
    SideMenu
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.container {
  flex-direction: column;
}
.main {
  background: #f4f6fc;
  height: calc(100vh - 60px);
}
</style>
