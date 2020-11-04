<template>
  <div>
    <div class="wrap">
      <!-- 轮播图 -->
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://dimg04.c-ctrip.com/images/zg0q1f000001gjjivDABE.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://dimg04.c-ctrip.com/images/0zg1t12000833o02a78D4.jpg"
                alt=""
              />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </div>
      <!-- 轮播下方小图 -->
      <div class="smallIcon">
        <div class="smallWrap">
          <a href="https://car.ctrip.com/jiazhao/index?channelId=14256">
            <img src="./images/download.jpg" alt="" />
          </a>
        </div>
      </div>
      <!-- 租车搜索框 -->
      <div class="searchOut">
        <div class="searchBox">
          <p class="searchTag">
            <a>境外租车</a>
            <a>国内租车</a>
            <a>接送机</a>
            <a>接送火车</a>
            <a>按天包车</a>
          </p>
          <div class="searchs">
            <!-- 境外租车 -->
            <div class="searchItem">
              <form>
                <ul>
                  <li>
                    <span>取车地点</span>
                    <!--  class="s-input s-jj-input-w3 w1 points-ltlb focus in ui-placeholder"              data-picker="osdselector" -->
                    <input data-picker type="text" />
                  </li>
                  <li>
                    <span>还车地点</span>
                    <input type="text" data-picker />
                  </li>
                  <li>
                    <span>取车时间</span>
                    <input
                      style="width: 268px; margin-right: 2px"
                      type="text"
                      data-picker
                    />
                    <input style="width: 154px" type="text" data-picker />
                  </li>
                  <li>
                    <span>还车时间</span>
                    <input
                      style="width: 268px; margin-right: 2px"
                      type="text"
                      data-picker
                    />
                    <input style="width: 154px" type="text" data-picker />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- 地图 -->
      <div class="platWrap">
        <div class="platTit">
          <span class="wire"></span>
          <h2>国内 · <span>热门租车城市</span></h2>
        </div>
        <div class="BottomConent">
          <!-- 公鸡 -->
          <div class="plat">
            <!-- 定位标志 -->
            <div>
              <a
                href="https://car.ctrip.com/city/wulumuqi39?channelid=16605"
                target="_blank"
                class="ci_icon more wlmq"
                title="乌鲁木齐租车"
                >乌鲁<br />木齐</a
              >
              <a
                href="https://car.ctrip.com/city/chengdu28?channelid=16605"
                target="_blank"
                class="ci_icon cd"
                title="成都租车"
                >成都</a
              >
              <a
                href="https://car.ctrip.com/city/kunming34?channelid=16605"
                target="_blank"
                class="ci_icon km"
                title="昆明租车"
                >昆明</a
              >
              <a
                href="https://car.ctrip.com/city/xian10?channelid=16605"
                target="_blank"
                class="ci_icon xa"
                title="西安租车"
                >西安</a
              >
              <a
                href="https://car.ctrip.com/city/wuhan477?channelid=16605"
                target="_blank"
                class="ci_icon wh"
                title="武汉租车"
                >武汉</a
              >
              <a
                href="https://car.ctrip.com/city/changsha206?channelid=16605"
                target="_blank"
                class="ci_icon cs"
                title="长沙租车"
                >长沙</a
              >
              <a
                href="https://car.ctrip.com/city/shenzhen30?channelid=16605"
                target="_blank"
                class="ci_icon sz"
                title="深圳租车"
                >深圳</a
              >
              <a
                href="https://car.ctrip.com/city/sanya43?channelid=16605"
                target="_blank"
                class="ci_icon sy"
                title="三亚租车"
                >三亚</a
              >
              <a
                href="https://car.ctrip.com/city/beijing1?channelid=16605"
                target="_blank"
                class="ci_icon bj"
                title="北京租车"
                >北京</a
              >
              <a
                href="https://car.ctrip.com/city/dalian6?channelid=16605"
                target="_blank"
                class="ci_icon dl"
                title="大连租车"
                >大连</a
              >
              <a
                href="https://car.ctrip.com/city/qingdao7?channelid=16605"
                target="_blank"
                class="ci_icon qd"
                title="青岛租车"
                >青岛</a
              >
              <a
                href="https://car.ctrip.com/city/nanjing12?channelid=16605"
                target="_blank"
                class="ci_icon nj"
                title="南京租车"
                >南京</a
              >
              <a
                href="https://car.ctrip.com/city/shanghai2?channelid=16605"
                target="_blank"
                class="ci_icon sh"
                title="上海租车"
                >上海</a
              >
              <a
                href="https://car.ctrip.com/city/hangzhou17?channelid=16605"
                target="_blank"
                class="ci_icon hz"
                title="杭州租车"
                >杭州</a
              >
              <a
                href="https://car.ctrip.com/city/haerbin5?channelid=16605"
                target="_blank"
                class="ci_icon heb"
                title="哈尔滨租车"
                >哈尔滨</a
              >
              <a
                href="https://car.ctrip.com/hwzijia/osdsearch/index?pcity=617&amp;channelid=16605"
                target="_blank"
                class="ci_icon tb"
                title="台北租车"
                >台北</a
              >
              <a
                href="https://car.ctrip.com/hwzijia/osdsearch/index?pcity=58&amp;channelid=16605"
                target="_blank"
                class="ci_icon xg"
                title="香港租车"
                >香港</a
              >
            </div>
          </div>
          <!-- 地名 -->
          <div class="place">
            <a
              href="https://car.ctrip.com/city/haikou42?channelid=16605"
              target="_blank"
              class="ml"
              title="海口租车"
              ><em class="ci_icon"></em><span>海口</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/tianjin3?channelid=16605"
              target="_blank"
              title="天津租车"
              ><em class="ci_icon"></em><span>天津</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/suzhou14?channelid=16605"
              target="_blank"
              title="苏州租车"
              ><em class="ci_icon"></em><span>苏州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/ningbo375?channelid=16605"
              target="_blank"
              title="宁波租车"
              ><em class="ci_icon"></em><span>宁波</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/zhuhai31?channelid=16605"
              target="_blank"
              title="珠海租车"
              ><em class="ci_icon"></em><span>珠海</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/guangzhou32?channelid=16605"
              target="_blank"
              title="广州租车"
              ><em class="ci_icon"></em><span>广州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/fuzhou258?channelid=16605"
              target="_blank"
              title="福州租车"
              ><em class="ci_icon"></em><span>福州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/dali36?channelid=16605"
              target="_blank"
              title="大理租车"
              ><em class="ci_icon"></em><span>大理</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/shenyang451?channelid=16605"
              target="_blank"
              title="沈阳租车"
              ><em class="ci_icon"></em><span>沈阳</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/xishuangbanna35?channelid=16605"
              target="_blank"
              title="西双版纳租车"
              style="width: 108px"
              ><em class="ci_icon"></em><span>西双版纳</span
              ><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/lijiang37?channelid=16605"
              target="_blank"
              class="ml"
              title="丽江租车"
              ><em class="ci_icon"></em><span>丽江</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/taiyuan105?channelid=16605"
              target="_blank"
              title="太原租车"
              ><em class="ci_icon"></em><span>太原</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/changchun158?channelid=16605"
              target="_blank"
              title="长春租车"
              ><em class="ci_icon"></em><span>长春</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/shijiazhuang428?channelid=16605"
              target="_blank"
              title="石家庄租车"
              style="width: 94px"
              ><em class="ci_icon"></em><span>石家庄</span
              ><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/hefei278?channelid=16605"
              target="_blank"
              title="合肥租车"
              ><em class="ci_icon"></em><span>合肥</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/guiyang38?channelid=16605"
              target="_blank"
              title="贵阳租车"
              ><em class="ci_icon"></em><span>贵阳</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/wuxi13?channelid=16605"
              target="_blank"
              title="无锡租车"
              ><em class="ci_icon"></em><span>无锡</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/nanning380?channelid=16605"
              target="_blank"
              title="南宁租车"
              ><em class="ci_icon"></em><span>南宁</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/jinan144?channelid=16605"
              target="_blank"
              title="济南租车"
              ><em class="ci_icon"></em><span>济南</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/xining124?channelid=16605"
              target="_blank"
              title="西宁租车"
              ><em class="ci_icon"></em><span>西宁</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/luoyang350?channelid=16605"
              target="_blank"
              class="ml"
              title="洛阳租车"
              ><em class="ci_icon"></em><span>洛阳</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/jiuzhaigou91?channelid=16605"
              target="_blank"
              title="九寨沟租车"
              style="width: 94px"
              ><em class="ci_icon"></em><span>九寨沟</span
              ><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/wenzhou491?channelid=16605"
              target="_blank"
              title="温州租车"
              ><em class="ci_icon"></em><span>温州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/dongguan223?channelid=16605"
              target="_blank"
              title="东莞租车"
              ><em class="ci_icon"></em><span>东莞</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/guilin33?channelid=16605"
              target="_blank"
              title="桂林租车"
              ><em class="ci_icon"></em><span>桂林</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/xiamen25?channelid=16605"
              target="_blank"
              title="厦门租车"
              ><em class="ci_icon"></em><span>厦门</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/lanzhou100?channelid=16605"
              target="_blank"
              title="兰州租车"
              ><em class="ci_icon"></em><span>兰州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/nanchang376?channelid=16605"
              target="_blank"
              title="南昌租车"
              ><em class="ci_icon"></em><span>南昌</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/chongqing4?channelid=16605"
              target="_blank"
              title="重庆租车"
              ><em class="ci_icon"></em><span>重庆</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city?channelid=16605"
              target="_blank"
              title="更多租车"
              style="width: 90.13px; border-color: #06c; color: #06c"
              ><em
                class="ci_icon"
                style="background-position: -36px -261px !important"
              ></em
              ><span style="border-color: #06c; color: #06c">更多...</span
              ><i
                class="ci_icon"
                style="background-position: -54px -261px !important"
              ></i
            ></a>
          </div>
        </div>
      </div>

      <!-- 境外租车 -->
      <div class="hot_mod">
        <div class="area">
          <h2>
            <span class="wire"></span>
            <p>
              热门 ·
              <span>境外租车城市</span>
            </p>
          </h2>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
