import { CHANGE_ASIDECAT } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  asideCate: '小说'
})

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_ASIDECAT:
      return state.setIn(['asideCate'], action.cate)
    default:
      return state
  }
} 

export default reducer