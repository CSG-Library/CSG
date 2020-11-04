import React from 'react';

import {
    Container,
} from './StyleArtContent.js'

// 公共组件

import Page from '@c/pagination/Pagination'

//页面组件
import MagArticle from './MagArticle'
import Content from './Content'
import Reply from './Reply'
import AddComment from './AddComment'


const ArtContentUi = () => {
    return (
        < Container>
                <main className = 'container'>
                    <MagArticle></MagArticle>
                    <Content></Content>
                    <Reply></Reply>
                    <div className='page_box'>
                        <Page></Page>
                    </div>
                    <AddComment></AddComment>
                </main>
        </ Container>
    );
};

export default ArtContentUi;