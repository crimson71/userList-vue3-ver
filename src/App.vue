<template>
  <div>
    
  <router-view></router-view>

  </div>
   
  
  
</template>

<script>
import MyLogin from './components/MyLogin.vue'
export default {
  name:'MyApp',
  components:{
    MyLogin

  }

}
</script>

<style>

</style>