/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from 'react';
import {Button} from "antd";

const Login = (props) => {
    const {history} = props
    let url= history.location.search ? history.location.search.slice(5,history.location.search.length) : '/app/home'
    const login = ()=>{
        localStorage.setItem('token','yang')
        history.push(url)
    }
    return (
        <div>
            <Button onClick={login}>登录</Button>
        </div>
    );
};

export default Login;
