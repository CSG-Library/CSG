import React, { PureComponent } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { TwoRouter } from './home';
import Login from './login/Login';
import Regsiter from './regsiter/Regsiter';

export default class App extends PureComponent {
   render() {
      return (
         <Switch>
            <Route path='/home' {...this.props}>
               <TwoRouter />
            </Route>
            <Route path='/login' render={Login}></Route>
            <Route path='/reg' children={Regsiter}></Route> 
            <Redirect from='/' to='/home'></Redirect>
         </Switch>
      )
   }
}
/* 
import React, { Component } from 'react';

import Com from './home/paperCate/container/PaperCate';
import LibraryNew from '@o/onlineLibrary/container/LibraryNew'
import NewspapersNum from '@o/Newspaper/container/NewspapersNum'
import PreciseSearch from '@o/Search/container/PreciseSearch'
import BookReview from '@o/bookReview/container/BookReview'
import Newscontent from '@o/News/container/NewsContent'
import  NewspaperReading  from '@o/Newspaper/container/NewspaperReading'
export default class App extends Component {
   render() {
      return (
         // <LibraryNew></LibraryNew>
         // <Newscontent></Newscontent>
         // <NewspaperReading></NewspaperReading>
         // <NewspapersNum></NewspapersNum>
         // <PreciseSearch></PreciseSearch>
         <BookReview></BookReview>
         // <Com></Com>
      )
   }
}
 */