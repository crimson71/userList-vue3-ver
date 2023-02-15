<template>
  <div >
    <button @click="goBack" class="goback">后退</button>
    {{id}}
  </div>
</template>

<script>
import bus from '../eventBus.js'
export default {
props:['id'],
data() {
  return {
    userList:[],
    
  }
},
methods:{
  goBack() {
    this.$router.go(-1)
  }
},
created() {
  bus.on('sendUsers',(data) => {
    // this.userList = data
    // let id = parseInt(this.id)
    // const result =this.userList.filter(x => x.id === id)
    // this.userList = result
    // console.log(this.userList);
    console.log(data);

  })
 
   

},
created() {
  

}
}
</script>

<style lang="less" scoped>
.goback {
  float: left;
  border: 0;
}

</style>