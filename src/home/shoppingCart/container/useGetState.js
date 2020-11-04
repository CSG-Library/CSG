
import { useSelector } from 'react-redux'


const useGetState = () => {
  const state = useSelector( state => state )

  // console.log(state.getIn(["shoppingCart", 'shoppingCartList']))
  return {
    // shoppingList: state.getIn(["shoppingCart", 'shoppingCartList'])
    shoppingList: state.getIn(['shoppingCart', 'shoppingCartList']),
    allSelect: state.getIn(['shoppingCart', 'allSelect'])
  }
}

export default useGetState