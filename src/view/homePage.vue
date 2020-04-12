<template>
    <div>
        <input type="text" v-model="city">
        <br>
        <!-- <buttonCtrl :buttonText="text" @changeText="change"></buttonCtrl> -->
        <button @click="getWeather">天气查询</button>
        <weatherContent :weatherData="weatherData" @delItem="deleteItem"></weatherContent>
    </div>
</template>

<script>
import buttonCtrl from '../components/buttonCtrl.vue'
import weatherContent from '../components/weatherContent.vue'
export default {
    components:{
        buttonCtrl,
        weatherContent
    },
    provide(){
        return {
            msg:this.provideMsg
        }
    },
    created(){
        setTimeout(()=>{
            this.provideMsg.text="new provide test";
        },1000)
    },
    mounted(){
        // this.getData();
    },
    data(){
        return {
            text:'输入',
            provideMsg:{
                text:"provide test"
            },
            city:'',
            weatherData:{},
        }
    },
    methods:{
        change(data){
            this.name=data;
        },
        getData(){
            this.$http({
                url:'/api?city=beijing&appkey=221920940bdd273994af2c694b58ea56',
                method:'get'
            }).then(data=>{
                console.log(data)
            })
        },
        async getWeather(){
           let res = await this.$http({
                url:`/api?city=${this.city}&appkey=221920940bdd273994af2c694b58ea56`,
                method:'get'
            })

            if(res.data.code==="10000"){
                this.weatherData = res.data.result.HeWeather5[0];
                console.log(this.weatherData)
            }
        },
        deleteItem(index){
            this.weatherData.daily_forecast.splice(index,1)
        }
    }
}
</script>

<style>

</style>

