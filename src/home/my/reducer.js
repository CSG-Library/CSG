import { SAVECOMP } from './actionTypes';

const defaultState = {
   routeIndex: Number(localStorage.getItem("routeIndex"))
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case SAVECOMP:
         return {
            ...state,
            routeIndex: action.routeIndex
         }
      default:
         return state
   }
}

export {
   reducer
} 