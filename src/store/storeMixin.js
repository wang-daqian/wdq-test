const attributes = ['state', 'getters', 'actions', 'mutations']

export function applyMixin (rawModule) {
  if (rawModule.mixins) {
    attributes.forEach(attribute => {
      rawModule[attribute] = Object.assign(
        {},
        ...rawModule.mixins.map(mixinModule => mixinModule[attribute]),
        rawModule[attribute]
      )
    })
  }
  if (rawModule.modules) {
    rawModule.modules = Object.keys(rawModule.modules).reduce((ret, name) => {
      ret[name] = applyMixin(rawModule.modules[name])
      return ret
    }, {})
  }
  return rawModule
}
