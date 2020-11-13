import { CHANGE_ASIDECAT } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  asideCate: '小说',
  asideECate: 'novel'
})

const reducer = (state = defaultState, action) => {
  // console.log(action.eCate, action.cate)
  switch(action.type){
    case CHANGE_ASIDECAT:
      const stateList = state.setIn(['asideECate'], action.eCate)
      return stateList.setIn(['asideCate'], action.cate)
    default:
      return state
  }
} 

export default reducer