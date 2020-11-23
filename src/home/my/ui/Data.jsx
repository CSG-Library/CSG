import React, { Component } from 'react'
import { Tabs } from 'antd';
import {withRouter} from 'react-router-dom'

import { StyData, StyDatum } from './Stylemy'
const { TabPane } = Tabs;
const user = JSON.parse(localStorage.getItem('userNew'))
@withRouter
class Data extends Component {
   constructor(props) {
      super(props);
      this.state = {
         sex: user.sex,
         address: user.address,
         birthday: user.birthday,
         email: user.email,
         introduction: user.introduction,
         qq: user.qq,
         name: user.username,
         oldPassword:'',
         newPassword:'',
         rNewPassword:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeAdd = this.handleChangeAdd.bind(this);
      this.handleChangeDate = this.handleChangeDate.bind(this);
      this.handleChangeQq = this.handleChangeQq.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeText = this.handleChangeText.bind(this);
      this.click = this.click.bind(this);
      this.handleChangeOld = this.handleChangeOld.bind(this);
      this.handleChangeNew = this.handleChangeNew.bind(this);
      this.handleChangerNew = this.handleChangerNew.bind(this);
      this.updatePass = this.updatePass.bind(this);

   }

   handleChange(event) {
      this.setState({ sex: event.target.value });
      console.log(this.state.sex);
   }
   handleChangeAdd(event) {
      this.setState({ address: event.target.value });
      console.log(this.state.address);
   }
   handleChangeDate(event) {
      this.setState({ birthday: event.target.value });
      console.log(this.state.birthday);
   }

   handleChangeQq(event) {
      this.setState({ qq: event.target.value });
      console.log(this.state.qq);
   }
   handleChangeEmail(event) {
      this.setState({ email: event.target.value });
      console.log(this.state.email);
   }
   handleChangeText(event) {
      this.setState({ introduction: event.target.value });
      console.log(this.state.introduction);
   }
   click() {
      let list = JSON.parse(localStorage.getItem('userList'));

      list.forEach(v => {
         if (v.username === this.state.name) {
            v.sex = this.state.sex;
            v.address = this.state.address;
            v.birthday = this.state.birthday;
            v.email = this.state.email;
            v.introduction = this.state.introduction;
            v.qq = this.state.qq;
         }
      });
      let user = list.filter(v => v.username === this.state.name)
      localStorage.setItem("userList", JSON.stringify(list))
      localStorage.setItem("userNew", JSON.stringify(user[0]))
      alert("修改成功")

   }
   handleChangeOld(event) {
      this.setState({ oldPassword: event.target.value });
      console.log(this.state.oldPassword);
   }
   handleChangeNew(event) {
      this.setState({ newPassword: event.target.value });
      console.log(this.state.newPassword);
   }
   handleChangerNew(event) {
      this.setState({ rNewPassword: event.target.value });
      console.log(this.state.rNewPassword);
   }
   updatePass(){
      console.log(this.state.oldPassword);
      if(this.state.newPassword===''||this.state.rNewPassword===''||this.state.oldPassword===''){
         alert("请输入内容")
         return
      }
      // if(this.state.oldPassword.trim().length){
      //    alert("请输入旧密码")
      //    this.setState({
      //       ...this.state,
      //       oldPassword:null,
      //       newPassword:null,
      //       rNewPassword:null
      //    })
      //    return;
      // }
      if(this.state.newPassword!==this.state.rNewPassword){
         alert("请保持新密码和确认密码一致");
         this.setState({
            ...this.state,
            oldPassword:null,
            newPassword:null,
            rNewPassword:null
         })
         return;
      }
      if(this.state.oldPassword === user.password){
         let list = JSON.parse(localStorage.getItem('userList'));

         list.forEach(v => {
            if (v.username === this.state.name) {
              v.password =this.state.newPassword
            }
         });
         let user = list.filter(v => v.username === this.state.name)
         localStorage.setItem("userList", JSON.stringify(list))
         localStorage.setItem("userNew", JSON.stringify(user[0]))
         alert("密码修改成功")
         localStorage.setItem('log',false)
         this.props.history.push('/login')
      }else{
         alert('旧密码输入错误')
         this.setState({
            
            oldPassword:'',
            newPassword:'',
            rNewPassword:''
         })
      }
   }
   render() {
      return (
         <StyData>
            <Tabs defaultActiveKey="1" size='large'>
               <TabPane tab="基本信息" key="1" >
                  <ul>
                     <li>
                        <span>昵称：</span><input type="text" value={this.state.name} disabled={true} style={{ border: 'none', color: '#319DF7', backgroundColor: '#fff' }} />
                     </li>
                     <li>
                        <span>性别：</span>
                        <div>
                           <label htmlFor="man">男</label><input type="radio" name="sex" id="man" checked={this.state.sex == 0} onChange={this.handleChange} value="0" />
                        </div>
                        <div>
                           <label htmlFor="woman">女</label><input type="radio" name="sex" id="woman" checked={this.state.sex == 1} onChange={this.handleChange} value="1" />
                        </div>
                     </li>
                     <li>
                        <span>现居地：</span><input type="text" value={this.state.address} onChange={this.handleChangeAdd} />
                     </li>
                     <li>
                        <span>生日：</span><input type="date" name="" id="" value={this.state.birthday} onChange={this.handleChangeDate} />
                     </li>
                     <li>
                        <span>QQ：</span><input type="text" value={this.state.qq} onChange={this.handleChangeQq} />
                     </li>
                     <li>
                        <span>邮箱：</span><input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                     </li>
                     <li>
                        <span>个人简介：</span>
                        <textarea name="" id="" cols="30" rows="10" maxLength="100" value={this.state.introduction} onChange={this.handleChangeText}></textarea>
                        <p>最多100字</p>
                     </li>
                  </ul>
                  <button onClick={this.click}>保存</button>

               </TabPane>
               <TabPane tab="修改密码" key="2">
                  <StyDatum>
                   
                     <ul>
                        <li>
                           <span> 昵称：</span><input type="text" value={this.state.name} disabled={true} style={{ border: 'none', color: '#319DF7', backgroundColor: '#fff' }} />
                        </li>
                        <li>
                           <span>旧密码：</span> <input type="text" value={this.state.oldPassword} onChange={this.handleChangeOld}/>
                           {/* <p>没有或者忘记旧密码？<span>重置密码</span></p> */}
                        </li>
                        <li>
                           <span>新密码：</span>
                           <input type="text" value={this.state.newPassword} onChange={this.handleChangeNew} />

                        </li>
                        <li>
                           <span> 确认密码：</span><input type="text" value={this.state.rNewPassword} onChange={this.handleChangerNew}/>
                        </li>

                     </ul>
                     <button onClick={this.updatePass}>保存</button>

                  </StyDatum>
               </TabPane>
            </Tabs>
         </StyData>
      )
   }
}
export default Data