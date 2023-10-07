
<script setup>
import { ref } from "vue";
import { showToast } from 'vant';

const onChange = (index) => {

};

const active = ref(0);

</script>

<template>
    <div>
    <router-view/>
    <van-tabbar v-model="active" active-color="#276AF5" route @change="onChange"> 
        <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o" to="/market">市场</van-tabbar-item>
        <van-tabbar-item icon="paid" to="/wallet">钱包</van-tabbar-item>
        <van-tabbar-item icon="manager-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>


<style scoped>
.van-tabbar{
    height: 70px;
    background: #08162D;
    color: #f5f5f5;
}
.van-tabbar-item{
    color: #808793;
}
.van-tabbar-item--active{
    background: #08162D;
}
</style>