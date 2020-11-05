import React,{ useCallback } from 'react'

import Footer from '@c/footer/Footer'

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

import { StyLogin } from './Stylewarp'
import img from '@a/imgs/logo.png'

const Login = (props) => {
   const onFinish = values => {
      console.log('Received values of form: ', values);
   };

   let {history} = props;
   // const history = useHistory()
   // console.log(useHistory())
   const handleClick = useCallback(
      () => {
         // history.push('/reg')
      },
      [history]
   )

   return (
      <StyLogin>
         <div>
            <div className="tp">
               <img src={img} alt="" />
            </div>
         </div>
         <main className="box">
            <Form
               name="normal_login"
               className="login-form"
               initialValues={{ remember: true }}
               onFinish={onFinish}
            >
               <Form.Item
                  name="用户名："
                  rules={[{ required: true, message: 'Please input your Username!' }]}
               >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
               </Form.Item>
               <Form.Item
                  name="密码："
                  rules={[{ required: true, message: 'Please input your Password!' }]}
               >
                  <Input
                     prefix={<LockOutlined className="site-form-item-icon" />}
                     type="password"
                     placeholder="请输入密码"
                  />
               </Form.Item>
               <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                     <Checkbox></Checkbox>
                  </Form.Item>
                  <a className="login-form-forgot" href="">永久记住！！！</a>
               </Form.Item>
               <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
                  <a href="" onClick={handleClick()}>现在注册</a>
               </Form.Item>
            </Form>
         </main>
         <Footer></Footer>
      </StyLogin>
   );
};

export default withRouter(Login)

/* export default (props) => {
   return (
      <div>
         <div>
            <img src="" alt="" />
         </div>
         <div>

         </div>
         <Footer></Footer>
      </div>
   )
} */