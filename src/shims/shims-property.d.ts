import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $example: {
      example1: object
      example2: object
    }
  }
}
