import React, { useState }/* , { Component }  */from 'react';

import {
    TitleWraper,
    BookMenuWraper
} from './StyledIntroduce'

const  MenuList=[
    {id:0,number:'第一章',title:'前端发展史'},
    {id:1,number:'第二章',title:'html发展史'},
    {id:2,number:'第三章',title:'CSS发展史'},
    {id:3,number:'第四章',title:'JS发展史'},
    {id:4,number:'第五章',title:'Vue发展史'},
    {id:5,number:'第六章',title:'React发展史'},
    {id:6,number:'第七章',title:'Jquery发展史'},
    {id:7,number:'第八章',title:'Java发展史'},
    {id:8,number:'第九章',title:'Php发展史'},
    {id:9,number:'第十章',title:'C语言发展史'},
    {id:10,number:'第十一章',title:'Go发展史'},
    {id:11,number:'第十二章',title:'NBA发展'},
    {id:12,number:'第十三章',title:'CBA发展'},
    {id:13,number:'第十四章',title:'211发展'},
    {id:14,number:'第十五章',title:'985发展'},
    {id:15,number:'第十六章',title:'华科之子'},
    {id:16,number:'第十七章',title:'武大樱花'},
    {id:17,number:'第十八章',title:'厦大之美'},
    {id:18,number:'第十九章',title:'北大之路'},
    {id:19,number:'第二十章',title:'清华历史'},
    {id:20,number:'第二十一章',title:'同济骄傲'},
    {id:21,number:'第二十二章',title:'南开之花'},
    {id:22,number:'第二十三章',title:'川大典雅'},
    {id:23,number:'第二十四章',title:'交大雄起'},
    {id:24,number:'第二十五章',title:'人大霸气'},
]

const BookMenu=()=> {
    let [menuList] = useState( MenuList)

    let [isShow , setIsShow] = useState({
        show:false,
    })
    
    let [state,setState] = useState(0)

    let style1 = {
        height:52,
        // backgroundColor:'#f56c',
        // transition:' all 1s',
        // lc:4
    }
    let style2 = {
        height:'100%',
        backgroundColor:'#d84',
    }
    //函数时组件中，setState有bug，如果还是直接返回一个原值，总是不能拿到最新的数据，所以我们要返回一个新值，这样每次都会拿到新值
    const handleClick1=(v)=>{
        return ()=>{
            setState(()=>{
                let newstate=v.id
                // console.log(newstate)
                // console.log(state)
                return newstate
            }) 
        }
    }

    const handleClick2=()=>{
        // console.log(isShow.show,isShow)
        setIsShow({
            show:!isShow.show, 
        })
    } 
    return (
        < BookMenuWraper>
            <TitleWraper
            width="0 0 1px 0"
            >
                <span>书籍目录</span>
            </TitleWraper>
            <ul
            style={isShow.show?style2:style1}
            >
                {
                    menuList.map((v,i)=>{
                        return (<li
                            key={i}
                            onClick={handleClick1(v)}
                            className={v.id===state?'active':''}
                            >
                            <span>{v.number}</span>
                            &nbsp;
                            <span>{v.title}</span>
                        </li>)
                    })
                }
            </ul>
            {isShow.show?
            <div onClick={handleClick2}>向上收起</div>
            :
            <div onClick={handleClick2}>查看更多V</div>
            } 
        </ BookMenuWraper>
    );
    
}

export default BookMenu;