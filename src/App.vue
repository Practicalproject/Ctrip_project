<template>
  <div id="app">
    <Header></Header>
    <Swipper></Swipper> 
    <Wrapper></Wrapper>
    <Falsh></Falsh>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Swipper from '@/components/Swipper'
import Wrapper from '@/components/Wrapper'
import Falsh from '@/components/Falsh'

export default {
  name: 'App',
  components:{
    Header,
    Swipper,
    Wrapper,
    Falsh,
  }
}
</script>

<style>
</style>
