import React from 'react';

import {
    LastMagWraper,
    TitleWraper,
} from './StyleMagIntro'

import { Row, Col} from 'antd';
import img from '@a/images/mag3.jpg'

const LastMag = () => {
    
    return (
        <LastMagWraper>
            <TitleWraper
                width="0 0 1px 0"
            >
                <span>近期杂志</span>
            </TitleWraper>
            <div className='box'>
                <Row justify="space-between">
                <Col span={3}>
                    <div className='img_box'>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <p>第1期</p>
                </Col>
                <Col span={3}>
                    <div className='img_box'>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <p>第1期</p>
                </Col>
                <Col span={3}>
                    <div className='img_box'>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <p>第1期</p>
                </Col>
                <Col span={3}>
                    <div className='img_box'>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <p>第1期</p>
                </Col>
                
                </Row>

                    {/* <Row gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                    <Col className="gutter-row" span={8}>
                        <div >col-6</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >col-6</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >col-6</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >col-6</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >col-6</div>
                    </Col>
                    
                    </Row> */}
            </div>
        </LastMagWraper>
    );
};

export default LastMag;