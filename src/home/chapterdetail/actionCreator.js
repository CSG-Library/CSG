import { LOADLIST, SAVESTATU } from './actionTypes';
import { get } from '@u/http';

const loadBookDetList = bookdetail => {
   return {
      type: LOADLIST,
      bookdetail
   }
}

const changeStatu = statu => {
   return {
      type: SAVESTATU,
      statu
   }
}

const GetBookDetList = () => {
   return async(dispatch) => {
      let res = await get({
         url: '/api/bookdata'
      })
      // console.log(res.data.data);
      dispatch(loadBookDetList(res.data.data))
   }
}

export default{
   loadBookDetList,
   GetBookDetList,
   changeStatu
}