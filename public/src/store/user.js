import Vue from 'vue';
export const USER_SIGNIN = 'USER_SIGNIN';   // 登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT'; // 退出登录

export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},

    mutations: {
        [USER_SIGNIN](state, user) {
            console.log("comming in mutations");
            console.log(user);
            sessionStorage.setItem('user', user);
        }

    },

    actions: {
        [USER_SIGNIN]({commit}, user) {
            // ajax...
            Vue.http.get('http://localhost/api.php').then((response) => {
                commit(USER_SIGNIN, response.body);
            }, (reason) => {
                // error
            })
            // commit(USER_SIGNIN, user)
        }
    }
}