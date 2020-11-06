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
        <div class="supplyFoot">
          <ul>
            <li>
              <span>
                <i
                  ><img
                    src="https://pic.c-ctrip.com/index/v3.0/supply_icon.png"
                    alt=""
                  /> </i
                >日本
              </span>
            </li>
            <li>
              <span>
                <i
                  ><img
                    src="https://pic.c-ctrip.com/index/v3.0/supply_icon.png"
                    alt=""
                  /> </i
                >韩国
              </span>
            </li>
            <li>
              <span>
                <i
                  ><img
                    src="https://pic.c-ctrip.com/index/v3.0/supply_icon.png"
                    alt=""
                  /> </i
                >更多
              </span>
            </li>
            <li>
              <span>
                <i
                  ><img
                    src="https://pic.c-ctrip.com/index/v3.0/supply_icon.png"
                    alt=""
                  /> </i
                >欧洲通用
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="supplyBox">
        <div class="supplyHd">
          <div class="supImg">
            <span class="visaItem">
              <i class="visa"></i>
            </span>
          </div>
          <div class="supCon">
            <p class="conHd">签证</p>
            <div class="conCon">
              <p>在材料制作完成前均可申请订单全额退款</p>
              <p>服务优质，方便快捷，诚信可靠，出签率高</p>
            </div>
          </div>
        </div>
        <div class="supplyFoot">
          <ul>
            <li>
              <span>
                <i
                  ><img
                    src="https://pic.c-ctrip.com/vacation_v2/visa/24-japan.png"
                    alt=""
                  /> </i
                >日本
              </span>
            </li>
            <li>
              <span>
                <i
                  ><img
                    src="https://pic.c-ctrip.com/vacation_v2/visa/24-korea.png"
                    alt=""
                  /> </i
                >韩国
              </span>
            </li>
            <li>
              <span>
                <i
                  ><img
                    src="https://pic.c-ctrip.com/vacation_v2/visa/24-USA.png"
                    alt=""
                  /> </i
                >美国
              </span>
            </li>
            <li>
              <span>
                <i
                  ><img
                    src="https://pic.c-ctrip.com/vacation_v2/visa/24-Australia.png"
                    alt=""
                  /> </i
                >澳大利亚
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="supplyBox">
        <div class="supplyHd">
          <div class="supImg">
            <span class="InsuranceItem">
              <i class="Insurance"></i>
            </span>
          </div>
          <div class="supCon">
            <p class="conHd">保险</p>
            <div class="conCon">
              <p>携程保险，安心随行</p>
              <p>旅游定制、极速出保、便捷理赔</p>
            </div>
          </div>
        </div>
        <div class="supplyFoot">
          <ul>
            <li>
              <span class="superItem">
                <i
                  ><img
                    src="https://pages.ctrip.com/tour/pdf1610/1.png"
                    alt=""
                  /> </i
                >【申根之王】
              </span>
            </li>
            <li>
              <span class="superItem">
                <i
                  ><img
                    src="https://pages.ctrip.com/tour/pdf1610/1.png"
                    alt=""
                  /> </i
                >【亚洲优选】
              </span>
            </li>
            <li>
              <span class="superItem">
                <i
                  ><img
                    src="https://pages.ctrip.com/tour/pdf1610/1.png"
                    alt=""
                  /> </i
                >【境内畅游】
              </span>
            </li>
          </ul>
        </div>
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
  font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
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
    width: 1180px;
    display: flex;
    justify-content: space-between;
    .supplyBox {
      width: 384px;
      height: 145px;
      // margin-left: 10px;
      border: 1px solid #e0e0e0;
      background: #fff;
      &:first-of-type{
        margin-left: 0;
      }
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
          .visaItem {
            background: #cbe2b3;
            .visa {
              height: 46px;
              margin: -23px 0 0 -23px;
              background: url("./images/sprite.png") no-repeat 0 -39px;
            }
          }
          .InsuranceItem {
            background: #f6dbb9;
            .Insurance {
              height: 48px;
              margin: -24px 0 0 -23px;
              background: url("./images/sprite.png") no-repeat 0 -89px;
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
      .supplyFoot {
        height: 40px;
        overflow: hidden;
        border-top: 1px solid #e0e0e0;
        ul {
          margin-left: -1px;
          display: flex;
          li {
            display: inline-block;
            vertical-align: middle;
            padding: 8px 0;
            // display: flex;
            justify-content: space-around;
            span {
              width: 96px;
              display: inline-block;
              height: 24px;
              line-height: 24px;
              border-left: 1px dashed #a3a3a3;
              text-align: center;
              margin-left: -1px;
              color: #333;
              i {
                overflow: hidden;
                margin-right: 5px;
                img {
                  width: 24px;
                  height: 24px;
                  vertical-align: middle;
                  border-radius: 50%;
                }
              }
            }
            .superItem {
              width: 128px;
            }
            &:hover {
              background: #e2eeff;
            }
          }
        }
      }
    }
  }
}
</style>
