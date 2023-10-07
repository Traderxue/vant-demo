import { defineStore } from "pinia";
import {getKline} from "@/api/okx.js"
import { ref } from "vue";

export const useOkxStore = defineStore('okx',()=>{
    const k_date = ref([])
    const k_price = ref([])
    const getKlineData = async (time)=>{
        const {data:res} = await getKline(time)
        res.data.forEach(item=>{
            k_date.value.push(item[0])
            k_price.value.push(parseFloat(item[1],parseFloat(item[4]),parseFloat(item[3]),parseFloat(item[2])))
        })
    }
    return {
        getKlineData,
        k_date,
        k_price
    }
})