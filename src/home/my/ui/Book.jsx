import React, { Component } from 'react'

import { Pagination } from 'antd';
import {StyBook} from './Stylemy'
export default class Book extends Component {
  render() {
    return (
      <StyBook>
        <div>
          <h1>书架藏书</h1>
          <h5><p>全选</p><p>删除全部</p></h5>
          {/* <h5></h5> */}
        </div>
        <div>
          <ul>
            <li>
              <input type="checkbox" name="" id=""/>
              <div className='tp'>
                <img src="../../assets/imgs/logo.png" alt=""/>
              </div>
              <div className='box'>
                <div className='txt'>
                  <h3>宦妃还朝/鸭圣婆</h3>
                  <h3>收藏时间：2019-4-2</h3>
                </div>
                <div className='info'>
                  <p>【已完结】</p>
                  <p>未读</p>
                </div>
                <div className='num'>
                  <p>共1240章</p>
                  <button>删除</button>
                </div>
              </div>
            </li>
            <li>
              <input type="checkbox" name="" id=""/>
              <div className='tp'>
                <img src="../../assets/imgs/logo.png" alt=""/>
              </div>
              <div className='box'>
                <div className='txt'>
                  <h3>宦妃还朝/鸭圣婆</h3>
                  <h3>收藏时间：2019-4-2</h3>
                </div>
                <div className='info'>
                  <p>【已完结】</p>
                  <p>未读</p>
                </div>
                <div className='num'>
                  <p>共1240章</p>
                  <button>删除</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <Pagination simple defaultCurrent={2} total={50} />
        </div>
      </StyBook>
    )
  }
}

