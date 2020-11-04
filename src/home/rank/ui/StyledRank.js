import styled from 'styled-components'
import border from '@a/styled/border'

const Container = styled.div`
    width:100%;
    overflow-y:scroll;
    main{
        overflow-y:scroll; 
        .box{
            margin-top:50px;        
            /* border: 1px solid #EEEEEE; */
            display:flex;
            .ant-menu{
                margin-right:45px;
                width:253px;
                /* background-color:#759; */
                .ant-menu-inline{
                    .anticon svg{
                        display:none;
                    }
                }
            }
            .list{
                flex:1;
                display:flex;
                justify-content:space-between
            }
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

const ListWraper = border(
    styled.div`
        margin-left:11px;
        .title{
            margin-bottom:54px;
            line-height:18px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
        }
        ul{
            width:275px;
            padding-right:32px;
            .first{
                display:flex;
                /* background-color:#382; */
                /* width:100%; */
                border-bottom:1px solid #EEEEEE;
                >p:nth-child(1){
                    width: 18px;
                    height: 18px;
                    background: #FF0000;
                    margin-right:10px;
                    text-align:center;
                    margin-left:7px;
                }
                >p:nth-child(2){
                    display:flex;
                    flex-direction:column;
                    /* margin-right:65px; */
                    flex:1;
                    >span:nth-child(1){
                        font-size: 18px;
                        line-height:18px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #666666;
                        margin-bottom:14px;
                    }
                    >span:nth-child(2),
                    >span:nth-child(3){
                        margin-bottom:14px;
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #999999;
                    }
                    >span:nth-child(4){
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #666666;
                    }
                }
                div{
                    width:80px;
                    height:118px;
                    margin-bottom:18px;
                }
            }
            .second{
                display:flex;
                width:100%;
                height:68px;
                border-bottom:1px solid #EEEEEE;
                align-items:center;
                justify-content:center;
                p{
                    margin-bottom:0;
                }
                >p:nth-child(1){
                    width: 18px;
                    height: 18px;
                    background: #EB6100;
                    margin-right:10px;
                    text-align:center;
                    margin-left:7px;
                }
                >p:nth-child(2){
                    flex:1;
                    font-size: 18px;
                    line-height:18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
                >p:nth-child(3){
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
            }
            .third{
                display:flex;
                width:100%;
                height:68px;
                border-bottom:1px solid #EEEEEE;
                align-items:center;
                justify-content:center;
                p{
                    margin-bottom:0;
                }
                >p:nth-child(1){
                    width: 18px;
                    height: 18px;
                    background: #ffff00;
                    margin-right:10px;
                    text-align:center;
                    margin-left:7px;
                }
                >p:nth-child(2){
                    flex:1;
                    font-size: 18px;
                    line-height:18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
                >p:nth-child(3){
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
            }
            .other{
                display:flex;
                width:100%;
                height:68px;
                border-bottom:1px solid #EEEEEE;
                align-items:center;
                justify-content:center;
                p{
                    margin-bottom:0;
                }
                >p:nth-child(1){
                    width: 18px;
                    height: 18px;
                    background: #fff;
                    margin-right:10px;
                    text-align:center;
                    margin-left:7px;
                }
                >p:nth-child(2){
                    flex:1;
                    font-size: 18px;
                    line-height:18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
                >p:nth-child(3){
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
            }
        }
`)


export {
    Container,
    TitleWraper,
    ListWraper
}