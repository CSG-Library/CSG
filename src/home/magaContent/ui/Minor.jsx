import React, { Component } from 'react';

import {
    MinorNavWraper
} from './StyleArtContent'

class MinorNav extends Component {
    state = {
        curIndex: 0,
        minorNav: ["分类浏览","在线图书馆","电子杂志","电子报刊","资料库","热门排行","精确搜索","我的书架","我的身份:贡士"]
     }
     handleClick=()=>{
        return(index)=>{
            this.setState({
                curIndex:index
            })
        }
     }
    render() {
        return (
            <MinorNavWraper >
                {
                    this.state.minorNav.map((value,index)=>{
                        return   (<li 
                            key={index}
                            onClick={this.handleClick(index)}
                            >
                            {value}
                            </li>)
                        }
                    )
                }
            </MinorNavWraper>    
        );
    }
}

export default MinorNav;