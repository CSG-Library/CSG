import React, { useCallback } from 'react';

import SmallTitle from '@c/smallTitle/SmallTitle' 

import { HotRecommendWrap } from './StyledMagazineCategory'
import { useHistory } from 'react-router-dom';
import useGoHot from './useGoHot';

const HotRecommend = () => {
   let history = useHistory()
   const handleClick = useCallback(() => {
      return () => {
         history.push('/home/magacontent')
      }
   }, [history])

   const { GotoHot } = useGoHot()

  return (
    <HotRecommendWrap>
      <SmallTitle title='热门内容推荐'></SmallTitle>
      <ul>
        <li>
          <img src="/img/hot1.png" onClick={handleClick()} alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span onClick={GotoHot()}>更多{'>'}</span></p>
        </li>
        <li>
          <img src="/img/hot2.png" onClick={handleClick()} alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span onClick={GotoHot()}>更多{'>'}</span></p>
        </li>
        <li>
          <img src="/img/hot3.png" onClick={handleClick()} alt=""/>
          <h3>登上封面</h3>
          <p>GOAOI：以资讯见长的FHM其时在英国的销量稳居第一名。<span onClick={GotoHot()}>更多{'>'}</span></p>
        </li>
      </ul>
    </HotRecommendWrap>
  );
}

export default HotRecommend;
