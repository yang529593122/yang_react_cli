/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {Button} from "antd";
import "./index.less"

const Home = ({...props}) => {
    const { num,history,incrementAsync,updateState,incrementAsyncPost} = props
    useEffect(() => {
        incrementAsyncPost()
    },[]);
    const add = () =>{
        updateState({num:num+1})
    }
    const subtraction = () =>{
        updateState({num:num-1})
    }
    const getHomeData = ()=>{
        incrementAsync({ q:"肖申克的救赎", page: 0 })
    }
    const loginOut = () =>{
        localStorage.clear()
        history.push('/login')
    }
    return (
        <div className="home">
            <p>{num}</p>
            <p>
                <Button onClick={add}>+1</Button>
                <Button onClick={subtraction}>-1</Button>
                <Button onClick={getHomeData}>send axios</Button>
            </p>
            <p><Button onClick={loginOut}>退出</Button></p>
        </div>
    );
};

export default connect(
    ({ home })=>({...home}),
    ({ home })=>({...home})
)(Home);
