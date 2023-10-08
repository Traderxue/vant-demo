<script setup>
 import { init, dispose,registerLocale   } from "klinecharts";
import { defineProps, onMounted, onUpdated, ref } from 'vue';
import {useOkxStore} from "@/stores/okx.js"
import dataList from "@/myData.js"

const okxStore = useOkxStore()

const props = defineProps(['time'])

const main  = ref(null)

const chartOptions = ref({
      // 图表之间的分割线
  separator: {
    size: 1,
    color: '#888888',
    fill: true,
    activeBackgroundColor: 'rgba(230, 230, 230, .15)'
  },
  // 十字光标
  crosshair: {
    show: true,
    // 十字光标水平线及文字
    horizontal: {
      show: true,
      line: {
        show: true,
        // 'solid'|'dashed'
        style: 'dashed',
        dashedValue: [4, 2],
        size: 1,
        color: '#888888'
      },
    }
}
});

let kLineChart

const drawLine = ()=>{
    kLineChart = init("chart-type-k-line",chartOptions)
    kLineChart.applyNewData(dataList)
}

const emaData = ref(['EMA','MACD','MA','MACD','EMA','MACD','MA'])

const chartTypes = ref([
          { key: "candle_solid", text: "k线图" },
          { key: "area", text: "分时图" },
])

const setChartType = (type)=>{
    kLineChart.setStyles({
          candle: {
            type,
          },
        });
}

const choseIndex = ref(0)

const chose = (index)=>{
    choseIndex.value = index
}

const theme = ref('light')

const setTheme = (themeValue) => {
     theme.value = themeValue; // 更新theme变量
     kLineChart.setStyles(themeValue === 'dark' ? { background: '#1f2126' } : {}); // 根据用户选择的主题应用样式
 }



onUpdated(()=>{
})

onMounted(()=>{
    drawLine()

})


</script>

<template>
    <div class="container">
        <div id="chart-type-k-line" class="k-line-chart" :style="{ background: theme === 'dark' ? '#1f2126' : '' }"></div>
        <div class="btn">
        <span v-for="(item,index) in emaData" :key="index" :class="choseIndex===index?'active':''" @click="chose(index)">{{item}}</span>
        <span
          v-for="{ key, text } in chartTypes"
          :key="key"
          v-on:click="setChartType(key)"
        >
          {{ text }}
        </span>
        <span @click="setTheme('dark')">深色</span>
        <span @click="setTheme('light')">浅色</span>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
.container{
    margin-top: 15px;
    width: 100%;
    height: 400px;
    .k-line-chart{
        width: 100%;
        height: 400px;
    }
    .btn{
        margin-top: 15px;
        width: 90%;
        height: 30px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        color: #c8c7c7;
        span{
            display: inline-block;
            padding: 10px;
            text-align: center;
            cursor: pointer;
            font-size: 12px;
        }
    }
    .active{
        color: rgb(24, 125, 222);
    }
}
</style>