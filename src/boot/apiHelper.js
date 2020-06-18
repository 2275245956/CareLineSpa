import axios from "./fetch"

const api = {
    /**
     * 登录验证
     */
    Login(param) {
        return axios.post('api/Patient/Login', param);
    }
   
}

export default api
