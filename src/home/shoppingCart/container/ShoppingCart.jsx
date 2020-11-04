import React from 'react';

import ShoppingCartUi from '../ui/ShoppingCartUi'
 
import useGetState from './useGetState' 
import useChange from './useChange'

const ShoppingCart = () => {
  const { shoppingList, allSelect } =  useGetState()
  
  const { changeHandler, delNumHandler, addNumHandler, deleteHandler, allChangeHandler } = useChange()
 
  // const changeHandler = (checked) => {
  //   console.log(checked.target.checked)
  // }

  return (
    <ShoppingCartUi
      allSelect={allSelect}
      shoppingList={shoppingList}
      changeHandler={changeHandler}
      delNumHandler={delNumHandler}
      addNumHandler={addNumHandler}
      deleteHandler={deleteHandler}
      allChangeHandler={allChangeHandler}
    ></ShoppingCartUi>
  );
}

export default ShoppingCart;
