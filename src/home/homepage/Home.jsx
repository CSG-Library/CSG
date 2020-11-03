import React, { useCallback, useState } from 'react';
import { useRouteMatch, Switch, Route, withRouter } from 'react-router-dom';

import Page404 from '../page404/Page404';

const Home = (props) => {
   let { url } = useRouteMatch();
   let newUrl = url.replace(/\/novel/, '')

   const handleClick = useCallback(() => {
      return () => {
         // props.history.push(`${newUrl}/chapterdet`)
         props.history.push('/home/chapterdet')
      }
   })

   return (
      <>
         <div>
            <h1 onClick={handleClick()}>首页渲染区域模块</h1>
         </div>

         <Switch>
            {/* home -- 分类浏览 */}
            <Route path={`${newUrl}`}></Route>
            <Route><Page404></Page404></Route>
         </Switch>
      </>
   )
}

export default withRouter(Home)