import axios from 'axios'

export default class Service {
  public http: any
  public constructor(apiPath: string, autoConfigs: any) {
    this.createHttp(apiPath, autoConfigs)
  }

  public createHttp(apiPath: string, autoConfigs: any) {
    this.http = axios.create({
      baseURL: apiPath,
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      // withCredentials: true
      ...autoConfigs
    })

    // 添加请求拦截器
    this.http.interceptors.request.use(
      (config: any) => {
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    // 添加相应拦截器
    this.http.interceptors.response.use(
      (response: any) => {
        return response
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }

  public get(url: string, params: any, config: any = {}) {
    return this.http({
      method: 'get',
      url,
      params,
      ...config
    })
  }

  public post(url: string, data: any, config: any = {}) {
    return this.http({
      method: 'post',
      url,
      data,
      ...config
    })
  }

  public getResult(result: any) {
    return result.data
    /* if (result.code === '000000') return result
    throw result */
  }
}
