import React, { Component } from 'react';

import OnlineLibraryUi from '../ui/OnlineLibraryUi'
import { loadDatAsync } from '../actionCreator'
import { connect } from "react-redux"
@connect(
    (state) =>{
      return {
        list:state.getIn(['onlineLibray','list'])
    }
    },
    (dispatch) => ({
          loadData(){
            dispatch(loadDatAsync())
          }
    })
)
class OnlineLibrary extends Component {

  componentDidMount(){
    this.props.loadData()
  }
  render() {
    return (
      <>
        <OnlineLibraryUi list={this.props.list}></OnlineLibraryUi>
      </>
    );
  }
}

export default OnlineLibrary;
