/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import lazy from "./LazyComponent";

const Nopage = () => import("../layout/404");
const Login = () => import("../pages/Login");
const BaseLayout = () => import("../layout/BaseLayout");
const Public = () => import("../pages/Public");
export default () => {
  return (
    <Switch>
      <Route
        path="/"
        render={() => <Redirect to="/login" />}
        exact
        key="first"
      />
      <Route path="/login" component={lazy(Login)} exact key="login" />
      <Route path="/app" component={lazy(BaseLayout)} key="app" />
      <Route path="/public" component={lazy(Public)} key="Public" />
      <Route component={lazy(Nopage)} />
    </Switch>
  );
};
