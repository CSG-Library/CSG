import React, { Component } from 'react'


import {StyDatum} from './Stylemy'
export default class Datum extends Component {
  render() {
    return (
      <StyDatum>
        <div>
          <h1>基本信息</h1>
          <h3>修改密码</h3>
        </div>
        <div>
          昵称：<input type="text" value={"书友25123554"} disabled={true} style={{border:'none',color:'#319DF7',backgroundColor:'#fff'}}/><br/>
          旧密码：<input type="text"/><br/>
          <p>没有或者忘记旧密码？<span>重置密码</span></p>
          新密码：<input type="text"/><span>密码6-16位.</span><br/>
          确认密码：<input type="text"/>
          <button>保存</button>
        </div>
      </StyDatum>
    )
  }
}
