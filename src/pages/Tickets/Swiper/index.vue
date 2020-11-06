<template>
  <div class="container">
    <!-- 左侧 -->
    <div class="leftBox">
      <!-- 上方 -->
      <div class="left_top">
        <!-- 标题 -->
        <div class="top_header">
          <i class="iconfont icon-3-psjnt"></i>
          <div class="top_header_title">热门酒店</div>
        </div>
        <!-- 内容 -->
        <div class="top_title">
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span>
            <a href="javascript:;">快乐船长</a>
          </span>
          <span></span>
        </div>
      </div>
      <!-- 下方 -->
      <div class="left_bottom">
        <!-- 标题 -->
        <div class="bottom_header">
          <i class="iconfont icon-chengshi1"></i>
          <div class="bot_header_title">热门城市</div>
        </div>
        <!-- 内容 -->
        <div class="bottom_title">
          <span><a href="javascript:;">普陀山</a></span>
          <span><a href="javascript:;">普陀山</a></span>
          <span><a href="javascript:;">普陀山</a></span>
          <span><a href="javascript:;">普陀山</a></span>
          <span><a href="javascript:;">普陀山</a></span>
          <span><a href="javascript:;">普陀山</a></span>
          <span><a href="javascript:;">普陀山</a></span>
          <span><a href="javascript:;">普陀山</a></span>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item>
          <img class="item" src="" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
};
</script>

<style lang='less' scoped>
.container {
  width: 1180px;
  margin: 20px auto;
  .leftBox {
    padding: 20px;
    height: 371px;
    width: 300px;
    background-color: #fff;
    box-shadow: #0086f6 0 0 0 2px inset;
    border-radius: 4px;
    display: inline-block;
    box-sizing: content-box;
    line-height: 30px;
    font-size: 14px;
    .left_top {
      height: 200px;
      width: 100%;
      // background-color: lawngreen;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      .top_header {
        font-size: 16px;
        color: #333;
        margin-bottom: 14px;
        display: flex;
        line-height: 1.5;
        font-family: "microsoft yahei", Tahoma, Simsun, sans-seri;
        .iconfont {
          display: block;
        }
        .top_header_title {
          height: 24px;
          line-height: 24px;
          margin-left: 5px;
          font-weight: 700;
          font-size: 14px;
        }
      }
      .top_title {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        span {
          a {
            color: #333;
            font-size: 14px;
            line-height: 1.5;
          }
        }
      }
    }
    .left_bottom {
      // background-color: skyblue;
      height: 200px;
      width: 100%;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      .bottom_header {
        font-size: 16px;
        color: #333;
        margin-bottom: 14px;
        display: flex;
        line-height: 1.5;
        font-family: "microsoft yahei", Tahoma, Simsun, sans-seri;
        .iconfont {
          display: block;
        }
        .bot_header_title {
          height: 24px;
          line-height: 24px;
          margin-left: 5px;
          font-weight: 700;
          font-size: 14px;
        }
      }
      .bottom_title{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
        span {
          a {
            color: #333;
            font-size: 14px;
            line-height: 1.5;
            display: block;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .block {
    float: right;
    width: 830px;
    // height: 410px;
    background-color: red;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
