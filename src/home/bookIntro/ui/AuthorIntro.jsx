import React/* , { Component }  */from 'react';


import {
    TitleWraper,
    AuthorIntroWraper
} from './StyledIntroduce'

const AuthorIntro=(props)=> {
    // render() {
        return (
            <  AuthorIntroWraper>
            <TitleWraper
            width="0 0 1px 0"
            // borderColor='#000'
            >
                 <span>作者介绍</span>
            </TitleWraper>
            
            <div>    
                {/* 作者用过有三个笔名。原笔名为Jassica ,后改为禾如,后改为是蓝花月(出版书的笔名)。<br/>
                超级宅女一枚,经常性喜新厌旧,属于三分钟热度人种,小宇宙爆发十分少见。金牛座,个性固执。粘液质,时而多言多笑，时而沉默寡言,面无表情。性情懒散,作息极度正常,非夜猫。爱说笑话,极冷,从不笑场，对方却捧腹大笑。非感性,却时常拽纸巾对着电脑屏幕大哭特哭。 */}
                {props.author_detail}
            </div>
        </  AuthorIntroWraper>
        );
    // }
}

export default AuthorIntro;