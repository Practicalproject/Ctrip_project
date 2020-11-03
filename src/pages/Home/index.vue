<template>
  <div>
    <HotList></HotList>
    <OutHotels></OutHotels>
  </div>
</template>

<script>
import HotList from './HotList'
import OutHotels from './OutHotels'
export default {
  name: 'Home',
  components:{
    HotList,
    OutHotels,
  }
}
</script>

<style lang="less" scoped>

</style>
