import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreator as ac } from '../'

// class Media extends PureComponent {
//    state = {
//       list: ["人民日报","新华社","中国记协","中央电视台","科技日报","中国日报","法制日报","解放军报","农民日报","检查日报"]
//    }

//    render() {
//       return (
//          <section className='cont cont-rt l'>
//             <h2><span>中央新闻媒体</span></h2>
//                <ul>
//                   {
//                      this.state.list.map(
//                         (v,i) => <li className="l" key={i}>{v}</li>
//                      )
//                   }
//                </ul>
//          </section>
//       )
//    }
// }

const Media = props => {
   const cateSide = useSelector(state =>  state.getIn(['paperCate', 'cateSide']))
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(ac.changeAside(cateSide))
   }, [cateSide, dispatch])

   return (
      <section className='cont cont-rt l'>
         <h2><span>中央新闻媒体</span></h2>
            <ul>
               {
                  props.cate[cateSide] && props.cate[cateSide].media.map(
                     (v,i) => <li className="l" key={i}><a style={{color:"#333"}} href={v.url}>{v.title}</a></li>
                  )
               }
            </ul>
      </section>
   )
} 


export default Media
