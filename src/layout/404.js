/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import React from "react";
import { Button, Result } from "antd";

const Nopage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default Nopage;
