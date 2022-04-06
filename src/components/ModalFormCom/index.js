/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
// 公共的组建
import React from "react";
import { Form, Input, Modal, Select } from "antd";

const ModalFormCom = ({ formData, modal, onCancel, onOk }) => {
  const renderItem = (item, index) => {
    switch (item.type) {
      case "input":
        return (
          <Form.Item key={index} {...item}>
            <Input />
          </Form.Item>
        );
        break;
      case "password":
        return (
          <Form.Item key={index} {...item}>
            <Input.Password />
          </Form.Item>
        );
        break;
      case "select":
        return (
          <Form.Item key={index} {...item}>
            <Select allowClear>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="lusdfcy">sdf</Select.Option>
            </Select>
          </Form.Item>
        );
        break;
      default:
        console.log("输入的数据有无");
        break;
    }
  };
  return (
    <Modal
      {...modal}
      onCancel={() => {
        onCancel();
      }}
      okButtonProps={{ form: "ModalFormId", key: "submit", htmlType: "submit" }}
    >
      <Form id="ModalFormId" onFinish={onOk}>
        {formData.map((item, index) => renderItem(item, index))}
      </Form>
    </Modal>
  );
};

export default ModalFormCom;
