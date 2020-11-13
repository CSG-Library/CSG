import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadDataAsync } from '../actionCreator'

import Book from '../ui/Book'

@connect(
  (state) => {
    return {
      list: state.getIn(["my", "list"])
    }
  },
  (dispatch) => ({
    loadData() {
      dispatch(loadDataAsync())
    }
  })
)
class MyAccount extends Component {
  componentDidMount() {
    this.props.loadData()
  }

  render() {
    // console.log(this.props.list)
    return (
      this.props.list.length > 0 && <Book {...this.props}></Book>
    )
  }
}

export default MyAccount

