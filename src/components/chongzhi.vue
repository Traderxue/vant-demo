<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

const router = useRouter()

const goBack = () => {
    router.back()
}

const show = ref(false);
const fieldValue = ref('');
const cascaderValue = ref('');
const options = [
    {
        text: 'BTC',
        value: 'btc',
    },
    {
        text: 'ETH',
        value: 'eth',
    },
    {
        text: 'USDT',
        value: 'usdt'
    }
];
const onFinish = ({ selectedOptions }) => {
    show.value = false;
    fieldValue.value = selectedOptions.map((option) => option.text).join('/');
};

const active = ref(0);

const copy = () => {
    const address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // 从您的数据源获取地址
    const textArea = document.createElement("textarea");
    textArea.value = address;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showToast('复制成功');
}

const qrCodeImageUrl = ref('../../public/ewm.png')
</script>

<template>
    <div class="container">
        <div class="header">
            <span class="material-symbols-outlined" @click="goBack">
            chevron_left
            </span>
            <p>充值</p>
        </div>
        <h3>充值</h3>
        <div>
            <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="种类"
            placeholder="请选择所充值的种类"
            @click="show = true"
            />
            <van-popup v-model:show="show" round position="bottom">
            <van-cascader
                v-model="cascaderValue"
                title="种类"
                :options="options"
                @close="show = false"
                @finish="onFinish"
            />
            </van-popup>
        </div>
        <p class="l_name">链名称</p>
        <div class="name">
            <van-tabs v-model:active="active">
            <van-tab title="ERC20">
                <div class="address_div">
                    <img :src="qrCodeImageUrl" alt="">
                    <a :href="qrCodeImageUrl" download>保存二维码</a>
                    <p class="address">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</p>
                    <span @click="copy">复制地址</span>
                </div>
            </van-tab>
            <van-tab title="TRC20">
                <div class="address_div">
                    <img :src="qrCodeImageUrl" alt="">
                    <a :href="qrCodeImageUrl" download>保存二维码</a>
                    <p class="address">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</p>
                    <span @click="copy">复制地址</span>
                </div>
            </van-tab>
            <van-tab title="HECO">
                <div class="address_div">
                    <img :src="qrCodeImageUrl" alt="">
                    <a :href="qrCodeImageUrl" download>保存二维码</a>
                    <p class="address">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</p>
                    <span @click="copy">复制地址</span>
                </div>
            </van-tab>
            <van-tab title="BNB">
                <div class="address_div">
                    <img :src="qrCodeImageUrl" alt="">
                    <a :href="qrCodeImageUrl" download>保存二维码</a>
                    <p class="address">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</p>
                    <span @click="copy">复制地址</span>
                </div>
            </van-tab>
            </van-tabs>           
        </div>
    </div>
</template>

<style lang="scss" scoped>
:deep(.van-tabs__line){
    display: none;
}
:deep(.van-tab--active){
    color: #1989FA;
    font-weight: 600;
}
.container{
    width: auto;
    height: 100%;
    padding: 15px;
    .header{
        height: 30px;
        width: auto;
        text-align: center;
        position: relative;
        font-size: 18px;
        p{
            line-height: 30px;
            font-weight: 600;
        }
        span{
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 40px;
            cursor: pointer;
        }
    }
    h3{
        font-size: 18px;
        margin: 15px ;
    }
    .l_name{
        padding: 15px;
        font-size: 14px;
        font-weight: 600;
    }
    .address_div{
        width: auto;
        height: 300px;
        box-sizing: border-box;
        padding: 15px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        img{
            width: 200px;
            height: 200px;
            padding-bottom:10px ;
        }
        .address{
            font-size: 14px;
            padding: 15px 0px;
        }
        span{
            font-size: 16px;
            color: #1989FA;
            cursor: pointer;
        }
        a{
            font-size: 16px;
            color: #1989FA;
            cursor: pointer;
        }

    }
}

</style>