<script setup>
import { defineProps, onMounted, ref } from 'vue';
import * as echarts from 'echarts'
import {useOkxStore} from "@/stores/okx.js"

const okxStore = useOkxStore()

const props = defineProps(['time'])

const main  = ref(null)



const option = {
  xAxis: {
    data: okxStore.k_date
  },
  yAxis: {
        scale: true,
        splitArea: {
            show: true
        }
    },
    grid: {
        height: 'auto' // 设置 Y 轴高度自适应
    },
  series: [
    {
      type: 'candlestick',
      data: okxStore.k_price
    }
  ]
};

onMounted(()=>{
    okxStore.getKlineData(props.time)
    if(okxStore.k_date!==''){
    drawChart()
    }
})

const drawChart = ()=>{
    const myChart = echarts.init(main.value)
    option && myChart.setOption(option)
}

</script>

<template>
    <div class="container">
        <div class="main" ref="main" style="width: 390px;height: 500px;">
        </div>
        {{okxStore.k_date}}
        <br>
        {{okxStore.k_price}}
        <div class="btn">
            <button class="buy">买入</button>
            <button class="sell">卖出</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main{
    margin-top: 15px;
}
.btn{
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    bottom: 15px;
    display: flex;
    justify-content: space-around;
    button{
        width: 140px;
        height: 40px;
        border: 0;
        border-radius: 5px;
        color: #f5f5f5;
        font-weight: 600;
    }
    .buy{
        background: #1CAD90;
    }
    .sell{
        background: #CD4E65;
    }
}
</style>