import React from 'react'

// 公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import { NewsContent } from './styleNewsContent'
const NewsContentUi = (props) => {
    const img = require('@a/imgs/library1.jpg')
    const news = {
        title: '第六届澳门科技大学传播周：传播与影像叙事中的城市',
        author: '杨宝宝',
        stime: '2019-04-04',
        source: '澎湃新闻',
        contentList: [
            {
                type: 'txt',
                content: '今年是澳门回归20周年，也是澳门科技大学成立19周年。20年来，传播载体和传播途径发生了天翻地覆的变化，从照片到短视频，从电视台到“抖音”，城市影像日渐成为一种日常生活的存在方式，嵌入到人们的生活之中，构筑起充满细节与肌理的城市故事。在这样的背景之下，4月1日，由澳门科技大学人文艺术学院、复旦大学信息与传播研究中心、当代电影杂志社联合主办的第六届澳门科技大学传播周拉开帷幕。本次传播周以“镜中之城：传播与影像叙事”为主题。'
            },
            {
                type: 'img',
                url: require('../../../assets/imgs/news_03.jpg'),
                title: '“镜中之城：传播与影像叙事”为主题开幕仪式'
            },
            {
                type: 'txt',
                content: '澳科大人文艺术学院院长张志庆教授在开幕致辞中表示，澳科大人文艺术学院与复旦大学信息与传播研究中心去年正式结为合作伙伴，共建教育部人文社科重点研究伙地─澳门传媒研究中心，合作日渐深入，此次传播周复旦大学信息与传播研究中心也是合办单位之一。同时，澳科大将以“粤港澳大湾区”为契机，与大湾区乃至全国相关学术机构加强联系，将澳科大建设为大湾区学术重镇。此外，今年传播周特别加入“讲好澳门故事：廿载影像”分享会，以此向澳门回归祖国20周年致敬和献礼。'
            },
            { 
                type: 'txt',
                content: '在主旨演讲环节，汉堡大学的戈登·米切尔（Gordon Mitchell）教授、香港浸会大学黄煜教授、中国电影资料馆孙向辉馆长和复旦大学信息与传播研究中心孙玮教授先进行了主旨演讲。四人均将目光聚焦到了技术和社会环境变化之下，影像等叙事方式带来的新意义。'
            },
            {
                type: 'txt',
                content: '孙玮用两个经验材料来回应从叙事到实践转向的影像变化的过程，即上海城市形象片和抖音中的上海城市短视频，两者分别对应“视频圈的影像叙事”和“赛博人的城市体验”。城市形象片是“上帝之眼”，多从俯瞰等角度观察，呈现的是虚拟的城市视觉奇观、时空的剪裁与拼贴；而抖音中的上海城市凸显了“实践”的力量。拍摄地铁的视角不是俯瞰，而是正常人身体的平视；拍摄上海外滩，关注的是年轻人的街舞和行为艺术；拍摄上海美食，有生煎馒头的热气腾腾，也有锅边溅出的油渍，真实而鲜活这些影像中既有个人叙事、也通过短视频转发、评论产生群体交往，具有日常生活的偶然性。'
            },
            {
                type: 'txt',
                content: '据悉，在传播周期间，围绕“镜中之城：传播与影像叙事”这一主题，有多场讲座、学术论坛、博士生论坛等学术交流活动举行。  '
            }
        ]



    }
    return (
        <div>
            <Head></Head>
            <main className="container">
                <NavOne></NavOne>
                <NavTwo></NavTwo>
                <NewsContent>
                    <h2>新闻详情</h2>
                    <p className='line'></p>
                    <div>
                        <h2>{news.title}</h2>
                        <ul className={'ins'}>
                            <li>{news.source}记者：{news.author}</li>
                                <li>时间：{news.stime}</li>
                                <li>来源：{news.source}</li>
                      </ul>
                      <ul className='ul'>
                      {news.contentList.map((v,i)=>(
                          v.type==='txt'?<li key={i}><p>{v.content}</p></li>:<li className="li" key={i}><img src={v.url} alt=""/><span>{v.title}</span></li>   
                      ))}
                      </ul>
                </div>
            </NewsContent>
         </main>
                <Foot></Foot>
    
         </div>
     )
 }

export default NewsContentUi
