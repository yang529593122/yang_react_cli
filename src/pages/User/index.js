/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import React from "react";
import { Button } from "antd";

const User = (props) => {
  const { history } = props;
  const loginOut = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      <p>
        <Button onClick={loginOut}>退出</Button>
      </p>
    </div>
  );
};

export default User;
