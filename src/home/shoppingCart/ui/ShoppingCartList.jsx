import React from 'react';

import { ShoppingCartListWrap } from './StyledShoppingCart'
 
const ShoppingCartList = (props) => {

  const { allSelect, allChangeHandler, shoppingList, changeHandler, delNumHandler, addNumHandler, deleteHandler } = props
  
  return (
    <>
      <ShoppingCartListWrap>
        <thead>
          <tr> 
            <th style={{width: '110px'}}>
              <input 
                type="checkbox"
                checked={allSelect}
                onChange={allChangeHandler}
              />
              全选
            </th>
            <th style={{width: '310px'}}>
              商品
            </th> 
            <th style={{width: '130px'}}>
              数量
            </th>
            <th style={{width: '170px'}}>
              单价（元）
            </th>
            <th style={{width: '170px'}}>
              小计（元）
            </th>
            <th>
              操作
            </th>
          </tr> 
        </thead>
       
        <tbody>
          {
            shoppingList.map(value => {
              return (
                <tr key={value.goods_id}>
                  <td>
                    <img src={value.goods_img} alt=""/>
                    <input 
                      type="checkbox" 
                      checked={value.goods_checked_status} 
                      onChange={(e) => changeHandler(e.target.checked, value.goods_id)}/>
                  </td>
                  <td> 
                    {value.goods_details}
                  </td>
                  <td>
                    <span 
                      className="left-btn"
                      onClick={delNumHandler(value.goods_id)}
                    >-</span>
                    {/* <input type="text" defaultValue={value.goods_num}/ > */}
                    {value.goods_num}
                    <span 
                      className="right-btn"
                      onClick={addNumHandler(value.goods_id)}
                    >+</span>
                  </td>
                  <td>
                    <span>{(value.goods_price)}</span>
                  </td>
                  <td>
                    <span>{(value.goods_price * value.goods_num)}</span>
                  </td>
                  <td><span onClick={deleteHandler(value.goods_id)}>删除</span></td>
                </tr>
              )
            })
          }
          {/* <tr>
            <td>
              <img src="https://imgs-qn.iliangcang.com/ware/upload/big/2/459/459776.jpg?51621.58301458264" alt=""/>
              <input type="checkbox" name="" id=""/>
            </td>
            <td> 
              上海图书馆位于上海市徐汇区淮海中路，是上海市综合性研究 型公共图书馆和行业情报中心，也是全国文化信息资源共享工 程上海市
            </td>
            <td>
              <span className="left-btn">-</span>
              <input type="text" defaultValue={1}/ >
              <span className="right-btn">+</span>
            </td>
            <td>
              <span>159.00</span>
            </td>
            <td>
              <span>159.00</span>
            </td>
            <td><span>删除</span></td>
          </tr> */}
        </tbody>
      </ShoppingCartListWrap>
    </>
  );
}

export default ShoppingCartList;
