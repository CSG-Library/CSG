import React, { useCallback } from 'react';

import SmallTitle from '@c/smallTitle/SmallTitle' 

import { HotRecommendWrap } from './StyledMagazineCategory'
import { useHistory } from 'react-router-dom';

const HotRecommend = () => {
   let history = useHistory()
   const handleClick = useCallback(() => {
      return () => {
         history.push('/home/magacontent')
      }
   })

   const GotoHot = useCallback(() => {
      return () => {
         history.push('/home/magahot')
      }
   })


  return (
    <HotRecommendWrap>
      <SmallTitle title='热门内容推荐'></SmallTitle>
      <ul>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span onClick={GotoHot()}>更多{'>'}</span></p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span onClick={GotoHot()}>更多{'>'}</span></p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span onClick={GotoHot()}>更多{'>'}</span></p>
        </li>
      </ul>
    </HotRecommendWrap>
  );
}

export default HotRecommend;
