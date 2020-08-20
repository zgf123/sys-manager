import Mock from 'mockjs'
import mockConfig from './config'

function initialMockData(baseUrl: string, files: any) {
  const apis = files.keys().reduce(
    (total: any, item: string) => ({
      ...total,
      ...files(item)?.default
    }),
    {}
  )
  for (const [key, value] of Object.entries(apis)) {
    const [type, url] = key.split(' ')
    Mock.mock(baseUrl + url, type.toLowerCase(), value)
  }
}

function startMock() {
  mockConfig.forEach(({ host, files }) => {
    initialMockData(host, files)
  })
  Mock.setup({
    timeout: '1000-2000'
  })
}

if (process.env.NODE_ENV === 'development' && !process.env.VUE_APP_NO_MOCK) {
  startMock()
}
