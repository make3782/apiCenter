export default [
    {
        path: '/',
        name: 'index',
        component: require('./components/dashboard.vue'),
        meta: { requireAuth: true }
    }, {
        path: '/login',
        name: 'login1',
        component: require('./views/login/')
    }, {
        path: '/project/:id/dashboard',
        name: 'dashboard',
        component: require('./views/dashboard/index.vue'),
        meta: { requireAuth: true }
    }
]