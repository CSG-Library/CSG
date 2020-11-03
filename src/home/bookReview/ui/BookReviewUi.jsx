import React,{Component} from  'react'



// 公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import { Pagination,Rate } from 'antd';
 import {BookReview} from './styleBook'
 class BookReviewUi extends Component {
     
    render() {
        const headIcon = require('@a/imgs/headIcon_03.jpg')
        const bookIcon = require('@a/imgs/bookIcon_03.jpg')
        const data ={
            reviewers:'小米',
            headIcon:headIcon,
            stime:'2019-03-27',
            score:4,
            bookSocre:9.5,
            content:'长篇大论内容',
           
            bookNews:{
                bookIcon:bookIcon,
                bookName:'毒医王妃',
                bookAuthor:'蓝华月',
                bookTranslator:null,
                bookSubhead:'绝色王妃',
                bookPageNum:12135,
                bookPress:'铁蛋文化有限公司',
                bookOderPrice:'123',
                bookBinding:'000',
                bookPublicationTime:'1999.09.09'

            },
            otherBookreview:[
                {
                    replyId:1223,
                    replyIcon:headIcon,
                    replyName:'神秘大哥',
                    replyTime:'2019-03-21',
                    replyContent:'发几个路口的法规快递费考虑了股份等路公交；地方两个考虑过的京东方；房管局；了东方国际是老款的公开说多了；几个地方；'
                },
                {
                    replyId:2321,
                    replyIcon:headIcon,
                    replyName:'神秘大哥',
                    replyTime:'2019-03-21',
                    replyContent:'没法过了肯定发几个路口的法规快递费考虑了股份等路公交；地方两个考虑过的京东方；房管局；了东方国际是老款的公开说多了；几个地方；'
                }
            ]


        }
        const reply =  {
            replayId:1,
            replyList:[
            {
                userId:1,
                replyId:1,
                replyIcon:headIcon,
                replyName:'神秘大哥',
                replyTime:'2019-03-21',
                replyContent:'没法过了肯定发几个路口的法规快递费考虑了股份等路公交；地方两个考虑过的京东方；房管局；了东方国际是老款的公开说多了；几个地方；'
            },
            {
                userId:4,
                replyId:2,
                replyIcon:headIcon,
                replyName:'神秘大哥',
                replyTime:'2019-03-21',
                replyContent:'没法过了肯定发几个路口的法规快递费考虑了股份等路公交；地方两个考虑过的京东方；房管局；了东方国际是老款的公开说多了；几个地方；'
            },{
                userId:2,
                replyId:3,
                replyIcon:headIcon,
                replyName:'神秘大哥',
                replyTime:'2019-03-21',
                replyContent:'没法过了肯定发几个路口的法规快递费考虑了股份等路公交；地方两个考虑过的京东方；房管局；了东方国际是老款的公开说多了；几个地方；'
            }
        
            ],
            page:0,
            total:30,
            pageSize:3
        }
        return (
            
            <div>
                  <Head></Head>
                <main className="container">
                    <NavOne></NavOne>
                    <NavTwo></NavTwo>
                    <BookReview>
                        <h2>书评标题</h2>
                        <p className='line'></p>
                        <div className="top">
                            <div className="left">
                                <ul className="lTop">
                                     <li> <img src={data.headIcon} alt=""/> <span>{data.reviewers}</span> </li>
                                     <li className='midd'> 
                                        <div>评论时间：{data.stime}</div>
                                        <div>评论打分：<Rate  defaultValue={data.score} disabled={true}/></div> 
                                    </li>
                                    <li >
                                        <p>书籍评分：{data.bookSocre}分</p>
                                    </li>
                                </ul>
                                <div className="lBtm">
                                    {data.content}
                                </div>
                            </div>
                            <div className="right">
                                 <ul>
                                     <li><img src={data.bookNews.bookIcon}alt=""/></li>
                                     <li><button>阅读</button></li>
                                     <li>书名：{ data.bookNews.bookName}</li>
                                     <li>作者：{ data.bookNews.bookAuthor}</li>
                                     <li>译者：{ data.bookNews.bookTranslator}</li>
                                     <li>副标题：{ data.bookNews.bookSubhead}</li>
                                     <li>页数：{ data.bookNews.bookPageNum}</li>
                                     <li>出版社：{ data.bookNews.bookPress}</li>
                                     <li>定价；{ data.bookNews.bookOderPrice}</li>
                                     <li>装帧：{ data.bookNews.bookBinding}</li>
                                     <li>出版日期：{ data.bookNews.bookPublicationTime}</li>
                                 </ul> 
                                 <h2>{data.reviewers}的其他书评</h2>
                                 <p>
                                     {data.otherBookreview[0].replyContent}
                                 </p>
                            </div>
                        </div>
                        <div className="mid">
                            <ul className='ul'>
                               {reply.replyList.map(v=> 
                               <li key={v.replyId}>
                                    <p>回复{'<'+reply.replayId+'>'}</p>
                                    <div><span>发言人：{v.replyName}</span><span>发表时间：{v.replyTime}</span></div>
                                     <p>{v.replyContent}</p>
                                </li>)}
                            </ul>
                             <Pagination hideOnSinglePage={true} showSizeChanger={false} defaultCurrent={reply.page+1} defaultPageSize={reply.pageSize} onChange={1,5} total={reply.total} />
                            
                        </div>
                        <div className="btm">
                            <p>发表回复</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <div><button>发表</button><button>取消</button> </div>
                       
                        </div>
                    </BookReview>
                </main>
                <Foot></Foot>
            </div>
        )
    }
}

export default BookReviewUi
