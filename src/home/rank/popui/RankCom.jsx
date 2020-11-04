import React, { Component } from 'react'

import { RankWrap } from './styleRank';
import UlWrap from '@c/booklist/UlWrap';
import SepPage from "@c/separatepage/SepPage";

const RankCom = (props) => {
   return (
      <RankWrap>
         <h5>
            <span>排行榜类型（阅读/销售/收藏）</span>
            <span>排行时间范围（年度/季度/月/日）</span>
         </h5>
         <UlWrap></UlWrap>

         <SepPage {...props}></SepPage>
      </RankWrap>
   )
}

export default RankCom