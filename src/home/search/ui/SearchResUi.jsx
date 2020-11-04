import React from 'react';
// import PropsTypes from 'prop-types';

import { Title1, Title2 } from './styleRes';
import ResComWrap from './ResCom';
import SepPage from "@c/separatepage/SepPage";

const SearchCateUi = (props) => {
   return (
      <>
         <Title1 width='0 0 1px 0' color='#eee'>
            <span>搜索关键词（20条结果）</span>
         </Title1>
         <Title2>搜索结果1-20 共20条</Title2>
         <ResComWrap></ResComWrap>
         <SepPage {...props}></SepPage>
      </>
   )
}

export default SearchCateUi