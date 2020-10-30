import styled from 'styled-components';
import border from '@a/styled/border';

const Div = styled.div`
   height: 100%;
   background: #fff;
   display: flex;
   flex-direction: column;
   >main {
      flex: 1;
   }
`

const Title1 = border(
   styled.h2`
      width: 100%;
      font-size: 18px;
      color: #319DF7;
      line-height: 50px;
      span {
         width: 228px;
         display: inline-block;
         text-align: center;
         border-bottom: 2px solid #319DF7;
      }
`
)

const Title2 = styled.h3`
      width: 228px;
      text-align: center;
      font-size: 18px;
      color: #666666;
      line-height: 50px;
`

export {
   Div,
   Title1,
   Title2
}