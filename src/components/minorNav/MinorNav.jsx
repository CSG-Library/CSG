import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import {
    MinorNavWrap
} from './StyledMinorNav'


@withRouter
class MinorNav extends Component {
    state = {
        curIndex: 0,
        minorNav:
        [
            {id:0,path:'/introduce',name:'分类浏览'},
            {id:1,path:'/shortcommentlists',name:'在线图书馆'},
            {id:2,path:'/magintro',name:'电子杂志'},
            {id:3,path:'/chapter',name:'电子报刊'},
            {id:4,path:'/artcontent',name:'资料库'},
            {id:5,path:'/rank',name:'热门排行'},
            {id:6,path:'/magintro',name:'精确搜索'},
            {id:7,path:'/shortcommentlists',name:'我的书架'},
            {id:8,path:'/introduce',name:'我的身份:贡士'},
        ]
     }
     handleClick=(value)=>{
        //  console.log(this.props)
        let {history} = this.props
        return()=>{
            console.log(value.path)
            console.log(value.id)
            history.push('/home' + value.path)
            this.setState({
                curIndex:value.id
            })
        }
        
     }
    render() {
        return (
            
                <MinorNavWrap >
                    {
                        this.state.minorNav.map((value,index)=>{
                            return   (<li 
                                key={index}
                                onClick={this.handleClick(value)}
                                className={this.state.curIndex===value.id?'active':''}
                                >
                                {value.name}
                                </li>)
                            }
                        )
                    }
                    

                </MinorNavWrap>
            
        );
    }
}

export default MinorNav;