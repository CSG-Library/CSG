import React, { Component } from 'react'

// 公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import { NewspaperUi } from './styleNewspaperReading'
 class NewspaperReadingUi extends Component {
    render() {
        const img = require('@a/imgs/newspaper.jpg')
        const data = {
            title: '世园会建成“信息高速公路”',
            title2: ' 11座展馆5G信号全覆盖',
            author: '杨宝宝',
            stime: '2019年04月04日',
            source: '北京日报',
            edition: '01',
            img,
            content: [
                {
                    sort: 1,
                    txt: '本报讯（记者 赵鹏）举世瞩目的北京世园会将于4月底盛大开园 昨天获悉，园内及周边的5G“信息高速公路”已正式建成并投入使 从5G传输的8K高清视频，到5G手机通讯与游戏体验，再到5G灯光 5G远程诊疗……作为世园会的“神经中枢”，5G“信息高速公路” 这场园林艺术展览，变成科技、自然与文化融合的盛会。 '
                },
                {
                    sort: 2,
                    txt: '参展观众将如何与5G亲密接触？北京世园局信息化部副部长郭子绍，观众可以在园区内的5G展厅中，体验到无人机、无人驾驶、8K视频、自动售卖等最先进的应用场景。开园后，展厅中还将展示5G终端，供观众在手机上亲身体验5G技术高速下载和低延时的特点。'
                },
                {
                    sort: 3,
                    txt: '中国铁塔北京市分公司总经理范晓青介绍，这次铁塔公司统筹三 营商公网和政务专网的建设需求，截至目前，已完成世园会移动通 础设施建设，包括园区内外12个大型基站，以及74个微型基站、1 智慧灯杆，对面积超过20万平方米的11座展馆实现了5G信号的全 据悉，房檐下、木栅栏内、幕布中，各个5G微基站将完美融入展馆中。 '
                },
                {
                    sort: 4,
                    txt: '“预计在最高峰时世园会每天将迎来24万名游人，人群过于聚集 出现手机信号拥堵的问题，而5G具有大容量接入的能力，恰好可以 这个问题。” '
                }, {
                    sort: 5,
                    txt: '郭子亮说，5G室内微基站与园区内建筑物“同步规划、同步设计 步施工、同步交付”，既保障了4G、5G良好的网络质量，又保障了 物美观与环境协调。 '
                }
            ]
        }
        return (
            <div>
                <Head></Head>
                <main className="container">
                    <NavOne></NavOne>
                    <NavTwo></NavTwo>
                    <NewspaperUi>
                            <div className="left">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="right">
                                 <h2>{data.title}</h2>
                                <h3>{data.title2}</h3>
                                <ul className='ins'>
                                    <li>来源：{data.source}</li>
                                    <li>{data.stime}</li>
                                    <li>版次：{data.edition}</li>
                                    <li>作者：{data.author}</li>
                                </ul>
                                <ul className='ul'>
                                    {data.content.map(v=>
                                        <li key={v.sort}><p>{v.txt}</p></li>
                                        )}
                                </ul>
                            </div>
                    </NewspaperUi>
                </main>
                <Foot></Foot>

            </div>
        )
    }
}

export default NewspaperReadingUi
