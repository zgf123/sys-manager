<template>
  <div class>
    <h1>TypeScript</h1>
  </div>
</template>>
<script lang="ts">
// tslint:disable
import { Component, Vue } from 'vue-property-decorator'
import Interface from '@/utils/typescritp/interface'
import Class from '@/utils/typescritp/class'
import Function from '@/utils/typescritp/function'

@Component
export default class extends Vue {
  private mounted() {
    console.log(Function)
  }
}
</script>
