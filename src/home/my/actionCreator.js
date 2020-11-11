import { SAVECOMP } from './actionTypes';

// 保存侧栏路由组件 状态
const SaveCompAction = routeIndex => {
   return {
      type: SAVECOMP,
      routeIndex
   }
}

export {
   SaveCompAction
}