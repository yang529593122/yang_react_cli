/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
// 定义常量
console.log(process.env.REACT_APP_ENV,999)

const BaseUrl ={
    dev:'http://127.0.0.1:8000',
    test:"2"
}[process.env.REACT_APP_ENV]


export {
    BaseUrl
}