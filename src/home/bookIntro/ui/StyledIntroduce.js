import styled from 'styled-components'
import border from '@a/styled/border'
import ellipsis from '@a/styled/ellipsis'

const  Container = styled.div`
    width:100%;
    overflow-y:scroll;
    main{ 
        min-height:2500px;
        overflow-y:scroll; 
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
        
        /* >div:nth-child(1){
            width:100%;
            border-bottom:1px solid #EEEEEE;
            span{
                display:inline-block;
                font-size:18px;
                line-height:44px;
                height:44px;
                color:#319DF7;
                text-align:center;
                position:relative;
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

        } */
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

const EllWraper = ellipsis(styled.div``)

const BookIntroWraper =styled.div`
        width:743px;
        margin-top:48px;
        margin-bottom:46px;
        /* background-color:#356; */
        >div:nth-child(2){
            width:100%;
            margin-top:21px;
            height:104px;
            line-height:26px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            overflow:hidden;
            color: #666666;
        }
        >div:nth-child(3){
            float:right;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #319DF7;
        }

`
const AuthorIntroWraper =styled.div`
        width:743px;
        /* margin-top:48px; */
        margin-bottom:46px;
        /* background-color:#356; */
        >div:nth-child(2){
            width:100%;
            margin-top:21px;
            line-height:26px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
           
        }   

`

const BookMenuWraper = styled.div`
    width:742px;
    /* margin-top:48px; */
    padding-bottom:46px;
    /* background-color:#354; */
    ul{
        width:800px;
        margin-top:21px;
        line-height:26px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        display:flex;
        flex-wrap:wrap;
        flex-direction: row;
        overflow:hidden;
        /* background-color:#359; */
        li{
            width:160px;
            cursor: pointer;
            &.active{
                color: #319DF7;
            }
        }
        
        
    }  
    >div:last-child{
        float:right;
        margin-top:10px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #319DF7;
    }

