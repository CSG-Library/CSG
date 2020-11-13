import { SAVECOMP, LOADDATA } from './actionTypes';

const defaultState = {
   routeIndex: Number(localStorage.getItem("routeIndex")),
   list:[]
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case SAVECOMP:
         return {
            ...state,
            routeIndex: action.routeIndex
         }
      case LOADDATA:
         return{
            list:action.list
         }
      default:
         return state
   }
}

export {
   reducer
} 
