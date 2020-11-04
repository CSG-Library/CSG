import styled from 'styled-components'

const NewspaperUi = styled.div`
 display:flex;
 justify-content:space-between;
 margin-top:27px;
 margin-bottom:90px;
 .left{
     img{
        width: 630px;
        height: 1000px;
        padding:30px 40px 30px 60px;

     }
 }
 .right{
     display:flex;
     flex-direction:column;
     color:#666666;
     font-size:20px;
     h2{
         line-height:24px;
         font-size:24px;
         color:#666666;
         margin:30px auto 20px;
     }
     h3{
         line-height:20px;
         font-size:20px;
         margin:0 auto 20px;
         color:#666666;
     }
     .ins{
            display: flex;
            align-items:center;
            justify-content:space-around;
            height: 17px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            margin-top:20px;
            padding:0 50px;
            }
     .ul{
            display:flex;
            flex-direction:column;
            justify-content:center;
            font-size: 18px;
            font-weight: 400;
            color: #666666;
            line-height: 29px;
            p{
                text-indent:2em;
                margin-top:45px;

            }
    }
 }

`

const NewspapersNuUi = styled.div`
    width:1200px;
    display:flex;
    flex-direction:column;
    background-color:#f7fcff;
    >h2{
        width: 118px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        padding:0 9px 15px;
        color: #319DF7;
        margin-top:43px;
        border-bottom:2px solid #319DF7;
        z-index:2;
    }
    .line{
        border-bottom:1px solid #EEEEEE;
        margin-top:-1px;

    }
    .ul{
        display:flex;
        flex-wrap:wrap;
        margin-top:10px;
        li{
            padding-top:15px;
            height:280px;
            width:153px;
            margin-right:56px;
            margin-bottom:10px;
            border:1px solid red;
            display:flex;
            flex-direction:column;
            align-items:center;
            border:1px solid #f2f2f2;
            cursor: pointer;
            &:nth-child(6n+6){
                margin-right:0;
            }
            &:hover{
                border:1px solid #f40;
            }
            
            img{
                width:100px;
                height:60px;
                &:first-child{
                    width:100%;
                    height:68px;
                }
            }
            p{
                 color:#f61915;
                 font-size:10px;
                 line-height:10px;
                 margin-top:6px;
                 margin-bottom:36px;
                    
            }
            h4{
                color:#666;
                font-size:14px;
                margin-top:46px;
            }
        }
       

    }
`

export{
    NewspaperUi,NewspapersNuUi
}