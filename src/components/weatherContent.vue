<template>
  <div class="content">
      <swiper ref="mySwiper">
    <swiper-slide v-for="(item,index) in wData" :key="index">
        <div class="detail">
              {{item.date}}
              最低气温: {{item.tmp.min}}
              最高气温: {{item.tmp.max}}
              </div>
        <button @click="delBtn(index)" class="delBtn">删除</button>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
    name:'weatherContent',
    props:{
        weatherData:{
            type:Object,
        }
    },
    data(){
        return {

        }
    },
    mounted(){

    },
    computed:{
        swiper() {
        return this.$refs.mySwiper.$swiper
      },
        wData(){
            return this.weatherData.daily_forecast
        }
    },
    methods:{
        delBtn(index){
            this.$emit('delItem',index)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style:none
    }
    li {
        margin-top:10px;
    }
    .content {
        width:100%;
        height:300px;
    }
    .swiper-container {
        height:100%;
}
    .detail {
        float:left;
    }
    .delBtn {
        float:left;
        margin-left:10px;
        width:40px;
        text-align:center;
    }
</style>