import React, { useCallback, useState } from 'react'

import { AsideWrap } from './styleRank';

const Aside = (props) => {
   const [isshow, setIsshow] = useState(false)
   const handleClick = useCallback((isshow) => {
      return () => {
         setIsshow(!isshow)
      }
   }, [])

   const dlItems = [
      <dd key={0}><span>书籍名称</span><span>季度榜</span></dd>,
      <dd key={1}><span>1.书籍名</span><span>12520</span></dd>,
      <dd key={2}><span>2.书籍名</span><span>5218</span></dd>,
      <dd key={3}><span>3.书籍名</span><span>4215</span></dd>,
      <dd key={4}><span>4.书籍名</span><span>3620</span></dd>,
      <dd key={5}><span>5.书籍名</span><span>2562</span></dd>,
      <dd key={6} className='dd_btn iconfont' onClick={handleClick(isshow)}>查看更多 &#xe601;</dd>,
      <dd key={7}><span>6.书籍名</span><span>12520</span></dd>,
      <dd key={8}><span>7.书籍名</span><span>5218</span></dd>,
      <dd key={9}><span>8.书籍名</span><span>4215</span></dd>,
      <dd key={10}><span>9.书籍名</span><span>3620</span></dd>,
      <dd key={11}><span>10.书籍名</span><span>2562</span></dd>,
      <dd key={12} className='dd_btn iconfont' onClick={handleClick(isshow)}>收起 &#xe602;</dd>
   ]

   return (
      <AsideWrap {...props}>
         <dl>
            <dt>阅读榜</dt>
            <dd>文学类季度阅读榜</dd>
            <dd>小说类季度阅读榜</dd>
            <dd>艺术类季度阅读榜</dd>
            <dd>艺术类季度阅读榜</dd>
         </dl>
         <dl>
            <dt>销售榜</dt>
            <dd>具体的排行榜</dd>
            <dd>小说类季度销售榜</dd>
            <dd>艺术类季度销售榜</dd>
            <dd>人文类季度销售榜</dd>
         </dl>
         <dl>
            <dt>排行榜</dt>
            {
               isshow ? dlItems.filter((v, i) => i !== 6) : dlItems.filter((v, i) => i < 7)
            }
         </dl>
      </AsideWrap>
   )
}

export default Aside