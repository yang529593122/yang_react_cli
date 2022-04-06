/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from "react";
import FormDome from "./FormDome";
import style from "./index.less";

const Login = (props) => {
  const { history } = props;
  let url = history.location.search
    ? history.location.search.slice(5, history.location.search.length)
    : "/app/home";
  const onFinish = () => {
    localStorage.setItem("token", "yang");
    history.push(url);
  };
  return (
    <div className={style.login}>
      <FormDome onFinish={onFinish} />
    </div>
  );
};

export default Login;
