export default [
    {
        path: '/',
        name: 'index',
        component: require('./components/dashboard.vue'),
        meta: { requireAuth: true }
    }, {
        path: '/login',
        //name: 'index1',
        component: require('./components/dashboard.vue')
    }
]