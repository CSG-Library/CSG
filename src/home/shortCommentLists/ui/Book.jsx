import React from 'react';

import img from '@a/images/details.png'

import { Button } from 'antd';

import {
    TitleWraper,
    BookWraper
} from './StyledShortCommentLists'


const Book = () => {
    return (
        <BookWraper className='r'>
            <TitleWraper
            width="0 0 1px 0"
            >
                <span>书籍</span>
            </TitleWraper>
            <div>
                <div>
                    <img src={`${img}`} alt=""/>
                </div>
                <Button 
                className='button' 
                type="primary" 
                >
                    阅读
                </Button>
            </div>
            <div >
                书名：论惩罚PM的100种方法<br/>
                作者：北科吴彦祖<br/>
                译者：北科周润发<br/>
                副标题：程序员上位之路<br/>
                页数：1024<br/>
                出版社：北京千锋教育出版社<br/>
                定价：404元<br/>
                装帧：404<br/>
                出版年：2020.02.02<br/>
            </div>
            <div>
                <p>著作权声明</p>
                <span>
                    版权归本藏书阁网站所有未1
                    经原作者允许不得转载本文
                    内容，否则将视为侵权.转载
                    或者引用本文内容请注明来
                    源及原作者; .对于不遵守此
                    声明或者其他违法使用本文
                    内容者，本人依法保留追究
                    权等。
                </span>
            </div>
        </BookWraper>
    );
};

export default Book;