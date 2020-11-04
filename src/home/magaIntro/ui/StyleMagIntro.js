import styled from 'styled-components'
// import ellipsis from '@a/styled/ellipsis'
import border from '@a/styled/border'

const  Container = styled.div`
    width:100%;
    overflow-y:scroll;
    .container{ 
        overflow-y:scroll; 
        .box{
            overflow:hidden;
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
const DetailsWraper = styled.div`
        
        width:743px;
        >div:nth-child(2){
            /* background-color:#a41; */
            width:100%;
            display:flex;
            margin-top:26px;
            >div:first-child{
                /* background-color:#ccc; */
                margin-right:36px;
               >div:first-child{
                    img{
                        display:inline-block;
                        width:179px;
                        height:263px;
                    }
               }
               button{
                    margin-top:26px;
                    margin-left:44px;
                    width:78px;
                    /* height:33px; */
                    border-radius:3px;
                    background-color:#319DF7;
                    line-height:33px;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #FFFFFF;
                    cursor: pointer;
               }
                
            }
            >div:nth-child(2){
                width:254px;
                height:262px;
                /* background-color:#836; */
                line-height:30px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;          
            }
            >div:last-child{
                flex:1;
                >div:first-child{
                    background-color:#fff;
                    height:262px;
                    margin-bottom:26px;
                    >div:nth-child(1){
                        /* display:flex; */
                        /* flex-direction:row; */
                        line-height:20px;
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: bold;
                        color: #666666;
                    }
                    >div:nth-child(2){
                        line-height:24px;
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: bold;
                        color: #666666;
                    }
                    >div:nth-child(3){
                        line-height:18px;
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #666666;
                    }
                    >div:nth-child(4){
                        
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #666666;
                    }
                }
                >div:last-child{
                    background-color:#fff;
                    display:flex;
                    >div:nth-child(1){
                        width:60px;
                        height:25px;
                        margin-right:6px;
                        padding-left:4px;
                        background-color:#319DF7;
                        cursor: pointer;
                        svg{
                            padding-top:7px;
                            line-height:24px;
                            width:20px;
                            height:20px;
                            fill:#fff;
                        }
                        span{
                            font-size: 12px;
                            line-height:24px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #FFFFFF;
                        }
                    }
                    >div:nth-child(2){
                        width:90px;
                        height:25px;
                        margin-right:6px;
                        padding-left:6px;
                        background-color:#fff;
                        cursor: pointer;
                        svg{
                            padding-top:7px;
                            line-height:24px;
                            width:20px;
                            height:20px;
                        }
                        span{

                            font-size: 14px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #319DF7;
                        }
                    }
                    >div:last-child{
                        width:80px;
                        height:25px;
                        padding-left:10px;
                        /* background-color:#f84; */
                        cursor: pointer;
                        svg{
                            padding-top:7px;
                            line-height:24px;
                            width:20px;
                            height:20px;
                        }
                        span{
                            line-height:24px;
                            font-size: 14px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #319DF7;
                        }
                    }
                }
            }
            
        }
           
`
const BookIntroWraper =styled.div`
        
        width:743px;
        margin-top:48px;
        margin-bottom:46px;
        /* background-color:#976; */
        >div:nth-child(2){
            width:100%;
            margin-top:21px;
            line-height:26px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            span{
                margin-left:30px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #319DF7;
            }
        }

`

const HotArticleWraper = styled.div`
    width:741px;
    padding-bottom:46px;
    /* background-color:#367; */
    ul{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;

        li{
            margin-top:26px;
            /* background-color:#a57; */
            width:351px;
            display:flex;
            >div:nth-child(1){
                width:129px;
                height:129px;
                margin-right:21px;
                img{
                    width:100%;
                }
            }
            >div:nth-child(2){
                flex:1;
                p{
                    line-height:42px;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #666666;
                    margin-bottom:0;
                }
                span{
                    line-height:24px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #999999;
                }
            }
        }
    }
`

const LastMagWraper = styled.div`
    width:396px;
    .box{
        margin-top:26px;
        /* background-color:#598; */
        .ant-col-3{
            max-width:110px;
            margin-bottom:12px;
            .img_box{
                width:100%;
                height:171px;
                image{
                    width:100%
                }
            }
            p{
                text-align:center;
                line-height:42px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
            }
        }
        
        
    }
`
const AlsoLikeWraper = styled.div`
    width: 1198px;
    margin-bottom:20px;
    .ant-row{
        margin-top:25px;
        .ant-col-3{
            div{
                width:150px;
                height:209px;
                img{
                    width:100%;
                }
            }
            span{
                display:block;
                line-height:66px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
                text-align:center;
            }
        }
    }

`

export{
    Container,
    TitleWraper,
    DetailsWraper,
    BookIntroWraper,
    HotArticleWraper,
    LastMagWraper,
    AlsoLikeWraper
}