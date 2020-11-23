import { CHANGE_ASIDECAT } from './actionTypes'

const ChangeAsideCate = (cate, eCate) => {
  return {
    type: CHANGE_ASIDECAT,
    cate,
    eCate
  }
}


export {
  ChangeAsideCate
}