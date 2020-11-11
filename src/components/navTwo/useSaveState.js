import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveCheckAction } from './actionCreator';
import { useHistory } from 'react-router-dom'

const useSaveState = () => {
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

   // useSelector 实现state的跟踪和缓存
   const curIndex = useSelector(state => state.getIn(['navTwo', 'curIndex']))
   localStorage.setItem('curIndex', curIndex)

   const dispatch = useDispatch()
   // console.log(curIndex)

   const history = useHistory()
   const handleClick = useCallback((v, i) => {
      return () => {
         let secondPath = Object.keys(v)[0]
         // console.log(secondPath);
         history.push(`/home/${secondPath}`)

         dispatch(SaveCheckAction(i))
      }
   }, [history, dispatch])

   return {
      text,
      curIndex,
      handleClick
   }
}

export default useSaveState