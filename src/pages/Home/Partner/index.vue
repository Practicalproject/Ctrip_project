<template>
  <div class="partnerContainer">
    <div class="w">
      <!-- 头部 -->
      <div class="mod-hd">
        <div class="partner">
          <div class="part-hd">合作伙伴</div>
          <div class="part-bd">
            <ul>
              <li>
                <a
                  rel="nofollow"
                  title="HHtravel"
                  target="_blank"
                  href="http://www.hhtravel.com/#ctm_ref=hh_ct_chp_bottom"
                  class="partner_hh"
                ></a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  title="铁友网"
                  target="_blank"
                  href="http://www.tieyou.com/"
                  class="partner_lp"
                ></a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  title="途风网"
                  target="_blank"
                  href="http://cn.toursforfun.com/"
                  class="partner_sg"
                ></a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  title="途家网"
                  target="_blank"
                  href="http://www.tujia.com/"
                  class="partner_tj"
                ></a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  title="永安旅游"
                  target="_blank"
                  href="http://www.wingontravel.com/"
                  class="partner_ya"
                ></a>
              </li>
              <li>
                <a
                  rel="nofollow"
                  title="易游网"
                  target="_blank"
                  href="http://www.eztravel.com.tw/"
                  class="partner_yy"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 主体 -->
      <div class="mod-bd">
        <div class="indices-nav">
          <dt>携程导航</dt>
          <dd>
            <a target="_blank" href="http://hotels.ctrip.com/">酒店预订</a>
          </dd>
        </div>
        <div class="indices-line"></div>
        <div class="indices-hot">
          <dt>酒店预订</dt>
          <dd>
            <a target="_blank" href="http://hotels.ctrip.com/citylist"
              >城市酒店</a
            >
          </dd>
        </div>
        <div class="indices-line"></div>
        <div class="indices-hot">
          <dt>特价机票</dt>
          <dd>
            <a target="_blank" href="http://hotels.ctrip.com/citylist"
              >城市酒店</a
            >
          </dd>
        </div>
        <div class="indices-line"></div>
        <div class="indices-hot">
          <dt>旅游度假</dt>
          <dd>
            <a target="_blank" href="http://hotels.ctrip.com/citylist"
              >城市酒店</a
            >
          </dd>
        </div>
        <div class="indices-line"></div>
        <div class="indices-hot">
          <dt>攻略指南</dt>
          <dd>
            <a target="_blank" href="http://hotels.ctrip.com/citylist"
              >城市酒店</a
            >
          </dd>
        </div>
        <div class="indices-line"></div>
        <div class="indices-hot">
          <dt>快速入口</dt>
          <dd>
            <a target="_blank" href="http://hotels.ctrip.com/citylist"
              >城市酒店</a
            >
          </dd>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partner",
};
</script>

<style lang="less" scoped>
.partnerContainer {
  .w {
    width: 1180px;
    margin: 0 auto;
    // height: 1000px;
    // background-color: pink;
    // 头部
    .mod-hd {
      // 头部
      .partner {
        width: 100%;
        height: 98px;
        padding: 10px 19px 0 20px;
        background: #fff;
        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        .part-hd {
          margin-bottom: 5px;
          font-size: 16px;
          font-weight: 300;
        }
        .part-bd {
          li {
            float: left;
            display: inline-block;
            *display: inline;
            *zoom: 1;
            width: 189px;
            border-left: 1px dashed #e0e0e0;
            text-align: center;
            &:first-child {
              border: none;
            }
            a {
              display: inline-block;
              width: 76px;
              height: 0;
              padding-top: 28px;
              overflow: hidden;
              background-image: url(//pic.c-ctrip.com/platform/online/home/pic_partner.png);
              background-repeat: no-repeat;
              font-size: 12px;
              font-family: "simsun";
              color: #666;
              line-height: 1.8;
              &.partner_lp {
                background-position: 0 -33px;
              }
              &.partner_sg {
                background-position: 0 -66px;
              }
              &.partner_tj {
                background-position: 0 -99px;
              }
              &.partner_ya {
                background-position: 0 -132px;
              }
              &.partner_yy {
                background-position: 0 -165px;
              }
            }
          }
        }
      }
    }

    // 主体
    .mod-bd {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-top: none;
      overflow: hidden;
      padding: 10px 15px;
      line-height: 2;
      .indices-nav {
        display: block;
        overflow: hidden;
        dt {
          float: left;
          width: 80px;
          font-size: 12px;
          font-weight: bold;
          color: #666;
        }
        dd {
          float: left;
          width: 84px;
          margin-right: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          a {
            text-decoration: none;
            color: #b6b6b6;
            font-size: 12px;
          }
        }
      }
      .indices-line {
        height: 0;
        overflow: hidden;
        border-bottom: 1px dotted #ccc;
        // margin: 5px 0;
      }
      .indices-hot {
        display: block;
        overflow: hidden;
        dt {
          float: left;
          width: 80px;
          font-size: 12px;
          font-weight: bold;
          color: #666;
        }
        dd {
          float: left;
          width: 84px;
          margin-right: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          a {
            text-decoration: none;
            color: #b6b6b6;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
