import React from 'react';
import {
    Container,
} from './StyledShortCommentLists'

// 公共组件

import Page from '@c/pagination/Pagination'

// 短评页组件
import Lists from './Lists'
import Book from './Book'

const ShortCommentListsUi = () => {
    return (
        <Container>
            <main className = 'container'>
                <div className='box'>
                    <Lists></Lists>   
                    <Book></Book>
                </div>
            </main>
            <Page ></Page>
        </Container>
    );
};

export default ShortCommentListsUi;