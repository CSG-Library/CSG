import React, { Component } from 'react';
import { connect } from 'react-redux'

import CategoryUI from '../ui/CategoryUi'

import { ChangeAsideCate } from '../'
import { actionCreator } from '@/home/shoppingCart'

import { get, post } from "@u/http"

@connect(
  state => ({
    asideCate: state.getIn(['category', 'asideCate'])
  }),
  dispatch => ({
    ChangeAsideCateHandler(cate){
      dispatch(ChangeAsideCate(cate)) 
    },

    addShoppingCart(data){
      return () => {
        let obj = {
          goods_id: data.book_id,
          goods_num: 1,
          goods_details: data.book_info,
          goods_price: data.book_price,
          goods_checked_status: false,
          goods_img: data.book_img,
          goods_checked_status: false
        }

        dispatch(actionCreator.addShoppingCart(obj))
      }
    }
  })
)
class Category extends Component {
  state = {
    totalPageNum: 5,
    curPageNum: 2,
    allList: [],
    asideList: []
  }

  // 分页按钮
  ClickPageNumHandler = (pageNum) => {
    return () => {
      this.setState({
        curPageNum: pageNum
      })
    }
  }
  ClickLeftPageBtnHandler = () => {
    this.state.curPageNum !== 1 
    &&
    this.setState({
      curPageNum : this.state.curPageNum - 1
    }) 
  }
  ClickRightPageBtnHandler = () => {
    this.state.curPageNum !== this.state.totalPageNum 
    &&
    this.setState({
      curPageNum : this.state.curPageNum + 1
    }) 
  }

  // 
  // addShoppingCart = (data) => {
  //   return () => {
  //     // localStorage.setItem('allSelect', false)

      // let obj = {
      //   goods_id: data.book_id,
      //   goods_num: 1,
      //   goods_details: data.book_info,
      //   goods_price: data.book_price,
      //   goods_checked_status: false,
      //   goods_img: data.book_img
      // }


  //   }
  // }

  componentDidMount = async () => {

    let list = await post({
      url: "http://localhost:3000/api/findAllbook"
    })

    let _asideList = await get({
      url: "http://localhost:3000/api/findAllbookBytype"
    })

    this.setState({
      allList: list.data.data,
      asideList: _asideList.data.data
    })
  }
  render() {
    return (
      <>
        <CategoryUI
          allList={this.state.allList}
          asideList={this.state.asideList}
          asideCate={this.props.asideCate}
          onChangeAsideCate={this.props.ChangeAsideCateHandler}
          totalPageNum={this.state.totalPageNum}
          curPageNum={this.state.curPageNum}
          onClickPageNum={this.ClickPageNumHandler}
          onClickLeftPageBtn={this.ClickLeftPageBtnHandler}
          onClickRightPageBtn={this.ClickRightPageBtnHandler}
          addShoppingCart={this.props.addShoppingCart}
        ></CategoryUI>
      </>
    );
  }
}

export default Category;
