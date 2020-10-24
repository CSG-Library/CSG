// 定义所有的 用户操作类型工厂函数
// 可以接收 异步请求的数据
import { LOADDATA } from './actionTypes';

import { get } from '@u/http';

// 同步加载数据
const loadActionSync = list => {
   return {
      type: LOADDATA,
      list
   }
}

// 异步请求数据, 第一层dispatch返回一个回调函数 执行异步操作，
   // 第二层 获取异步数据并且 dispatch派发 对应的用户操作类型
const loadActionAsync = () => {
   return async(dispatch) => {
      let result = await get({
         url: '/api/corr'
      })
      // console.log(result.data.data);
      // 异步请求的数据 进行派发 同步加载数据
      dispatch(loadActionSync(result.data.data))
   }
}


export {
   loadActionSync,
   loadActionAsync,
}