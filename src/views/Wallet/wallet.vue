<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const chart = ref(null)

const option = {
    
 
  title:{
    text:"资产分布",
    textStyle:{
    color:'#E1EDDA',
  }, 
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient:'vertical',
    top: '5%',
    left: 'right',
    textStyle:{
    color:'#808793',
    fontWeight:600
  }, 
  },
  series: [
    {
      name: '资产分布',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      center:['30%','50%'],
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'BTC' },
        { value: 735, name: 'ETH' },
        { value: 580, name: 'BNB' },
        { value: 484, name: 'OKX' },
        { value: 300, name: 'USDT' },
        { value: 484, name: 'DOGE' },
        { value: 300, name: 'DOT' },
      ]
    }
  ]
};


onMounted(()=>{
    const myChart = echarts.init(chart.value)
    option && myChart.setOption(option)

    window.addEventListener('resize',()=>{
        myChart.resize()
    })
})
</script>
<template>
    <div class="container">
        <div class="header">
            <div class="top">
                <span class="material-symbols-outlined icon-more">
                more_horiz
                </span>
                <span>总资产</span>
                <span class="material-symbols-outlined icon-eye">
                visibility
                </span>
                <p>34646.41</p>
                <span>≈ $ 861313.13</span>
            </div>
            <div class="bottom">
                <div>
                    <span>余额(USDT)</span>
                    <p>467313.12</p>
                    <span class="span2">≈ $ 864313.13</span>
                </div>
                <div>
                    <span>委托金额(USDT)</span>
                    <p>467313.12</p>
                    <span class="span2">≈ $ 864313.13</span>
                </div>
            </div>
        </div>
        <div class="topup">
            <div>
                <img src="../../assets/img/wallet-icon1.png" alt="">
                <span>充值</span>
            </div>
            <div>
                <img src="../../assets/img/wallet-icon2.png" alt="">
                <span>提现</span>
            </div>
            <div>
                <img src="../../assets/img/wallet-icon3.png" alt="">
                <span>收益</span>
            </div>
        </div>
        <div class="chart" ref="chart">
        </div>
        <h3>可用钱包</h3>
        <div class="canuse">
            <div class="box"> 
                <div>
                    <p>Teher</p>
                    <span>USDT</span>
                </div>
                <div>
                    <P>3923.1</P>
                    <span>$ 3923.1</span>
                </div>
            </div>
            <div class="box"> 
                <div>
                    <p>Bitcoin</p>
                    <span>BTC</span>
                </div>
                <div>
                    <P>3923.1</P>
                    <span>$ 3923.1</span>
                </div>
            </div>
            <div class="box"> 
                <div>
                    <p>Balance</p>
                    <span>BNB</span>
                </div>
                <div>
                    <P>3923.1</P>
                    <span>$ 3923.1</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    width: auto;
    height: 100vh;
    padding: 15px 15px 70px 15px;
    background: #08162D;
    .header{
        width: 100%;
        border-radius: 10px;
        height: 220px;
        background: linear-gradient(to right bottom,#2A3A4D,#101D34);
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        box-sizing: border-box;
        padding: 15px;
        .top{
            position: relative;
            .icon-more{
                position: absolute;
                right: 15px;
            }
            .icon-eye{
                padding-left: 5px;
            }
            span{
                font-size: 14px;
                color: #617089;
            }
            p{
                font-size: 22px;
                color: #FFFFFF;
                margin: 10px 0px;

            }
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            div{
                width: 50%;
                span{
                    color: #617089;
                    font-size: 14px;
                }
                p{
                    font-size: 14px;
                    margin: 5px 0px;
                    color: #FFFFFF;
                }
                .span2{
                    font-size: 14px;
                    color: #43845D;
                }
            }
        }
    }
    .topup{
        margin: 15px 0px;
        width: auto;
        height: 35px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        div{
            img{
                vertical-align: middle;
            }
            span{
                padding-left: 5px;
                font-size: 14px;
                color: #655553;
            }
        }
    }
    .chart{
        width:95%;
        height: 200px;
        color: #FFFFFF;
    }
    h3{
        color: #FFFFFF;
        margin: 15px 0px;
    }
    .canuse{
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0px 15px;
        .box{
            height: 60px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            div{
                margin: 5px 0px;
                p{
                    color: #E1EDDA;
                    margin-bottom: 5px;
                    font-size: 14px;
                }
                span{
                    color: #808793;
                    font-size: 12px;
                }

            }
        }
    }
}
</style>