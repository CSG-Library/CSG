import { useSelector } from 'react-redux'

const usePay = () => {
  const state = useSelector(state => state)
  const clickPayHandler = () => {
    console.log(state.getIn(['shoppingCart']).shoppingCartList)
  }
  return {
    clickPayHandler
  }
}

export default usePay