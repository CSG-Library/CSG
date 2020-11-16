import { CHANGEINDEX } from './actionTypes';

const defaultState = {
   curIndex: localStorage.getItem("curIndex")
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case CHANGEINDEX:
         return {
            ...state,
            curIndex: action.curIndex
         }
      default:
         return state
   }
}

export {
   reducer
} 