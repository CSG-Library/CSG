import { 
    LOADDATA ,
    LOADDATA_ShortCom,
    LOADDATA_LongCom

} from './actionTypes'

import { get } from '@u/http.js'

// console.log(LOADDATA)

// const loadDataSync = list => {
//   return {
//     type: LOADDATA,
//     list
//   }
// }

// const loadDataAsync = () => {
//   return async (dispatch) => {
//     let result = await get({
//       url: '/api/longcom'
//     })
//     console.log(result.data.data)
//     // console.log(loadDataSync(result.data.data))
//     dispatch(loadDataSync(result.data.data))
//   }
// }

const loadDataSync_ShortCom = list => {
    return {
      type: LOADDATA_ShortCom,
      list
    }
  }

const loadDataAsync_ShortCom = () => {
    return async (dispatch) => {
      let result = await get({
        url: '/api/shortcom'
      })
    //    console.log(result.data.shortdata)
      dispatch(loadDataSync_ShortCom (result.data.shortdata))
    }
  }

  const loadDataSync_LongCom = list => {
    return {
      type: LOADDATA_LongCom,
      list
    }
  }

const loadDataAsync_LongCom = () => {
    return async (dispatch) => {
      let result = await get({
        url: '/api/longcom'
      })
    // console.log(result.data.longdata)
    //   dispatch(loadDataSync_LongCom(result.data.longdata))
    }
  }


export{
//   loadDataSync,
//   loadDataAsync,
  loadDataSync_ShortCom,
  loadDataAsync_ShortCom,
  loadDataSync_LongCom,
  loadDataAsync_LongCom 
}