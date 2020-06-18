/**
 * 封装axios
 */
import axios from "axios"
import router from "../router/routes.js"

/**
 * 返回登陆页面
 */
const tologin = () => {
    router.push({
        path: '/login'
    })
}

/**
 * 错误验证
 * @param {错误状态} status 
 * @param {错误信息} other 
 */
const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log("信息校验失败");
            break;
        case 401:
            tologin();
            console.log("认证失败");
            break;
        case 403:
            tologin();
            storage.setItem('token', '')
            //store.commit('settoken', '')
            //localStorage.removeItem("token");// 删除vueX的token里
            console.log("token校验失败");
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log(other);
            break;
    }
}

// var bsaeUrl = process.env.NODE_ENV === 'production' ? "/ehr2kanui" : "";
var bsaeUrl ="http://localhost:9471/";
/**
 * 创建axios实例
 */
var instance = axios.create({ timeout: 10000 })
instance.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';

/**
 * 拦截请求
 */
instance.interceptors.request.use(function (config) {
    
    var postData = {
        method: "Post",
        url: config.url,
        data: config.data,
        token:window.localStorage.getItem('token') // store.state.token
    };
    debugger;

   config.url = bsaeUrl + "/api/apiWrapper/do";
    config.data = postData;
    return config;
}, function (error) {
    return Promise.reject(error);
})

/**
 * 拦截响应
 */
instance.interceptors.response.use(
    /**
     * 请求成功
     */
    res => JSON.parse(res.data), //res.status === 200 ? res.data : res.data,
    /**
     * 请求失败
     */
    error => {
        const { response } = error;
        if (response) {
            errorHandle(response.status, response.data.Message);
            return Promise.reject(response);
        } else {
            console.log("未连接");
        }
    }
)

export default instance
