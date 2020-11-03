import React, { Component } from 'react';

import img from '@a/images/details.png'

import { Rate } from 'antd';

import { Button } from 'antd';

import {
    TitleWraper,
    DetailsWraper
} from './StyledIntroduce'

class Details extends Component {
    state = {
        size:'large'
    }
    handleClick=()=>{

    }
    render() {
        return (
            <DetailsWraper>
                <TitleWraper
                width="0 0 1px 0"
                // borderColor='#000'
                >
                    <span>书籍详情</span>
                </TitleWraper>
                <div >
                    <div>
                        <div>
                            <img src={`${img}`} alt=""/>
                        </div>
                        <Button 
                        className='button' 
                        type="primary" 
                        size={this.state.size}
                        onClick={this.handleClick}
                        >
                            阅读
                        </Button>
                    </div>
                    <div >
                        书名：论惩罚PM的100种方法<br/>
                        作者：北科吴彦祖<br/>
                        译者：北科周润发<br/>
                        副标题：程序员上位之路<br/>
                        页数：1024<br/>
                        出版社：北京千锋教育出版社<br/>
                        定价：404元<br/>
                        装帧：404<br/>
                        出版年：2020.02.02<br/>
                    </div>
                    <div >
                        <div>
                            <div className='star'>
                                <Rate allowHalf defaultValue={4} /> 
                                &nbsp; &nbsp;
                                <span>8分</span>
                            </div>
                            <div>
                                999人阅读 &nbsp;&nbsp; 520人收藏
                            </div>
                            <div>
                                888人批注（666人评论）
                            </div>
                            <div style={{float:'left'}}>
                            <Rate disabled defaultValue={5} />
                            &nbsp; &nbsp; &nbsp;60%
                            <Rate disabled defaultValue={4} />
                            &nbsp; &nbsp; &nbsp;30%
                            <Rate disabled defaultValue={3} />
                            &nbsp; &nbsp; &nbsp;5%
                            <Rate disabled defaultValue={2} />
                            &nbsp; &nbsp; &nbsp;3% 
                            <Rate disabled defaultValue={1} />
                            &nbsp; &nbsp; &nbsp;2%
                            <Rate disabled defaultValue={0} />
                            &nbsp; &nbsp; &nbsp;评分
                            </div>
                        </div>
                        <div>
                            <div>
                            <svg t="1603629911528" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6552"><path d="M221.528745 410.623979c0 32.081595 26.053524 58.135119 58.135119 58.135119 32.081595 0 58.135119-26.053524 58.135119-58.135119 0-32.081595-26.053524-58.135119-58.135119-58.135119C247.58227 352.48886 221.528745 378.542384 221.528745 410.623979zM453.864881 410.623979c0 32.081595 26.053524 58.135119 58.135119 58.135119 32.081595 0 58.135119-26.053524 58.135119-58.135119 0-32.081595-26.053524-58.135119-58.135119-58.135119C479.918405 352.48886 453.864881 378.542384 453.864881 410.623979zM686.303187 410.623979c0 20.740649 11.034434 39.948737 29.016474 50.267977 17.98204 10.42141 40.153079 10.42141 58.135119 0 17.98204-10.42141 29.016474-29.527328 29.016474-50.267977 0-32.081595-26.053524-58.135119-58.135119-58.135119C712.254541 352.48886 686.303187 378.542384 686.303187 410.623979zM947.655797 730.111708c0 32.081595-26.053524 58.135119-58.135119 58.135119L491.974546 788.246827 486.150817 788.246827c-2.349926 1.328219-7.969313 7.254119-9.910556 9.195362L337.696813 935.883466 337.696813 817.263302c0-16.040797-12.975677-29.016474-29.016474-29.016474L134.377152 788.246827c-32.081595 0-58.135119-26.053524-58.135119-58.135119l0-609.958984c0-32.081595 26.053524-58.135119 58.135119-58.135119l755.245696 0c32.081595 0 58.135119 26.053524 58.135119 58.135119L947.757967 730.111708zM918.639322 3.882486l-813.278645 0C57.238285 3.882486 18.209084 42.911687 18.209084 91.034079l0 668.094103c0 48.122392 39.029201 87.151593 87.151593 87.151593l174.303187 0 0 145.184542c0 16.040797 17.98204 32.081595 34.022838 32.081595 3.269462 0-2.96295 1.021707 0 0 9.297532 1.941243 23.601428-5.006364 30.855547-12.260482l165.005655-165.005655 409.19359 0c48.122392 0 87.151593-39.029201 87.151593-87.151593L1005.893087 91.034079C1005.790916 42.911687 966.761715 3.882486 918.639322 3.882486z" fill="#ffffff" p-id="6553"></path></svg>
                                <span>评论</span>
                            </div>
                            <div>
                            <svg t="1603630184991" className="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1763"><path d="M825.82 199.025C741.931 115.544 630.434 69.566 511.806 69.566S281.64 115.544 197.744 199.024 67.6 393.614 67.6 511.766s46.225 229.24 130.143 312.75 195.394 129.458 314.033 129.458 230.155-45.928 314.013-129.457 130.143-194.63 130.143-312.781-46.156-229.201-130.114-312.711z m-91.916 344.472H543.537v190.377c0 17.524-14.206 31.731-31.73 31.731s-31.731-14.207-31.731-31.73V543.496H289.698c-17.524 0-31.73-14.206-31.73-31.73s14.206-31.731 31.73-31.731h190.377V289.667c0-17.524 14.206-31.73 31.73-31.73 17.526 0 31.731 14.206 31.731 31.73v190.377h190.367c17.524 0 31.73 14.207 31.73 31.73s-14.206 31.732-31.73 31.732v-0.009z" fill="#1296db" p-id="1764"></path></svg>
                                <span>加入书架</span>
                            </div>
                            <div>
                            <svg t="1603630838240" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6836" ><path d="M792.064 70.73792H242.176c-71.68 0-129.536 57.92256-129.536 129.68448v716.06272c0 35.88608 27.136 55.36256 60.928 43.5712l343.552-118.91712 343.55712 118.91712c33.28 11.79136 60.92288-7.68512 60.92288-43.5712V199.91552c0-71.76704-58.36288-129.1776-129.536-129.1776zM885.76 925.7728l-352.256-131.2768c-10.752-4.10112-22.528-4.10112-32.768 0L148.48 925.7728v-727.04c0-43.5712 43.52-92.16 87.04-92.16h558.08c43.52 0 92.16 53.7088 92.16 97.28v721.92zM706.56 378.27072l-29.17888-4.61312-71.68-11.27424-34.304-69.1968L558.08 267.03872c-27.136-54.33344-54.272-54.33344-81.408 0l-13.312 26.14272-34.304 69.7088-76.8 11.27424-29.184 4.10112c-60.416 8.71936-72.704 43.0848-29.184 85.62688l20.992 20.50048 55.808 53.82656-13.312 75.86304-4.60288 28.19072C342.016 702.23872 368.64 721.22368 422.912 693.54496l26.112-13.32736 68.61312-35.88096 68.60288 35.88096 26.11712 13.32736c54.272 28.19072 80.384 9.72288 70.144-51.2768l-4.608-28.19072-13.312-75.85792L720.384 484.39296l20.99712-20.50048c43.00288-42.54208 25.6-76.90752-34.82112-85.62176z m12.8 45.63456l-20.992 20.5056-67.584 65.09568-11.776 11.27936 18.432 107.63776 4.608 28.19072c0.512 1.536 0.512 2.56512 0.512 3.58912l-3.072-1.536-25.6-13.84448-82.944-43.05408-13.824-7.17312-96.768 50.23232-26.112 13.32736-3.072 1.54624c0-1.024 0.512-2.56512 0.512-3.58912l4.608-28.19072 15.872-91.75552 3.072-15.89248-79.36-75.86304-20.992-20.5056-2.048-2.048c1.024 0 1.54112-0.512 2.56-0.512l29.184-4.61312 93.184-12.81536 15.872-2.56 48.64-97.38752 13.312-26.1376c0.51712-1.02912 1.02912-2.56512 1.54112-3.08224l1.54112 3.08224 13.312 26.1376 41.472 83.54816 7.168 14.35136 108.544 15.38048 29.184 4.608c1.01888 0 2.04288 0.51712 2.56 0.51712-1.02912-0.00512-1.54624 1.01888-1.54624 1.53088z" p-id="6837"></path></svg> 
                                 <span>推荐</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </DetailsWraper>
        );
    }
}

export default Details;


