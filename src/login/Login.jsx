import React from 'react'
import Footer from '@c/footer/Footer'
import { Form, Input, InputNumber, Button } from 'antd';
import {withRouter} from 'react-router-dom'
import img from '@a/imgs/logo.png'
import   StyReg  from './Stylewarp'

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

const Regsite = (props) => {
   const onFinish = (values) => {
      
       const {name,password} = values.user
      if(name.trim().length<4 || name.trim().length>8){
         alert("请输入4-8位的用户名")
         return
      }
      if(password.trim().length<6 || password.trim().length>15){
         alert("请输入6-15位的密码")
         return
      }
   
      const userList = JSON.parse(localStorage.getItem('userList'))||[];
      console.log(userList);
      let userNew = userList.filter(v=>v.username===name)
      // console.log(userNew);
      if(userNew.length>0){
         console.log(userNew);
         if(userNew[0].username ===name){
            alert("登陆成功"); 
            localStorage.setItem("userNew",JSON.stringify(userNew[0]));
            localStorage.setItem("log",true)
            props.history.push("/api/home/browse");

         }else{
            alert("账号密码错误，请重新登陆")
         }
         return
      }else{
         alert("该账户还未注册，请先注册")
      }
     
   };
   function clickHandle(){
         props.history.push("/api/reg")
      }
   return (
      <StyReg>
         
         <div>
            <div className="tp">
               <img src={img} alt="" />
               <span>登录页面</span>
            </div>
         </div>
         <div className='box'>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className="conte">
               <h2>欢迎登录</h2>
               <Form.Item name={['user', 'name']} label="用户名：" 
               rules={[{ required: true, message: '请按规则填写用户名' }]}
              
               >
                  <Input />
               </Form.Item>
               <Form.Item name={['user', 'password']} label="密码：" 
               rules={[{ required: true, message: '请按规则填写密码' }]}
               >
                  <Input   type="password"/>
               </Form.Item>
               <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                  <Button type="primary"  htmlType="submit">
                   登录
                  </Button>
                
               </Form.Item>
               <Form.Item wrapperCol={{position:'relative' }}>
                  <Button className="abs" type="primary"  >
                   <span onClick={clickHandle}>去注册</span>
                  </Button>
                
               </Form.Item>
            </Form>
         </div>
         <Footer></Footer>
      </StyReg>
   );
};
const Regsiter  = withRouter(Regsite)



export default Regsiter
