<template>
  <div>
    <h3>
      前端页面展示代码有：
      <a href="https://prismjs.com/extending.html" target="__blank">prismjs(简书用的就是这个)</a>、
      <a href="https://github.surmon.me/vue-codemirror/" target="__blank">vue-codemirror</a>、
      <a href="https://highlightjs.org/" target="__blank">highlightjs</a>、
    </h3>
    <pre
      class="line-numbers language-javascript"
    ><code class="language-javascript">{{code}}</code></pre>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private code: string = `function aaa() {
  console.log(1)
}`
  private mounted() {
    window.Prism.highlightAll()
  }
}
</script>
