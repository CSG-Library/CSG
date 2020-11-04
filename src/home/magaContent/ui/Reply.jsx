import React from 'react';

import {
    ReplyWraper
} from './StyleArtContent'


const   Reply = () => {
    return (
        <ReplyWraper>
            <div>
                <span>回复{`<`}{`>`}</span>
            </div>
            <div>
                发布人：千锋加百利
                &nbsp;&nbsp;&nbsp;
                发布时间：2020-06-07
            </div>
            <div>
                中国最早的杂志为德国汉学家郭实腊1833年7月在广州创办的《东西洋考每月统记传》。发行时间延续5年多，版式采用中国传统书本样式，刊期使用清代皇帝年号纪 年。在最初，杂志和报纸的形式差不多，极易混淆。
            </div>
        </ReplyWraper>
    );
};

export default  Reply;