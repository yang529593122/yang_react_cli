/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import axios from 'axios';
axios.defaults.timeout = 120000; // 两分钟
axios.defaults.headers.common['Content-Type'] = 'application/json';
// 请求拦截器
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response.data;
    },
    err => {
        return Promise.reject(err);
    },
);

const getRequest = (url, params = {},headers={}) => {
    return new Promise((resolve, reject) => {
        axios({
            url:url,
            method:"GET",
            params,
            headers
        }).then(res=>{
            resolve(res)
        }).catch(error => {
            reject(error);
        });
    }).catch(error => {
        console.log(error)
    });
};
const postRequest = (url, params = {},headers={}) => {
    return new Promise((resolve, reject) => {
        axios({
            url:url,
            method:"POST",
            params,
            headers
        }).then(res=>{
            resolve(res)
        }).catch(error => {
            reject(error);
        });
    }).catch(error => {
       console.log(error)
    });
}
const fileRequest = (url, data = {},headers={}) => {
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'multipart/form-data' },
            data,
            url,
        };
        axios(options).then(
            response => {
                if (response) {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            },
            err => {
                reject(err);
            },
        );
    }).catch(error => {
        console.log(error)
    });
};

export  {
    getRequest,
    postRequest,
    fileRequest
};
