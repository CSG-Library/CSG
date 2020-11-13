import React,{ useState } from 'react'
// import PropsTypes from 'prop-types';

import { Title } from './styleHotMag';
import HotMagCom from './HotMagCom';
import SepPage from "@c/separatepage/SepPage";

import { withRouter, useLocation } from 'react-router-dom';
import memoizeOne from 'memoize-one';

const HotMagUi = (props) => {
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
         <Title width='0 0 1px 0'><span>热门文章</span></Title>

         <HotMagCom currentPageList={list(arr)}></HotMagCom>
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

export default withRouter(HotMagUi)