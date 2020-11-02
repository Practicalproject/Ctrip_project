<template>
  <div class="airlineContainer">
    <div class="ad">
      <img src="./images/ad.png" alt="" />
    </div>
    <div class="w">
      <div class="searchBox w">
        <ul class="searchTitle">
          <li class="active">国际/国内机票</li>
          <li>特价机票</li>
          <li>航班动态</li>
          <li>在线选座</li>
          <li>退票改签</li>
          <li>更多服务</li>
        </ul>
        <div class="announcement">
          <span class="icon-warn"></span>
          <div class="title"></div>
          <div class="content"></div>
          <div class="detail"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AirlinePage",
};
</script>

<style lang="less" scoped>
.airlineContainer {
  .w {
    width: 1180px;
    height: 2000px;
    margin: 0 auto;
    background: pink;
  }
  .ad {
    width: 100%;
    height: 260px;
    margin: 0 auto;
    img {
      display: block;
      width: 1920px;
      height: 260px;
      margin: 0 auto;
    }
  }
  .searchBox {
    width: 1180px;
    height: 284px;
    border-radius: 8px 8px 8px 8px;
    margin-bottom: 60px;
    background: blue;
    .searchTitle {
      display: flex;
      border-radius: 8px 8px 0 0;
      background-color: rgba(0, 0, 0, 0.75);
      font-size: 16px;
      height: 48px;
      line-height: 48px;
      font-weight: 600;
      color: #ddd;
      li {
        flex: 1;
        height: 48px;
        line-height: 48px;
        text-align: center;
        &.active {
          color: #333;
          background: #fff;
        }
      }
    }
  }
}
</style>
