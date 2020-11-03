import React/* , { Component }  */from 'react';


import {
    TitleWraper,
    BookIntroWraper
} from './StyleMagIntro'

const BookIntro=()=>{
    // render() {
        return (
            < BookIntroWraper>
                <TitleWraper
                width="0 0 1px 0"
                // borderColor='#000'
                >
                     <span>书籍介绍</span>
                </TitleWraper>
                
                <div>    
                    穿越而来,她自带防毒雷达。哔哔一啥?姨娘凶狠,外加蛇蝎庶妹?哔哔一呀!包办婚姻,老公还看不上她?没关系，凭她超高智商,灭杀渣渣只在转瞬之间。绝色容颜,吸引狂蜂浪蝶无数，人气爆棚,神马皇帝亲王,都.各位书友要是觉得《绝色毒医王妃》还不错的话请不要忘记向您qq群和微博里的朋友推荐哦!
                    <span>查看更多V</span>
                </div>
            </ BookIntroWraper>
        );
    // }
}

export default BookIntro;