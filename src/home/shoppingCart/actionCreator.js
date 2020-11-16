import {
  CHANGESTATUS,
  DELNUM,
  ADDNUM,
  DELETE,
  ALLCHANGE,
  ADDSHOPPINGCART
} from './actionTypes'

const changeStatus = (checked, id) => {
  return({
    type: CHANGESTATUS,
    id,
    checked
  })
}

const delNumHandler = (id) => {
  return({
    type: DELNUM,
    id
  })
}

const addNumHandler = (id) =>{
  return({
    type: ADDNUM,
    id
  })
}

const deleteHandler = (id) => {
  return({
    type: DELETE,
    id
  })
}

const allChangeHandler = (checked) => {
  return({
    type: ALLCHANGE,
    checked
  })
}

const addShoppingCart = (obj) => {
  return({
    type: ADDSHOPPINGCART,
    obj
  })
}

export default {
  changeStatus,
  delNumHandler,
  addNumHandler,
  deleteHandler,
  allChangeHandler,
  addShoppingCart
}