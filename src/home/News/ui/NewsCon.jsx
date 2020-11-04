import React,{ useCallback } from 'react';

import { MagazineWrap, AsideTab } from './StyledNews'
import Pager from '@c/pager/Pager'
import SmallTitle from '@c/smallTitle/SmallTitle'
import { withRouter } from 'react-router-dom';

const MagazineCon = (props) => {
   const handleClick = useCallback(() => {
      return () => {
         props.history.push('/home/newcontent')
      }
   })

  return (
    <MagazineWrap>
      <div className="container">
        <AsideTab>
          <h3>新闻分类</h3> 
          <ul>
            <li className='active'>新闻（999）</li>
            <li>书讯（666）</li>
            <li>书评（233）</li>
          </ul>
        </AsideTab>

        <section>
          <SmallTitle title='新闻资讯'></SmallTitle>
          {/* <h1>
            <span>新闻资讯</span>
          </h1> */}
          <ul>
            <li>
              <img src="/img/magazine.png" onClick={handleClick()}  alt=""/>
              <div className="magazine-message">
                <h3 onClick={handleClick()} >第六届澳门科技大学传播周：传播与影像叙事中的城市 <span>时间：2019-1-2 10:00</span></h3>
                <p>
                                今年是澳门回归20周年，也是澳门科技大学成立19周年。20年来，传播载体和传播途径发生了天翻地覆的变化，从照片到短视频，从
电视台到“抖音”，城市影像日渐成为一种日常生活的存在方式，嵌入到人们的生活之中
                            </p>
              </div>
            </li>
            <li>
              <img src="/img/magazine.png" onClick={handleClick()}  alt=""/>
              <div className="magazine-message">
                <h3 onClick={handleClick()} >第六届澳门科技大学传播周：传播与影像叙事中的城市 <span>时间：2019-1-2 10:00</span></h3>
                <p>
                                今年是澳门回归20周年，也是澳门科技大学成立19周年。20年来，传播载体和传播途径发生了天翻地覆的变化，从照片到短视频，从
电视台到“抖音”，城市影像日渐成为一种日常生活的存在方式，嵌入到人们的生活之中
                            </p>
              </div>
            </li>
            <li>
              <img src="/img/magazine.png" alt=""/>
              <div className="magazine-message">
                <h3>第六届澳门科技大学传播周：传播与影像叙事中的城市 <span>时间：2019-1-2 10:00</span></h3>
                <p>
                                今年是澳门回归20周年，也是澳门科技大学成立19周年。20年来，传播载体和传播途径发生了天翻地覆的变化，从照片到短视频，从
电视台到“抖音”，城市影像日渐成为一种日常生活的存在方式，嵌入到人们的生活之中
                            </p>
              </div>
            </li>
            <li>
              <img src="/img/magazine.png" alt=""/>
              <div className="magazine-message">
                <h3>第六届澳门科技大学传播周：传播与影像叙事中的城市 <span>时间：2019-1-2 10:00</span></h3>
                <p>
                                今年是澳门回归20周年，也是澳门科技大学成立19周年。20年来，传播载体和传播途径发生了天翻地覆的变化，从照片到短视频，从
电视台到“抖音”，城市影像日渐成为一种日常生活的存在方式，嵌入到人们的生活之中
                            </p>
              </div>
            </li>
          </ul>

          <div className='pager-wrap'>
            <Pager></Pager>
          </div>
        </section>
      </div> 
    </MagazineWrap>
  );
} 

export default withRouter(MagazineCon);
