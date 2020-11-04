import styled from 'styled-components'
import border from '@a/styled/border'

const TitleWraper = border(
    styled.div`
        width:100%;
        /* border-bottom:1px solid #EEEEEE; */
        /* border-bottom:1px solid #925; */
        /* border-color:#000; */
       
        span{
            /* width:100%; */
            display:inline-block;
            font-size:18px;
            line-height:44px;
            height:44px;
            color:#319DF7;
            text-align:center;
            position:relative;
             /* padding-bottom:2px; */
            /* border-bottom: 3px solid #319DF7; */
        }
        span::after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            border-bottom: 3px solid #319DF7;
        }
`
)

export {
    TitleWraper
}
