import React, { useCallback } from 'react';

import { ChapterWrap, Title } from './styleChapterDet';

import { withRouter,Route } from 'react-router-dom';

import { ChapterRead } from '../'

const Chapter = (props) => {
   const handleClick = useCallback(() => {
      return () => {
         props.history.push('/home/chapterpage')
      }
   })

   return (
     <>
         <ChapterWrap>
            <Title width='0 0 1px 0'><span>章节详情</span></Title>
            <ul>
               <li onClick={handleClick()}>第一章 自告奋勇</li>
               <li onClick={handleClick()}>第一百零七章 配合做戏</li>
               <li onClick={handleClick()}>第六十二章 揭露阴谋</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第一章 自告奋勇</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第一章 自告奋勇</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第一章 自告奋勇</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第一章 自告奋勇</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第二章 穿越花轿</li>
               <li>第一百零七章 配合做戏</li>
               <li>第六十二章 揭露阴谋</li>
               <li>第一章 自告奋勇</li>
               <li>第二章 穿越花轿</li>
               
            </ul>
         </ChapterWrap>

         <Route path="/home/browse/chapterpage"><ChapterRead></ChapterRead></Route>
     </>
   )
}

export default withRouter(Chapter)