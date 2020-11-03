import React, { Component } from 'react'

import {StyPric} from './Stybuy'
export default class Price extends Component {
  state={
    curIndex:0,
  }
  priceHandle=(i)=>{
    return()=>{
      if(this.state.curIndex===i) return;
      this.setState({
        curIndex:i
      })
    }
  }

  render() {
    const list=[
      {
        id:1,
        num:5,
        tal:500,
        arch:30,
      },
      {
        id:2,
        num:10,
        tal:1000,
        arch:50,
      },
      {id:3,
        num:20,
        tal:2000,
        arch:100,
      },
      {id:4,
        num:30,
        tal:3000,
        arch:150,
      },
      {id:5,
        num:40,
        tal:4000,
        arch:200,
      },
      {id:6,
        num:50,
        tal:5000,
        arch:300,
      },
    ]

    return (
      <StyPric>
          <ul>
            {
              list.map((v,i)=>{
                return(
                  <li
                    key={v.num}
                    className={this.state.curIndex===v.id ? 'active' : ''}
                    onClick={this.priceHandle(v.id)}> 
                    <div>{v.num}元</div>
                    <div>
                      <p>{v.tal}浪花</p>
                      <p>送{v.arch}代金券</p>
                    </div>
                    {
                      this.state.curIndex===v.id &&
                    
                    <h6>
                      <svg t="1603857316393" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2179" width="30" height="30"><path d="M390.512065 762.149247 131.140783 465.279932 161.722288 438.561407 392.512628 702.717669 868.794126 226.438219 897.508098 255.153214Z" p-id="2180" fill='#fff'></path></svg>
                    </h6>
                    }
                  </li>
                )
              })
            }
          </ul>
        </StyPric>
    )
  }
}
