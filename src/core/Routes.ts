interface AdminRoute {
  type: 'Secure' | 'Normal',
  path: string,
  component: any,
  layout: any
}

const routes: AdminRoute[] = [{
  type: 'Secure',
  path: '',
  component: '',
  layout: ''
}]

export default routes
