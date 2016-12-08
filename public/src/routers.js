export default [
    {
        path: '/',
        name: 'index',
        component: require('./components/dashboard.vue'),
        meta: { requireAuth: true }
    }, {
        path: '/login',
        name: 'login',
        component: require('./components/login.vue')
    }
]