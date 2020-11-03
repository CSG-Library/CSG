import React, { Component } from 'react'

import Account from './Account'
// import Pay from '../ui/pay/Pay'
import Left from './Left'

import {StyLeft} from './Stylemy'

// import { withRouter } from 'react-router-dom'

// @withRouter
class First extends Component {
  /* state={
    list:[
      {account:'我的账户'},
      {bookshelf:'我的书架'},
      {data: '个人资料'},
      {switch: '切换账号'}
    ],
    curIndex:0,

  }
  clickHandle=(value, Index)=>{
    return()=>{
      this.setState({ curIndex:Index })
      let url = Object.keys(value)
      this.props.history.push(`/mine/${url}`)
    }
  }
 */
  render() {
    // console.log(this.props)
    return (
      <StyLeft>
        {/* <ul>
          {
            this.state.list.map((item,i)=>{
              return(
                <li 
                  key={item + i} 
                  className={this.state.curIndex === i ? 'active' : ''} 
                  onClick={this.clickHandle(item, i)}
                >{item[Object.keys(item)]}</li>
              )
            })
          }
        </ul> */}
        <Left></Left>
        <div>
          <Account></Account>
        </div>
      </StyLeft>
    )
  }
}

export default First
