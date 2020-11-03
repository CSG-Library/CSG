import React, { useState, useCallback } from 'react';
import { Switch, Route, Redirect, withRouter, useRouteMatch } from 'react-router-dom';

import { SideBar } from '../paperCate/ui/stylePaperCate';


import Home from './Home';
import Art from './Art';
import Youth from './Youth';
import Success from './Success';
import Child from './Child';
import Life from './Life';
import Page404 from '../page404/Page404';


import { ChapterDet } from '../chapterdetail';
import { ChapterRead } from '../chapterdetail';


const ThrHome = (props) => {
   // let { url } = props.match;
   let { url } = useRouteMatch();
   // let newUrl = url.replace(/novel/, '')
   // console.log(newUrl) //  /home/browse
   // console.log(url) //  /home/browse

   const [curIndex, setCurIndex] = useState(0)
   const [state, setState] = useState([
      {id: 0, path: 'novel', name: '小说（999）' },
      {id:1, path: 'art', name:'文艺（666）'},
      {id:2, path: 'youth', name:'青春（1236）'},
      {id:3, path: 'success', name:'励志/成功（1289）'},
      {id:4, path: 'child', name:'少儿（1138）'},
      {id:5, path: 'life', name:'生活（2378）'}
   ])

   const handleClick = useCallback(({ id, path }) => {
      return () => {
         setCurIndex(id)
         props.history.push('/home/browse/' + path)
      }
   })

   return (
      <>
       <SideBar>
            <li>书籍分类</li>
            {
               state.map(v =>
                  <li
                     key={v.id}
                     className={curIndex === v.id ? 'active' : ''}
                     onClick={handleClick(v)}
                  >{v.name}</li>
               )
            }
         </SideBar>

         <Switch>
            {/* home -- 分类浏览 */}
            <Route path={`${url}/novel`} render={Home}></Route>
            <Route path={`${url}/art`} render={Art}></Route>
            <Route path={`${url}/youth`} render={Youth}></Route>
            <Route path={`${url}/success`} render={Success}></Route>
            <Route path={`${url}/child`} render={Child}></Route>
            <Route path={`${url}/life`} render={Life}></Route>

            {/* <Route path={`${url}/chapterdet`}> <ChapterDet /></Route>
            <Route path={`${url}/chapterpage`}> <ChapterRead /></Route> */}
            
            <Redirect from={`${url}`} to={`${url}/novel`}></Redirect>
            <Route><Page404></Page404></Route>
         </Switch>
      </>
   )
}

export default withRouter(ThrHome)