<template>
  <el-header class="header">
    <div class="header-left">Daypop 后台管理系统</div>
    <div class="header-right"></div>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="less" scoped>
.header {
  color: #333;
  display: flex;
  padding: 0;
  font-weight: 500;
  border-bottom: 1px solid #eee;
}
.header-left {
  margin-right: auto;
  line-height: 60px;
  padding-left: 20px;
}
.header-right {
  height: 60px;
  flex: 1;
}
</style>
