import React, { Component } from 'react'

//  公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import {NewspapersNuUi} from './styleNewspaperReading'
import { Pagination } from 'antd';


export class NewspapersNumUi extends Component {
    
    onChange=({page,pageSize}) => {
        return (params) => {
            //调用数据
        }
    }
    
    render() {
        const img = require('@a/imgs/renmin_03.jpg')
        const img1 = require('@a/imgs/renmin1_03.jpg')
        const data = {
            name:'人民日报',
            EnglishName:'RENMIN RIBAO',
            img:img,
            newsId:1,
           newspapersList:[
            {
                issueName: "第一期",
                issueImg:img1,
                issueId: 1,
            },
            {
                issueName: "第二期",
                issueImg:img1,
                issueId: 2,
            },
            {
                issueName: "第三期",
                issueImg:img1,
                issueId: 3,
            }, {
                issueName: "第四期",
                issueImg:img1,
                issueId: 4,
            },
            {
                issueName: "第一期",
                issueImg:img1,
                issueId: 5,
            },
            {
                issueName: "第二期",
                issueImg:img1,
                issueId: 6,
            },
            {
                issueName: "第三期",
                issueImg:img1,
                issueId: 7,
            }, {
                issueName: "第四期",
                issueImg:img1,
                issueId: 8,
            },
            {
                issueName: "第二期",
                issueImg:img1,
                issueId: 9,
            },
            {
                issueName: "第三期",
                issueImg:img1,
                issueId: 10,
            },    {
                issueName: "第一期",
                issueImg:img1,
                issueId: 11,
            },
            {
                issueName: "第二期",
                issueImg:img1,
                issueId: 12,
            },
            {
                issueName: "第三期",
                issueImg:img1,
                issueId: 13,
            }, {
                issueName: "第四期",
                issueImg:img1,
                issueId: 14,
            },
            {
                issueName: "第一期",
                issueImg:img1,
                issueId: 15,
            },
            {
                issueName: "第二期",
                issueImg:img1,
                issueId: 16,
            },
            {
                issueName: "第三期",
                issueImg:img1,
                issueId: 17,
            }, {
                issueName: "第四期",
                issueImg:img1,
                issueId: 18,
            },
           ],
           "page":0,
           "total":999,
           "pageSize":18
        }
        return (
            <div>
            <Head></Head>
            <main className="container">
                <NavOne></NavOne>
                <NavTwo></NavTwo>
                <NewspapersNuUi>
                <h2>报刊期数</h2>
                <p className='line'></p>
                <ul className='ul'>
                    {
                        data.newspapersList.map(v=>
                            <li key={v.issueId}>
                                <img src={data.img} alt=""/>
                                <p>{data.EnglishName}</p>
                                <img src={v.issueImg} alt=""/>
                                 <h4>{v.issueName}</h4>
                            </li>
                            )

                    }
                </ul>
                <Pagination hideOnSinglePage={true} showSizeChanger={false} defaultCurrent={data.page} defaultPageSize={data.pageSize} onChange={data.page,data.pageSize} total={data.total} />
                     </NewspapersNuUi>
            </main>
            <Foot></Foot>

        </div>
   
        )
    }
}

export default NewspapersNumUi
