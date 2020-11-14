import React, { useState, useEffect } from 'react'

import { StyBook } from './Stylemy'

//引入--自动生成数组的工具包
import _ from "underscore";

import { useSelector } from 'react-redux'

const Book = (props) => {
   const list = useSelector(state => state.getIn(["my", "shelfList"]))

   let [state, setState] = useState({ info: [], list: list })

   console.log(state.list)
   return (
      <StyBook>
         <div>
            <h1>书架藏书</h1>
            <h5>
               <p onClick={() => {
                  // 自动生成数组
                  let arr = _.range(props.list.length)
                  // console.log(arr);

                  setState({
                     info: arr,
                     list: props.list
                  })

               }}>全选</p>
               <p onClick={() => {
                  if (state.info.length !== state.list.length) return
                  setState({
                     info: [],
                     list: []
                  })
               }}>删除全部</p>
            </h5>
            {/* <h5></h5> */}
         </div>
         <div>
            <ul>
               {
                  list.map((v, i) => {
                     return (
                        <li key={v.book_name}>
                           <input
                              type="checkbox"
                              checked={state.info.indexOf(i) > -1 ? true : ''}
                              onChange={(e) => {
                                 if (e.target.checked) {
                                    state.info.push(i)
                                 } else {
                                    state.info.splice(state.info.indexOf(i), 1)
                                 }
                                 setState({
                                    info: state.info,
                                    list: state.list
                                 })
                              }}
                           />
                           <div className='tp'>
                              <img src={v.book_img} alt="" />
                           </div>
                           <div className='box'>
                              <div className='txt'>
                                 <h3>{v.book_name}</h3>
                                 <h3>收藏时间：{v.book_date}</h3>
                              </div>
                              <div className='info'>
                                 <p>{v.book_finish ? '已完结' : '更新中'}</p>
                                 <p>{v.book_statu ? '已读' : '未读'}</p>
                              </div>
                              <div className='num'>
                                 <p>共{v.book_num}章</p>
                                 {state.info.indexOf(i) > -1 && <button onClick={() => {
                                    state.list.splice(state.list.indexOf(v), 1)
                                    state.info.splice(state.list.indexOf(i), 1)
                                    console.log(state.info);
                                    setState({
                                       info: state.info,
                                       list: state.list
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
      </StyBook>
   )

}

export default Book



