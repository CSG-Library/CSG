import { GETBOOKDATA } from './actionTypes';

const defaultState = {
   renderData: []
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case GETBOOKDATA:
         return {
            ...state,
            renderData: action.renderData
         }
      default:
         return state
   }
}

export {
   reducer
} 