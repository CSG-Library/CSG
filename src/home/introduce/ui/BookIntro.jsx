import React, { useState }/* , { Component }  */from 'react';


import {
    TitleWraper,
    // EllWraper,
    BookIntroWraper
} from './StyledIntroduce'

const BookIntro=()=>{
        let [isShow , setIsShow] = useState({
            show:false,
            // height:100
        })
        let style1 = {
            height:104,
            backgroundColor:'#f56c',
            // transition:' all 1s',
            lc:4
        }
        let style2 = {
            height:'100%',
            backgroundColor:'#d84',
        }
        
        const handleClick=()=>{
            console.log(isShow.show,isShow)
            setIsShow({
                show:!isShow.show,
                // height:300
            })
        } 
        return ( 
            < BookIntroWraper>
                <TitleWraper
                width="0 0 1px 0"
                // borderColor='#fd9b9b'
                > 
                     <span>书籍介绍</span>
                </TitleWraper>

                <div
                style={isShow.show?style2:style1}
                > 
                
                    穿越而来,她自带防毒雷达。哔哔一啥?姨娘凶狠,外加蛇蝎庶妹?哔哔一呀!包办婚姻,老公还看不上她?没关系，凭她超高智商,灭杀渣渣只在转瞬之间。绝色容颜,吸引狂蜂浪蝶无数，人气爆棚,神马皇帝亲王,都.各位书友要是觉得《绝色毒医王妃》还不错的话请不要忘记向您qq群和微博里的朋友推荐哦!
                    穿越而来,她自带防毒雷达。哔哔一啥?姨娘凶狠,外加蛇蝎庶妹?哔哔一呀!包办婚姻,老公还看不上她?没关系，凭她超高智商,灭杀渣渣只在转瞬之间。绝色容颜,吸引狂蜂浪蝶无数，人气爆棚,神马皇帝亲王,都.各位书友要是觉得《绝色毒医王妃》还不错的话请不要忘记向您qq群和微博里的朋友推荐哦!
                    穿越而来,她自带防毒雷达。哔哔一啥?姨娘凶狠,外加蛇蝎庶妹?哔哔一呀!包办婚姻,老公还看不上她?没关系，凭她超高智商,灭杀渣渣只在转瞬之间。绝色容颜,吸引狂蜂浪蝶无数，人气爆棚,神马皇帝亲王,都.各位书友要是觉得《绝色毒医王妃》还不错的话请不要忘记向您qq群和微博里的朋友推荐哦!
                </div>   
  
                    {isShow.show?
                        <div onClick={handleClick}>向上收起</div>
                        :
                        <div onClick={handleClick}>查看更多V</div>
                    } 
            </ BookIntroWraper>
        );

}

export default BookIntro;