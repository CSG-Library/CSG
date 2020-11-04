import React, { useEffect } from 'react';
import SearchResUi from '../ui/SearchResUi';

// import { actionCreator as ac } from '../';
// import { useSelector, useDispatch } from 'react-redux';

const SearchRes = (props) => {
   // const SearchCate = useSelector(state => state.paperCate.searchCate) 
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    (async () => {
   //       let res = await get({ url:'/api/searchCate' })
         
   //       setcate(res.data.data.category)

   //    })()
   // }, [searchCate])

   return (
      <SearchResUi {...props} />
   )
}

export default SearchRes