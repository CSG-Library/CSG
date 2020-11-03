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
import { ChapterDet } from './chapterdetail'
import { ChapterRead } from './chapterdetail'

// import { Online } from './onLine';
import { HotMag } from './hotMagazine';
import { PaperCate } from './paperCate';
// import { DataBase } from './dataBase';
import { RankPop } from './rank';
import { SearchRes } from './search';
// import { BookShelf } from './bookShelf';
// import { Mine } from './mine';
import Page404 from './page404/Page404';

@withRouter
class HomeRouter extends Component {
   state = {
      routes: [ 
         { path: '/browse', component: ThrHome },
         { path: '/chapterdet', component: ChapterDet },
         { path: '/chapterpage', component: ChapterRead },


         // { path: '/online', component: Online },'
         { path: '/magazine', component: HotMag },
         { path: '/paper', component: PaperCate },
         // { path: '/database', component: DataBase },
         { path: '/rank', component: RankPop },
         { path: '/search', component: SearchRes },
         // { path: '/bookshelf', component: BookShelf },
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