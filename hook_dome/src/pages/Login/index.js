/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from 'react';

const Login = (props) => {
    const login = ()=>{
        const {history} = props
        localStorage.setItem('token','yang')
        history.push('/app/home')
    }
    return (
        <div>
            <button onClick={login}>登录</button>
        </div>
    );
};

export default Login;
