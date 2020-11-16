import React from 'react';

import { ShoppingCartUiWrap } from './StyledShoppingCart'

import ShoppingCartList from './ShoppingCartList'

const ShoppingCartUi = (props) => {

  const { allSelect, allChangeHandler, shoppingList, changeHandler, delNumHandler, addNumHandler, deleteHandler, clickPayHandler } = props

  return (
    <ShoppingCartUiWrap>
      <div className="container">
        <div className='shoppList'>
          <ShoppingCartList
            allSelect={allSelect}
            shoppingList={shoppingList}
            changeHandler={changeHandler}
            delNumHandler={delNumHandler}
            addNumHandler={addNumHandler}
            deleteHandler={deleteHandler}
            allChangeHandler={allChangeHandler}
          ></ShoppingCartList>
        </div>

        <div className="pay-content">
          <p>总价：/&nbsp;<span>￥{
            shoppingList.reduce(function(value, item){
              return item.goods_checked_status ? value += item.goods_price * item.goods_num : value
            }, 0)
          }</span></p>
          <div 
            className="pay-btn"
            onClick={clickPayHandler}
          >立即结算</div>
        </div>
      </div>
    </ShoppingCartUiWrap>
  );
}

export default ShoppingCartUi;
