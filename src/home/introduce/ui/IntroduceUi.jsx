import React/* , { Component }  */from 'react';
import PropTypes from 'prop-types'
import memoize from 'memoize-one'

import {
    Container
} from './StyledIntroduce'


// 书籍介绍页组件
import Details from './Details'
import BookIntro from './BookIntro';
import AuthorIntro from './AuthorIntro'
import BookMenu from './BookMenu'
import AlsoLove from './AlsoLove'
import ShortComments from './ShortComments'
import LongComments from './LongComments'
import AboutBook from './AboutBook'

 const IntroduceUi =(props)=> {
    // console.log(props)
     const shortcomment = memoize(list => list.slice(0, 3))
    //  const abc = shortcomment(props.list)
    //  console.log(abc)
    // const longcomment = memoize(list => list.slice(0, 3))

    return (
        <Container>
            <main className = 'container'>
                <div className = 'l'>
                    <Details></Details>
                    <BookIntro></BookIntro>
                    <AuthorIntro></AuthorIntro>
                    <BookMenu></BookMenu>
                    <AlsoLove></AlsoLove>
                    <ShortComments
                     list={shortcomment(props.list)}
                    ></ShortComments>
                    <LongComments></LongComments>
                </div>
                <div className='r'>
                    <AboutBook></AboutBook>
                </div>
            </main>
        </Container>
    );
   
}

IntroduceUi.propTypes = {
    list : PropTypes.array
}
export default IntroduceUi;