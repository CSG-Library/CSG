import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import { AsideWrap, SecWrap } from './styleChapterDet';

const Aside = (props) => {
   const handleClick = useCallback(() => {
      return () => {
         props.history.goBack()
      }
   }, [props.history])

   const GoShelfClick = useCallback((v) => {
      return () => {
         console.log(v)
         props.history.push('/home/bookshelf/book')
      }
   }, [props.history])
   
   let { detlist, book_id } = props;
   let list = detlist && detlist[book_id];

   return (
      <AsideWrap>
         <button onClick={handleClick()}> 
            <b className="iconfont">&#xe68e;</b>
            <em>返回</em>
         </button>
         <div>
            <h2>{list && list['book_title']}</h2> 
            <img src={list && list['book_img']} alt=""/>
            <h3>作者：{list && list['book_author']}</h3>
            <h4>分类：{list && list['book_cate']}</h4>
            <h5>状态：{list && list['book_isEnd'] ? '已完结':'未完结'}</h5>
         </div>
         <SecWrap width="1px 0" color='#eee'>
            <h6 onClick={GoShelfClick(list)}><span>查看书架</span></h6>
         </SecWrap>
      </AsideWrap>
   )
}

export default withRouter(Aside)