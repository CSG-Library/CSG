import React/* , { Component }  */from 'react';
import PropsTypes from 'prop-types'

import {
    TitleWraper,
    ShortCommentsWraper
} from './StyledIntroduce'

const ShortComments=(props)=> {

        //  console.log(props.list)
        const handleClick=(v)=>{
            // console.log(v)
            return()=>{
                console.log(v)
            }
        }
        return (
            <ShortCommentsWraper>
            <TitleWraper
            width="0 0 1px 0"
            // borderColor='#000'
            >
                <span>三言两语（{'<'}140字的评论）</span>
            </TitleWraper>
            <div className='r'>
                   点击评论
            </div>
            <ul>
                {
                    props.list && props.list.map((v,i)=>{
                        return (
                            <li 
                            key={i}
                            onClick={handleClick(v)}
                            >
                               <span>{v.name}</span>
                                <span>
                                    评论时间:
                                    {v.publish_date}
                                   {/*  &nbsp;
                                    {v.publish_time} */}
                                </span>
                                <span>
                                    {v.abstruct}
                                </span> 
                            </li>
                        )
                    })
                }
                {/* <li>
                    <span>评论人</span>
                    <span>评论时间:
                        2020-02-02&nbsp;
                        20:20
                    </span>
                    <span>
                        千锋教育是互联网教育行业扛把子，在业界内有着良好的评价，万千学子通过这个平台，获得良好的就业前景，实现了人生价值。
                    </span>
                </li> */}
                
               
            </ul>
            <div>
                <span className='r'>所有短评（222）V</span>
            </div>
            </ShortCommentsWraper>
        );
}

ShortComments.PropsTypes={
    list:PropsTypes.array
}

export default ShortComments;