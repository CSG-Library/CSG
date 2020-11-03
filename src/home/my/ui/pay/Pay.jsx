import React, { Component } from 'react'
import withPortal from './withPortal'

import Price from './Price'
import {Stybuy,Stybox} from './Stybuy'


@withPortal
class Pay extends Component {
  state={
    bool:0,
  }
  clickHandle=(i)=>{   
    return()=>{
      if(this.state.bool ===i)return;
      this.setState({
        bool:i
      })
    }
  }

  render() {
    const pay =[
      {
        type:'微信支付',
        ic: '\ue607',
        sort:0
      },
      {
        type:'支付宝支付',
        ic:'\ue608',
        sort:1
      }
    ]
    return (
      <Stybox>
        <Stybuy>
          {/* <div className='yo-ico'>{pay[1].ic}</div> */}
          <div className='tit'>充值方式选择<span onClick={this.props.onCloseHandle}>X</span></div>
          <div>
            {pay.map((v,i)=>{
              return <div key={v.type} className={this.state.bool===v.sort ? 'active' : ''} onClick={this.clickHandle(v.sort)}>
            <span className='yo-ico' style={v.sort===0 ? {color:'#36AB60'}:{color:'#1195DB'}}>{v.ic}</span>
            {v.type}
            {this.state.bool===v.sort && <p>
              <svg t="1603857316393" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2179" width="23" height="18"><path d="M390.512065 762.149247 131.140783 465.279932 161.722288 438.561407 392.512628 702.717669 868.794126 226.438219 897.508098 255.153214Z" p-id="2180" fill='#fff'></path></svg>
            </p>}
          </div>
            })}
          </div>
          <div className='tit'>选择充值金额</div>
          <Price></Price>
          <h3>立即支付</h3>
        </Stybuy>
      </Stybox>
    )
  }
}
export default Pay
