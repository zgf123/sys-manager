import Service from '../axios'
import * as Json from './json'

const apiPath: any = process.env.VUE_APP_BASEAPI
export const http = new Service(apiPath)

export default {
  ...Json
}
