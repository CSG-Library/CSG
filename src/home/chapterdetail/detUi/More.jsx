import React, { Component } from 'react';

import { MoreWrap } from './styleChapterDet';

import img from '@a/imgs/novel.png';

const More = (props) => {
   return (
      <MoreWrap>
         <dl>
            <dt><img src={img} alt=""/></dt>
            <dd>天下第一妃</dd>
         </dl>
         <dl>
            <dt><img src={img} alt=""/></dt>
            <dd>天下第一妃</dd>
         </dl>
         <dl>
            <dt><img src={img} alt=""/></dt>
            <dd>天下第一妃</dd>
         </dl>

         <div>发现更多好书 &gt; </div>
      </MoreWrap>
   )
}

export default More