import React, { useState } from 'react'


import img from '@a/imgs/novel.png'
import { Pagination } from 'antd';
import { StyBook } from './Stylemy'


const list = [
  {
    id: '001',
    descName: '宦妃还朝/鸭圣婆',
    descData: '2019-4-2',
    descFinish: '【已完结】',
    descStatus: '未读',
    descNum: '1240'
  },
  {
    id: '002',
    descName: '完成完成完成完成',
    descData: '2019-4-2',
    descFinish: '【未完结】',
    descStatus: '未读',
    descNum: '555'
  },
  {
    id: '003',
    descName: '宦妃还朝/鸭圣婆',
    descData: '2019-4-2',
    descFinish: '【已完结】',
    descStatus: '未读',
    descNum: '230'
  },
  {
    id: '004',
    descName: '宦妃还朝/鸭圣婆',
    descData: '2019-4-2',
    descFinish: '【未完结】',
    descStatus: '未读',
    descNum: '98'
  },
]


const Book = () => {
  let [state, setState] = useState({ num: [], list: list });



  /* delClickHandle = (id) => {
    return () => {
      console.log(id);
    }
  } */
  return (
    <StyBook>
      <div>
        <h1>书架藏书</h1>
        <h5>
          <p onClick={() => {
            let arr=[0,1,2,3]
            setState({
              num: arr,
              list: state.list
            })
          }}>全选</p>
          <p onClick={() => {
            setState({
              num: state.num,
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
                    checked={state.num.indexOf(i) > -1 ? true : ''}
                    onChange={(e) => {
                      if (e.target.checked) {
                        state.num.push(i)
                      } else {
                        console.log(e.target.checked);
                        // [1,1,4,3]  ==> 4==> 下标：2 splice(start,1) 截取
                        state.num.splice(state.num.indexOf(i), 1)
                      }
                      setState({
                        num: state.num,
                        list: state.list
                      })
                    }} />
                  <div className='tp'>
                    <img src={`${img}`} alt="" />
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
                      <p>{v.descNum}</p>
                      {state.num.indexOf(i) > -1 && <button onClick={() => {
                        state.list.splice(state.list.indexOf(v), 1)
                        setState({
                          num: state.num,
                          list: state.list
                        })
                      }

                      }
                      >删除</button>}
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <Pagination simple defaultCurrent={1} total={state.list.length} />
      </div>
    </StyBook>
  )
}

export default Book