<template>
  <el-aside class="aside" :style="{ width: '200px' }">
    <el-menu default-active="/home/user-info" class="aside-menu" :collapse="isCollapse" router>
      <el-submenu index="/home">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">菜单一</span>
        </template>
        <el-menu-item index="/home/user-info">我的信息</el-menu-item>
        <el-menu-item index="/home/user-articles">我的文章</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private isCollapse: boolean = false
}
</script>

<style lang="less" scoped>
.aside-menu {
  height: calc(100vh - 60px);
}
</style>
