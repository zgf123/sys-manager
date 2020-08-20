import Mock from 'mockjs'
import baseApis from './base-api'

initialMockData(process.env.VUE_APP_BASEAPI, baseApis)

Mock.setup({
  timeout: '1000-2000'
})

function initialMockData(baseUrl: string, apis: object) {
  for (const [key, value] of Object.entries(apis)) {
    const [type, url] = key.split(' ')
    Mock.mock(baseUrl + url, type.toLowerCase(), value)
  }
}
