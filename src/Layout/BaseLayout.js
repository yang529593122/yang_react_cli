/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import React from 'react';
import {Link} from "react-router-dom"
import Routes from '../routers/subRoutes'
import "./styles/index.less"

const Laypout = () => {
    return (
        <div>
            <nav className="nav">
                <Link className='link_a' to="/public">公有路由</Link>
                <Link className='link_a' to="/app/home">首页</Link>
                <Link className='link_a' to="/app/user">用户中心</Link>
            </nav>
            <Routes />
        </div>
    );
};

export default Laypout;
