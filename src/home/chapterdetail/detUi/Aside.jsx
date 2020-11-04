import React, { Component, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import { AsideWrap, SecWrap } from './styleChapterDet';

import img from '@a/imgs/novel.png';

const Aside = (props) => {
   const handleClick = useCallback(() => {
      return () => {
         props.history.goBack();
      }
   })

   return (
      <AsideWrap>
         <button onClick={handleClick()}> 
            <b className="iconfont">&#xe68e;</b>
            <em>返回</em>
         </button>
         <div>
            <h2>宦妃还朝</h2> 
            <img src={`${img}`} alt=""/>
            <h3>作者：鸭圣婆</h3>
            <h4>分类：古风言情</h4>
            <h5>状态：已完结</h5>
         </div>
         <SecWrap width="1px 0" color='#eee'>
            <h6><span>查看书架</span></h6>
         </SecWrap>
      </AsideWrap>
   )
}

export default withRouter(Aside)