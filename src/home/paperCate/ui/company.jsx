import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import { actionCreator as ac } from '../';

// 函数组件 写法
/* const Company = (props) => {
   const cateSide = useSelector(state =>  state.paperCate.cateSide)
   
   const dispatch = useDispatch()
   // react下的 hook
   useEffect(() => {
      dispatch(ac.changeAside(cateSide))
   }, [])
   // console.log(cateSide)

   return (
      <section className='cont cont-left l'>
         <h2><span>报业集团</span></h2>
         <ul>
            {
               props.cate[cateSide] && props.cate[cateSide].company.map(v =>
                  <li key={v.companyId}>
                     <div>{v.name}</div>
                     <div>
                        {
                           v.paper.map(item =>
                              <span key={item + 'yyj'}>{item}</span>
                           )
                        }
                     </div>
                  </li>
               )
            }
         </ul>
      </section>
   )
} */

// 类组件写法
@connect(
   state => ({
      cateSide: state.getIn(['paperCate', 'cateSide'])
   }),
   dispatch => ({
      renderSide(cateSide) {
         dispatch(ac.changeAside(cateSide))
      }
   })
)
class Company extends PureComponent {
   render() {
      let { cate, cateSide } = this.props;
      return (
         <section className='cont cont-left l'>
            <h2><span>报业集团</span></h2>
            <ul>
               {
                  cate[cateSide] && cate[cateSide].company.map(v =>
                     <li key={v.companyId}>
                        <div>{v.name}</div>
                        <div>
                           {
                              v.paper.map(item =>
                                 <span key={item + 'yyj'}>{item}</span>
                              )
                           }
                        </div>
                     </li>
                  )
               }
            </ul>
         </section>
      )
   }
}

export default Company

