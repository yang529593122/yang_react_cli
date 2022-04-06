/**
 * Time: 2021/8/26.
 * Author: Yang PengFei
 */
import React from "react";
import { Button } from "antd";

const PhoneTimeCom = ({ value, getCode }) => {
  return (
    <>
      <Button onClick={getCode}>{value}</Button>
    </>
  );
};
export default PhoneTimeCom;
