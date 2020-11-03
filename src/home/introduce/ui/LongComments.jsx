import React/* , { Component }  */from 'react';


import {
    TitleWraper,
    LongCommentsWraper
} from './StyledIntroduce'

import img from '@a/images/lc1.png'
const LongComments=()=> {
    // render() {
        return (
            < LongCommentsWraper>
                 <TitleWraper
                width="0 0 1px 0"
                // borderColor=' #000'
                >
                    <span>长篇大论（{'>'}140字的评论）</span>
                </TitleWraper>
                <div className='r'>
                   点击评论
                </div>
                <ul>
                    <li>
                        <div>
                            <div>
                                <img src={`${img}`} alt=""/>
                            </div>
                            <span>前端提升法宝</span>
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
                            <span className='r'>
                                查看全文V
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p><img src={`${img}`} alt=""/></p>
                            <span>前端提升法宝</span>
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
                            <span className='r'>
                                查看全文V
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p><img src={`${img}`} alt=""/></p>
                            <span>前端提升法宝</span>
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
                            <span className='r'>
                                查看全文V
                            </span>
                        </div>
                    </li>
                    <div>
                        <span className='r'>所有长评（222）V</span>
                    </div>
                </ul>

            </ LongCommentsWraper>
        );
    // }
}

export default LongComments;