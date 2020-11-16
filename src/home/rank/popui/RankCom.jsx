import React, { useCallback, useState } from 'react'

import { RankWrap } from './styleRank';
import UlWrap from '@c/booklist/UlWrap';
import SepPage from "@c/separatepage/SepPage";

import { withRouter, useLocation } from 'react-router-dom';
import memoizeOne from 'memoize-one';

const RankCom = (props) => {
   const { arr, limit } = useLocation().state
   let total = Math.ceil(arr.length / limit)

   const [current, setCurrent] = useState(1)
   const [totalPage] = useState(total)
   const [pageSize] = useState(limit)

   const FirstPageClick = () => {
      setCurrent(1)
   }
   const PrevPageClick = () => {
      current !== 1 && setCurrent(current => current - 1)
   }
   const NextPageClick = () => {
      current !== totalPage && setCurrent(current => current + 1)
   }
   const LastPageClick = () => {
      setCurrent(totalPage)
   }

   const JumpPageClick = (num) => {
      return () => {
         setCurrent(num)
      }
   }

   // console.log(current, totalPage, pageSize) 
   const list = memoizeOne(arr => arr.slice((current - 1) * pageSize, current * pageSize))

   return (
      <RankWrap>
         <h5>
            <span>排行榜类型（阅读/销售/收藏）</span>
            <span>排行时间范围（年度/季度/月/日）</span>
         </h5>
         <UlWrap
            currentPageList={list(arr)}
         ></UlWrap>
         <SepPage
            current={current}
            totalPage={totalPage}
            onTpFirst={FirstPageClick}
            onTpLast={LastPageClick}
            onTpPrev={PrevPageClick}
            onTpNext={NextPageClick}
            onTpJump={JumpPageClick}
         ></SepPage>
      </RankWrap>
   )
}

export default withRouter(RankCom)