import React,{useState,useEffect} from 'react';

import img from '@a/images/details.png'

import {get} from '@u/http'

import { Button } from 'antd';

import {
    TitleWraper,
    BookWraper
} from './StyledShortCommentLists'


const Book = () => {
    let [state ,setstate] = useState(0)
    useEffect(()=>{
        (async()=>{
            let result = await get({
                url:'/api/introduce'
            })
            //  console.log(result.data.book_introduce_detail)
            setstate({
                state:result.data.book_introduce_detail[0]
            })
            
        })()
       
    },[])
    //  console.log(state)
   
   /*  if(state){
        console.log(state.state.book_introduce)
        let state = state.state.book_introduce
    } */
    
    return ( 
        <BookWraper className='r'>
            <TitleWraper
            width="0 0 1px 0"
            >
                <span>书籍</span>
            </TitleWraper>
           
            {/* {
                state.state && state.state.map((v,i)=>{
                    return (
                         
                        <div key={i} >    
                        <div>
                            <div>
                            <img src={v.img} alt=""/>
                            </div>
                            <Button 
                            className='button' 
                            type="primary" 
                            >
                                阅读
                            </Button>
                        </div>
                        <div >
                        书名：{v.title}<br/>
                        作者：{v.author}<br/>
                        译者：{v.translator}<br/>
                        副标题：{v.sub_title}<br/>
                        页数：{v.page}<br/>
                        出版社：{v.publish_company}<br/>
                        定价：{v.price}<br/>
                        装帧：{v.binding}<br/>
                        出版年：{v.publish_year}<br/>
                    </div>
                    </div>
            
                    )
                })
            } */}
          
            { state.state ? (
                <>
            <div>
                <div>
                    <img src={state.state.book_introduce.img} alt=""/>
                </div>
                <Button 
                className='button' 
                type="primary" 
                >
                    阅读
                </Button>
            </div>
            <div >
                书名：{state.state.book_introduce.title}<br/>
                作者：{state.state.book_introduce.author}<br/>
                译者：{state.state.book_introduce.translator}<br/>
                副标题：{state.state.book_introduce.sub_title}<br/>
                页数：{state.state.book_introduce.page}<br/>
                出版社：{state.state.book_introduce.publish_company}<br/>
                定价：{state.state.book_introduce.price}<br/>
                装帧：{state.state.book_introduce.binding}<br/>
                出版年：{state.state.book_introduce.publish_year}<br/>
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
           
                </>
            ):""}
        </BookWraper>
    );
};

export default Book;