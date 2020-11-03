import React, { useState }/* , { Component } */ from 'react';
//注意正常写li的时候，这种@代理路径会自动转变，能解析，
//但是用map遍历时候要注意mock数据中图片的路径要写成正常路径，可以在网页中打开控制台看一下
//  import img from '@a/images/alsolove.png'


import {
    TitleWraper,
    AlsoLoveWraper
} from './StyledIntroduce'



const AlsoLoveList =[

    {
        img:"http://localhost:3000/static/media/alsolove.c669761e.png",
        pageName:'学好h5的重要性',
    },
    {
        img:"http://localhost:3000/static/media/alsolove.c669761e.png",
       pageName:'学好css的重要性',
    },
    {
        img:"http://localhost:3000/static/media/alsolove.c669761e.png",
        pageName:'学好js的重要性',
    },
    {
        img:"/static/media/alsolove.c669761e.png",
        pageName:'学好node的重要性',
    },
    {
        img:"/static/media/alsolove.c669761e.png",
        pageName:'学好Vue的重要性',
    },
    {
        img:"/static/media/alsolove.c669761e.png",
        pageName:'学好React的重要性',
    },
    {
        img:"/static/media/alsolove.c669761e.png",
        pageName:'学好java的重要性',
    }
    //注意不要写成这种路径
    /* {
        "img":"@a/images/alsolove.png",
        pageName:'学好java的重要性',
    } */
]

const AlsoLove=()=> {
    let [alsoLoveList] = useState(AlsoLoveList)

    const handleClick=(v)=>{
        return()=>{
            console.log(v)
        }
    }

    return (
        <AlsoLoveWraper>
            <TitleWraper
            width="0 0 1px 0"
            >
                <span>喜欢这本书的人也喜欢</span>
            </TitleWraper>
            <ul>
                {
                    alsoLoveList.map((v,i)=>{
                        return (
                            <li
                            key={i}
                            onClick={handleClick(v)}
                            >
                               <div>
                                   <img src={v.img}alt=""/>
                               </div>
                                <div>{v.pageName}</div>
                            </li>
                        )
                    })
                }
                {/* <li>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <div>防止脱发三十六计</div>
                </li>
                <li>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <div>防止脱发三十六计</div>
                </li>
                <li>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <div>防止脱发三十六计</div>
                </li>
                <li>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                    <div>防止脱发三十六计</div>
                </li> */}
            </ul>
        </AlsoLoveWraper>
    );
}

export default AlsoLove;