export default {
  name: "useCart",
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "bullets",
      //   clickable: true,
      // },
    });
  },
};
</script>
<style lang='less' scoped>
.wrap {
  position: relative;

  // 轮播
  .banner {
    width: 100%;
    height: 360px;
    .swiper-container {
      width: 100%;
      height: 100%;
      --swiper-theme-color: #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  // 小图
  .smallIcon {
    width: 1180px;
    height: 210px;
    margin: 0 auto 0;
    .smallWrap {
      padding: 10px 0 20px 0;
    }
  }

  // 搜索框
  .searchOut {
    z-index: 1;
    width: 583.16px;
    height: 323px;
    background: #fff;
    position: absolute;
    left: 360px;
    top: 18px;
    .searchBox {
      .searTag {
        a {
          display: block;
        }
      }
      .searchs {
        .searchItem {
          form {
            ul {
              padding: 15px 30px;
              min-height: 200px;
              li {
                padding-top: 10px;
                span {
                  font: 14px Microsoft Yahei;
                  width: 75px;
                  text-align: right;
                  padding-right: 12px;
                  line-height: 30px;
                }
                input {
                  outline: none;
                  width: 432px;
                  height: 30px;
                  line-height: 18px;
                  padding: 5px;
                  border: 1px solid #d9d9d9;
                  &:focus {
                    border-color: #5d9de5;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // 地图
  .platWrap {
    width: 100%;
    height: 762px;
    background: #f2f4f6 url(//pic.ctrip.com/car/home/internalBot.jpg) center
      bottom no-repeat;
    // 地图title
    .platTit {
      font: 26px/1 Microsoft Yahei;
      width: 1180px;
      height: 80px;
      line-height: 80px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      .wire {
        display: block;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #d4d4d4;
        position: absolute;
        top: 39.5px;
      }
      h2 {
        width: 279.66px;
        background-color: #f2f4f6;
        position: relative;
        margin: 0 auto;
        span {
          color: #06c;
        }
      }
    }
    // 下方内容
    .BottomConent {
      box-sizing: border-box;
      width: 1180px;
      height: 772px;
      margin: 0 auto;
      // float: left;
      // 大公鸡
      .plat {
        display: block;
        width: 660px;
        height: 692px;
        float: left;
        background: url(https://pages.c-ctrip.com/commerce/promote/car/online/common/carSiteMapImg/home.png)
          no-repeat;
        position: relative;
        .ci_icon {
          width: 47px;
          height: 62px;
          padding: 16px 4px 0;
          display: inline-block;
          background: url(https://pic.ctrip.com/car/home/icon.png) no-repeat;
          background-position: 0 -198px;
          color: #326293;
          font: 13px/1.2 Microsoft Yahei;
          vertical-align: middle;
          text-align: center;
          position: absolute;
          font: 13px/1.2 Microsoft Yahei;
          // background-position: ;
        }
        a:hover {
          background-position: -47px -198px;
          color: #fff;
          text-decoration: none;
          z-index: 2;
        }
        .wlmq {
          top: 150px;
          left: 132px;
          padding: 11px 4px 0;
        }
        .cd {
          top: 293px;
          left: 285px;
        }
        .km {
          left: 272px;
          top: 358px;
        }
        .xa {
          top: 239px;
          left: 351px;
        }
        .wh {
          top: 276px;
          left: 396px;
        }
        .cs {
          top: 313px;
          left: 376px;
        }
        .sz {
          /* bottom: 58px; */
          left: 404px;
          top: 358px;
        }
        .sy {
          /* bottom: 10px; */
          left: 364px;
          top: 413px;
        }
        .bj {
          top: 156px;
          right: 176px;
        }
        .dl {
          top: 154px;
          right: 115px;
        }
        .qd {
          top: 193px;
          right: 127px;
        }
        .nj {
          top: 234px;
          right: 156px;
        }
        .sh {
          top: 272px;
          right: 122px;
          z-index: 2;
        }
        .hz {
          top: 300px;
          right: 145px;
          z-index: 1;
        }
        .heb {
          top: 52px;
          right: 50px;
        }
        .tb {
          left: 485px;
          top: 362px;
        }
        .xg {
          left: 429px;
          top: 378px;
        }
      }
      // 地名
      .place {
        float: left;
        width: 520px;
        height: 330px;
        // background-color: red;
        margin-top: 70px;
        .ml {
          margin-left: 40px;
        }
        a {
          display: inline-block;
          margin: 0 10px 20px 0;
          width: 80px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          em {
            width: 18px;
            height: 35px;
            display: inline-block;
            background-position: 0 -261px !important;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            font: 14px/33px Microsoft Yahei;
            border-top: #dcdcdc 1px solid;
            border-bottom: #dcdcdc 1px solid;
            padding: 0 8px;
            background-color: #fff;
            vertical-align: middle;
            color: #333;
          }
          i {
            display: inline-block;
            width: 18px;
            height: 35px;
            background-position: -18px -261px !important;
            vertical-align: middle;
          }
          .ci_icon {
            background: url(https://pic.ctrip.com/car/home/icon.png) no-repeat;
          }
        }
        a:hover span {
          border-color: #06c;
        }
        a:hover em {
          background-position: -36px -261px !important;
        }
        a:hover i {
          background-position: -54px -261px !important;
        }
      }
    }
  }

  // 境外租车
  .hot_mod {
    width: 100%;
    height: 360px;
    .area {
      width: 1180px;
      height: 360px;
      margin: 0 auto;
      // background-color: chocolate;
      overflow: hidden;
      position: relative;
      h2 {
        height: 40px;
        margin: 20px 0;
        font: 26px/1 Microsoft Yahei;
        text-align: center;
        .wire{
          width: 100%;
          height: 1px;
          display: inline-block;
          border-bottom: 1px solid #d4d4d4;
          position: absolute;
          top: 34px;
          left: 0;
        }
        p{
          background: #fff;
          width: 279.66px;
          margin: 0 auto;
          position: relative;
          span{
            color: #06c;
          }
        }
      }
    }
  }

  //搜索框的属性选择器
  [data-picker] {
    background-image: url(//pic.c-ctrip.com/car/ui/picker_bg-2.png);
    background-repeat: no-repeat;
    background-position: right 0.1%;
  }
  [data-picker]:hover {
    background-position: right 39%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0) inset;
  }
}
</style>