import React from 'react';
import { useEffect , useState } from 'react'

import {get} from '@u/http'

<<<<<<< HEAD
// import img from '@a/images/lc1.png'
import {
    TitleWraper,
    ShortCommentListsWraper
} from './StyledShortCommentLists'
=======
// import img from '@a/imgs/lc1.png'
import { TitleWraper,ShortCommentListsWraper } from './StyledShortCommentLists'
>>>>>>> deaaae47d5d037275d46b8d5004f3fb0cc39aa6c

const Lists = () => {
    let [ data ,setdata] = useState(0)
    useEffect(()=>{
        (async()=>{
            let result = await get ({
                url:'/api/longcom'
            })  
            // console.log(result.data.longdata)
            setdata({
                data:result.data.longdata
            })

        })()
    //加个空数组是为了防止疯狂打印
    },[])
    // console.log(data.data)
    return (
        <ShortCommentListsWraper className = 'l'>
            <TitleWraper
            width="0 0 1px 0"
            >
            <span>三言两语（{'<'}140字的评论）</span>
            </TitleWraper>
            <div className='r'>
                点击评论
            </div>
            <ul>
                {
                    data.data && data.data.map((v,i)=>{
                        return (
                            <li 
                            key={i}
                            >
                                <div>
                                    <div>
                                        <img src={v.img} alt=""/>
                                    </div>
                                    <span>{v.user}</span>
                                </div>
                                <div>
                        <span>{v.title}</span>
                        <span>评论时间：
                            {v.publish_date}&nbsp;
                            {v.publish_time}
                        </span>
                        <span>
                            {v.abstruct}
                        </span>
                                </div>
                            </li>
                        )
                    })
                }
                {/* <li>
                    <div>
                        <div>
                            <img src={`${img}`} alt=""/>
                        </div>
                        <span>陆神小迷弟</span>
                    </div>
                    <div >
                        <span >标题</span>
                        <span>评论时间:
                            2020-02-02&nbsp;
                            20:20
                        </span>
                        <span>
                            千锋教育是互联网教育行业扛把子，在业界内有着良好的评价，万千学子通过这个平台，获得良好的就业前景，实现了人生价值。 千锋教育是互联网教育行业扛把子，在业界内有着良好的评价，万千学子通过这个平台，获得良好的就业前景，实现了人生价值。
                        </span>
                    </div>
                </li> */}
            </ul>

        </ ShortCommentListsWraper>
    );
};

export default Lists;