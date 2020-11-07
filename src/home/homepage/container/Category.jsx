import React, { Component } from 'react';
import { connect } from 'react-redux'

import CategoryUI from '../ui/CategoryUi'

import { ChangeAsideCate } from '../'

@connect(
  state => ({
    asideCate: state.getIn(['category', 'asideCate'])
  }),
  dispatch => ({
    ChangeAsideCateHandler(cate){
      dispatch(ChangeAsideCate(cate))
    }
  })
)
class Category extends Component {
  state = {
    totalPageNum: 5,
    curPageNum: 2
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
  
  render() {
    //  console.log(this.props)
    return (
      <>
        <CategoryUI
          asideCate={this.props.asideCate}
          onChangeAsideCate={this.props.ChangeAsideCateHandler}
          totalPageNum={this.state.totalPageNum}
          curPageNum={this.state.curPageNum}
          onClickPageNum={this.ClickPageNumHandler}
          onClickLeftPageBtn={this.ClickLeftPageBtnHandler}
          onClickRightPageBtn={this.ClickRightPageBtnHandler}
        ></CategoryUI>
      </>
    );
  }
}

export default Category;
