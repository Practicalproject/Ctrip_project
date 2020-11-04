<template>
  <div class="airlineContainer">
    <!-- 广告图start -->
    <div class="ad">
      <img src="./images/ad.png" alt="" />
    </div>
    <!-- 广告图end -->
    <Search></Search>
    <div class="banner w">
      <img src="./images/charter-book.png" alt="">
    </div>
    <!-- 低价推荐 -->
    <Recommend></Recommend>
    <!-- 低价地图 -->
    <Map></Map>
  </div>
</template>

<script>
import Search from './Search'
import Recommend from './Recommend'
import Map from './Map'
export default {
  name: "AirlinePage",
  components:{
    Search,
    Recommend,
    Map
  }
};
</script>

<style lang="less" scoped>
.airlineContainer {
  background-color: #eef1f6;
  .w{
    margin: 0 auto;
    width: 1180px;
  }
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
