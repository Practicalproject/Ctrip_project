<template>
  <div class="city_contain">
    <!-- 头部 -->
    <div class="contain_header">
      <div class="contain_divider">
        <h1>玩乐推荐榜</h1>
      </div>
    </div>
    <div class="contain_body">
      <div class="body_item">
        <img src="./images/01.jpg" alt="" />
        <div class="item_pos">
          <h3>苏州</h3>
          <span>相距</span>
          <span>84</span>
          <span>km</span>
        </div>
      </div>
      <div class="body_item">
        <img src="./images/01.jpg" alt="" />
        <div class="item_pos">
          <h3>苏州</h3>
          <span>相距</span>
          <span>84</span>
          <span>km</span>
        </div>
      </div>
      <div class="body_item">
        <img src="./images/01.jpg" alt="" />
        <div class="item_pos">
          <h3>苏州</h3>
          <span>相距</span>
          <span>84</span>
          <span>km</span>
        </div>
      </div>
      <div class="body_item">
        <img src="./images/01.jpg" alt="" />
        <div class="item_pos">
          <h3>苏州</h3>
          <span>相距</span>
          <span>84</span>
          <span>km</span>
        </div>
      </div>
      <div class="body_item">
        <img src="./images/01.jpg" alt="" />
        <div class="item_pos">
          <h3>苏州</h3>
          <span>相距</span>
          <span>84</span>
          <span>km</span>
        </div>
      </div>
      <div class="body_item">
        <img src="./images/01.jpg" alt="" />
        <div class="item_pos">
          <h3>苏州</h3>
          <span>相距</span>
          <span>84</span>
          <span>km</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang='less' scoped>
.city_contain {
  width: 1180px;
  margin: 0 auto;
  // height: 200px;
  // background-color: yellowgreen;
  .contain_header {
    // 头部
    .contain_divider {
      height: 55px;
      color: #00b87a;
      line-height: 55px;
      margin-bottom: 10px;
      h1 {
        font-size: 30px;
        font-weight: 700;
        border-bottom: 3px solid #00b87a;
      }
    }
  }
  .contain_body {
    display: flex;
    justify-content: space-between;
    .body_item {
      position: relative;
      img {
        border-radius: 10px;
        width: 180px;
      }
      .item_pos{
        width: 100%;
        // background-color: red;
        position: absolute;
        bottom:0;
        left: 0;
        padding: 0 10px 10px;
        color: #fff;
        h3{
          font-size: 24px;
          font-weight: 700;
          line-height: 36px;
        }
        span{
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
