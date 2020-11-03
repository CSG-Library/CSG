import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
// 公共组件、样式
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import { Div } from './styleRoute';

// 导入二级路由及其余页面组件
import ThrHome from './homepage/ThrHome';
import { ChapterDet } from './chapterdetail';
import { ChapterRead } from './chapterdetail';
import { Comment } from './bookReview';

import { LibraryNew } from './onlineLibrary';

import { HotMag } from './hotMagazine';

import { PaperCate } from './paperCate';
import { PaperNum } from './Newspaper';
import { Paperpage } from './Newspaper';

import { NewsContent } from './News';

import { RankPop } from './rank';

import { PreciseSearch } from './search';
import { SearchRes } from './search';

import BookRouter from './my/BookRouter';

// import { Mine } from './mine';

import Page404 from './page404/Page404';

@withRouter
class HomeRouter extends Component {
   state = {
      routes: [ 
         { path: '/browse', component: ThrHome },
         { path: '/chapterdet', component: ChapterDet },
         { path: '/chapterpage', component: ChapterRead },
         { path: '/comment', component: Comment },


         { path: '/online', component: LibraryNew },

         { path: '/magazine', component: HotMag },

         { path: '/paper', component: PaperCate },
         { path: '/papernum', component: PaperNum },
         { path: '/paperpage', component: Paperpage },

         { path: '/news', component: NewsContent },

         { path: '/rank', component: RankPop },

         { path: '/search', component: PreciseSearch },
         { path: '/searchres', component: SearchRes },

         { path: '/bookshelf', component: BookRouter },

         // { path: '/mine', component: Mine }
      ]
   }

   render() {
      let { url } = this.props.match
      return (
         <Div>
            <Head></Head>
            <main className="container">
               <NavOne></NavOne>
               <NavTwo {...this.props}></NavTwo>
               
               <Switch>
                  {
                     this.state.routes.map(v => 
                        <Route path={`${url}${v.path}`} key={v.path+"xyjy"}>
                           <v.component />
                        </Route>
                     )
                  }
                  <Redirect from={`${url}`} to={`${url}/browse`}></Redirect>
                  <Route path='*'><Page404 /></Route>
               </Switch>

            </main>
            <Foot></Foot>
         </Div>
      )
   }
}

export default HomeRouter