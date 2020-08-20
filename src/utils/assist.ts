export default {
  oneOf(value: any, validList: any) {
    for (const c of validList) {
      if (value === c) {
        return true
      }
    }
    return false
  },
  // 判断类型
  typeOf(obj: any) {
    const toString: any = Object.prototype.toString
    const map: any = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    }
    return map[toString.call(obj)]
  },
  // 深拷贝
  deepCopy(data: any) {
    const t: any = this.typeOf(data)
    let o: any

    if (t === 'array') {
      o = []
    } else if (t === 'object') {
      o = {}
    } else {
      return data
    }

    if (t === 'array') {
      data.forEach((c: any, i: number) => {
        o.push(this.deepCopy(data[i]))
      })
    } else if (t === 'object') {
      for (const v of Object.keys(data)) {
        o[v] = this.deepCopy(data[v])
      }
    }
    return o
  },
  // 获取当前环境
  getEnv() {
    const hostname = window.location.hostname
    const env = ['localhost', '127.0.0.1'].some(host => host === hostname)
    if (env) {
      return 'test'
    }
    const regObj: any = hostname.match(/^[a-zA-Z]+(?:-)?([a-zA-Z]+)?\.bytedance\.(net|com)/)
    return regObj[1] || 'prd'
  }
}
