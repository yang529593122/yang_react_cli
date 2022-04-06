/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
// 公共的组建
import React from "react";
import { Form, Input, Modal, Select } from "antd";

const ModalFormCom = ({ formData, modal, onCancel, onOk }) => {
  const renderItem = (item) => {
    switch (item.type) {
      case "input":
        return <Input />;
        break;
      case "password":
        return <Input.Password />;
        break;
      case "select":
        return (
          <Select allowClear>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="lusdfcy">sdf</Select.Option>
          </Select>
        );
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
        {formData.map((item, index) => {
          return (
            <Form.Item key={index} {...item}>
              {renderItem(item)}
            </Form.Item>
          );
        })}
      </Form>
    </Modal>
  );
};

export default ModalFormCom;
