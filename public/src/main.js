import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routerConfig from './routers'
import App from './App'
import store from './store';


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';
import './assets/css/global.less';


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
const router = new VueRouter({ routes: routerConfig });



router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        console.log(store.state.app.user);
        var isLogin = Boolean(store.state.app.user.id)
        if (!isLogin) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next();
        }
    } else {
        next();
    }
});


new Vue({
    store,
    router,
    el: "#app",
    render: h => h(App)
});

