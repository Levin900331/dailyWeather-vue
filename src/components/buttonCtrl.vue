<template>
  <div>
      <button @click="change">{{buttonText}}</button>
      <p>{{buttonMsg}}</p>
  </div>
</template>

<script>
export default {
    name:'buttonCtrl',
    inject:['msg'],
    props:{
        buttonText:{
            type:String,
            default:''
        }
    },
    data(){
        return {

        }
    },
    methods:{
        change(){
            this.$emit("changeText",'已修改')
        }
    },
    computed: {
        buttonMsg(){
            return 'hello '+this.msg.text
        },
    },
}
</script>

<style>

</style>