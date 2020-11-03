import React from 'react';

import {
    TitleWraper,
    MagArticleWraper
} from './StyleArtContent'

//组件库
import { Row, Col/* , Divider */ } from 'antd';

import img from '@a/images/magarticle.png'

const MagArticle = () => {
    return (
        <MagArticleWraper>
            <TitleWraper
            width="0 0 1px 0"
            >
                <span>杂志文章</span>
            </TitleWraper>
            <div className='box'>
                <div className='current'>
                    <p>
                        <img src={`${img}`} alt=""/>
                    </p>
                    <div>
                        <span>时尚先生</span>
                        <span>第1024期</span>
                        <span>出版日期:2020-02-02</span>
                    </div>
                </div>
                <div className='other'>
                    <p>
                        热门文章标题：
                    </p>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div >《年轻人，醒醒吧》</div>
                    </Col>
                    </Row>
                </div>
            </div>

        </MagArticleWraper>
    );
};

export default MagArticle;