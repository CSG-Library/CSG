import styled from 'styled-components'


const DialogWrapper = styled.div`
    
        width:600px;
        height:600px;
        background-color:#ccff99;
        position: absolute;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index:999999;
        /* div[class="box"]{ */
        .box{
            width:600px;
            /* height:600px; */
            
            border:5px solid #000;
            /* background-color:#ffb90f; */
        
            /* display:flex; */
            /* flex-direction:column; */
            /* >div:nth-child(1){ */
            .first{
                height:100px;
                width:100%;
                line-height:100px;
                background-color:#cc99ff;
                font-size:60px;
                text-align:center;
                color:#000
            }
            /* p:nth-of-type(1){
                width:100%;
                height:100px;
                background-color:#ccc;
                label{
                    background-color:#00ffff;
                    color:#000;
                    height:20px;
                    font-size:20px;
                }
                #title{
                    width:100%;
                    height:50px;
                    background-color:#fff;
                }
            } */
            /* p:nth-of-type(1){ */
            .second{
                width:100%;
                height:100px;
                .titleContent{
                    font-size:30px;
                    width:100%;
                }
                .titleComments{
                    height:50px;
                    width:100%;
                    font-size:20px;
                    background-color:#fff;
                }
            }
            .third{
                width:100%;
                height:320px;
                /* height:360px; */
                /* height:480px; */
                /* background-color:#647927; */
                .content{
                    /* background-color:#00ffff; */
                    color:#000;
                    font-size:30px;
                    width:100%;
                }
                .comments{
                    height:280px;
                    width:100%;
                    resize: none;
                    font-size:20px;
                    background-color:#fff;
                }
            }
            /* >div:nth-of-type(2){ */
            .btn{
                /* flex:1; */
                width:100%;
                height:80px;
                background-color:#ccffcc;
                display:flex;
                justify-content:space-around;
                align-items:center;
                .publish,
                .cancel{
                    width:80px;
                    height:40px;
                    font-size:26px;
                    font-weight:bold;
                    background-color:#ff396f;
                    cursor: pointer;
                }
            }
            div:nth-child(4){
                margin-bottom: 0;
            }
        } 
`

export  default DialogWrapper
