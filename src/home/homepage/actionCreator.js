import { CHANGE_ASIDECAT } from './actionTypes'

const ChangeAsideCate = (cate) => {
  return {
    type: CHANGE_ASIDECAT,
    cate
  }
}


export {
  ChangeAsideCate
}