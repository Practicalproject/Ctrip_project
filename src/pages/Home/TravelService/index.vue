<template>
  <!-- 旅行服务 -->
  <div class="TravelServiceCon">
    <div class="tsHeader">
      <h2>
        <span class="ts">
          旅行服务
          <i></i>
        </span>
      </h2>
    </div>
    <div class="wifi">
      <div class="supplyBox">
        <div class="supplyHd">
          <div class="supImg">
            <span>
              <i></i>
            </span>
          </div>
          <div class="supCon">
            <p class="conHd">出境WiFi</p>
            <div class="conCon">
              <p>全球出境WiFi租赁</p>
              <p>流量不限、多人共享、携带便捷、低价信号强</p>
            </div>
          </div>
        </div>
        <div class="supplyFoot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelService",
};
</script>

<style lang="less" scoped>
.TravelServiceCon {
  width: 1180px;
  margin: 28px auto 0;
  width: 1180px;
  height: 193px;
  .tsHeader {
    height: 36px;
    width: 1180px;
    border-bottom: 2px solid #3983e5;
    h2 {
      text-align: left;
      float: left;
      span {
        color: #06c;
        bottom: -3px;
        height: 36px;
        line-height: 30px;
        margin-right: 30px;
        cursor: pointer;
        font-size: 16px;
        position: relative;
        i {
          position: absolute;
          left: 50%;
          margin-left: -6px;
          bottom: -6px;
          width: 12px;
          height: 6px;
          overflow: hidden;
          line-height: 0;
          font-size: 0;
          border-bottom: 6px solid #3983e5;
          border-top: 0 none;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
      }
    }
  }
  .wifi {
    margin: 10px 0 0 0px;
    overflow: hidden;
    width: 1180px;
    background-color: pink;
    .supplyBox {
      width: 384px;
      height: 145px;
      margin-left: 10px;
      border: 1px solid #e0e0e0;
      background: #fff;
      .supplyHd {
        width: 384px;
        height: 102px;
        &:hover {
          width: 382px;
          height: 102px;
          background: #e2eeff;
        }
        .supImg {
          width: 110px;
          float: left;
          text-align: right;
          span {
            background: #abcbf5;
            display: inline-block;
            width: 70px;
            height: 70px;
            text-align: center;
            border-radius: 50%;
            margin-top: 15px;
            position: relative;
            i {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 46px;
              display: inline-block;
              height: 34px;
              margin: -17px 0 0 -23px;
              background: url("./images/sprite.png") no-repeat 0 0;
            }
          }
        }
        .supCon {
          margin-left: 130px;
          padding-top: 15px;
          line-height: 1.5;
          .conHd {
            font: 16px/1.5 "Microsoft yahei";
            margin-bottom: 5px;
          }
          .conCon {
            padding-right: 5px;
            color: #666;
            font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
          }
        }
      }
      .supplyFoot {
        height: 40px;
        overflow: hidden;
        border-top: 1px solid #e0e0e0;
        background-color: #ccc;
      }
    }
  }
}
</style>
