<template>
  <div class="user-articles">
    <h1>user-articles</h1>
    <ul>
      <li v-for="(item, index) in dataList" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private isCollapse: boolean = false
  private dataList: any[] = []
  private async mounted() {
    const { data } = await this.$BaseService.getJson()
    this.dataList = data.list
  }
}
</script>
