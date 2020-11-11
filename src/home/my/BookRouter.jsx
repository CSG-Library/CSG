import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import MyAccount from './container/MyAccount';
import MyBook from './container/MyBook'
import MyData from './container/MyData'
import { SLeft } from './ui/Stylemy'

import { SaveCompAction } from './actionCreator'
import { connect } from 'react-redux';

@withRouter
@connect(state => ({
   routeIndex: state.getIn(['myComp', 'routeIndex'])
}), dispatch => ({
   saveIndex(routeIndex){
      dispatch(SaveCompAction(routeIndex))
   }
}))
class BookRouter extends PureComponent {
   state = {
      list: [
         { id: 0, path: '/account', name: '我的账户' },
         { id: 1, path: '/book', name: '我的书架' },
         { id: 2, path: '/data', name: '个人资料' },
         { id: 3, path: '/switch', name: '切换账号' },
      ],
      curIndex: this.props.routeIndex
   }

   clickHandle = (v) => {
      return () => {
         this.setState({ curIndex: v.id })
         localStorage.setItem("routeIndex", v.id)

         // let url = Object.keys(value)
         this.props.history.push("/home/bookshelf" + v.path)
      }
   }
   
   render() {
      let { url } = this.props.match;
      let { curIndex } = this.state;
      return (
         <main
            className="container"
            style={{ display: 'flex', justifyContent: 'space-between' }}
         >
            <SLeft>
               <ul>
                  {
                     this.state.list.map(v => {
                        return (
                           <li
                              key={v.id}
                              className={curIndex === v.id ? 'active' : ''}
                              onClick={this.clickHandle(v)}
                           >{v.name}</li>
                        )
                     })
                  }
               </ul>
            </SLeft>

            <Switch>
               <Route path={`${url}/account`}>
                  <MyAccount></MyAccount>
               </Route>
               <Route path={`${url}/book`}>
                  <MyBook></MyBook>
               </Route>
               <Route path={`${url}/data`}>
                  <MyData></MyData>
               </Route>
               <Route path={`${url}/switch`}>

               </Route>
               <Redirect from={`${url}`} to={`${url}/account`}></Redirect>
            </Switch>
         </main>
      )
   }
}

export default BookRouter
