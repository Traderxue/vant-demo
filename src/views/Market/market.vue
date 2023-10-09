<script setup>
  import { ref } from "vue";

  const activeKey = ref(0); // 默认选中项
    const menuItems = [
      { key: 'btc', title: 'BTC' },
      { key: 'eth', title: 'ETH' },
      { key: 'usdt', title: 'USDT' },
      { key: 'sol', title: 'SOL' },
      { key: 'doge', title: 'DOGE' },
      { key: 'dot', title: 'DOT' },
      { key: 'ape', title: 'APE' },
      { key: 'atom', title: 'ATOM' },
    ];

    const onChange = (key) => {
      // 处理侧边导航切换选项的逻辑
      activeKey.value = key;
      // 在这里你可以根据选中的 key 做相应的操作
    };
</script>

<template>
    <div class="container">
        <div class="left">
            <van-sidebar v-model="activeKey" :value="activeKey" @change="onChange">
                <van-sidebar-item :title="item.title" :key="item.key" v-for="item in menuItems" />
            </van-sidebar>
        </div>
      <!-- 在这里显示侧边导航选中的内容 -->
        <div class="right">
            <div class="content">
                <div>
                    <p class="p1">{{menuItems[activeKey].title}}(1天-机器人)</p>
                    <p class="p2"><span>委托金额</span> 25.00</p>
                    <p class="p3">5%</p>
                    <span class="span1">月收益率</span>
                    <button>投</button>
                </div>
                <div>
                    <p class="p1">{{menuItems[activeKey].title}}(5天-机器人)</p>
                    <p class="p2"><span>委托金额</span> 500.00</p>
                    <p class="p3">10%</p>
                    <span class="span1">月收益率</span>
                    <button>投</button>
                </div>
                <div>
                    <p class="p1">{{menuItems[activeKey].title}}(15天-机器人)</p>
                    <p class="p2"><span>委托金额</span> 1500.00</p>
                    <p class="p3">15%</p>
                    <span class="span1">月收益率</span>
                    <button>投</button>
                </div>
                <div>
                    <p class="p1">{{menuItems[activeKey].title}}(30天-机器人)</p>
                    <p class="p2"><span>委托金额</span> 3000.00</p>
                    <p class="p3">25%</p>
                    <span class="span1">月收益率</span>
                    <button>投</button>
                </div>
                <div>
                    <p class="p1">BNB(90天-机器人)</p>
                    <p class="p2"><span>委托金额</span> 5000.00</p>
                    <p class="p3">50%</p>
                    <span class="span1">月收益率</span>
                    <button>投</button>
                </div>
            </div>
        </div>
    </div>
  </template>

<style scoped lang="scss">
/* 添加一些样式以控制侧边导航和内容区域的布局 */
.content {
  padding: 20px;
}
.van-sidebar{
    height: 100%;
}
.container{
    height: 100vh;
    display: flex;
    justify-content: space-between;
    .left{
        width: 80px;
    }
    .right{
        width: 100%;
        background: #08162D;
    }
}
.content{
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div{
        width: auto;
        height: 120px;
        background: #17243A;
        margin: 15px 0px;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 15px;
        position: relative;
        p{
            margin: 4px 0px;
        }
        .p1{
        font-size: 12px;
        color: #f5f5f5;
        // color: #707784;
        }
        .p2{
            font-size: 18px;
            color: #f5f5f5;
            span{
                font-size: 12px;
                color: #707784;
            }
        }
        .p3{
            font-size: 18px;
            color: #1F5DE8;
        }
        .span1{
            color: #707784;
            font-size: 12px;
        }
        button{
            position:absolute;
            right: 20px;
            bottom: 15px;
            width: 50px;
            height: 30px;
            border: 0;
            border-radius: 3px;
            background: #2063FC;
            color: #f5f5f5;
        }
    }



}
.van-sidebar{
    background: #17243A;
    .van-sidebar-item{
        background: #17243A;
        color: #f5f5f5;
    }
}
</style>