import {
  CHANGESTATUS,
  DELNUM,
  ADDNUM,
  DELETE,
  ALLCHANGE
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


export default {
  changeStatus,
  delNumHandler,
  addNumHandler,
  deleteHandler,
  allChangeHandler
}