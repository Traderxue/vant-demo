<script setup>
import { onMounted, ref } from "vue";
import {init,registerLocale } from 'klinecharts'
import dataList from "@/myData.js";

let klineCharts
let paneId

const theme = ref('dark')

const option = {
  grid: {
    show: true,
    horizontal: {
      show: false,
      size:1,
      color: '#333',
      style: 'solid',
    },
    vertical: {
      show: false,
      size: 1,
      color: '#333',
      style: 'solid',
    }
  },
  separator: {
    size: 1,
    color: '#6E7888',
    fill: true,
    activeBackgroundColor: 'rgba(230, 230, 230, .15)'
  },
  xAxis: {
    show: true,
    size: 'auto',
    // x轴线
    axisLine: {
      show: true,
      color: '#6E7888',
      size: 1
    },
    // x轴分割文字
    tickText: {
      show: true,
      color: '#6E7888',
      family: 'Helvetica Neue',
      weight: 'normal',
      size: 12,
      marginStart: 4,
      marginEnd: 4
    },
  },
  yAxis: {
    show: true,
    size: 'auto',
    // 'left' | 'right'
    position: 'right',
    // 'normal' | 'percentage' | 'log'
    type: 'normal',
    inside: false,
    reverse: false,
    // y轴线
    axisLine: {
      show: true,
      color: '#6E7888',
      size: 1
    },
  }
}


const chartTypes =  [
        { key: "candle_solid", text: "k线图" },
          { key: "area", text: "分时图" },
        ]

registerLocale("zh-HK", {
  time: "時間：",
  open: "開：",
  high: "高：",
  low: "低：",
  close: "收：",
  volume: "成交量：",
});

const mainIndicators = ["MA", "EMA", "SAR"]
const subIndicators =  ["VOL", "MACD", "KDJ"]

const isActive = ref(false)

const addActive = ()=>{
  isActive.value = !isActive.value
}

const drawChart = ()=>{
  klineCharts = init('chart-type-k-line')
  klineCharts.applyNewData(dataList)
  paneId = klineCharts.createIndicator("VOL");
  klineCharts.setStyles(option)
}


const setTheme = (nowTheme)=>{
  theme.value = nowTheme
  klineCharts.setStyles(theme);
}

const setChartType = (type)=>{
  klineCharts.setStyles({
    candle: {
        type,
      },
  })
}

const setLanguage = (language)=>{
  klineCharts.setLocale(language)
}

const setMainIndicator = (name)=>{
  klineCharts.createIndicator(name, false, { id: "candle_pane" });
  addActive()
}

const setSubIndicator = (name)=>{
  klineCharts.createIndicator(name, false, { id: paneId })
}


onMounted(()=>{
  drawChart()

})


const props = defineProps(['time'])
</script>



<template>
    <div class="container">
      <div id="chart-type-k-line" class="k-line-chart"  :style="{ backgroundColor: theme === 'dark' ? '#08162D' : '' }"/>
      <div class="nav">
        <span
          v-for="{ key, text } in chartTypes"
          :key="key"
          @click="setChartType(key)"
        >
        {{ text }}
        </span>
        <span @click="setTheme('dark')" >深色</span>
        <span @click="setTheme('light')" >浅色</span>
        <span @click="setLanguage('zh-CN')" >简体中文</span>
        <span @click="setLanguage('zh-HK')" >繁體中文</span>
        <span @click="setLanguage('en-US')" >English</span>
        <span v-for="(type,index) in mainIndicators" :key="index"
        :class="isActive?'active':''"
          @click="setMainIndicator(type)">
        {{ type }}
        </span>
        <span v-for="(type,index) in subIndicators" :key="index"
        @click="setSubIndicator(type)">
        {{ type }}
        </span>
      </div>
      <div class="btn">
        <button class="buy">买入</button>
        <button class="sell">卖出</button>
      </div>
    </div>
</template>



<style lang="scss" scoped>
.container{
  padding-bottom: 60px;
  .k-line-chart{
    width: 100%;
    height: 470px;
    padding: 10px 0px;
  }
  .nav{
    width: 100%;
    padding: 30px 0px;
    height: auto;
    background: #08162D;
    color: #f5f5f5;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    span{
      padding: 5px 10px;
      cursor: pointer;
    }
  }
  .btn{
    width: 100%;
    height: 60px;
    background: #08162D;
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 15px;
    left: 0;
    button{
      width: 120px;
      height:40px;
      border: 0;
      border-radius: 5px;
    }
    .buy{
        background: #1CAD90;
        color: #fff;
      }
      .sell{
        background: #CD4E65;
        color: #fff;
      }
  }
}
.active{
  color: #187DDE;
}
</style>
