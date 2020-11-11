import React, { useEffect } from 'react';
// 引入ui组件
import PaperCateUi from '../ui/PaperCateUi';
// 引入用户操作、react-redux的方法
import { actionCreator as ac } from '../';
import { useSelector, useDispatch } from 'react-redux';

// import useGetState from './useGetState';

const PaperCate = (props) => {
   // react-redux下的 hooks
   const cate = useSelector(state => state.getIn(['paperCate', 'cate'])) 
   const dispatch = useDispatch()
   // console.log(cate)

   // react下的 hook 执行异步操作
   useEffect(() => {
      dispatch(ac.loadActionAsync())
   }, [dispatch])

   return (
      <PaperCateUi cate={cate}></PaperCateUi>
   )
}

export default PaperCate;
