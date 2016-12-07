import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './routers'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'

Vue.use(ElementUI);
Vue.use(VueRouter);
//Vue.use(routerConfig);
const router = new VueRouter({ routes: routerConfig });



router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!auth.loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath}
            })
        } else {
            next();
        }
    } else {
        next();
    }
})


new Vue({
    router,
    el: "#app",
    render: h => h(App)
})
