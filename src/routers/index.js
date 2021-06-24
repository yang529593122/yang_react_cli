/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import lazy from './LazyComponent';
const Login = () => import('../pages/Login');
const BaseLayout = ()=> import('../Layout/BaseLayout');
const Public = () => import('../pages/Public');
export default () => {
    return (
        <Switch>
            <Route path="/" render={() => <Redirect to="/login" />} exact key="first" />
            <Route path='/login' component={lazy(Login)} exact  key='login' />
            <Route path='/public' component={lazy(Public)} exact  key='public' />
            <Route path="/app" component={lazy(BaseLayout)}  key="app" />
        </Switch>
    );
};



