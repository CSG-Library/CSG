import React, { PureComponent, createRef } from 'react';

import { Nav } from '@c/styleComp';
import img from '@a/imgs/logo.png';
import { SearchOutlined } from '@ant-design/icons';

// import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { addAction } from './actionCreator';
import { withRouter } from 'react-router-dom';

@connect(state => ({
   list: state.getIn(["navOne", "list"])
}), dispatch => ({
   addList (list) {
      dispatch(addAction(list))
   }
}))
@withRouter
class NavOne extends PureComponent {
   constructor(props) {
      super(props)
      this.v = createRef()
   }

   state = {
      text: ['藏书阁','视频文化','读书广场','原创','读书会活动','书店'],
      v: ''
   }

   handleChange = (e) => {
      console.log(this.v.current.value);
      this.setState({ v: e.target.value })
   }

   handleKeyUp = (e) => {
      console.log(this.v.current.value);
      if(e.keyCode === 13) {
         this.props.addList(this.state.v)
         this.setState({ v: '' })
         this.props.history.push('/home/searchres', { arr:[] })
      }
   }
   handleClick = () => {
      console.log(this.v.current.value);
      this.props.addList(this.state.v)
      this.setState({ v: '' })
      this.props.history.push('/home/searchres', { arr:[] })
   }

   render() {
      return (
         <Nav>
            <div className="l">
               <img src={`${img}`} alt="" />
            </div>
            <ul>
               {
                  this.state.text.map(
                     (v,i) => <li key={i} onClick={this.handleClick}>{v}</li>
                  )
               }
            </ul>
            <div>
               <input 
                  type="search" 
                  // value={this.state.v} 
                  ref={this.v}
                  placeholder="搜索海量图书" 
                  onChange={this.handleChange.bind(this)} 
                  onKeyUp={this.handleKeyUp.bind(this)}
               />
               <SearchOutlined onClick={this.handleClick.bind(this)} />
            </div>
         </Nav>
      );
   }
}

export default NavOne
