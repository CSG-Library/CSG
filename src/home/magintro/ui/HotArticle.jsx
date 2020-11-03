import React from 'react';

import {
    TitleWraper,
    HotArticleWraper
} from './StyleMagIntro'

import img1 from '@a/images/mag1.jpg'

const HotArticle = () => {
    return (
        <HotArticleWraper>
            <TitleWraper
                width="0 0 1px 0"
            >
                <span>热门文章</span>
            </TitleWraper>
            <ul>
                <li>
                    <div>
                        <img src={`${img1}`} alt=""/>
                    </div>
                    <div>
                        <p>时尚周刊</p>
                        <span>有人认为时尚即是简单，有时时尚只是为了标新立异,给人焕然一新拥有时尚王风范的感觉。
                        </span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={`${img1}`} alt=""/>
                    </div>
                    <div>
                        <p>时尚周刊</p>
                        <span>有人认为时尚即是简单，有时时尚只是为了标新立异,给人焕然一新拥有时尚王风范的感觉。
                        </span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={`${img1}`} alt=""/>
                    </div>
                    <div>
                        <p>时尚周刊</p>
                        <span>有人认为时尚即是简单，有时时尚只是为了标新立异,给人焕然一新拥有时尚王风范的感觉。
                        </span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={`${img1}`} alt=""/>
                    </div>
                    <div>
                        <p>时尚周刊</p>
                        <span>有人认为时尚即是简单，有时时尚只是为了标新立异,给人焕然一新拥有时尚王风范的感觉。
                        </span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={`${img1}`} alt=""/>
                    </div>
                    <div>
                        <p>时尚周刊</p>
                        <span>有人认为时尚即是简单，有时时尚只是为了标新立异,给人焕然一新拥有时尚王风范的感觉。
                        </span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={`${img1}`} alt=""/>
                    </div>
                    <div>
                        <p>时尚周刊</p>
                        <span>有人认为时尚即是简单，有时时尚只是为了标新立异,给人焕然一新拥有时尚王风范的感觉。
                        </span>
                    </div>
                </li>
            </ul>
        </HotArticleWraper>
    );
};

export default HotArticle;