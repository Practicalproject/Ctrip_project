<template>
  <div class="container">
    <!-- 左侧图片 -->
    <div class="leftImg"></div>
    <!-- 主体 -->
    <div class="contain">
      <!-- 城市 -->
      <div class="city">
        <i class="iconfont icon-location"></i>
        <p>北京</p>
        <i class="right iconfont icon-down-"></i>
        <div class="locate"></div>
      </div>

      <!-- 输入框 -->
      <div class="inputBox">
        <input class="input" type="text" placeholder="请输入内容" />
        <button class="btn">
          <i class="iconfont icon-fangdajing"></i>
          搜索
        </button>
      </div>
    </div>
    <!-- 右侧图片 -->
    <div class="rightImg"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang='less' scoped>
.container {
  width: 1180px;
  margin: 10px auto;
  height: 50px;
  position: relative;
  .leftImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 252px;
    height: 51px;
    left: 0;
    bottom: 0;
    display: inline-block;
    background: url(https://pages.c-ctrip.com/ticket/online/index/title_bgL.png);
  }
  .contain {
    margin: 0 auto;
    vertical-align: top;
    position: absolute;
    left: 210px;
    z-index: 2;
    .city {
      width: 150px;
      padding: 0 12px;
      height: 38px;
      background-color: rgb(249, 249, 249);
      border: 1px solid #ddd;
      border-radius: 10px;
      display: inline-block;
      margin: 5px;
      line-height: 38px;
      position: relative;
      p {
        font-size: 18px;
        display: inline-block;
        margin-left: 5px;
      }
      .right {
        float: right;
      }
      .locate {
        width: 200px;
        height: 200px;
        position: absolute;
        top: 45px;
        left: 0;
        background-color: yellowgreen;
        display: none;
      }
    }
    .inputBox {
      display: inline-block;
      vertical-align: top;
      .input {
        font-size: 16px;
        text-indent: 10px;
        width: 430px;
        height: 40px;
        line-height: 40px;
        margin-top: 5px;
        border: 3px solid orange;
        box-sizing: border-box;
        border-radius: 10px 0 0 10px;
      }
      .btn {
        width: 120px;
        height: 40px;
        vertical-align: top;
        margin-top: 5px;
        background-color: orange;
        border: none;
        font-size: 16px;
        border-radius: 0 10px 10px 0;
        text-align: center;
      }
    }
  }

  .rightImg {
    position: absolute;
    right: 0;
    top: 0;
    width: 251px;
    height: 48px;
    background: url(https://pages.c-ctrip.com/ticket/online/index/title_bgR.png);
  }
}
</style>
