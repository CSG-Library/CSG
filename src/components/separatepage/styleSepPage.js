import styled from 'styled-components';

const Sepwrap = styled.div`
   .ant-pagination{
      margin: 60px 0;
      display: flex;
      justify-content: center;
      li{
         button{
            width: 20px;
            height: 38px;
            background: #319DF7;
            svg{
               color: #FFFFFF;
            }
         }
         &.ant-pagination-prev{
            min-width: 0;
            margin: 0;
         }
         &.ant-pagination-item{
            width: 50px;
            height: 38px;
            line-height: 38px;
            color: #319DF7;
            font-size: 22px;
            border: none;
            margin: 0;
            background: #eee;
         }
      }
   }
`

export {
   Sepwrap
}

