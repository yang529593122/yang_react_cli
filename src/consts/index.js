/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
// 定义常量
console.log('当前项目运行环境 ----->', process.env.REACT_APP_ENV)

const BaseUrl ={
    dev:'http://127.0.0.1:8000', // 开发环境
    test:"",                     // 测试环境
    pre:"",                      // 预生产环境
    prod:"",                      // 生产环境
}[process.env.REACT_APP_ENV]


export {
    BaseUrl
}

export const FormData = [
    { label:"用户", name:"username", type:"input" },
    { label:"密码", name:"password", type:"password" },
    { label:"下拉", name:"select", type:"select" },
]