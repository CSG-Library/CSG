import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import MyAccount from './container/MyAccount';
import MyBook from './container/MyBook'
import MyData from './container/MyData'

import Left from './ui/Left';
import First from './ui/First'

class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/mine/Left">
          <Left></Left>
        </Route>
        <Route path="/mine/First">
          <First></First>
        </Route>

        <Route path="/mine/MyAccount">
          <MyAccount></MyAccount>
        </Route>
        <Route path="/mine/bookshelf">
          <MyBook></MyBook>
        </Route>
        <Route path="/mine/data">
          <MyData></MyData>
        </Route>
        <Route path="/mine/switch"></Route>
        <Redirect from='/mine' to='/mine/MyAccount'></Redirect>
      </Switch>
    )
  }
}

export default MyRouter
