<template>
  <div class="airlineContainer">
    <!-- 广告图start -->
    <div class="ad">
      <img src="./images/ad.png" alt="" />
    </div>
    <!-- 广告图end -->
    <Search></Search>
  </div>
</template>

<script>
import Search from './Search'
export default {
  name: "AirlinePage",
  components:{
    Search
  }
};
</script>

<style lang="less" scoped>
.airlineContainer {
  width: 100%;
  overflow: hidden;
  // 广告图区域start
  .ad {
    width: 1920px;
    height: 260px;
    margin: 0 auto;
    img {
      display: block;
      width: 100%;
      height: 260px;
      margin: 0 auto;
    }
  }
  // 广告图区域end
}
</style>
