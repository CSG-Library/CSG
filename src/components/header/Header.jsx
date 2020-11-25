import React, { PureComponent } from 'react';

import {Header} from '@c/styleComp';
import { withRouter } from 'react-router-dom';
import { UnderlineOutlined } from '@ant-design/icons';

// export default (props) => {
//    useCallback((btnType) => {
//       return () => {
      
//       }
//    })

//    return (
//       <Header style={{background: '#F5F5F5'}}>
//          <div className='container'>
//             <section className="r">
//                <span onClick={this.handleClick(btnType)}>登录</span>
//                <i>|</i>
//                <span onClick={this.handleClick(btnType)}>注册</span>
//             </section>
//          </div>
//       </Header>
//    )
// }

class Head extends PureComponent {
   handleClickLog(){
      return () => {
         this.props.history.push('/login')
      }
   }
   handleClickReg(){
      return () => {
         this.props.history.push('/reg')
      }
   }
   clickHandleZx(){
         return () => {
            localStorage.setItem('log',false)
            localStorage.removeItem('userNew')
         this.props.history.push('/')

         }
   }
   
   render() {
      return (
         <Header>
            <div className='container'>
               {
                  JSON.parse(localStorage.getItem('log'))?<section className="r">
               <span style={{textDecoration:"underline",cursor:"pointer"}} onClick={this.clickHandleZx()}>注销</span>
               <i>|</i>
               <span>欢迎  {JSON.parse(localStorage.getItem('userNew')).username}  用户</span>
              
              
               </section>:
               <section className="r">
               <span onClick={this.handleClickLog()} style={{cursor:'pointer'}}>登录</span>
               <i>|</i>
               <span onClick={this.handleClickReg()} style={{cursor:'pointer'}}>注册</span>
            </section>
               }
               
            </div>
         </Header>
      )
   }
}

export default withRouter(Head)
