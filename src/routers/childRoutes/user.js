import home from "./home";

/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */

// 用户模块
export const user=[
    {
        path: '/app/user',
        name:'user',
        component: ()=> import('../../pages/User'),
    }
]
export default user

