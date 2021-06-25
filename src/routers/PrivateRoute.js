/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, location, isLogin, ...rest }) => {
    const token = localStorage.getItem("token") ? true : false;
    return isLogin ? (
                 token ? <Route
                    {...rest}
                    render = {
                        props => <Component {...props} />
                    }
                /> : (<Redirect to={`/login?url=${location.pathname}`} />)

    ) : (
        <Route
            {...rest}
            render = {
                props => <Component {...props} />
            }
        />
    )
};

export default PrivateRoute;
