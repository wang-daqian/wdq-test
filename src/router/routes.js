import getRootRoute from '@/router/modules/root';
import getErrRoute from '@/router/modules/err';

const routes = [
  getRootRoute(),

  getErrRoute()
]

export default routes
