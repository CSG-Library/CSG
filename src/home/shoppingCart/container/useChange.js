
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
 
import { actionCreator } from '../index'

const useChange = () => {
  const dispatch = useDispatch()

  const changeHandler = (checked, id) => {
    dispatch(actionCreator.changeStatus(checked, id))
  }

  const delNumHandler = useCallback((id) => {
    return () => {
      dispatch(actionCreator.delNumHandler(id))
    }
  })

  const addNumHandler = useCallback((id) => {
    return () => {
      dispatch(actionCreator.addNumHandler(id))
    }
  })

  const deleteHandler = useCallback((id) => {
    return () => {
      dispatch(actionCreator.deleteHandler(id))
    }
  })

  const allChangeHandler = (e) => {
    // console.log(e.target.checked)
    dispatch(actionCreator.allChangeHandler(e.target.checked))
  }

  return ({
    changeHandler,
    delNumHandler,
    addNumHandler,
    deleteHandler,
    allChangeHandler
  })
}


export default useChange