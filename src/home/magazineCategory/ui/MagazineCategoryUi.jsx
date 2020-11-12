import React from 'react';

import memoize from 'memoize-one'

import { MagazineCategoryWrap } from './StyledMagazineCategory'
import SmallTitle from '@c/smallTitle/SmallTitle' 

import AsideBarList from './AsideBarList'
import MagazineList from './MagazineList'
import HotRecommend from './HotRecommend'
import NewList from './NewList'

const MagazineCategoryUi = (props) => {
  const { categoryCate, bookList, totalPageNum, curPageNum, onClickPageNum, onClickLeftPageBtn, onClickRightPageBtn, pageShowNum  } = props
  const showList = memoize(list => list.slice(((curPageNum - 1 ) * pageShowNum), curPageNum * pageShowNum))

  return (
    <>
      <MagazineCategoryWrap>
        <div className="container">
          <div className="left-aside">
            <AsideBarList
              categoryCate={categoryCate}
            ></AsideBarList>
          </div>
          <div className="right-content">
            <SmallTitle title='最新上架杂志'></SmallTitle>
            <MagazineList
              bookList={showList(bookList)}
              totalPageNum={totalPageNum}
              curPageNum={curPageNum}
              onClickPageNum={onClickPageNum}
              onClickLeftPageBtn={onClickLeftPageBtn}
              onClickRightPageBtn={onClickRightPageBtn}
            ></MagazineList>
            <HotRecommend></HotRecommend>
            <NewList></NewList>
          </div>
        </div>
      </MagazineCategoryWrap> 
    </>
  );
}

export default MagazineCategoryUi;
