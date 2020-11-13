import React,{ useCallback } from 'react';

import SmallTitle from '@c/smallTitle/SmallTitle' 

import { NewListWrap } from './StyledMagazineCategory'
import { useHistory } from 'react-router-dom';

const NewList = () => {
   let history = useHistory()
   const GotoNews = useCallback(() => {
      return () => {
         history.push('/home/news')
      }
   }, [history])

  return (
    <NewListWrap>
      <SmallTitle title='滚动新闻'></SmallTitle>
      <div className="content">
        <img src="/img/hot4.png" alt=""/>
        <div className="new-right-content">
          <h3>模特上封面</h3>
          <p>超模之所以被称为“超级模特”其实说的就是她们的身价根据福布斯榜单显示，2017年国际超模Top 10的榜单实质地说明了现在的势力榜。但请注意，是势力而不是实力呦，这10位中，真正具备超模能力的是谁。

          <span onClick={GotoNews()}>更多{'>'}</span>
          </p>
        </div>
      </div>
      <ul>
        <li>
          <p>【环球人物】很多人怀念老北京的风情，老舍、林语堂的文字里都能让</p>
          <span onClick={GotoNews()}>更多{'>'}</span>
        </li>
        <li>
          <p>【环球人物】很多人怀念老北京的风情，老舍、林语堂的文字里都能让</p>
          <span onClick={GotoNews()}>更多{'>'}</span>
        </li>
        <li>
          <p>【环球人物】很多人怀念老北京的风情，老舍、林语堂的文字里都能让</p>
          <span onClick={GotoNews()}>更多{'>'}</span>
        </li>
      </ul>
    </NewListWrap>
  );
}

export default NewList;
