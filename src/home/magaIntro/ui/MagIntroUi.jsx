import React from 'react';

import{
    Container
} from './StyleMagIntro'




// 书籍介绍页组件
import Details from './Details'
import BookIntro from './BookIntro';
import HotArticle from './HotArticle'
import LastMag from './LastMag'
import AlsoLike from './AlsoLike'

 
const MagIntroUi = () => {
    return (
        <Container>
             <main className = 'container'>
                <div className='box'>
                    <div className = 'l'>
                        <Details></Details>
                        <BookIntro></BookIntro>
                        <HotArticle></HotArticle>
                    </div>
                    <div className='r'>
                        <LastMag></LastMag>
                    </div>
                </div>
                <AlsoLike></AlsoLike>
            </main>
        </Container>
    );
};

export default MagIntroUi;