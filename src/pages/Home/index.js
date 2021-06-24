/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

const Home = ({...props}) => {
    const { num ,incrementAsync,updateState,incrementAsyncPost} = props
    useEffect(() => {
        incrementAsync({ q:"肖申克的救赎", page: 0 })
        incrementAsyncPost()
    },[]);
    const add = () =>{
        let one = num+1
        updateState({
            num:one
        })
    }
    const jj = () =>{
        let one = num-1
        updateState({
            num:one
        })
    }
    const loginOut = () =>{
        const { history } =props
        localStorage.clear()
        history.push('/login')
    }
    return (
        <div>
            <p>{num}</p>
            <p><button onClick={add}>+1</button><button onClick={jj}>-1</button></p>
            <p><button onClick={loginOut}>退出</button></p>
        </div>
    );
};

export default connect(
    ({ home })=>({...home}),
    ({ home })=>({...home})
)(Home);
