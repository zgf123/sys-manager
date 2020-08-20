import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    [x: string]: any
    $example: {
      example1: object
      example2: object
    }
  }
}
