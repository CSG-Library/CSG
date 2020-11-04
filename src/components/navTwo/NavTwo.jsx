import React, { useCallback, useState } from 'react';

import { Ul } from '@c/styleComp';

import { useHistory } from 'react-router-dom';

const NavTwo = props => {
   const [curIndex, setcurIndex] = useState(0)
   const [text, setText] = useState([
      // {id:0, path: '/home/browse', name:"分类浏览"}
      { browse: "分类浏览" },
      { online: "在线图书馆" },
      { magazine: "电子杂志" },
      { paper: "电子报刊" },
      { news: "电子新闻" },
      { rank: "热门排行" },
      { search: "精确搜索" },
      { bookshelf: "我的书架" },
      { cart: "我的购物车" }
   ])

   const history = useHistory()
   const handleClick = useCallback((v, i) => {
      return () => {
         setcurIndex(i)
         let secondPath = Object.keys(v)[0]
         console.log(secondPath);
         history.push(`/home/${secondPath}`)
  
         // console.log('点击:' + i) 
      }
   }, [history])
   // console.log('组件:' + curIndex)

   return (
      <Ul>
         {
            text.map((v, i) => {
               return (<li 
                  key={i} 
                  className={curIndex === i ? 'active' : ''}
                  onClick={handleClick(v, i)} 
               >{v[Object.keys(v)]}</li>)
            })
         }
      </Ul>
   )
}

export default NavTwo
