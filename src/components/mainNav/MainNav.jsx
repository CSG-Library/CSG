import React, { Component } from 'react';
import img from '@a/images/logo.png'


import { SearchOutlined } from '@ant-design/icons';

import {
    MainNavWraper
} from './StyledMainNav'

class MainNav extends Component {
    state  = {
        mainNav : ['藏书阁','视频文化','读书广场','原创','读书会活动','书店'],
        curIndex:0
    }
    handleClick=(index)=>{
        return()=>{
            // console.log(index)
            this.setState({
                curIndex:index,
            })
           
        }
     }
    render() {
        return (
            <MainNavWraper>
                <div className = 'l'>
                    <img src={`${img}`} alt=""/>
                </div>
                <ul>
                    {
                        this.state.mainNav.map((v,i) => {
                            return(
                                <li 
                                 key={i}
                                 className={ i===0 ?'active':''}
                                 onClick={this.handleClick(i)}
                                 > 
                                    {v}
                                </li>
                            )
                        } 
                        )
                    }
                </ul>
                <div className="inuptWrap">
                   <input type="text" placeholder='好书尽在这里'/>
                   <SearchOutlined />
                </div>
            </MainNavWraper>
        );
    }
}

export default MainNav;