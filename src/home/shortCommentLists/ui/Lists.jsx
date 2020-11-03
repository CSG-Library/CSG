import React from 'react';

import img from '@a/images/lc1.png'
import {
    TitleWraper,
    ShortCommentListsWraper
} from './StyledShortCommentLists'

const Lists = () => {
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
                <li>
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
                </li>
                <li>
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
                </li><li>
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
                </li><li>
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
                </li><li>
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
                </li>
            </ul>

        </ ShortCommentListsWraper>
    );
};

export default Lists;