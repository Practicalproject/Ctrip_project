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
        <div class="searchcontainer">
          <div class="downmore">
            <a class="down-more" href="javascript:;">全部产品</a>
            <i class="iconfont icon-down-copy"></i>
          </div>
          <div class="input-box">
            <input type="text" placeholder="请输入目的地、主题或关键字" />
          </div>
          <div class="searchbtn">
            <i class="iconfont icon-fangdajing"></i>
            <a href="javascript：;">搜索</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="main-content"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
        background-image: url(../images/1.png);
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

    // 右侧搜索区域
    .city-search {
      width: 810px;
      height: 40px;
      float: right;
      display: flex;
      
      .searchcontainer {
        width: 520px;
        display: flex;
        border: 3px solid #fe9813;
        border-radius: 0 5px 5px 0;
        .downmore {
          width: 117px;
          height: 35px;
          color: #333;
          line-height: 33px;
          padding: 0 0 0 10px;
          background-color: #fff8d5;
          border: 1px solid #fe9813;
          font-weight: 400;
          position: relative;
          a {
            line-height: 15px;
            font-size: 14px;
            color: #333;
          }
          i{
            widows: 18px;
            height: 18px;
            position: absolute;
            right: 10px;
            color:#fe9813;
          }
        }
        .input-box {
          width: 260px;
          height: 33px;
          input {
            width: 100%;
            height: 100%;
            font-size: 16px;
            padding: 3px;
            border: none;
          }
        }
        .searchbtn {
          width: 135px;
          height: 37px;
          line-height: 40px;
          background: #fe9813;
          margin-top: -3px;
          margin-left: 3px;
          border-radius: 0 5px 0 0;
          padding:0 0 0 20px;
          a{
            line-height: 40px;
            width: 100%;
            height: 100%;
            font-size: 18px;
            color: white;
          }
          i{
            color: white;
            width: 17px;
            height: 17px;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>


