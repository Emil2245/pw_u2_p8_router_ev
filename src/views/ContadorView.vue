<template>
  <div>
    <!-- directiva v-bind es con ':' -->
    <Contador title="1" v-bind:value="1+1"/>
    <Contador title="2" :value="8+numero"/>
    <!-- Error por la validacion -->
    <!-- <Contador title="2" :value="-1"/> -->
    <Contador title="3" value="5"/>
    <Contador title="3" :value="metodo1()"/>
    <!-- Default -->
    <Contador title="4" />
  </div>
</template>

<script>
import Contador from '@/components/Contador.vue'
export default {
  components: {
    Contador,
  },
   data(){
    return {
      numero:10,
    }
   },
   methods: {
    metodo1(){
      return 6;
    },
   }

}
</script>

<style></style>