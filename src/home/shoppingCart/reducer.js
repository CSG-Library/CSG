// import { fromJS, Map, List } from 'immutable'

import {
  CHANGESTATUS,
  DELNUM,
  ADDNUM,
  DELETE,
  ALLCHANGE,
  ADDSHOPPINGCART
} from './actionTypes'
  
const defaultState = {
  allSelect: localStorage.getItem('allSelect') === 'true' ? true : false,
  shoppingCartList : JSON.parse(localStorage.getItem('shoppingCartList')) || 
  [
    { 
      goods_id: 1,
      goods_num: 1,
      goods_details: '上海图书馆位于上海市徐汇区淮海中路，是上海市综合性研究 型公共图书馆和行业情报中心，也是全国文化信息资源共享工 程上海市',
      goods_price: 50,
      goods_checked_status: false,
      goods_img: 'https://imgs-qn.iliangcang.com/ware/upload/big/2/459/459776.jpg?51621.58301458264'
    },
    { 
      goods_id: 2,
      goods_num: 3,
      goods_details: '上海图书馆位于上海市徐汇区淮海中路，是上海市综合性研究 型公共图书馆和行业情报中心，也是全国文化信息资源共享工 程上海市',
      goods_price: 100,
      goods_checked_status: false,
      goods_img: 'https://imgs-qn.iliangcang.com/ware/upload/big/2/459/459776.jpg?51621.58301458264'
    },
    { 
      goods_id: 3,
      goods_num: 3,
      goods_details: '上海图书馆位于上海市徐汇区淮海中路，是上海市综合性研究 型公共图书馆和行业情报中心，也是全国文化信息资源共享工 程上海市',
      goods_price: 150,
      goods_checked_status: true,
      goods_img: 'https://imgs-qn.iliangcang.com/ware/upload/big/2/459/459776.jpg?51621.58301458264'
    }
  ]
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case ADDSHOPPINGCART:
      // console.log(action.item)
      let bool = false
      state.shoppingCartList.forEach(item => {
        if(item.goods_id === action.obj.goods_id){
          item.goods_num += 1
          bool = true
        }
      })
      if(!bool){
        state.shoppingCartList.push(action.obj)
      }
      localStorage.setItem('allSelect', false)
      localStorage.setItem('shoppingCartList', JSON.stringify(state.shoppingCartList))
      return {
        ...state
      }
    case CHANGESTATUS:
      state.shoppingCartList.forEach(item => {
        if(item.goods_id === action.id){
          item.goods_checked_status = action.checked
        }
      })
      let i = state.shoppingCartList.filter(item => {
        return item.goods_checked_status === false
      })
      let allSelect = (i.length === 0 ? true : false)
      
      localStorage.setItem('allSelect', allSelect)
      localStorage.setItem('shoppingCartList', JSON.stringify(state.shoppingCartList))
      return ({
        ...state,
        allSelect
      })
    case DELNUM:
      state.shoppingCartList.forEach(item => {
        if(item.goods_id === action.id && item.goods_num !== 1){
          item.goods_num = item.goods_num - 1
        }
      })
      localStorage.setItem('shoppingCartList', JSON.stringify(state.shoppingCartList))
      return {
        ...state
      }
    case ADDNUM:
      state.shoppingCartList.forEach(item => {
        if(item.goods_id === action.id && item.goods_num !== 99){
          item.goods_num = item.goods_num + 1
        }
      })

      localStorage.setItem('shoppingCartList', JSON.stringify(state.shoppingCartList))
      return {
        ...state
      }
    case DELETE:
      let list = state.shoppingCartList.filter(item => {
        return item.goods_id !== action.id
      })
      let j = list.filter(item => {
        return item.goods_checked_status === false
      })
      let allSelect_del = (j.length === 0 ? true : false)
      if(list.length === 0) allSelect_del = false

      localStorage.setItem('allSelect', allSelect_del)
      localStorage.setItem('shoppingCartList', JSON.stringify(list))

      return {
        ...state,
        shoppingCartList: list,
        allSelect: allSelect_del
      }
    
    case ALLCHANGE:
      state.shoppingCartList.forEach(item => {
        item.goods_checked_status = action.checked
      })
      localStorage.setItem('allSelect', action.checked)
      localStorage.setItem('shoppingCartList', JSON.stringify(state.shoppingCartList))
      return{
        ...state,
        allSelect: action.checked
      }
    default: 
      return state;
  }
}

export default reducer