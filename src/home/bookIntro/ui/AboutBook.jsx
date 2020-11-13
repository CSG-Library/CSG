import React ,{useState}/* , { Component }  */from 'react';

import {
    TitleWraper,
    AboutBookWraper
} from './StyledIntroduce'

import { Row, Col/* , Divider  */} from 'antd';

import img1 from '@a/imgs/xiazai.png'
import img3 from '@a/imgs/video.png'

const  AboutBook=(props)=> {
    let [isShow1, setIsShow1] = useState({
        show1: false,
    })
     let style1 = {
        height: 78,
       
     }
     let style2 = {
        height: '100%',
       
     }
  
    let [isShow2, setIsShow2] = useState({
        show2: false,
    })
    let style3 = {
        height: 245,
       
     }
     let style4 = {
        height: '100%',
       
     }

     let [isShow3, setIsShow3] = useState({
        show3: false,
    })
    let style5 = {
        height: 245,
       
     }
     let style6 = {
        height: '100%',
       
     }

     let [isShow4, setIsShow4] = useState({
        show4: false,
    })
    let style7 = {
        height: 250,
       
     }
     let style8 = {
        height: '100%',
       
     }

     const handleClick1 = () => {
        console.log(isShow1.show1, isShow1)
        setIsShow1({
           show1: !isShow1.show1,
           
        })
     }
     const handleClick2 = () => {
        console.log(isShow2.show2, isShow2)
        setIsShow2({
           show2: !isShow2.show2,
        })
     }
     const handleClick3 = () => {
        console.log(isShow3.show3, isShow3)
        setIsShow3({
           show3: !isShow3.show3,
        })
     }
     const handleClick4 = () => {
        console.log(isShow4.show4, isShow4)
        setIsShow4({
           show4: !isShow4.show4,
        })
     }
    console.log(props)
    // render() {
        return (
            <AboutBookWraper>
                <TitleWraper
                    width="0 0 1px 0"
                >
                    <span>关于书籍</span>
                </TitleWraper>
                <div>
                    <div className='title'>
                        本书的其他版本
                    </div>
                    <ul
                    style={isShow1.show1 ? style2 : style1}
                    >
                        {
                            props.about_book.map((v,i)=>{
                                return (
                                    <li
                                    key={i}
                                    >
                                        {v.press}&nbsp;
                                        版次&nbsp;
                                        {v.year} 出版
                                    </li>
                                )
                            })
                        }
                        {/* <li>
                            兴华书店出版社&nbsp;
                            版次&nbsp;
                            2016.02.13 出版
                        </li> */}
                        
                    </ul>
                    {isShow1.show1 ?
                <div onClick={handleClick1}>向上收起</div>
                :
                <div onClick={handleClick1}>查看更多V</div>
            }
                </div>
                <div>
                    <div className='title'>谁正在书这本书</div>
                    <Row 
                    justify="space-around"
                    style={isShow2.show2 ? style4 : style3}
                    >
                        <>
                            {/* <Col span={6}>
                                <span>前端一号</span>
                            </Col> */}
                            {
                                props.book_reading.map((v,i)=>{
                                    return (
                                        <Col span={6} key={i}>
                                            <img src={v.img} alt=""/>
                                            <span>{v.name}</span>
                                        </Col>
                                    )
                                })
                            }
                        </>
                    </Row>
                    {isShow2.show2 ?
                <div onClick={handleClick2}>向上收起</div>
                :
                <div onClick={handleClick2}>查看更多V</div>
            }
                </div>
                <div>
                    <div className='title'>经常去的读书会</div>
                    <Row 
                    justify="space-around"
                    style={isShow3.show3 ? style6 : style5}
                    >
                        {/*  <Col span={6}>
                            <img src={`${img1}`} alt=""/>
                            <span>前端一号</span>
                        </Col> */}
                        <>
                        {
                            props.book_club.map((v,i)=>{
                                return (
                                    <Col 
                                    span={6}
                                    key={i}
                                    >
                                        <img src={
                                            v.img
                                        } alt=""/>
                                        <span>{v.name}</span>
                                    </Col> 
                                )
                            })
                        }
                        </>
                    </Row>
                    
                    {isShow3.show3 ?
                <div onClick={handleClick3}>向上收起</div>
                :
                <div onClick={handleClick3}>查看更多V</div>
            }
                </div>
                <div>
                    <div className='title'>关于这本书的视频</div>
                    <ul
                     style={isShow4.show4 ? style8 : style7}
                    >
                        {/* <li>
                            <div>
                                <img src={`${img3}`} alt=""/>
                            </div>
                            <div>
                                前端法师<br/>
                                专辑：专辑名<br/>
                                浏览：1024次
                            </div>
                        </li> */}
                        {
                            props.book_video.map((v,i)=>{
                                return (
                                    <li
                                    key={i}
                                    >
                                        <div>
                                <img src={v.img} alt=""/>
                            </div>
                            <div>
                               {v.name}<br/>
                                专辑：专辑名<br/>
                                浏览：{v.watch}次
                            </div>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                    {isShow4.show4 ?
                <div onClick={handleClick4}>向上收起</div>
                :
                <div onClick={handleClick4}>查看更多V</div>
            }
                </div>
            </AboutBookWraper>
        );
    // }
}

export default AboutBook;

