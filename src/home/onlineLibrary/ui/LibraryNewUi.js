
import React from 'react'

// 公共组件
import Head from '@c/header/Header';
import NavOne from '@c/navOne/NavOne';
import NavTwo from '@c/navTwo/NavTwo';
import Foot from '@c/footer/Footer';
import {LibraryContent} from './styleLibrary'
 const LibraryNewUi = (props) => {
const img = require('@a/imgs/library1.jpg')
     const lib  =[
        {'title':'馆藏资源',
        'content':'据2018年9月该图书馆官网信息显示，首都图书馆藏各类文献逾845万册（件）。其中，古籍近50万册（件） 善本600'},
        {'title':'珍藏古籍',
        'content':'据2018年9月该图书馆官网信息显示，首都图书馆收藏有古籍近50万册（件），其中善本5200余种，67000余册。首都图书馆特甄选馆藏珍善本古籍加以数字化，并辅以详细书目数据建成《馆藏古籍珍善本图像数据数据库所收古籍，均为入选《国家珍贵古籍名录》的珍贵古籍和馆藏特色文献。148种珍贵古籍入选前五批《国家珍贵古籍名录》，包括《阿毗达摩顺正理论》《毗庐大藏》《大方广佛华严经疏》《摩诃般若波罗密经《古史》60卷、《晦庵先生朱文公行状》2卷、《资治通鉴》294卷、《通鉴释文辨误》12卷、《通鉴总类》、《唐律疏议》30卷、《纂例》12卷等珍贵古籍。'},
        {'title':'地方文章',
        'content':'据2018年9月该图书馆官网信息显示，首都图书馆拥有地方文献藏品12785种、27868册（件），其中图书5307种、17331册。内容包含方志、正史、科学论著、考察报告、文件汇编、纪念专刊以及杂述杂纂、笔记日记等。'},
        {'title':'数字资源',
        'content':' 据2018年9月该图书馆官网信息显示，首都图书馆已拥有中文普通图书、英文图书、电子文献、中外文报刊、 北京地方文献等'},
        {'title':'支撑保障',
        'content':' 首都图书馆设有古籍保护中心承担着数字文献资源的加工收藏与服务，组织古籍保护工作，开展古籍普查登 古籍修复培训和古籍保'}
       ]
     return (
         <div>
               <Head></Head>
         <main className="container">
            <NavOne></NavOne>
            <NavTwo></NavTwo>
            <LibraryContent>
                <h2>图书馆详情</h2>
                <p className='line'></p>

                <div>
                    <div className="left">
                        <h2>馆藏实力</h2>
                            <ul>
                            {lib.map(v=>
                              <li key={v.title}>
                                  <h3>{v.title}</h3>
                                    <p>{v.content}</p>
                              </li>  
                                )}
                            </ul>
                    </div>
                    <div className="right">
                        <img  src={img} alt=""/>
                        <p>网址： <span>http://www.clcn.net.cn/#Search</span> </p>
                    </div>
                </div>
            </LibraryContent>
         </main>
         <Foot></Foot>
    
         </div>
     )
 }

export default LibraryNewUi
