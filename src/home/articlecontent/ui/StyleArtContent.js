import styled from 'styled-components'
import border from '@a/styled/border'

const  Container = styled.div`
    width:100%;
    overflow-y:scroll;
    main{ 
        overflow-y:scroll; 
        .page_box{
           padding-top:20px;
           padding-bottom:20px;
           background-color:#256;
           width:100%;
       }
    }


`
const TitleWraper = border(
    styled.div`
        width:100%;
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

const MinorNavWraper = styled.div`
        margin-top:22px;
        margin-bottom:24px;
        margin-left:186px;
        display:flex;
        
        /* background-color:#d97; */
        li{
            flex:1;
            /* align-items:center;
            justify-content:center; */
            text-align:center;
            height: 16px;
            font-size: 16px;
            line-height:16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            border-right: 1px solid #EAEAEA;
            cursor: pointer;
            /* transition: all 1000ms ease-in; */
            &:nth-child(7),:nth-child(8),:nth-child(9) {
                border:none;
            }
            /* &.active {
                color: #319DF7;
            } */
            &:hover {
                color: #319DF7;
            }
        }

`


const MagArticleWraper = styled.div`
    width:100%;
    .box{
        margin-top:17px;
        display:flex;
        min-height:164px;
        justify-content:space-between;
        .current{
            display:flex;
            min-width:310px; 
            p{
                width: 104px;
                height: 132px;
                margin-right:17px;
                img{
                    width:100%;
                    display:inline-block;
                }
            }
            div{
                background-color:#69b;
                span{
                    display:block;
                    line-height:40px;
                    margin-bottom:6px;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
            }
        }
        .other{
            display:flex;
            background-color:#98b;
            p{  
                min-width:120px;
                line-height:40px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #666666;
            }
            .ant-col-8{
                line-height:40px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
            }
        }
    }
`

const ContentWraper = styled.div`
    width:100%;
    div:nth-child(2){
        padding:15px;
        p{
            line-height:30px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
        }
    }
`

const ReplyWraper = styled.div`
    width:100%;
    margin-top:20px;
    padding-bottom:30px;
    div:nth-child(1){
        height: 17px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        margin-bottom:30px;
    }
    div:nth-child(2){
        width: 100%;
        height: 31px;
        background: #EEEEEE;
        line-height:31px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        margin-bottom:30px;
    }
    div:nth-child(3){
        line-height:24px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        margin-bottom:30px;
    }

`

const AddCommentWraper = styled.div`
    width:100%;
    margin-top:40px;
    background-color:#d89;
    textarea{
        width:100%;
        height: 115px;
        border: 1px solid #EEEEEE;
        margin-bottom:30px;
        resize:none;
    }
    .btn1{
        width: 112px;
        height: 40px;
        background: #319DF7;
        line-height:40px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        margin-right:20px;
    }
    .btn2{
        width: 112px;
        height: 40px;
        background:  #cccc;
        line-height:40px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000;
    }
`

export {
    Container,
    TitleWraper,
    MinorNavWraper,
    MagArticleWraper,
    ContentWraper,
    ReplyWraper,
    AddCommentWraper
}