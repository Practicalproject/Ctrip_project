<template>
  <div class="mainContainer">
    <!-- 搜索区域 -->
    <SearchContainer></SearchContainer>
    <!-- 地区选择与轮播图 -->
    <BaseTop></BaseTop>

    <!-- 地区旅游点 -->
    <!-- <LocalPro></LocalPro> -->
    <!-- <AroundPro></AroundPro> -->

    <!-- 优势 -->
    <!-- <Avantage></Avantage> -->
    <!-- 广告区 -->
    <!-- <Advertisement></Advertisement> -->
  </div>
</template>

<script>
import SearchContainer from "./SearchContainer";
import BaseTop from "./BaseTop";
import LocalPro from "./LocalPro";
import AroundPro from "./AroundPro";
import Avantage from "./Avantage";
import Advertisement from "./Advertisement";
export default {
  components: {
    SearchContainer,
    BaseTop,
    LocalPro,
    AroundPro,
    Avantage,
    Advertisement,
  },
  name: "tourism",
};
</script>

<style lang="less" scoped>
// #007aff
.mainContainer {
  width: 1180px;
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
          .standing {
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
