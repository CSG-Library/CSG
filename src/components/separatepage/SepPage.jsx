import React from 'react';

import { Sepwrap } from './styleSepPage';

const SepPage = props => {
   // console.log(props)
   const list = []
   for(var i = 1; i <= props.totalPage; i++){
      list.push({ id: i, pageNum: i })
   }

   return (
      
      <Sepwrap>
         <p onClick={props.onTpFirst}>首页</p>
         <p onClick={props.onTpPrev}>上一页</p>
         <ul>
            {
               list.map(({id, pageNum}) => 
                  <li 
                     key={id} 
                     onClick={props.onTpJump(pageNum)}
                     className={props.current === pageNum ? 'active' : ''}
                  >{pageNum}</li>
               )
            }
         </ul>
         <p onClick={props.onTpNext}>下一页</p>
         <p onClick={props.onTpLast}>末页</p>
      </Sepwrap>
   )
}

export default SepPage