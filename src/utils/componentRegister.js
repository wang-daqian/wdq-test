export default (app) => {
  const requireComponents = import.meta.globEager("/src/components/common/Base*.vue")
  for (let i in requireComponents) {
    const component = requireComponents[i].default || requireComponents[i]
    const componentName = i.split("/")[i.split("/").length - 1].replace(".vue", "")
    app.component(componentName, component)
  }
}