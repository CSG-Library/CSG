import React from 'react';

import { PagerWrap } from './StyledPager'

const Pager = (props) => {
  const { totalPageNum, curPageNum, onClickPageNum,  onClickLeftPageBtn, onClickRightPageBtn} = props
  let items = []
  for(var i = 1; i <= totalPageNum; i ++){
    items.push(
    <span 
      key={i} 
      className={i === curPageNum ? 'page-btn active' : 'page-btn'}
      onClick={onClickPageNum(i)}
    >{i}</span>)
  }
  return (
    <PagerWrap>
      <span 
        className="left-btn"
        onClick={onClickLeftPageBtn}
      >
        <img src="/img/left-arrow.png" alt=""/>
      </span>
      {
        items
      }
      <span 
        className="right-btn"
        onClick={onClickRightPageBtn}
      >
        <img src="/img/right-arrow.png" alt=""/>
      </span>
    </PagerWrap>
  );
}

export default Pager;
