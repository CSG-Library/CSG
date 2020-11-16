import React, { useState }/* , { Component }  */ from 'react';

import {
   TitleWraper,
   // EllWraper,
   BookIntroWraper
} from './StyledIntroduce'

const BookIntro = (props) => {
   // console.log(props.book_intro)
   let [isShow, setIsShow] = useState({
      show: false,
      // height:100
   })
   let style1 = {
      height: 104,
      // backgroundColor: '#f56c',
      // transition:' all 1s',
      lc: 4
   }
   let style2 = {
      height: '100%',
      // backgroundColor: '#d84',
   }

   const handleClick = () => {
      console.log(isShow.show, isShow)
      setIsShow({
         show: !isShow.show,
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
            style={isShow.show ? style2 : style1}
         >
            {props.book_intro}   
                </div>

         {isShow.show ?
            <div onClick={handleClick}>向上收起</div>
            :
            <div onClick={handleClick}>查看更多V</div>
         }
      </ BookIntroWraper>
   );

}

export default BookIntro;