<template>
    <div class="container">
        <div class="header">
            <p>我的</p>
            <span class="material-symbols-outlined">
            notifications
            </span>
        </div>
        <div class="banner">
            <div class="top">
                <p class="p1">白银 </p>
                
                <span class="span1">当前等级</span>
                <span class="material-symbols-outlined span1">
                workspace_premium
                </span>
                <br>
                <p class="p2">7/50 900/5000</p>
                <span class="span2">下一级 黄金</span>
                <span class="material-symbols-outlined span2">
                social_leaderboard
                </span>
            </div>
            <div class="bottom">
                <div>
                    <span>总收益(USDT)</span>
                    <p>7712220.13</p>
                    <span>≈ $ 467494263</span>
                </div>
                <div>
                    <span>今日收益(USDT)</span>
                    <p>7712220.13</p>
                    <span>≈ $ 467494263</span>
                </div>
            </div>
        </div>
        <div class="invite">
            <div>
                <p>7</p>
                <span>邀请人数</span>
            </div>
            <div>
                <p>5</p>
                <span>团队人数</span>
            </div>
            <div>
                <p>0</p>
                <span>今日新增</span>
            </div>
        </div>
        <div class="team">
            <div class="box">
                <p>团队</p>
                <div>
                    <span>7 </span>
                    <span class="material-symbols-outlined">
                    chevron_right
                    </span>
                </div>
            </div>
            <div class="box">
                <p>委托收益</p>
                <div>
                    <span>7545.51</span>
                    <span class="material-symbols-outlined">
                    chevron_right
                    </span>
                </div>
            </div>
            <div class="box">
                <p>佣金收益</p>
                <div>
                    <span>3462.1</span>
                    <span class="material-symbols-outlined">
                    chevron_right
                    </span>
                </div>
            </div>
            <div class="box">
                <p>排行榜</p>
                <div>
                    <span></span>
                    <span class="material-symbols-outlined">
                    chevron_right
                    </span>
                </div>
            </div>
        </div>
            <button>邀请好友</button>
    </div>
</template>


<style lang="scss" scoped>
    .container{
        width: auto;
        height: 100vh;
        background: #08162D;
        padding: 15px;
        .header{
            width: auto;
            height: 30px;
            text-align: center;
            position: relative;
            color: #f5f5f5;
            p{
                line-height: 30px;
            }
            span{
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .banner{
            margin-top: 20px;
            width: auto;
            height: 220px;
            box-sizing: border-box;
            padding: 15px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            background: linear-gradient(to right bottom,#203141,#0F1C32);
            border-radius: 5px;
            .top{
                .p1{
                    font-size: 16px;
                    color: #f5f5f5;
                    display: inline-block;
                    margin-right: 10px;
                    margin-bottom: 15px;
                }
                .p2{
                    font-size: 16px;
                    color: #f5f5f5;
                    display: inline-block;
                    margin-right: 10px;
                }
                .span1{
                    color: #647289;
                    font-size: 14px;
                    margin-right: 5px;
                }
                .span2{
                    color: #647289;
                    font-size: 14px;
                    margin-right: 10px;
                }
            }
            .bottom{
                display: flex;
                justify-content: space-around;
                div{
                    width: 50%;
                    span{
                        font-size: 12px;
                        color: #647289;
                    }
                    p{
                        font-size: 16px;
                        color: #f5f5f5;
                        margin: 10px 0px;
                    }
                }
            }
        }
        .invite{
            width: auto;
            height: 60px;
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            div{
                box-sizing: border-box;
                padding: 8px 0px;
                text-align: center;
                font-size: 14px;
                background: #17253A;
                width: 30%;
                height: 60px;
                border-radius: 5px;
                p{
                    color: #1A54E9;
                    margin: 2px 0px;
                }
                span{
                    color: #647289;
                }
            }
        }
        .team{
            width: auto;
            height: auto;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            .box{
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 24px;
                padding: 15px 0px 10px 0px;
                border-bottom: 1px solid gray;
                p{
                    font-size: 14px;
                    color: #f5f5f5;
                }
                span{
                    line-height: 24px;
                    color: #647289;
                    margin-right: 5px;
                }
                div{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            }
        }
        button{
            width: 100%;
            height: 40px;
            border-radius: 40px;
            margin: 30px auto;
            border: 0;
            background: #276AF5;
            color: #f5f5f5;
            font-size: 14px;
            font-weight: 600;
        }
    }
</style>