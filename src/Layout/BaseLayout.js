/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import React from 'react';
import {Link} from "react-router-dom"
import Routes from '../routers/subRoutes'
import { Button } from 'antd';

const Laypout = () => {
    return (
        <div>
            <nav>
                <Link to="/app/home">首页</Link>
                <Link to="/app/user">用户中心</Link>
                <Button>anni</Button>
            </nav>
            <div>
                <Routes />
            </div>
        </div>
    );
};

export default Laypout;
