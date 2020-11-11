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
    // console.log(props.list[0])
    const {
        short_comments,
        about_book,
        also_love,
        author_detail,
        book_club,
        book_intro,
        book_menu,
        book_reading,
        book_video,
        details,
        long_comments
    } = props.list[0]
    // const shortcomment = memoize(list => list.slice(0, 3))
    //  const abc = shortcomment(props.list)
    //  console.log(abc)
    // const longcomment = memoize(list => list.slice(0, 3))

    return (
        <Container>
            <main className = 'container'>
                <div className = 'l'>
                    <Details 
                     details={ details}
                    ></Details>
                    <BookIntro
                     book_intro={ book_intro}
                    ></BookIntro>
                    <AuthorIntro
                    author_detail={author_detail}
                    ></AuthorIntro>
                    <BookMenu
                    book_menu={book_menu}
                    ></BookMenu>
                    <AlsoLove
                     also_love={ also_love}
                    ></AlsoLove>
                    <ShortComments
                    //  list={shortcomment(props.list)}
                    short_comments={short_comments}
                    ></ShortComments>
                    <LongComments
                    long_comments={long_comments}
                    ></LongComments>
                </div>
                <div className='r'>
                    <AboutBook
                    about_book={about_book}
                    book_video={book_video}
                    book_reading={book_reading}
                    book_club={book_club}
                    ></AboutBook>
                </div>
            </main>
        </Container>
    );
   
}

// 函数式组件绑定类型检查,注意大小写
// IntroduceUi.propTypes = {
//     list : PropTypes.array
// }
export default IntroduceUi;