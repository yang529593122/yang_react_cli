/**
 * Time: 2021/6/30.
 * Author: Yang PengFei
 */
import React from 'react';
import { Form, Input, Button, Checkbox,Select } from 'antd';
import { FormData } from "../../../consts"

const FormDome = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const renderItem = (item) => {
        switch (item.type){
            case 'input':
                return <Input />
                break
            case 'password':
                return <Input.Password />
                break
            case 'select':
                return (
                    <Select  allowClear>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="lusdfcy">sdf</Select.Option>
                    </Select>
                )
                break
        }


    }
    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {
                    FormData.map((item,index) => {
                        return (
                            <Form.Item
                                key={index}
                                label={ item.label }
                                name={ item.name }
                            >
                                {renderItem(item)}
                            </Form.Item>
                        )
                    })
                }

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 10,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default FormDome;
