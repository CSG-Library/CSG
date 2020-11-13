import { GETBOOKDATA } from './actionTypes';

import { get } from '@u/http';

const GetDataAction = renderData => {
   return {
      type: GETBOOKDATA,
      renderData
   }
}

const GetAsyncAction = () => {
   return async(dispatch) => {
      let res = await get({ url:'/api/rankArticle' })

      dispatch(GetDataAction(res.data))  
   }
}

export default {
   GetDataAction,
   GetAsyncAction
}
