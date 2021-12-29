import urlTemplate from 'url-template'

export function applyUrlTemplate (config) {
  if (config.pathParams) {
    config.url = urlTemplate.parse(config.url).expand(config.params)
    config.pathParams.forEach(key => delete config.params[key])
  }
  if (config.delData) {
    config.data = config.params[config.delData]
    delete config.params[config.delData]
  }
  return config
}

export function applyDefaultParams (config) {
  config.params = { ...config.defaultParams, ...config.params }
  if (config.defaultData && !(config.data instanceof FormData)) {
    config.data = { ...config.defaultData, ...config.data }
    if (Object.keys(config.data).length === 0) {
      config.data = null
    }
  }
  return config
}
