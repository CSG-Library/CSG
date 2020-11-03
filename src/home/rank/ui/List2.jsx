import React from 'react';

import {
    ListWraper
} from './StyledRank'

import img from '@a/images/rank.jpg'

const List2 = () => {
    return (
        <ListWraper 
        width='0 1px 0 0'
        >
            <div className='title'>
                人气榜
            </div>
            <ul>
                <li className='first'>
                    <p> 
                        1
                    </p>
                    <p>
                        <span>考试周刊</span>
                        <span>六道</span>
                        <span>[玄幻]</span>
                        <span>1024月票数</span>
                    </p>
                    <div>
                        <img src={`${img}`} alt=""/>
                    </div>
                </li>
                <li className='second'> 
                    <p> 
                       2
                    </p> 
                    <p>
                        考试周刊
                    </p>
                    <p>
                        1024月票数
                    </p>
                </li>
                <li className='third'> 
                    <p> 
                       3
                    </p> 
                    <p>
                        考试周刊
                    </p>
                    <p>
                        1024月票数
                    </p>
                </li>
                <li className='other'> 
                    <p> 
                       4
                    </p> 
                    <p>
                        考试周刊
                    </p>
                    <p>
                        1024月票数
                    </p>
                </li>
            </ul> 
        </ListWraper>
        
    );
};

export default List2;