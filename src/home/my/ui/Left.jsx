import React, { Component } from 'react'

// import Account from './Account'
// import Pay from '../ui/pay/Pay'

import {SLeft} from './Stylemy'

import { withRouter } from 'react-router-dom'

@withRouter
class Left extends Component {
  state={
    list:[
      {id:0, path:'/account', name:'我的账户'},
      {id:1, path:'/bookshelf', name:'我的书架'},
      {id:2, path:'/data', name:'个人资料'},
      {id:3, path:'/switch', name:'切换账号'},
    ],
    curIndex:0,
  }
  clickHandle=(v)=>{
    return()=>{
      this.setState({ curIndex:v.id })
      // let url = Object.keys(value)
      this.props.history.push("/mine"+v.path)
    }
  }

  

  render() {
    console.log(this.props)
    return (
      <SLeft>
        <ul>
          {
            this.state.list.map(v=>{
              return(
                <li 
                  key={v.id} 
                  className={this.state.curIndex === v.id ? 'active' : ''} 
                  onClick={this.clickHandle(v)}
                >{v.name}</li>
              )
            })
          }
        </ul>
      </SLeft>
    )
  }
}

export default Left
