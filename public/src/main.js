import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from './routers'
import App from './App'
import store from './store';


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'




console.log(store);

Vue.use(ElementUI);
Vue.use(VueRouter);
//Vue.use(routerConfig);
const router = new VueRouter({ routes: routerConfig });



router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        var isLogin = Boolean(store.state.user.id)
        if (!isLogin) {
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
    store,
    router,
    el: "#app",
    render: h => h(App)
})
