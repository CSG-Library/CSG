import React, {useState} from 'react'

import Pay from './pay/Pay'
import { StyAcco } from './Stylemy'

const Account = (props) => {
  let obj={
    bool:false,
    display:false,
  }
  let [ state,setState] = useState(obj)
  //  console.log(state)
  return (
    <>
      <StyAcco>
        <div>
          <div className='box'>
            <p>浪花余额</p>
            <span>0浪花</span>
          </div>
          <div onClick={()=>{setState({bool:true}) }}>充值</div>
        </div>
        <div>
          <div className='box'>
            <p>代金券余额</p>
            <span>0代金券</span>
          </div>
          <div onClick={ ()=>setState({display:!state.display})}>代金券规则说明</div>
          
          <div className='desc' style={state.display ? {display:'block'} :{ display:'none'}}>
            <h2>什么是代金券？</h2>
            <p>“代金券”是平台发行的虚拟货币，可用于购买单章节、批量章节、 整本（出版书除外）。1代金券=1浪花，当您在支付时，会优先消耗 </p>
            <h2>如何获得代金券？</h2>
            <p>通过签到，任务，充值和特定活动等途径获得。</p>
            <h2>代金券的有效期？</h2>
            <p>查看代金券有效期可点击”我的——我的账户——代金券领取记录 “查看代金券过期后不能使用。</p>
          </div>
        </div>
        <div>
          <ul>
            <li>充值记录</li>
            <li>消费记录</li>
            <li>券领取记录</li>
          </ul>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>消费时间</th>
                <th>消费对象</th>
                <th>消费类型</th>
                <th>消费详情</th>
              </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
              <tr>
                <th colSpan='4'>目前仅包含电子书的购买记录</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </StyAcco>
    {
      state.bool && <Pay onCloseHandle={()=>setState({bool:false})}></Pay>
    }
    </>
  )
}


export default Account
