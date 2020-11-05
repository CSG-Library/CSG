import React from 'react'
import Footer from '@c/footer/Footer'

import { Form, Input, InputNumber, Button } from 'antd';

import { StyReg } from '../login/Stylewarp'
import img from '@a/imgs/logo.png'

const layout = {
   labelCol: { span: 8 },
   wrapperCol: { span: 16 },
};

const validateMessages = {
   required: '${label} is required!',
   types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
   },
   number: {
      range: '${label} must be between ${min} and ${max}',
   },
};

const Regsiter = () => {
   const onFinish = values => {
      console.log(values);
   };

   return (
      <StyReg>
         <div>
            <div className="tp">
               <img src={img} alt="" />
            </div>
         </div>
         <div className='box'>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className="conte">
               <Form.Item name={['user', 'name']} label="用户名：" rules={[{ required: true }]}>
                  <Input />
               </Form.Item>
               <Form.Item name={['user', 'email']} label="邮箱：" rules={[{ type: 'email' }]}>
                  <Input />
               </Form.Item>
               <Form.Item name={['user', 'website']} label="电话：">
                  <Input />
               </Form.Item>

               <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                     提交
         </Button>
               </Form.Item>
            </Form>
         </div>
         <Footer></Footer>
      </StyReg>
   );
};




export default Regsiter
