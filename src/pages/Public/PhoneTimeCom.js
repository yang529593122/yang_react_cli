/**
 * Time: 2021/8/26.
 * Author: Yang PengFei
 */
import React, { useState } from "react";
import PhoneTimeCom from "../../components/PhoneTimeCom";
const defaultData = {
  value: "获取验证码",
};
const Index = () => {
  const [phoneData, setPhoneData] = useState(defaultData);
  const getCode = () => {
    let num = 60;
    let Timer = setInterval(() => {
      if (num > 1) {
        setPhoneData({
          ...phoneData,
          value: `${--num}s`,
        });
      } else if (num == 1) {
        setPhoneData({
          ...phoneData,
          value: "获取验证码",
        });
        clearInterval(Timer);
      }
    }, 1000);
  };
  return (
    <div>
      <PhoneTimeCom {...phoneData} getCode={getCode} />
    </div>
  );
};

export default Index;
