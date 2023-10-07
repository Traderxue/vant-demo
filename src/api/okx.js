import http from '@/http/http.js'

export const getKline =(time)=>{
    return http({
        url:`/kline?time=${time}`
    })
}