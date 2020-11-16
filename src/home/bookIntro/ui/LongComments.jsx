import React/* , { Component }  */ from 'react';


import {
   TitleWraper,
   LongCommentsWraper
} from './StyledIntroduce'

import img from '@a/imgs/lc1.png'

const LongComments = (props) => {
   // console.log(props.long_comments)
   return (
      < LongCommentsWraper>
         <TitleWraper
            width="0 0 1px 0"
         // borderColor=' #000'
         >
            <span>长篇大论（{'>'}140字的评论）</span>
         </TitleWraper>
         <div className='r'>
            点击评论
                </div>
         <ul>
            {
              props.long_comments.map((v,i)=>{
                 return (
                  <li
                  key={i}
                  >
                  <div>
                     <div>
                        {/* <img src={`${img}`} alt="" /> */}
                        <img src={v.img} alt=""/>
                     </div>
                  <span>{v.title}</span>
                  </div>
                  <div >
                     <span >标题</span>
                     <span>评论时间&nbsp;：&nbsp;
                     {v.publish_date}&nbsp;
                     {v.publish_time}
                     </span>
                     <span>
                        {v.abstruct}
                     </span>
                     {/* <span className='r'>
                        查看全文{`>`}
                     </span> */}
                  </div>
               </li>
                 )
              })
            }
           
            <div>
               <span className='r'>所有长评（222）{`>`}</span>
            </div>
         </ul>

      </ LongCommentsWraper>
   );
}

export default LongComments;