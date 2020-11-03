import styled from 'styled-components'
import border from '@a/styled/border'

const  Container = styled.div`
    width:100%;
    overflow-y:scroll;
    main{
        /* min-height:2000px; */
        overflow-y:scroll; 
        .box{
            margin-bottom:30px;
            background-color:#fff;
            overflow:hidden;
        }
    }
   
    
`

const   ShortCommentListsWraper = styled.div`
    width:940px;
    div:nth-child(2){
        margin-top:5px;
        width:78px;
        height:28px;
        /* background-color: #319DF7; */
        line-height:28px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        text-align:center;
        margin-bottom:8px;
    }
    >ul{
        clear:both;
        width:100%;
        /* min-height:100px; */
        li{
            /* background-color:#952; */
            width:100%;
            display:flex;
            margin-bottom:20px;
            >div:first-child{
                /* float:left; */
                /* background-color:#785; */
                width:97px;
                margin-right:13px;
                margin-top:0px;
                div{
                    height:106px;
                    width:100%;
                    img{
                        width:100%;
                    }
                }
                span{
                    width:100%;
                    display:block;
                    line-height:34px;
                    text-align:center;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
            }
            >div:last-child{
                /* clear:left; */
                height:auto;
                width:100%;
                flex:1;
                /* background-color:#a78; */
                >span:nth-child(1){
                    float:left;
                    line-height:24px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                    height:24px;
                    /* margin-right:32px; */
                    /* background-color:#b41; */
                }
                >span:nth-child(2){
                    margin-left:64px;
                    float:left;
                    line-height:24px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                    height:24px;
                    /* background-color:#689; */
                }
                >span:nth-child(3){
                    display:block;
                    height:73px;
                    line-height:24px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #999999;
                    /* background-color:#668; */
                    margin-top:30px;
                    margin-bottom:8px;
                    text-align: left;
                }
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

const BookWraper = styled.div`
        margin-left:60px;
        width:200px;
        >div:nth-child(2){
            margin-top:34px;
            /* background-color:#c89; */
            >div{
                width:100%;
                height:290px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            button{
                margin-top:22px;
                margin-left:52px;
                margin-bottom:30px;
                width:78px;
                height:33px;
                border-radius:3px;
                background-color:#319DF7;
                cursor: pointer;
                span{
                    /* line-height:33px; */
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }    
        }
        >div:nth-child(3){
            width:254px;
            height:262px;
            /* background-color:#8b6; */
            line-height:30px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;          
        }
        >div:nth-child(4){
            margin-top:20px;
            line-height:30px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            p{
                
                margin-bottom:10px;
            }
        }
`

export {
    Container,
    ShortCommentListsWraper,
    TitleWraper,
    BookWraper
}