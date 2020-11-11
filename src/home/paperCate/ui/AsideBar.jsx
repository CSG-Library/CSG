import React, { useState, useEffect, useCallback } from 'react';

import { SideBar } from './stylePaperCate';
import { get } from '@u/http';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreator as ac } from '../';

const AsideBar = (props) => {
// react下的 hook
   const [cate, setcate] = useState(null)

// 使用 react-redux 下的Hooks(useSelector、useDispatch)钩子 可以代替@connect 
   const cateSide = useSelector(state => state.getIn(['paperCate', 'cateSide']))
   localStorage.setItem("cateSide", cateSide)
   const dispatch = useDispatch()

// react下的 hook
   const handleClick = useCallback(index => {
      return () => {
         dispatch(ac.changeAside(index))
         // console.log(index)
      }
   }, [dispatch])

   useEffect(() => {
      (async () => {
         let res = await get({ url:'/api/cate' })
         
         setcate(res.data.data.category)

      })()
   }, [cateSide, dispatch])

   return (
      <SideBar>
         <li>{ cate && Object.keys(cate) }</li>
         {
            cate && cate[Object.keys(cate)].map((v, i) => 
               <li 
                  key={v} 
                  className={cateSide === i ? 'active':''} 
                  onClick={handleClick(i)}
               >{ v }</li>
            )
         }
      </SideBar>
   )
}

/* @connect(
   state => ({
      cateSide: state.paperCate.cateSide
   }),
   dispatch => ({
      renderSide(cateSide){
         dispatch(ac.changeAside(cateSide))
      }
   })
)
class sideBar extends PureComponent { 
   state = { 
      curIndex: 0,
      cate: {}
   }

   handleClick = index => {
      return () => {
         this.setState({
            curIndex: index
         })
         this.props.renderSide(index);
         // console.log(index)
      }
   }

   async componentDidMount(){
      let res = await get({
         url: '/api/cate'
      })
      this.setState({
         cate: res.data.data.category
      })
   }

   render() {
      let { cate } = this.state;
      return (
         <SideBar>
            <li>{ Object.keys(cate) }</li>
            {
               cate[Object.keys(cate)] && cate[Object.keys(cate)].map((v, i) => 
                  <li 
                     key={v} 
                     className={this.state.curIndex === i ? 'active':''} 
                     onClick={this.handleClick(i)}
                  >{ v }</li>
               )
            }
         </SideBar>
      )
   }
} */

export default AsideBar
