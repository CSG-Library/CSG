import React/* , { Component }  */from 'react';

//公共组件


import {
    TitleWraper,
    AboutBookWraper
} from './StyledIntroduce'

import { Row, Col/* , Divider  */} from 'antd';

import img1 from '@a/images/xiazai.png'
// import img1 from '@a/images/xiazai.png'
import img3 from '@a/images/video.png'

const  AboutBook=()=> {
    // render() {
        return (
            <AboutBookWraper>
                <TitleWraper
                    width="0 0 1px 0"
                >
                    <span>关于书籍</span>
                </TitleWraper>
                <div>
                    <div className='title'>
                        本书的其他版本
                    </div>
                    <ul>
                        <li>
                            兴华书店出版社&nbsp;
                            版次&nbsp;
                            2016.02.13 出版
                        </li>
                        <li>
                            兴华书店出版社&nbsp;
                            版次&nbsp;
                            2016.02.13 出版
                        </li>
                        <li>
                            兴华书店出版社&nbsp;
                            版次&nbsp;
                            2016.02.13 出版
                        </li>
                        <li>
                            兴华书店出版社&nbsp;
                            版次&nbsp;
                            2016.02.13 出版
                        </li>
                        <li>
                            兴华书店出版社&nbsp;
                            版次&nbsp;
                            2016.02.13 出版
                        </li>
                    </ul>
                    <div>查看更多V</div>
                </div>
                <div>
                    <div className='title'>谁正在书这本书</div>
                        <Row justify="space-around">
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                        </Row>
                    
                    <div>
                        查看更多V
                    </div>
                </div>
                <div>
                    <div className='title'>经常去的读书会</div>
                        <Row justify="space-around">
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                            <Col span={6}>
                                <img src={`${img1}`} alt=""/>
                                <span>前端一号</span>
                            </Col>
                        </Row>
                    
                    <div>
                        查看更多V
                    </div>
                </div>
                <div>
                    <div className='title'>关于这本书的视频</div>
                    <ul>
                        <li>
                            <div>
                                <img src={`${img3}`} alt=""/>
                            </div>
                            <div>
                                前端法师<br/>
                                专辑：专辑名<br/>
                                浏览：1024次
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={`${img3}`} alt=""/>
                            </div>
                            <div>
                                前端法师<br/>
                                专辑：专辑名<br/>
                                浏览：1024次
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={`${img3}`} alt=""/>
                            </div>
                            <div>
                                前端法师<br/>
                                专辑：专辑名<br/>
                                浏览：1024次
                            </div>
                        </li>
                    </ul>
                    <div>
                        查看更多V
                    </div>
                </div>
            </AboutBookWraper>
        );
    // }
}

export default AboutBook;

