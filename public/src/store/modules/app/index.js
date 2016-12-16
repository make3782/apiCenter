import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

// 定义状态
const state = {
    user: JSON.parse(sessionStorage.getItem('user')) || {},
    leftNavState: JSON.parse(sessionStorage.getItem('user')) || false,
    leftMenu: {}
}

export default {
    state,
    getters,
    actions,
    mutations
}