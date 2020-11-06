<template>
  <!-- 版心区域 -->
    
  <div class="mainContainer">
    <!-- 头部 -->
    <div class="header">
      <!-- 图片区，城市区 -->
      <div class="header-left">
        <div class="header-url"></div>
        <div class="city-wrap">
          <dt>
            <i class="iconfont icon-zuobiao"></i>
            <e> 北京</e>
            <span>站</span>
            <b class="iconfont icon-arrow-up-bold"></b>
          </dt>
        </div>
      </div>
      <!-- 头部搜索区 -->
      <div class="city-search">
          <!-- 左侧输入区 -->
        <div class="new-search-content">
            <div class="search-left" >

             </div>
          <a class="search-right" href="javascript:;"></a>
        </div>
        <!-- 右侧点击区 -->
        <div class="hot-search-box"></div>
      </div>
    </div>

    <div class="main-content"></div>
  </div>
</template>

<script>
export default {
  name: "tourism",
};
</script>

<style  lang='less' scoped>
// 版心
.mainContainer {
  width: 1180px;
  height: 1180px;

  margin: 0 auto;
  background: white;
  // 头部
  .header {
    width: 1180px;
    height: 46px;
    margin: 0 0 20px;
    padding: 6px 0 0;

    // 头部左侧区域
    .header-left {
      width: 350px;
      height: 40px;
      position: relative;
      float: left;
      padding-left: 94px;
      display: flex;
      // 左侧小飞机图标
      .header-url {
        background-image: url(./images/1.png);
        background-repeat: no-repeat;
        position: absolute;
        width: 170px;
        height: 43px;
        background-position: 0 0;
        top: -3px;
        left: 0;
        display: block;
      }
      // 城市选择区
      .city-wrap {
        width: 176px;
        height: 40px;
        font-size: 12px;
        line-height: 1.5;
        position: absolute;
        top: 0;
        left: 170px;
        // position: relative;
        // width: 90px;
        cursor: pointer;
        dt {
          height: 38px;
          font: 16px/38px microsoft yahei, simsun, sans-serif;
          color: #06c;
          width: 177px;
          padding: 0 34px 0 50px;
          position: relative;
          display: block;
          border: 1px solid #d6d6d6;
          i {
            display: block;
            position: absolute;
            width: 19px;
            height: 17px;
            left: 17px;
          }
          span {
            color: #666;
            font-size: 12px;
            padding-left: 4px;
          }
          b {
            display: inline-block;
            position: absolute;
            width: 8px;
            height: 5px;
            right: 10px;
          }
        }

        // e {
        //   height: 21px;
        //   width: 33px;
        //   color: #06c;
        // }
      }
    }
    .city-search{
      width: 810px;
      height: 40px;
      float: right;
        // .new-search-content{

        // }
    }
  }
}
</style>


