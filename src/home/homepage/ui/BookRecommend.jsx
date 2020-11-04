import React from 'react';

import { BookRecommendWrap } from './StyledCategory'

const BookRecommend = () => {
  return (
    <BookRecommendWrap>
      <div className="container">
        <h2>书籍推荐</h2>

        <div className="left-content">
          <img src="/img/img1.png" alt=""/>
          <h4 className="title">少夫人又要离婚</h4>
          <h5 className="author">作者：岁岁长安年</h5>
          <p>
简介：“霍上校，三年已到，离婚
签字。”“三年的青春，我应该负
不用不用真不用。”“确定？”聂
兮被霍上校“无意”看光光，聂汐
扶心累：算了，我当你瞎。聂汐兮
霍上校“意外”夺走初吻。聂汐...</p>
          <div className="read-btn">立即阅读</div>
        </div>

        <div className="right-content">
          <ul>
            <li className='first-li'>
              <h3>
                古代言情
                <span>更多{'>'}</span>
              </h3>
              <div className='book-content'>
                <img src="/img/img1.png" alt=""/>
                <div>
                  <h5>绝色毒医王妃</h5>
                  <p>角色容颜，吸引狂蜂浪蝶无数。。。。</p>
                </div>
              </div>
              <ul>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
              </ul>
            </li>
            <li>
              <h3>
                古代言情
                <span>更多{'>'}</span>
              </h3>
              <div className='book-content'>
                <img src="/img/img1.png" alt=""/>
                <div>
                  <h5>绝色毒医王妃</h5>
                  <p>角色容颜，吸引狂蜂浪蝶无数。。。。</p>
                </div>
              </div>
              <ul>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
              </ul>
            </li>
            <li>
              <h3>
                古代言情
                <span>更多{'>'}</span>
              </h3>
              <div className='book-content'>
                <img src="/img/img1.png" alt=""/>
                <div>
                  <h5>绝色毒医王妃</h5>
                  <p>角色容颜，吸引狂蜂浪蝶无数。。。。</p>
                </div>
              </div>
              <ul>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
                <li><span>[穿越]</span>邪王嗜宠:无赖小公主</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </BookRecommendWrap>
  );
} 

export default BookRecommend;
