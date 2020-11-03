import styled from 'styled-components'

const PaginationWraper = styled.div`
    margin-bottom:30px;
    // 让分页器水平居中
    position: relative;
    height:30px;
    .box{
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);

         //左右按钮
         .ant-pagination-item-link{
            width: 20px;
            height: 37px;
            background: #319DF7;
         }
         .ant-pagination-options{
             display:none;
         }
    }

`

export {
    PaginationWraper
}