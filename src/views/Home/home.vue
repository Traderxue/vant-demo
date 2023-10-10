<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router'
import i18n from "@/i18n/index";


const router = useRouter()

const onClickLeft =()=>{

}

const onClickRight =()=>{

}

const categorys = ref([
    {
        type:"BTC/USDT",
        price:"29846",
        parsent:"+1.6%"
    },
    {
        type:"ETH/USDT",
        price:"1846",
        parsent:"+0.14%"
    },
    {
        type:"SOL/USDT",
        price:"24.6",
        parsent:"+3.5%"
    },
    {
        type:"DOGE/USDT",
        price:"0.076",
        parsent:"+2.4%"
    }
])
const images = ref([
      'http://127.0.0.1:5173/banner1.png',
      'http://127.0.0.1:5173/banner2.png',
    ]);



const toTrade = (item)=>{
    router.push({
        path:"/trade",
        query:{
            type:item.type,
            price:item.price,
            parsent:item.parsent
        }
    })
}

const show = ref(false);

const toMarket =()=>{
    router.push({
        path:'/market'
    })
}

const toChongzhi = ()=>{
    router.push({
        path:'/chongzhi'
    })
}

const switchLanguage = (lang)=>{
    i18n.global.locale = lang;
}


    const showPopup = () => {
      show.value = true;
    };
</script>

<template>
    <div class="container">
        <div class="headerbox">
            <div class="header">
                <span class="material-symbols-outlined" @click="showPopup">
                menu
                </span>

                <van-popup
                    v-model:show="show"
                    position="left"
                    :style="{ width: '40%', height: '100%' }"
                    >
                    <div style="color: black;">内容</div>
                </van-popup>
                <el-dropdown>
                    <span class="material-symbols-outlined language">
                        public
                    </span>
                <template #dropdown>
                    <el-dropdown-menu>
                    <el-dropdown-item @click="switchLanguage('zh')">中文简体</el-dropdown-item>
                    <el-dropdown-item @click="switchLanguage('zh_hk')">中文繁体</el-dropdown-item>
                    <el-dropdown-item @click="switchLanguage('en')">English</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
                </el-dropdown>
            </div>
            <div class="hedaer_con">
                <span>{{$t('home.assets')}}</span>
                <p>86462.21<span>≈946423.20USD</span></p>
            </div>
        </div>
        <div class="swap">
            <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="(image,index) in images" :key="index">
                <img :src="image" />
            </van-swipe-item>
            </van-swipe>
        </div>
        <div class="notice">
            <van-notice-bar
                color="#f5f5f5" 
                background="#08162D"
                left-icon="volume-o"
                text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
                />
        </div>
        <div class="grid">
            <div @click="toChongzhi">
                <img src="@/assets/img/icon1.png" alt="">
                <p>{{$t('home.Charge')}}</p>
            </div>
            <div @click="toChongzhi">
                <img src="@/assets/img/icon2.png" alt="">
                <p>{{$t('home.Charge')}}</p>
            </div>
            <div @click="toChongzhi">
                <img src="@/assets/img/icon3.png" alt="">
                <p>{{$t('home.Charge')}}</p>
            </div>
            <div @click="toChongzhi">
                <img src="@/assets/img/icon4.png" alt="">
                <p>{{$t('home.Charge')}}</p>
            </div>
        </div>
        <h3>{{$t('home.quantity')}}</h3>
        <div class="robot">
            <div @click="toMarket">
                <span>25.00</span>
                <p>Monthly Interest Rate</p>
                <span>BNB</span>
            </div>
            <div @click="toMarket">
                <span>25.00</span>
                <p>Monthly Interest Rate</p>
                <span>BNB</span>
            </div>
        </div>
        <h3>{{$t('home.trend')}}</h3>
        <div class="trend">
            <div>
                <van-row>
                <van-col span="8">种类</van-col>
                <van-col span="8">价格</van-col>
                <van-col span="8">涨跌幅</van-col>
                </van-row>
            </div>
            <div @click="toTrade(item)" v-for="(item,index) in categorys" :key="index">
                <van-row>
                <van-col span="8">{{item.type}}</van-col>
                <van-col span="8">{{item.price}}</van-col>
                <van-col span="8">
                    <button>{{item.price}}</button>
                </van-col>
                </van-row>
            </div>
        </div>
    </div>
   
</template>

<style scoped lang="scss">
.container{
    background: #08162D;
    width: auto;
    height: auto;
    padding: 15px 15px 70px 15px;
    .header{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 600;
        span{
            cursor: pointer;
        }
    .language{
        color: #f5f5f5; 
        }
    }
    .headerbox{
        color: #f5f5f5;
        width: auto;
        height: 180px;
        background: #296DF1;
        margin: -15px;
        padding: 15px;
        border-radius: 0px 0px 35px 35px;
    }
    .hedaer_con{
        font-weight: 600;
        margin-top: 40px;
        span{
            font-size: 16px;
        }
        p{
            font-size: 20px;
            padding-top: 10px;
        }
    }
    .swap{
        width: 90%;
        height: 140px;
        margin: 0 auto;;
        background: skyblue;
        margin-top: -50px;
        border-radius: 5px;
        overflow: hidden;
        img{
            width: 100%;
            height: 140px;
        }
    }
    .notice{
        margin-top: 15px;
    }
    .grid{
        width: auto;
        height: 73px;
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
        color: #f5f5f5;
        font-size: 14px;
        div{
            text-align: center;
        }
    }
    h3{
        color: #f5f5f5;
        font-size: 16px;
        margin: 10px 0px;
    }
    .robot{
        width: auto;
        height: 120px;
        display: flex;
        justify-content: space-around;
        div{
            width: 45%;
            height: 120px;
            background: #172439;
            border-radius: 15px;
            box-sizing: border-box;
            padding: 20px 15px;
            span{
                font-size: 16px;
                font-weight: 600;
                color: #f5f5f5;
            }
            p{
                font-size: 12px;
                font-weight: 600;
                color: #5F6E87;
                margin: 10px 0px;
            }
        }
    }
    .trend{
        width: auto;
        height: auto;
        text-align: center;
        color: #f5f5f5;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        div{
            margin: 5px 0px;
            button{
                width: 70px;
                height: 35px;
                border: 0;
                border-radius: 3px;
                background: #07C160;
            }
            .van-col{
                line-height: 35px;
            }
        }
    }
}
:focus{
    outline: none;
}

</style>