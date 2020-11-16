import styled from 'styled-components';
import border from '@a/styled/border';

const Title = border(
   styled.h2`
      width: 100%;
      font-size: 18px;
      color: #319DF7;
      line-height: 50px;
      span {
         width: 110px;
         display: inline-block;
         text-align: center;
         border-bottom: 2px solid #319DF7;
      }
   `
)

const HotMagWrap = styled.div`
   ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
         width:562px;
         >div:last-child {
            h2 {
               button {
                  display: none;
               }
            }
         }
      }
   }
`

export {
   Title,
   HotMagWrap
}