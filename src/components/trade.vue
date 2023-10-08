<script setup>
  import { ref } from "vue";
  import kline from "./kline.vue";


  const onClickLeft = () => history.back();
  const active = ref(0);
</script>

<template>
    <div class="container"> 
        <van-nav-bar
        title="交易"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="banner">
            <div class="top">
                <p>BTC/USDT</p>
                <span>持仓列表</span>
            </div>
            <div class="bottom">
                <div>
                    <p>当前价</p>
                    <span class="span1">27931.14</span>
                </div>
                <div>
                    <p>24H最高</p>
                    <span>34644</span>
                </div>
                <div>
                    <p>24H成交量</p>
                    <span>3464</span>
                </div>
            </div>
        </div>
        <van-tabs v-model:active="active" color="#187DDE" 
        background="#08162D" title-active-color="#187DDE">
            <van-tab title="1M">
                <kline time="1m"/>
            </van-tab>
            <van-tab title="5M">
                <kline time="5m"/>
            </van-tab>
            <van-tab title="15M">
                <kline time="15m"/>
            </van-tab>
            <van-tab title="30M">
                <kline time="30m"/>
            </van-tab>
            <van-tab title="1H">
                <kline time="1h"/>
            </van-tab>
            <van-tab title="4H">
                <kline time="4h"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style scoped lang="scss">
.container{
    width: auto;
    height: 100vh;
    .van-nav-bar{
        background: #08162D;
    }
    .van-ellipsis{
        color: #ffffff !important;
    }
    .van-nav-bar__title{
        color: #ffffff;
    }
    .banner{
        width: auto;
        height: 100px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 15px;

        .top{
            display: flex;
            justify-content: space-between;
            color: #ffffff;
            p{
                font-size: 16px;
                font-weight: 600;
            }
            span{
                 font-size: 14px;
            }
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            div{
                text-align: left;
                p{
                    color: #f5f5f5;
                    font-size: 14px;
                    padding-bottom: 5px;
                }
                span{
                    color: #808793;
                }
                .span1{
                    color: #02C289;
                }
            }
        }
    }
    .van-tabs{
        width: 100%;
    }
}
</style>