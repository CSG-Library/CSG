import styled from 'styled-components';
import ellipsis from '@a/styled/ellipsis';

const Ul = styled.ul`
   padding: 20px 0;
   font-weight: 400;
   li{
      display: flex;
      padding: 20px 0;
      img {
         margin-right: 20px;
      }
      > div:last-child{
         h2 {
            color: #666666;         
            font-size: 18px;
            height: 25px;
            line-height: 25px;
            span{
               padding-right: 42px;
            }
            button{
               width: 50px;
               height: 25px;
               background: #319DF7;
               font-size: 16px;
               color: #FFFEFE;
            }
         }
         h3 {
            font-size: 16px;
            color: #666666;
            line-height: 36px;
         }
         p {
            span {
               font-size: 14px;
               color: #666666;
            }
            font-size: 14px;
            color: #999999;
            line-height: 24px;
         }
         h4 {
            width: 326px;
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            div{
               display: flex;
               color: #319DF7;
               .iconfont{
                  display: block;
                  width: 20px;
                  height: 18px;
               }
               span {
                  font-size: 14px;
                  padding-left: 2px;
               }
            }
         }
      }
   }
`

const PageWrap = ellipsis(styled.p``)

export {
   Ul,
   PageWrap
}