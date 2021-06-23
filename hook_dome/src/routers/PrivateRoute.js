/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const isLogin = localStorage.getItem("token") ? true : false;
    return isLogin ? (
        <Route
            {...rest}
            render = {
                props => <Component {...props} />
            }
        />

    ) : (
        <Redirect to="/login" />
    )
};

export default PrivateRoute;
