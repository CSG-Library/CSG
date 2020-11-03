import React, { Component } from 'react'
import MyRouter from '../home/my/MyRouter'
// import PaperCate from '../home/paperCate/container/PaperCate'

export default class Home extends Component {
  render() {
    return (
      <>
        <MyRouter></MyRouter>
      </>
    )
  }
}

   /* 陈鹏飞未改： */
// import React, { Component } from 'react';

// import { /* Link, */Switch, Route ,Redirect } from 'react-router-dom'

// import {
//     Container
// } from './StyleHome'

// // 不同路由
// import Introduce from './introduce/container/Introduce'
// import ShortCommentLists from './shortCommentLists/container/ShortCommentLists'
// import Rank from './rank/container/Rank'
// import MagIntro from './magintro/container/MagIntro'
// import ArtContent from './articlecontent/container/ArtContent'
// import Chapter from './chapter/Chapter'
// import Login from '../login/Login'

// // 公共组件
// import Header from '@c/header/Header'
// import MainNav from '@c/mainNav/MainNav'
// import MinorNav from '@c/minorNav/MinorNav'
// import Footer from '@c/footer/Footer'

// class Home extends Component {
//     render() {
//         return (
//             <Container>
//                 <Header ></Header>
//                 <main className = 'container'>
//                     <MainNav></MainNav> 
//                     <MinorNav></MinorNav>
//                     {/* <Link to='/home/introduce' replace>
//                         <h1 fontSize='200px'>这是首页</h1>
//                     </Link> */}
//                     <Switch>
//                         <Route path="/home/introduce" component={props => <Introduce {...props}></Introduce>}></Route>
                            
//                         <Route path='/home/shortcommentlists' component={props => <ShortCommentLists {...props}></ShortCommentLists>}></Route>

//                         <Route path='/home/rank' component={props=><Rank  {...props}></Rank>}></Route>

//                         <Route path='/home/magintro' component={props=><MagIntro  {...props}></MagIntro>}></Route>

//                         <Route path='/home/artcontent' component={props=><ArtContent  {...props}></ArtContent>}></Route>

//                         <Route path='/home/chapter' component={props=>< Chapter {...props}></ Chapter>}></Route>

//                         <Route path="/login" component={props => <Login {...props}></Login>}></Route>

//                         <Redirect from='/home/' to='/home/introduce'></Redirect>
//                     </Switch>
                    
//                 </main>
//                 <Footer></Footer>
//             </Container>
//         );
//     }
// }

// export default Home;
