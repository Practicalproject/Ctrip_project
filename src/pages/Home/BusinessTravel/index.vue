<template>
  <!-- 企业商旅 -->
  <div class="BusinessTravelCon">
    <div class="bsHeader">
      <h2>
        <span class="bs">
          企业商旅
          <i></i>
        </span>
      </h2>
    </div>
    <div class="bsCon">
      <div class="supplyBox">
        <div class="supplyHd">
          <div class="supImg">
            <span>
              <i></i>
            </span>
          </div>
          <div class="supCon">
            <p class="conHd">差旅预订管理</p>
            <div class="conCon">
              <!-- <p>全球出境WiFi租赁</p> -->
              <p>海量差旅产品，全流程服务，智能管控，助力企业差旅降本提效！</p>
            </div>
          </div>
        </div>
      </div>
      <div class="supplyBox">
        <div class="supplyHd">
          <div class="supImg">
            <span class="publicPrice">
              <i class="public"></i>
            </span>
          </div>
          <div class="supCon">
            <p class="conHd">公对公结算</p>
            <div class="conCon">
              <p>
                公司账户支付，自助对账、统一开票、配送，员工出差免垫资，免报销！
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="supplyBox">
        <div class="supplyHd">
          <div class="supImg">
            <span class="onlineInfo">
              <i class="online"></i>
            </span>
          </div>
          <div class="supCon">
            <p class="conHd">在线差旅报告</p>
            <div class="conCon">
              <p>
                多维度差旅报告，量化管控差旅费用，商旅大数据指导企业优化差旅政策！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessTravel",
};
</script>

<style lang="less" scoped>
.BusinessTravelCon {
  width: 1180px;
  margin: 28px auto 0;
  width: 1180px;
  height: 167px;
  font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
  .bsHeader {
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
  .bsCon {
    margin: 10px 0 0 0px;
    width: 1180px;
    height: 119px;
    display: flex;
    justify-content: space-between;
    .supplyBox {
      width: 384px;
      height: 102px;
      // margin-left: 10px;
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
            background: #f8c2b3;
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
              width: 50px;
              height: 45px;
              margin: -23px 0 0 -25px;
              display: inline-block;
              background: url("./images/sprite.png") no-repeat 0 -140px;
            }
          }
          .publicPrice {
            background: #fbe09f;
            .public {
              width: 55px;
              height: 37px;
              margin: -19px 0 0 -28px;
              background: url("./images/sprite.png") no-repeat 0 -190px;
            }
          }
          .onlineInfo {
            background: #c3cbff;
            .online {
              height: 48px;
              margin: -24px 0 0 -23px;
              background: url("./images/sprite.png") no-repeat 0 -232px;
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
          }
        }
      }
    }
  }
}
</style>
