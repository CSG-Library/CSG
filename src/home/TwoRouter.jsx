<<<<<<< HEAD
import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
// 公共组件、样式
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import { Div } from './styleRoute';

// 导入二级路由及其余页面组件
import { HomeCategory } from './homepage';
import { Introduce } from './bookIntro';
import { ChapterDet } from './chapterdetail';
import { ChapterRead } from './chapterdetail';
import { ShortCommentList } from './shortCommentLists';
import { Comment } from './bookReview';

import { OnlineLibrary } from './onlineLibrary';
import { LibraryNew } from './onlineLibrary';

import { MagazineCategory } from './magazineCategory';
import { MagIntro } from './magaIntro';
import { HotMag } from './hotMagazine';
import { MagContent } from './magaContent';
// import { HotMagdet } from './hotMagazine';

import { PaperCate } from './paperCate';
import { PaperNum } from './Newspaper';
import { Paperpage } from './Newspaper';

import { News } from './News';
import { NewsContent } from './News';

import { Rank } from './rank';
import { RankPop } from './rank';

import { PreciseSearch } from './Search';
import { SearchRes } from './Search';

import BookRouter from './my/BookRouter';

import { ShoppingCart } from './shoppingCart';

import Page404 from './page404/Page404';

@withRouter
class HomeRouter extends Component {
   state = {
      routes: [ 
         { path: '/browse', component: HomeCategory },
         { path: '/introduce', component: Introduce },
         { path: '/chapterdet', component: ChapterDet },
         { path: '/chapterpage', component: ChapterRead },
         { path: '/shortcomment', component: ShortCommentList },
         { path: '/comment', component: Comment },

         { path: '/online', component: OnlineLibrary },
         { path: '/onlinedet', component: LibraryNew },

         { path: '/magazine', component: MagazineCategory },
         { path: '/magadet', component: MagIntro },
         { path: '/magahot', component: HotMag },
         { path: '/magacontent', component: MagContent },
         // { path: '/magazinedet', component: HotMagdet },

         { path: '/paper', component: PaperCate },
         { path: '/papernum', component: PaperNum },
         { path: '/paperpage', component: Paperpage },

         { path: '/news', component: News },
         { path: '/newcontent', component: NewsContent },

         { path: '/rank', component: Rank },
         { path: '/rankpop', component: RankPop },

         { path: '/search', component: PreciseSearch },
         { path: '/searchres', component: SearchRes },

         { path: '/bookshelf', component: BookRouter },

         { path: '/cart', component: ShoppingCart }
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

=======
import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
// 公共组件、样式
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import { Div } from './styleRoute';

// 导入二级路由及其余页面组件
import { HomeCategory } from './homepage';
import { Introduce } from './bookIntro';
import { ChapterDet } from './chapterdetail';
import { ChapterRead } from './chapterdetail';
import { ShortCommentList } from './shortCommentLists';
import { Comment } from './bookReview';

import { OnlineLibrary } from './onlineLibrary';
import { LibraryNew } from './onlineLibrary';

import { MagazineCategory } from './magazineCategory';
import { MagIntro } from './magaIntro';
import { HotMag } from './hotMagazine';
import { MagContent } from './magaContent';
// import { HotMagdet } from './hotMagazine';

import { PaperCate } from './paperCate';
import { PaperNum } from './Newspaper';
import { Paperpage } from './Newspaper';

import { News } from './News';
import { NewsContent } from './News';

import { Rank } from './rank';
import { RankPop } from './rank';

import { PreciseSearch } from './Search';
import { SearchRes } from './Search';

import BookRouter from './my/BookRouter';

import { ShoppingCart } from './shoppingCart';

import Page404 from './page404/Page404';

@withRouter
class HomeRouter extends Component {
   state = {
      routes: [ 
         { path: '/browse', component: HomeCategory },
         { path: '/introduce', component: Introduce },
         { path: '/chapterdet', component: ChapterDet },
         { path: '/chapterpage', component: ChapterRead },
         { path: '/shortcomment', component: ShortCommentList },
         { path: '/comment', component: Comment },

         { path: '/online', component: OnlineLibrary },
         { path: '/onlinedet', component: LibraryNew },

         { path: '/magazine', component: MagazineCategory },
         { path: '/magadet', component: MagIntro },
         { path: '/magahot', component: HotMag },
         { path: '/magacontent', component: MagContent },
         // { path: '/magazinedet', component: HotMagdet },

         { path: '/paper', component: PaperCate },
         { path: '/papernum', component: PaperNum },
         { path: '/paperpage', component: Paperpage },

         { path: '/news', component: News },
         { path: '/newcontent', component: NewsContent },

         { path: '/rank', component: Rank },
         { path: '/rankpop', component: RankPop },

         { path: '/search', component: PreciseSearch },
         { path: '/searchres', component: SearchRes },

         { path: '/bookshelf', component: BookRouter },

         { path: '/cart', component: ShoppingCart }
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

>>>>>>> 468ed1afc13fac07677b252b9e7661ef5d6bf357
export default HomeRouter