import React, { Component } from 'react';
import { connect } from 'react-redux'

import memoize from 'memoize-one'

import CategoryUI from '../ui/CategoryUi'

import { ChangeAsideCate } from '../'
import { actionCreator } from '@/home/shoppingCart'

import { get, post } from "@u/http"
 
@connect(
  state => ({
    asideCate: state.getIn(['category', 'asideCate']),
    asideECate: state.getIn(['category','asideECate'])
  }),
  dispatch => ({
    ChangeAsideCateHandler(cate, eCate){
      dispatch(ChangeAsideCate(cate, eCate)) 
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
          goods_name: data.book_name
        }

        dispatch(actionCreator.addShoppingCart(obj))
      }
    }
  })
)
class Category extends Component {
  state = {
    totalPageNum: 0,
    curPageNum: 1,
    allList: undefined,
    filterList: [],
    asideList: [],
    pageShowNum: 6
  }

  // 分页按钮
  ClickPageNumHandler = (pageNum) => {
    return () => {
      this.setState({
        curPageNum: pageNum,
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

  componentDidMount = async () => {

    let list = await post({
      url: "http://localhost:3000/api/homepageCate"
    })
 
    let _asideList = await get({
      url: "http://localhost:3000/api/findAllbookBytype"
    }) 
    
    this.setState({
      allList: list.data.data,
      totalPageNum: Math.ceil(list.data.data.novel.length / this.state.pageShowNum),
      asideList: _asideList.data.data
    })
  }
  render() {
    const lis = memoize(list => list[this.props.asideECate])
    return (
      <>
        {
          this.state.allList
          &&
          <CategoryUI
            allList={lis(this.state.allList)}
            asideList={this.state.asideList}
            asideCate={this.props.asideCate}
            onChangeAsideCate={this.props.ChangeAsideCateHandler}
            totalPageNum={this.state.totalPageNum}
            curPageNum={this.state.curPageNum}
            onClickPageNum={this.ClickPageNumHandler}
            onClickLeftPageBtn={this.ClickLeftPageBtnHandler}
            onClickRightPageBtn={this.ClickRightPageBtnHandler}
            addShoppingCart={this.props.addShoppingCart}
            pageShowNum={this.state.pageShowNum}
          ></CategoryUI>
        }
      </>
    );
  }
}

export default Category;
