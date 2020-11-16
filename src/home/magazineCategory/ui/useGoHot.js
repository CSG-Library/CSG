import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreator as ac } from '@h/Search';

const useGoHot = () => {
   let history = useHistory()
   const renderData = useSelector(state => state.getIn(['rankSeaArticle', 'renderData']))
   // console.log(renderData.article_data)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(ac.GetAsyncAction())
   }, [dispatch])

   const GotoHot = useCallback(() => {
      return () => {
         history.push('/home/magahot', {
            arr: renderData.article_data,
            limit: 8
         })
      }
   }, [history, renderData])

   return {
      GotoHot
   }
}

export default useGoHot