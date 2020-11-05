import React, { useState } from 'react'

import { Pagination } from 'antd';
import { StyBook } from './Stylemy'

import img from '@a/imgs/novel.png';

const list = [
   {
      id: '001',
      descTitle: '浴血成凰',
      descImg:'https://www.shuqiw.com/files/article/image/16/16006/16006s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '550',
   },
   {
      id: '002',
      descTitle: '最强末世进化',
      descImg:'https://www.shuqiw.com/files/article/image/20/20765/20765s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '1110',
   },
   {
      id: '003',
      descTitle: '轻狂小毒妃',
      descImg:'https://www.shuqiw.com/files/article/image/20/20704/20704s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '240',
   },
   {
      id: '004',
      descTitle: '绝品风水师',
      descImg:'https://www.shuqiw.com/files/article/image/20/20704/20704s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '1240',
   },
   {
      id: '005',
      descTitle: '嫡女翻身记',
      descImg:'https://www.shuqiw.com/files/article/image/10/10399/10399s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '190',
   },
   {
      id: '006',
      descTitle: '回档纯真年代（重生1998）',
      descImg:'https://www.shuqiw.com/files/article/image/20/20733/20733s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '1240',
   },
   {
      id: '007',
      descTitle: '大宋就应该豪横',
      descImg:'https://www.shuqiw.com/files/article/image/17/17224/17224s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '190',
   },
   {
      id: '008',
      descTitle: '我在绝地求生捡碎片',
      descImg:'https://www.shuqiw.com/files/article/image/2/2591/2591s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '1240',
   },
   {
      id: '009',
      descTitle: '武侠江湖大冒险',
      descImg:'https://www.shuqiw.com/files/article/image/20/20418/20418s.jpg',
      descData: '2019-4-2',
      descFinish: '【已完结】',
      descRead: '未读',
      descTotal: '190',
   }
   
]

const Book = () => {
let [state,setState]=useState({info:[],list:list})
   console.log(state)
   return (
      <StyBook>
         <div>
            <h1>书架藏书</h1>
            <h5>
               <p onClick={()=>{
                  let arr=[0,1,2,3,4,6,7,8,9]
                  
                  setState({
                     info:arr,
                     list:list
                  })
                 
               }}>全选</p>
               <p onClick={()=>{
                  if(state.info.length!==state.list.length) return
                  setState({
                     info:'',
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
                                 <h3>{v.descTitle}</h3>
                                 <h3>收藏时间：{v.descData}</h3>
                              </div>
                              <div className='info'>
                                 <p>{v.descFinish}</p>
                                 <p>{v.descRead}</p>
                              </div>
                              <div className='num'>
                                 <p>共{v.descTotal}章</p>
                                 {state.info.indexOf(i) >-1 && <button onClick={()=>{
                                    state.list.splice(state.list.indexOf(v),1)
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
            {/* <Pagination simple defaultCurrent={1} total={state.list.length} /> */}
         </div>
      </StyBook>
   )

}

export default Book



