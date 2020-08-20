import serviceConfig from './config'

function getServices(files: any) {
  return files.keys().reduce(
    (total: any, item: any) => ({
      ...total,
      ...files(item)
    }),
    {}
  )
}

export default serviceConfig.reduce(
  (total: any, item: any) => ({
    ...total,
    [item.name]: getServices(item.files)
  }),
  {}
)
