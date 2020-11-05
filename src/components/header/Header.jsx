import React, { PureComponent } from 'react';

import {Header} from '@c/styleComp';
import { withRouter } from 'react-router-dom';

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
   
   GoLogin = () => {
      return () => {
         this.props.history.push('/login')
      }
   }

   GoReg = () => {
      return () => {
         this.props.history.push('/reg')
      }
   }
   
   render() {
      return (
         <Header>
            <div className='container'>
               <section className="r">
                  <span onClick={this.GoLogin()}>登录</span>
                  <i>|</i>
                  <span onClick={this.GoReg()}>注册</span>
               </section>
            </div>
         </Header>
      )
   }
}

export default withRouter(Head)
