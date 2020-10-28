import React, { useCallback, useState } from 'react';

import { Ul } from '@c/styleComp';

import { useHistory } from 'react-router-dom';

const NavTwo = props => {
   const [curIndex, setcurIndex] = useState(0)
   const [text] = useState([
      { browse: "分类浏览" },
      { online: "在线图书馆" },
      { magazine: "电子杂志" },
      { paper: "电子报刊" },
      { database: "资料库" },
      { rank: "热门排行" },
      { search: "精确搜索" },
      { bookshelf: "我的书架" },
      { mine: "我的身份:贡士" }
   ])

   const history = useHistory()
   const handleClick = useCallback((v, i) => {
      return () => {
         setcurIndex(i)
         let secondPath = Object.keys(v)[0]
         history.push(`/home/${secondPath}`)
         console.log('点击:' + i) 
      }
   }, [])
   console.log('组件内的:' + curIndex)

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
