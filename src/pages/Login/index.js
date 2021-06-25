/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from 'react';
import {Button} from "antd";

const Login = (props) => {
    const {history} = props
    const login = ()=>{
        localStorage.setItem('token','yang')
        history.push('/app/home')
    }
    return (
        <div>
            <Button onClick={login}>登录</Button>
        </div>
    );
};

export default Login;
