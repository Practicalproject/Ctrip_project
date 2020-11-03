<template>
  <div>
    <HotList></HotList>
    <HomeBanner></HomeBanner>
  </div>
</template>

<script>
import HotList from './HotList'
import HomeBanner from'./HomeBanner'
export default {
  name: 'Home',
  components:{
    HotList,
    HomeBanner
  }
}
</script>

<style lang="less" scoped>

</style>
