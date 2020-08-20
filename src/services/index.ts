import Service from './axios'
import serviceConfig from './config'

const services = serviceConfig.reduce((total: any, item: any) => {
  return {
    ...total,
    [item.instance]: new Service(item.host, item.config)
  }
}, {})

export default services
