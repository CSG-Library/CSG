import React, { Component } from 'react';
import IntroduceUi from '../ui/IntroduceUi'
// import { actionCreator as ac } from '@/home/introduce'

import {get} from '@u/http'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'


// import { 
//     // loadDataAsync, 
//     loadDataAsync_ShortCom,
//     loadDataAsync_LongCom 
// } from '../actionCreator'

// @connect(
//     (state)=>{
//         //  console.log(state.getIn())
//         console.log(state.introcude)
//         //必须得return什么东西
//         return{
//             // list:state.getIn(['introduce', 'list'])
//             // list:state.introduce
//         }
//     }, 
//     (dispatch)=>({
//         // loadData(){
//         //     dispatch(loadDataAsync())
//         // },
//         loadData_ShortCom(){
//             dispatch(loadDataAsync_ShortCom())
//         },
//         loadData_LongCom(){
//             dispatch(loadDataAsync_LongCom())
//         }
      
//     })
// )
@withRouter
class Introduce extends Component {
        state = {
            data:[ ]
        }

        async componentDidMount(){
        //     // this.props.loadData()
        //     this.props.loadData_ShortCom()
        //     this.props.loadData_LongCom()
        //     // console.log(this.props.list)
        //     //  console.log(this.props.loadData_ShortCom)
            let result = await get ({
                url:`/api/introduce/introduce?book_id=${this.props.location.state.book_id}`
               
            }) 
            // console.log(result.data)
            this.setState(()=>({
                data:result.data
             })) 
        }
       
        // componentDidUpdate(){
        //     //   console.log(this.props.list)
        //     // console.log(this.props)
        // }

        
        render() {
            // console.log(this.props.location.state.book_id)
            const { book_id } = this.props.location.state
            // console.log(this.state.data)
            // const list = (this.state.data&&this.state.data.)
            // console.log(this.props)
            return (
                this.state.data.length===0?'':(
                    <div>
                    <IntroduceUi
                        book_id = { book_id }
                        list = {this.state.data}
                        ></IntroduceUi>
                    </div>
                )
            );
        }
}

export default Introduce;