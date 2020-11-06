import React, { useState,useEffect } from 'react'

import { Pagination } from 'antd';
import { StyBook } from './Stylemy'

//引入--自动生成数组的工具包
const _ = require("underscore");


const Book = (props) => {
   // console.log(props);
   console.log('------45555');
   let {list}=props
let [state,setState]=useState({info:[],list:[]})

   useEffect(()=>{
      setState({
         info:[],
         list:props.list
      })
   },[list])

   // console.log(state.list)
   return (
      <StyBook>
         <div>
            <h1>书架藏书</h1>
            <h5>
               <p onClick={()=>{
                  // 自动生成数组
                  let arr=_.range(props.list.length)
                  // console.log(arr);
                  
                  setState({
                     info:arr,
                     list:props.list
                  })
                 
               }}>全选</p>
               <p onClick={()=>{
                  if(state.info.length!==state.list.length) return
                  setState({
                     info:[],
                     list:[]
                  })
               }}>删除全部</p>
            </h5>
            {/* <h5></h5> */}
         </div>
         <div>
            <ul>
               {
                  state.list.map((v, i) => {
                     return (
                        <li key={v.id}>
                           <input
                            type="checkbox"
                            checked={ state.info.indexOf(i) > -1 ? true : ''}
                            onChange={(e)=>{
                               if(e.target.checked){
                                  state.info.push(i)
                               }else{
                                  state.info.splice(state.info.indexOf(i),1)
                               }
                               setState({
                                 info:state.info,
                                 list:state.list
                               })
                            }}
                           />
                           <div className='tp'>
                              <img src={v.descImg} alt="" />
                           </div>
                           <div className='box'>
                              <div className='txt'>
                                 <h3>{v.descName}</h3>
                                 <h3>收藏时间：{v.descData}</h3>
                              </div>
                              <div className='info'>
                                 <p>{v.descFinish}</p>
                                 <p>{v.descStatus}</p>
                              </div>
                              <div className='num'>
                                 <p>共{v.descNum}章</p>
                                 {state.info.indexOf(i) >-1 && <button onClick={()=>{
                                    state.list.splice(state.list.indexOf(v),1)
                                    state.info.splice(state.info.indexOf(i),1)
                                    console.log(state.info);
                                    setState({
                                       info:state.info,
                                       list:state.list
                                    })
                                 }}>删除</button>}
                              </div>
                           </div>
                        </li>
                     )
                  })
               }
            </ul>
         </div>
         <div>
            {/* <Pagination simple defaultCurrent={1} total={props.list.length} /> */}
         </div>
      </StyBook>
   )

}

export default Book



