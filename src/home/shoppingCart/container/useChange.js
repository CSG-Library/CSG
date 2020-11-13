
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
  }, [dispatch])

  const addNumHandler = useCallback((id) => {
    return () => {
      dispatch(actionCreator.addNumHandler(id))
    }
  }, [dispatch])

  const deleteHandler = useCallback((id) => {
    return () => {
      dispatch(actionCreator.deleteHandler(id))
    }
  }, [dispatch])

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