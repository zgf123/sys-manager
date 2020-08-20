import Mock from 'mockjs'

export default {
  'GET /api/v1/json': Mock.mock({
    code: 0,
    message: '',
    data: {
      'list|1-10': [
        {
          'id|+1': 1,
          'title|1': '@cparagraph'
        }
      ]
    }
  })
}
