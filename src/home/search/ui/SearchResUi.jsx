import React,{ useState } from 'react';
// import PropsTypes from 'prop-types';

import { Title1, Title2 } from './styleRes';
import ResComWrap from './ResCom';
import SepPage from "@c/separatepage/SepPage";

import { withRouter, useLocation } from 'react-router-dom';
import memoizeOne from 'memoize-one';

const SearchCateUi = (props) => {
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

   const list = memoizeOne(arr => arr.slice((current - 1) * pageSize, current * pageSize))

   return (
      <>
         <Title1 width='0 0 1px 0' color='#eee'>
            <span>搜索关键词（20条结果）</span>
         </Title1>
         <Title2>搜索结果1-20 共20条</Title2>

         <ResComWrap 
            currentPageList={list(arr)}
         ></ResComWrap>
         <SepPage 
            current={current}
            totalPage={totalPage}
            onTpFirst={FirstPageClick}
            onTpLast={LastPageClick}
            onTpPrev={PrevPageClick}
            onTpNext={NextPageClick}
            onTpJump={JumpPageClick}
         ></SepPage>
      </>
   )
}

export default withRouter(SearchCateUi)