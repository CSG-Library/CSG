import React from 'react';

import {
    AlsoLikeWraper,
    TitleWraper
} from './StyleMagIntro'

// 组件库
import { Row, Col } from 'antd';

import img from '@a/images/mag2.jpg'

const AlsoLike = () => {
    return (
        <AlsoLikeWraper>
            <TitleWraper
                width="0 0 1px 0"
            >
                <span>喜欢这本杂志的人还喜欢</span>
            </TitleWraper>
            <Row justify="space-between">
                <Col span={3}>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <span>时尚芭莎</span>
                </Col>
                <Col span={3}>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <span>时尚芭莎</span>
                </Col>
                <Col span={3}>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <span>时尚芭莎</span>
                </Col>
                <Col span={3}>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <span>时尚芭莎</span>
                </Col>
                <Col span={3}>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <span>时尚芭莎</span>
                </Col>
                <Col span={3}>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <span>时尚芭莎</span>
                </Col>
            </Row>
            
        </AlsoLikeWraper>
    );
};

export default AlsoLike;