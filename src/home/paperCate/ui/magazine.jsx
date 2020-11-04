import React,{ useCallback } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreator as ac } from '../';
import { useHistory } from 'react-router-dom';

const Maga = props => {
   let cateSide = useSelector(state => state.getIn(['paperCate', 'cateSide']))
   let dispatch = useDispatch()
   dispatch(ac.changeAside(cateSide))

   let history = useHistory()

   const handleClick = useCallback(() => {
      return () => {
         history.push('/home/papernum')
      }
   })

   return (
      <section className='cont cont-top'>
         <h2><span>报纸杂志</span></h2>
         <Row>
            {
               props.cate[cateSide] && props.cate[cateSide].magazine.map((v,i) => (
                     <Col key={i+'yyj'} span={4} onClick={handleClick()}> {v} </Col>
                  )
               )
            }
         </Row>
      </section>
   )
}
Maga.propTypes = {
   cate: PropTypes.array
}

export default Maga
