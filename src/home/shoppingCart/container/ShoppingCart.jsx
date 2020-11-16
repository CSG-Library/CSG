import React from 'react';

import ShoppingCartUi from '../ui/ShoppingCartUi'
 
import useGetState from './useGetState' 
import useChange from './useChange'
import usePay from './usePay'

const ShoppingCart = () => {
  const { shoppingList, allSelect } =  useGetState()
  
  const { changeHandler, delNumHandler, addNumHandler, deleteHandler, allChangeHandler } = useChange()
 
  // const changeHandler = (checked) => {
  //   console.log(checked.target.checked)
  // }
  const { clickPayHandler } = usePay()

  return (
    <ShoppingCartUi
      allSelect={allSelect}
      shoppingList={shoppingList}
      changeHandler={changeHandler}
      delNumHandler={delNumHandler}
      addNumHandler={addNumHandler}
      deleteHandler={deleteHandler}
      allChangeHandler={allChangeHandler}
      clickPayHandler={clickPayHandler}
    ></ShoppingCartUi>
  );
}

export default ShoppingCart;
