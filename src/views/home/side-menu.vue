<template>
  <el-aside class="aside" :style="{ width: '200px' }">
    <el-menu :default-active="defaultActive" class="aside-menu" :collapse="isCollapse" router>
      <el-submenu index="user">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">菜单一</span>
        </template>
        <el-menu-item index="/home/user-info">我的信息</el-menu-item>
        <el-menu-item index="/home/user-articles">我的文章</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/pre-code">
        <template slot="title">
          <i class="el-icon-document-checked"></i>
          <span slot="title">Pre Code</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/home/typescript">
        <template slot="title">
          <i class="el-icon-bicycle"></i>
          <span slot="title">TypeScript</span>
        </template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private isCollapse: boolean = false
  private defaultActive: string = ''
  private created() {
    this.defaultActive = this.$route.path
  }
}
</script>

<style lang="less" scoped>
.aside-menu {
  height: calc(100vh - 60px);
  border-right: none;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0);
}
</style>
