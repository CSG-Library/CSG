import { 
    LOADDATA ,
    LOADDATA_ShortCom,
    LOADDATA_LongCom
} from './actionTypes'

const defaultState = {
  list: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
        return {
            list: action.list
        }
    case LOADDATA_ShortCom:
        return {
            list: action.list
        }
    case LOADDATA_LongCom:
        return {
            list: action.list
        }
    default:
      return state
  }
}

export default reducer