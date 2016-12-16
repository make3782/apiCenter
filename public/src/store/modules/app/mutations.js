import {
    USER_LOGIN,
    LEFT_MENU
}
from './mutation-type';

const mutations = {
    //用户登陆状态修改
    [USER_LOGIN](state, login) {
        state.user = login;
        sessionStorage.setItem('user', JSON.stringify(state.user));
        state.leftNavState = true;
        console.log("User login in", state.user);
    },

    // 左侧项目列表数据
    [LEFT_MENU](state, projs) {
        state.leftMenu = projs
    }
}

export default mutations