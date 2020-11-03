import React, { Component } from 'react';

import {
    Container 
} from './StyleChapter'



import img from '@a/images/charter.png'

class Chapter extends Component {
    render() {
        return (
        <Container >
   
            <main className = 'container'>
           
                <div className='content'>
                    <p>我不想要咖啡，我只想要苏明玉的丝巾</p>
                    <p>
                        编辑：sugar.tian &nbsp; &nbsp;
                        时间：2019年3月26日 &nbsp; &nbsp;
                        内容来源：VOGUE时尚网 &nbsp; &nbsp;
                        图片来源：VOGUE时尚网
                    </p>
                    <div >
                        <p>
                        频繁霸占热搜的《都挺好》今天就要大结局了！终于不用再跟着剧情一起生气了！等待大结局的这几个小时正好可以钻研一下苏明玉的职场穿搭心得。在符合职场着装 求的前提下，明玉十分擅长用丝巾提升整体的时髦感。
                        </p>
                        <img src={`${img}`} alt=""/>
                        <p>
                        频繁霸占热搜的《都挺好》今天就要大结局了！终于不用再跟着剧情一起生气了！等待大结局的这几个小时正好可以钻研一下苏明玉的职场穿搭心得。在符合职场着装 求的前提下，明玉十分擅长用丝巾提升整体的时髦感。
                        </p>
                        <img src={`${img}`} alt=""/>
                    </div>
                </div>
            </main>
 
        </Container>
            
        );
    }
}

export default Chapter;