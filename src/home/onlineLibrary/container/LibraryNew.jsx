import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LibraryNewUi from '../ui/LibraryNewUi'
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
@withRouter
class LibraryNew extends Component {
   
  componentDidMount(){
    this.props.loadData()
  }

    render() {
        console.log(this.props.location);
        const id= this.props.location.state.id||localStorage.getItem('libraryId');
        const {list} = this.props
        const data =list.filter(v=>v.id===id)
        console.log(this.props);
    console.log(id);
        return (
            <LibraryNewUi data={data} id={id}/>
        )
    }
}

export default LibraryNew