`

const AlsoLoveWraper = styled.div`
        width:742px;
        margin-top:38px;
        ul{
            display:flex;
            margin-top:26px;
            background-color:#58b;
            overflow-x:scroll;
            li{
                flex:1;
                margin-right:48px;
                div:first-child{
                    width:150px;
                    height:208px;
                    image{
                        display:block;
                        width:inherit;
                    }
                }
                div:last-child{
                    /* margin-top:21px; */
                    width:100%;
                    height:56px;
                    text-align:center;
                    line-height: 56px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
            }
            >li:last-child{
                margin-right:0;
            }
        }

`

const ShortCommentsWraper = styled.div`
    width:742px;
    margin-top:15px;
    div:nth-child(2){
        margin-top:5px;
        width:78px;
        height:28px;
        background-color: #319DF7;
        line-height:28px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        text-align:center;
        margin-bottom:25px;
    }
    ul{
        clear:both;
        
        li{
            margin-bottom:13px;
            >span:nth-child(1){
                line-height:40px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
                margin-right:32px;
                /* background-color:#681; */
            }
            >span:nth-child(2){
                line-height:40px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
                /* background-color:#689; */
                
            }
            >span:nth-child(3){
                display:block;
                line-height:24px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #999999;
                /* background-color:#668; */
            }
        }
        li:nth-child(3){
            margin-bottom:9px;
        }
    }
    div:nth-child(4){
        margin-bottom:37px;
        span{
            height:15px;
            line-height:15px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #319DF7;
       }
    }

`
const LongCommentsWraper = styled.div`
    width:742px;
    >div:nth-child(2){
        margin-top:5px;
        width:78px;
        height:28px;
        background-color: #319DF7;
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
        li{
            /* background-color:#952; */
            /* display:flex; */
            width:100%;
            display:flex;
            overflow:hidden;
            margin-bottom:33px;
            >div:first-child{
                float:left;
                /* background-color:#785; */
                width:97px;
                height:auto;
                margin-right:13px;
                margin-top:0px;
                div{
                    height:106px;
                    width:100%;
                    margin-top:0px;
                    img{
                        /* height:106px; */
                        width:100%;
                    }
                }
                span{
                    width:100%;
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
                width:100%;
                flex:1;
                /* background-color:#9d78; */
                >span:nth-child(1){
                    float:left;
                    line-height:24px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                    height:24px;
                    /* margin-right:32px; */
                    /* background-color:#b569; */
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
                >span:nth-child(4){
                    height:15px;
                    line-height:15px;                
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #319DF7;
                }
            }
        }
        div{
            height:70px;
            margin-top:15px;
            /* margin-bottom:50px; */
            span{
                height:15px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #319DF7;
            }
        }

    }

`
const AboutBookWraper = styled.div`
    width:396px;
    >div:nth-child(2){
        margin-top:27px;
        width: 381px;
        height: 228px;
        background: #F7F7F7;
        .title{
            padding-top:16px;
            margin-left:20px;
            padding-bottom:9px;
            /* height:17px; */
            line-height:17px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            /* background-color:#945; */
        }
        ul{
            text-align:center;
            /* background-color:#895; */
            li{
                /* padding-bottom:14px; */
                height:26px;
                line-height:26px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
            }
        }
        div:last-child{
            margin-left:159px;
            margin-top:21px;
            height: 15px;
            line-height:15px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #319DF7;
        }
    }
    >div:nth-child(3){
        margin-top:17px;
        width: 381px;
        height: 337px;
        background: #F7F7F7;
        .title{
            padding-top:15px;
            margin-left:20px;
            padding-bottom:18px;
            line-height:17px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            /* background-color:#945; */
        }
        >div:nth-child(2){
            padding:0 37px;
            /* background-color:#8256; */
            .ant-col{
                width:75px;
                margin-right:15px;
                img{
                    display:block;
                    width:100%
                }
                span{
                    height:44px;
                    line-height:44px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                    margin-bottom:6px;
                    text-align:center;
                    display:block;
                }
            }
            .ant-col:nth-child(3){
                margin-right:0;
            }
            .ant-col:nth-child(6){
                margin-right:0;
            }
        
        }
        >div:nth-child(3){
            text-align:center;
            height: 45px;
            line-height:45px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #319DF7;
            margin-bottom:5px;
        }
    }
    >div:nth-child(4){
        margin-top:17px;
        width: 381px;
        height: 337px;
        background: #F7F7F7;
        .title{
            padding-top:15px;
            margin-left:20px;
            padding-bottom:18px;
            line-height:17px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            /* background-color:#945; */
        }
        >div:nth-child(2){
            padding:0 37px;
            /* background-color:#8256; */
            .ant-col{
                width:75px;
                margin-right:15px;
                img{
                    display:block;
                    width:100%
                }
                span{
                    height:44px;
                    line-height:44px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                    margin-bottom:6px;
                    text-align:center;
                    display:block;
                }
            }
            .ant-col:nth-child(3){
                margin-right:0;
            }
            .ant-col:nth-child(6){
                margin-right:0;
            }
        
        }
        >div:nth-child(3){
            text-align:center;
            height: 45px;
            line-height:45px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #319DF7;
            margin-bottom:5px;
        }
    }
    >div:nth-child(5){
        margin-top:17px;
        width: 381px;
        height: 337px;
        background: #F7F7F7;
        .title{
            padding-top:15px;
            margin-left:20px;
            padding-bottom:18px;
            line-height:17px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            /* background-color:#967; */
        }
        ul{
            margin-left:65px;
            margin-top:3px;
            li{
                display:flex;
                margin-bottom:20px;
                div:nth-child(1){
                    width:127px;
                    height:66px;
                    margin-right:16px;
                }
            }
        }
        >div:last-child{
            text-align:center;
            height: 33px;
            line-height:33px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #319DF7;
            padding-bottom:12px;
        }
    }
`


export {
    Container,
    TitleWraper,
    DetailsWraper,
    BookIntroWraper,
    AuthorIntroWraper,
    BookMenuWraper,
    AlsoLoveWraper,
    ShortCommentsWraper,
    LongCommentsWraper,
    AboutBookWraper,
    EllWraper
}