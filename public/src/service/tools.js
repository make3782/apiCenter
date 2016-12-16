import {API_URL_BASE} from './config';

export default {
    getUrl (query) {
        let url = API_URL_BASE + query;
        return url;
    },


    jsonToStr (json) {
        var str = '';
        if (json) {
            for (var i in json) {
                if (str == '') {
                    str = i + '=' + json[i];
                } else {
                    str += '&' + i + '=' + json[i];
                }
            }
        }
        return str;
    }
}