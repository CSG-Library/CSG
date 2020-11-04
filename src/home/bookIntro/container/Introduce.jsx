import React, { Component } from 'react';
import IntroduceUi from '../ui/IntroduceUi'
// import { actionCreator as ac } from '@/home/introduce'
import { connect } from 'react-redux'


import { 
    // loadDataAsync, 
    loadDataAsync_ShortCom,
    loadDataAsync_LongCom 
} from '../actionCreator'

@connect(
    (state)=>{
        // console.log(state)
        // console.log(state.introcude)
        //必须得return什么东西
        return{
            list:state.getIn(['introduce', 'list'])
        }
    }, 
    (dispatch)=>({
        // loadData(){
        //     dispatch(loadDataAsync())
        // },
        loadData_ShortCom(){
            dispatch(loadDataAsync_ShortCom())
        },
        loadData_LongCom(){
            dispatch(loadDataAsync_LongCom())
        }
      
    })
)
class Introduce extends Component {
   
    render() {
        //  console.log(this.props)
        return (
            <div>
                <IntroduceUi
                list={ this.props.list}
                ></IntroduceUi>
            </div>
        );
    }
    componentDidMount(){
        // this.props.loadData()
        this.props.loadData_ShortCom()
        this.props.loadData_LongCom()
        // console.log(this.props.list)
        //  console.log(this.props.loadData_ShortCom)
    }   
    componentDidUpdate(){
        //   console.log(this.props.list)
        // console.log(this.props)
    }
}

export default Introduce;