import React,{ useState,useCallback }from 'react';
import PropsTypes from 'prop-types'

import Dialog from '@c/dialog/Dialog'
import { useHistory }  from 'react-router-dom';

import {
    TitleWraper,
    ShortCommentsWraper
} from './StyledIntroduce'

const ShortComments=(props)=> {
    // console.log(props)
    /* let [isShow , setIsShow] = useState({
        show:false,
        // height:100
    })
    let style1 = {
        height:370,
        backgroundColor:'#f56c',
        // transition:' all 1s',
    }
    let style2 = {
        height:375,
        backgroundColor:'#d84',
    }
    
    const handleClick1=()=>{
        console.log(isShow.show,isShow)
        setIsShow({
            show:!isShow.show,
            // height:300
    })
    }
*/
    //  console.log(props.list)
    // const handleClick=(v)=>
    //     return()=>{
    //         console.log(v)
    //     }
    // }

    let [isShow , setIsShow] = useState({
        show:true,
    })
    let [list , setList] = useState([])
    /* setList(list=props.short_comments)
    console.log(list) */
    const List = props.short_comments
    // console.log(List)
    // const style1 = {
    //     display:none
    //     // height:370,
    //     // backgroundColor:'#f56c',
    //     // transition:' all 1s',
    // }
    // const style2 = {
    //     display:block,
    //     // height:375,
    //     // backgroundColor:'#d84',
    // }
    const history = useHistory()

    const GoShortComClick = useCallback(() => {
      return () => {
         history.push('/home/shortcomment')
      }
    })

    const handleClick = useCallback(()=>{
        setIsShow({
            show:!isShow.show
        })
    })
    
    const handleDeleteClick = useCallback(()=>{
        return (keywords)=>{
            // console.log(keywords)
            // console.log(1)
            setIsShow({
                show:!isShow.show
            })
        }
        
    })

    const handleReceiveKeywords = useCallback(()=>{
        return (title,keywords, time)=>{
            console.log(title,keywords,time)
            // console.log(1)
            // setList(List.push)
            setIsShow({
                show:!isShow.show
            })
        }
    })
    return (
        <ShortCommentsWraper>
        <TitleWraper
        width="0 0 1px 0"
        // borderColor='#000'
        >
            <span>三言两语（{'<'}140字的评论）</span>
        </TitleWraper>
        <div 
        className='r'
        onClick={handleClick}
        >
            点击评论
        </div>
        <ul
            /* style={isShow.show?style2:style1} */
        >
            {
                props.short_comments.map((v,i)=>{
                    return (
                        <li 
                        key={i}
                       /*  onClick={handleClick(v)
                        } */
                        >
                            <span>{v.title}</span>
                            <span>
                                评论时间 
                                &nbsp;
                                :
                                &nbsp;
                                {v.publish_date}
                                &nbsp;
                                {v.publish_time}
                            </span>
                            <span>
                                {v.abstruct}
                            </span> 
                        </li>
                    )
                })
            }
           {/*  <li>
                <span>评论人</span>
                <span>评论时间:
                    2020-02-02&nbsp;
                    20:20
                </span>
                <span>
                    千锋教育是互联网教育行业扛把子，在业界内有着良好的评价，万千学子通过这个平台，获得良好的就业前景，实现了人生价值。
                </span>
            </li> */}
            
            
        </ul>
        
        <div >
        <span className='r' 
         /* onClick={handleClick()} */
         onClick={GoShortComClick()}
         >
            所有短评（222）{`>`}
        </span>
            {/* {isShow.show?
            <div className='r' onClick={handleClick1}>向上收起</div>
            :
            <div className='r' onClick={handleClick1}>查看更多V</div>
        }  */}
        </div>
        {
            isShow.show?(
            <Dialog 
            onDeleteClick={handleDeleteClick()}
            onReceiveKeywords={handleReceiveKeywords()}
            ></Dialog>)
            :" "
        }
        </ShortCommentsWraper>
    );
}

ShortComments.PropsTypes={
    list:PropsTypes.array
}

export default ShortComments