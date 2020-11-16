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
      const {name,email,rPassword,password} = values.user
      if(name.trim().length<4 || name.trim().length>8){
         alert("请输入4-8位的用户名")
         return
      }
      if(password.trim().length<6 || password.trim().length>15){
         alert("请输入6-15位的密码")
         return
      }
      if(rPassword.trim().length<6 || rPassword.trim().length>15){
         alert("请输入6-15位的确认密码")
         return
      }
      if(!rPassword===password){
         alert("请填入与相同的密码")
         return
      }
   
      const date ={
         "id":new Date().getTime()+ Math.floor(Math.random()*1000),
         "username": name,
         "password":password,
         "sex": 0,
         "address": "**" ,
         "birthday": "**",
         "qq": "**",
         "email":email,
         "introduction":"**",
      }
      // console.log(date);
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
               <Form.Item name={['user', 'name']} label="用户名：" 
               rules={[{ required: true, message: '请按规则填写用户名' }]}
              
               >
                  <Input />
               </Form.Item>
               <Form.Item name={['user', 'password']} label="密码：" 
               rules={[{ required: true, message: '请按规则填写密码' }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item name={['user', 'rPassword']} label="确认密码：" 
               rules={[{ required: true, message: '密码请与上面保持一致' }]}
               >
                  <Input />
               </Form.Item>
               <Form.Item name={['user', 'email']} label="邮箱："
               rules={[{ required: true, message: '请按规则填写邮箱' }]}
               >
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
