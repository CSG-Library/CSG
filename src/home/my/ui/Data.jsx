import React, { Component } from 'react'
import { Tabs } from 'antd';


import {StyData,StyDatum} from './Stylemy'
const { TabPane } = Tabs;

export default class Data extends Component {
  render() {
    return (
      <StyData>
      <Tabs defaultActiveKey="1" size='large'>
        <TabPane tab="基本信息" key="1" >
          
            昵称：<input type="text" value={"书友25123554"} disabled={true} style={{border:'none',color:'#319DF7',backgroundColor:'#fff'}}/><br/>
            性别：<label htmlFor=""><input type="radio" name="sex" id=""/>男</label>
                  <label htmlFor=""><input type="radio" name="sex" id=""/>女</label>
                  <br/>
            现居地：<input type="text"/><br/>
            生日: <input type="date" name="" id=""/><br/>
            QQ：<input type="text"/><br/>
            邮箱：<input type="text"/><br/>
            {/* 个人简介：<input type="text" className='description' id=""/> */}
            个人简介：<br/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <p>最多100字</p>
            <button>保存</button>
        </TabPane>
        <TabPane tab="修改密码" key="2">
          <StyDatum>
            {/* <div>
              <h1>基本信息</h1>
              <h3>修改密码</h3>
            </div> */}
            <div>
              昵称：<input type="text" value={"书友25123554"} disabled={true} style={{border:'none',color:'#319DF7',backgroundColor:'#fff'}}/><br/>
              旧密码：<input type="text"/><br/>
              <p>没有或者忘记旧密码？<span>重置密码</span></p>
              新密码：<input type="text"/><span>密码6-16位.</span><br/>
              确认密码：<input type="text"/>
              <button>保存</button>
            </div>
          </StyDatum>
        </TabPane>
      </Tabs>
      </StyData>
    )
  }
}
