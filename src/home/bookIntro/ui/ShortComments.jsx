import React, { useCallback, useState } from 'react';
import PropsTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router-dom';

import {
   TitleWraper,
   ShortCommentsWraper
} from './StyledIntroduce'

const ShortComments = (props) => {
   console.log(props)
   console.log(useLocation())
   let [isShow, setIsShow] = useState({ show: false })

   const handleClick1 = () => {
      this.setState({ show: !isShow.show })
   }

   const history = useHistory()
   const GoShortComClick = useCallback(() => {
      return () => {
         history.push('/home/shortcomment')
      }
   }, [history])

   return (
      <ShortCommentsWraper>
         <TitleWraper width="0 0 1px 0">
            <span>三言两语（{'<'}140字的评论）</span>
         </TitleWraper>
         <div className='r'>
            点击评论
        </div>
         <ul>
            {
               props.short_comments.map((v, i) => {
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
         </ul>
         <div >
            <span className='r'
               onClick={GoShortComClick()}
            >
               所有短评（222）{`>`}
            </span>

            {isShow.show ?
               <div className='r' onClick={handleClick1}>向上收起</div>
               :
               <div className='r' onClick={handleClick1}>查看更多V</div>
            }
         </div>
      </ShortCommentsWraper>
   );
}

ShortComments.PropsTypes = {
   list: PropsTypes.array
}

export default ShortComments