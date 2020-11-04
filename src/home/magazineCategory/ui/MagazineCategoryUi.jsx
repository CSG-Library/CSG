import React from 'react';

import { MagazineCategoryWrap } from './StyledMagazineCategory'
import SmallTitle from '@c/smallTitle/SmallTitle' 

import AsideBarList from './AsideBarList'
import MagazineList from './MagazineList'
import HotRecommend from './HotRecommend'
import NewList from './NewList'

const MagazineCategoryUi = () => {
  return (
    <>
      <MagazineCategoryWrap>
        <div className="container">
          <div className="left-aside">
            <AsideBarList></AsideBarList>
          </div>
          <div className="right-content">
            <SmallTitle title='最新上架杂志'></SmallTitle>
            <MagazineList></MagazineList>
            <HotRecommend></HotRecommend>
            <NewList></NewList>
          </div>
        </div>
      </MagazineCategoryWrap> 
    </>
  );
}

export default MagazineCategoryUi;
