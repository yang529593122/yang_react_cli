/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import React,{ useState } from 'react';
import ModalFormCom from "../../components/ModalFormCom"

//  表单配置数据
const ModalComData={
    modal:{
        title:'提交表单',
        visible:true,
        centered:true,
        cancelText:'取消',
        okText:'确定'
    },
    formData:[
        { label:"用户", name:"username", type:"input" },
        { label:"密码", name:"password", type:"password" },
        { label:"下拉", name:"select", type:"select" },
    ]
};

const Public = () => {
    const [ModalComDataState, setModalComDataState] = useState(ModalComData)
    const handledCancel = () => {
        setModalComDataState({
            ...ModalComDataState,
            modal:{
                visible:false
            },

        })
    }
    const handledOk = (data)=>{
        console.log(data)
    }
    return (
        <div>

            {/* 表单弹窗 */}
            { ModalComData.modal.visible && <ModalFormCom  {...ModalComDataState} onCancel={handledCancel} onOk={handledOk} /> }
        </div>
    );
};

export default Public;
