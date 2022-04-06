/**
 * Time: 2021/6/30.
 * Author: Yang PengFei
 */
import React from "react";
import { Form, Input, Button } from "antd";
import style from "../index.less";
const FormDome = ({ onFinish }) => {
  return (
    <Form name="loginForm" className={style.loginContent} onFinish={onFinish}>
      <h2 style={{ textAlign: "center" }}>后台管理系统</h2>
      <Form.Item name={"userName"}>
        <Input placeholder={"请输入手机号"} />
      </Form.Item>
      <Form.Item name={"password"}>
        <Input.Password placeholder={"请输入密码"} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormDome;
