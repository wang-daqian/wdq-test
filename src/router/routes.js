import getRootRoute from '@/router/modules/root'
import getExampleRoute from '@/router/modules/example'
import getErrRoute from '@/router/modules/err'

const routes = [
  getRootRoute(),

  getExampleRoute(),

  getErrRoute()
]

export default routes
