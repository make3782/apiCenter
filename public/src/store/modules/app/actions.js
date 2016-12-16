import Vue from 'vue';
import tools from '../../../service/tools';



/**
 * 用户登陆
 *
 * @return {Promise}
 */
export const userLogin = ({ commit }, obj) => {
    const url = tools.getUrl('/user/login');
    return new Promise((resolve, reject) => {
        Vue.http.post(url, obj).then((response) => {
            let ret = JSON.parse(response.body);
            if (ret.code >= 0) {
                commit('USER_LOGIN', ret.data);
                resolve(response.body);

            } else {
                reject(new Error(ret.msg));
            }
        }, (reason) => {
            reject(new Error(reason));
            }
        ).catch((error) => {
            reject(error);
        })
    })
}

/**
 * 加载用户左侧项目列表
 *
 * @return {Promise}
 */
export const getProjectList = ({ commit }) => {
    const url = tools.getUrl('/project/');
    Vue.http.get(url).then((response) => {
        let ret = JSON.parse(response.body);
        if (ret.code >= 0) {
            commit("LEFT_MENU", ret.data);
        } else {
            // alert
        }
    }).catch((error) => {
        // alert error
    })
}