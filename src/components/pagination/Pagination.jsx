// 分页器组件
import React, { Component } from 'react';

import { Pagination } from 'antd';

import{
    PaginationWraper
} from './StylePagination'

class Page extends Component {
    render() {
        return (
            <PaginationWraper className='container'>
              <Pagination 
              className='box'
              defaultCurrent={1}
              total={30} 
              pageSize={10} 
              />  
            </PaginationWraper>
        );
    }
}

export default Page;