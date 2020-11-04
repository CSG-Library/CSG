import React, { PureComponent } from 'react';

import { Nav } from '@c/styleComp';

import img from '@a/imgs/logo.png';

import { SearchOutlined } from '@ant-design/icons';

export default class NavOne extends PureComponent {
   state = {
      text: ['藏书阁','视频文化','读书广场','原创','读书会活动','书店']
   }
   render() {
      return (
         <Nav>
            <div className="l">
               <img src={`${img}`} alt="" />
            </div>
            <ul>
               {
                  this.state.text.map(
                     (v,i) => <li key={i} onClick={this.handleClick}>{v}</li>
                  )
               }
            </ul>
            <div>
               <input type="text" placeholder="搜索海量图书" />
               <SearchOutlined />
            </div>
         </Nav>
      );
   }
}

