<template>
  <div class="ticket_bd">
    <div class="crumbs">
      <a href="javascript:;">旅游</a>
      >
      <a href="javascript:;">当地玩乐</a>
      >
      <span href="javascript:;"
        >普吉岛查龙寺+卡伦观景台+神仙半岛+普吉镇环岛一日游【VIP包车/线路可定制/说走就走】</span
      >
    </div>
    <div class="detail_wrap">
      <div class="detail_media">
        <div class="detail_media_left">
          <div class="swiper-container" ref="swiper" id="gallery">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/ban7 (2).jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="./images/ban7 (3).jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="./images/ban7 (4).jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="./images/ban7 (5).jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="./images/ban7 (6).jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="./images/ban7 (7).jpg" alt="" />
              </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <div class="swiper-container conList" id="thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide bannerItem">
                <img src="./images/ban7 (2).jpg" alt="" />
              </div>
              <div class="swiper-slide bannerItem">
                <img src="./images/ban7 (3).jpg" alt="" />
              </div>
              <div class="swiper-slide bannerItem">
                <img src="./images/ban7 (4).jpg" alt="" />
              </div>
              <div class="swiper-slide bannerItem">
                <img src="./images/ban7 (5).jpg" alt="" />
              </div>
              <div class="swiper-slide bannerItem">
                <img src="./images/ban7 (6).jpg" alt="" />
              </div>
              <div class="swiper-slide bannerItem">
                <img src="./images/ban7 (7).jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="detail_media_right">
          <div class="detailInfo">
            <h1 class="detailHd">
              <span class="deIcon">携程优选</span
              >普吉岛查龙寺+卡伦观景台+神仙半岛+普吉镇环岛一日游【VIP包车/线路可定制/说走就走】
            </h1>
            <dl class="detailSpe">
              <dt>产品特色</dt>
              <dd>
                <i></i>
                <p>
                  【服务及时贴心安全】VIP包车独立成团，当日紧急接单，一对一中文微导对接，专业车队专业老司机，带你们看遍普吉岛的美景
                </p>
              </dd>
              <dd>
                <i></i>
                <p>
                  【时间自由】可以任意选择出发时间，可以选择半日游6小时或一日游10小时
                </p>
              </dd>
              <dd>
                <i></i>
                <p>
                  【搭配自由】想去的景点，想去的餐厅，想看的表演都可以自由搭配，一对一中文微导私人定制
                </p>
              </dd>
            </dl>
            <div class="detail_proInfo">
              <span class="price_text">
                <dfn>￥</dfn><strong>140</strong>起
              </span>
              <span class="saleInfo">
                <div class="point">
                  <p class="amount">4.9分</p>
                  <p class="text">评分</p>
                </div>
                <div class="point">
                  <p class="amount">694</p>
                  <p class="text">累计评价</p>
                </div>
                <div class="point">
                  <p class="amount">1423份</p>
                  <p class="text">月销</p>
                </div>
              </span>
            </div>
            <div class="detail_address">
              <span class="aline">出发地</span>
              <span class="dest">北京</span>
            </div>
            <div class="detail_address">
              <span class="aline">供应商</span>
              <span class="dest">
                <a href="javascript:;">遨游国际旅行社</a>
              </span>
            </div>
            <div class="detail_address">
              <span class="aline">促销优惠</span>
              <span class="dest">
                <span class="promoItem">立减35</span>
                <span class="promoDes">预订指定套餐立减35元</span>
              </span>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="detail_book">
        <div class="bookList">
          <div class="list">
            <label>
              <span>选择行程路线</span>
            </label>
            <div class="choose_wrap">
              <a href="javascript:;">环岛游</a>
            </div>
          </div>
          <div class="list">
            <label>
              <span>选择套餐</span>
            </label>
            <div class="choose_wrap">
              <a
                href="javascript:;"
                v-for="(item, index) in travelList"
                :key="index"
                :class="{ active: active === index }"
                @click="handleList(index)"
                >{{ item.name }}</a
              >
              <!-- {{ item.name.slice(6) }} -->
              <!-- <a href="javascript:;">B套餐【五环内接】往返车费+门票+导游+接</a>
              <a href="javascript:;"
                >C套餐【自行集合+午餐】往返车费+门票+导游</a
              >
              <a href="javascript:;"
                >D套餐【五环内接+午餐】往返车费+门票+导游+接</a
              >
              <a href="javascript:;">A套餐【自行集合】往返车费+门票+导游</a>
              <a href="javascript:;">B套餐【五环内接】往返车费+门票+导游+接</a>
              <a href="javascript:;"
                >C套餐【自行集合+午餐】往返车费+门票+导游</a
              >
              <a href="javascript:;"
                >D套餐【五环内接+午餐】往返车费+门票+导游+接</a
              > -->
            </div>
          </div>
        </div>
        <div class="bookComp">
          <div class="list">
            <label>
              <span>选择使用日期</span>
            </label>
            <div class="chooseData">
              <el-date-picker
                class="dataWidth"
                v-model="value1"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
              <span class="date-box-tip">最晚01:00前可订出行当天产品</span>
            </div>
          </div>
          <div class="list">
            <label>
              <span>人数</span>
            </label>
            <div class="peopleNum">
              <div class="peo">
                <div class="peoLeft">
                  <p>
                    成人
                    <span>1.21米（含）以上</span>
                  </p>
                </div>
                <div class="peoRight">
                  <span class="num_box">
                    <a href="javascript:;" class="cut" @click="cutNum"> </a>
                    <!-- <input type="text" value="0" /> -->
                    <input type="text" :value="activeItem" ref="numPeo" />
                    <a href="javascript:;" class="add" @click="addNum"> </a>
                  </span>
                </div>
              </div>
              <div class="peo">
                <div class="peoLeft">
                  <p>
                    儿童
                    <span>1.2米（含）以下</span>
                  </p>
                </div>
                <div class="peoRight">
                  <span class="num_box">
                    <a href="javascript:;" class="cut" @click="cutChild"> </a>

                    <input type="text" value="0" ref="numChild" />
                    <a href="javascript:;" class="add" @click="addChild"> </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="condiv">
            <a href="javascript;:" class="bookBtn">立刻预定</a>
            <div class="bookPrice">
              <p class="selling-price">
                总价<span
                  ><dfn
                    >￥<i> {{ totalPrice }}</i></dfn
                  ></span
                >
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Swiper from "swiper";
import "swiper/css/swiper.min.css"; // 在入口js中引入
export default {
  name: "DetailBan",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value1: "",
      value2: "",
      travelList: {},
      active: "",
    };
  },
  mounted() {
    // 轮播图------------
    var thumbsSwiper = new Swiper("#thumbs", {
      // loop: true, // 循环模式选项
      // spaceBetween: 10,
      slidesPerView: 5,
      watchSlidesVisibility: true, //防止不可点击
    });
    var gallerySwiper = new Swiper("#gallery", {
      // spaceBetween: 10,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // loop: true, // 循环模式选项
      autoplay: true,
      thumbs: {
        swiper: thumbsSwiper,
      },
      controller: {
        control: thumbsSwiper,
      },
    });
    // ------------------

    this.getDetails();
  },
  methods: {
    // 请求数据
    async getDetails() {
      let result = await this.$API.index.getDetails();
      if (result.code === 200) {
        this.travelList = result.data.result.packages;
        // this.travelList = result.data;
      }
    },

    // 点击套餐
    handleList(index) {
      this.active = index;
    },
    // 人数加减
    cutNum() {
      let result = this.$refs.numPeo.value * 1;
      result -= 1;
      this.$refs.numPeo.value = result;
      if (this.$refs.numPeo.value <= 0) {
        this.$refs.numPeo.value = 0;
      }
    },
    addNum() {
      let result = this.$refs.numPeo.value * 1;
      result += 1;
      this.$refs.numPeo.value = result;
    },
    cutChild() {
      let result = this.$refs.numChild.value * 1;
      result -= 1;
      this.$refs.numChild.value = result;
      if (this.$refs.numChild.value <= 0) {
        this.$refs.numChild.value = 0;
      }
    },
    addChild() {
      let result = this.$refs.numChild.value * 1;
      result += 1;
      this.$refs.numChild.value = result;
    },
  },
  computed: {
    activeItem() {
      let resultNum = this.travelList[this.active]
        ? this.travelList[this.active].minquantity
        : "0";
      // return this.travelList[this.active].minquantity;
      return resultNum;
    },

    // 计算总价
    totalPrice() {
      let result = this.travelList[this.active]
        ? this.travelList[this.active].resourceinfos
        : [];
      return result.reduce((prve, item) => {
        return (prve +=
          item.minprice * this.travelList[this.active].minquantity);
      }, 0);
    },
  },
};
</script>

<style lang="less" scoped>
.ticket_bd {
  font-size: 12px;
  color: #666;
  width: 1180px;
  margin: 0 auto;
  // background: #f2f5f7;
  padding-bottom: 40px;
  .crumbs {
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #999;
    font-family: verdana, simsun;
  }
  .detail_wrap {
    width: 100%;
    background: #fff;
    border: 1px solid #ddd;
    padding: 29px;
    position: relative;
    margin-bottom: 18px;
    .detail_media {
      display: flex;
      .detail_media_left {
        width: 500px;
        height: 350px;
        #thumbs {
          margin-top: 10px;
          .bannerItem {
            width: 78px !important;
            height: 60px !important;
            margin-left: 10px;
            border: 2px solid rgba(0, 0, 0, 0);
            &:hover {
              border: 2px solid orange;
            }

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .detail_media_right {
        width: 621px;
        height: 344px;
        font-family: Microsoft YaHei !important;
        .detailInfo {
          margin-left: 30px;
          width: 591px;
          height: 344px;
          .detailHd {
            font: 400 22px microsoft yahei, simsun, sans-serif;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            padding-bottom: 15px;
            display: block;
            font-family: Microsoft YaHei;
            color: #333;
            .deIcon {
              display: inline-block;
              margin-top: -4px;
              width: 72px;
              height: 24px;
              margin-right: 10px;
              font-size: 14px;
              text-align: center;
              line-height: 24px;
              color: #fff;
              border-radius: 4px;
              background: #ff2d04;
              vertical-align: middle;
              background: linear-gradient(
                to bottom right,
                rgba(254, 110, 53, 0.7),
                #ff2d04
              );
            }
          }
          .detailSpe {
            margin: 8px 0;
            line-height: 1.8;
            position: relative;
            border: 1px dashed #2680ff;
            padding: 17px 14px 12px 14px;
            border-radius: 10px;
            dt {
              background: #2680ff;
              border-radius: 0 100px 100px 0;
              color: #fff;
              width: 90px;
              text-align: center;
              height: 20px;
              line-height: 20px;
              position: absolute;
              left: -2px;
              top: -8px;
              font-size: 12px;
            }
            dd {
              position: relative;
              padding-left: 18px;
              color: #333;
              word-wrap: break-word;
              font-size: 14px;
              i {
                position: absolute;
                left: 0;
                top: 6.6px;
                width: 8px;
                height: 8px;
                background: #2680ff;
                border: 2px solid #d9e8ff;
                border-radius: 8px;
              }
            }
          }
          .detail_proInfo {
            position: relative;
            height: 60px;
            display: flex;
            align-items: center;
            white-space: nowrap;
            background-color: #fffbf5;
            padding-left: 15px;
            .price_text {
              margin-right: 10px;
              color: #ff6913;
              dfn {
                font: 400 20px tahoma;
                font-size: 20px;
                vertical-align: -1px;
                margin-right: 4px;
              }
              strong {
                font-family: ArialMT;
                font: 400 20px tahoma;
                font-size: 30px;
                vertical-align: -1px;
                margin-right: 3px;
              }
            }
            .saleInfo {
              display: flex;
              margin: 0 20px 0 28px;
              .point {
                width: 60px;
                text-align: center;
                font-weight: 400;
                margin-right: 25px;
                .amount {
                  font-size: 16px;
                  color: #ff6913;
                  line-height: 18px;
                  padding-bottom: 4px;
                }
              }
            }
          }
          .detail_address {
            vertical-align: middle;
            position: relative;
            line-height: 26px;
            font-family: Microsoft YaHei;
            font-size: 12px;
            color: #333;
            clear: both;
            height: 26px;
            .aline {
              display: inline-block;
              width: 114px;
              margin-right: 5px;
              height: 15px;
              font-family: Microsoft YaHei;
              font-size: 12px;
              color: #333;
            }
            .dest {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              max-width: 428px;
              letter-spacing: 0.8px;
              margin-right: 3px;
              .promoItem {
                background: #fff;
                border-width: 1px;
                border-style: solid;
                border-color: rgba(255, 105, 19, 0.38);
                border-radius: 2px;
                height: 22px;
                padding-left: 6px;
                padding-right: 6px;
                line-height: 22px;
                margin-right: 4px;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #ff6913;
              }
              .promoDes {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #333;
                line-height: 14px;
              }
            }
          }
          .line {
            width: 100%;
            padding-top: 20px;
            border-top: 1px dashed #ccc;
          }
        }
      }
    }
    .detail_book {
      background-color: #fff;
      padding-top: 48px;
      display: flex;
      .bookList {
        width: 530px;
        .list {
          margin-bottom: 18px;
          display: flex;
          label {
            display: inline-block;
            width: 100px;
            height: 100%;
            min-height: 28px;
            line-height: 28px;
            font-size: 12px;
            color: #333;
            margin-right: 5px;
          }
          .choose_wrap {
            font-size: 12px;
            width: 430px;
            a {
              display: inline-block;
              min-width: 10px;
              border: 1px solid #ccc;
              text-align: left;
              margin-right: 10px;
              margin-bottom: 8px;
              border-radius: 4px;
              color: #333;
              padding: 5px 10px 5px 10px;
              max-width: 380px;
            }
            .active {
              background: #2680ff;
              color: #fff;
            }
          }
        }
      }
      .bookComp {
        width: 560px;
        // border-left: 1px dashed #ccc;
        .list {
          margin-bottom: 18px;
          display: flex;

          label {
            display: inline-block;
            width: 100px;
            height: 40px;
            min-height: 28px;
            line-height: 40px;
            font-size: 12px;
            color: #333;
            margin-right: 5px;
          }
          .dataWidth {
            width: 135px !important;
            .date-box-tip {
              display: inline-block;
              height: 28px;
              line-height: 28px;
              margin-left: 20px;
              color: #c6a553;
            }
          }
          .peopleNum {
            width: 418px;
            height: 40px;
            min-height: 28px;
            line-height: 20px;
            .peo {
              min-height: 28px;
              margin-bottom: 10px;
              display: flex;
              justify-content: space-between;
              .peoLeft {
                max-width: 310px;
                vertical-align: sub;
                p {
                  display: block;
                  max-width: 300px;
                  color: #333;
                  span {
                    color: #9b9b9b !important;
                    margin-left: 12px;
                  }
                }
              }
              .peoRight {
                // float: right;
                .num_box {
                  display: inline-block;
                  border: 1px solid #2680ff;
                  height: 26px;
                  overflow: hidden;
                  vertical-align: middle;
                  box-sizing: border-box;
                  margin-bottom: 4px;
                  .cut {
                    display: inline-block;
                    height: 26px;
                    width: 26px;
                    vertical-align: top;
                    background: url("https://pages.c-ctrip.com/activity/online/detail_icon_all_new.png")
                      no-repeat 6px -289px;
                    background-color: #2680ff;
                  }
                  input {
                    color: #000;
                    height: 26px;
                    width: 48px;
                    text-align: center;
                    text-indent: 0;
                    vertical-align: middle;
                    border: none;
                    outline: 0;
                    font-size: 12px;
                    overflow: visible;
                  }
                  .add {
                    display: inline-block;
                    height: 26px;
                    width: 26px;
                    vertical-align: top;
                    background: url("https://pages.c-ctrip.com/activity/online/detail_icon_all_new.png")
                      no-repeat 8px -319px;
                    background-color: #2680ff;
                  }
                }
              }
            }
          }
        }
        .condiv {
          width: 100%;
          padding-top: 20px;
          border-bottom: 1px dashed #ccc;
          .bookBtn {
            // display: inline-block;
            width: 178px;
            height: 50px;
            background: linear-gradient(90deg, #ffa900 0, #ff7201 100%);
            color: #fff;
            font-size: 26px;
            line-height: 50px;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
            float: right;
            // position: relative;
          }
          .bookPrice {
            margin-top: 20px;
            // display: inline-block;
            margin-right: 29px;
            float: right;
            font-size: 14px;
            .selling-price {
              color: #333;
              display: block;
              text-align: right;
              span {
                margin-left: 6px;
                font-size: 24px;
                height: 32px;
                line-height: 32px;
                dfn {
                  font-style: normal;
                  color: #ff6913;
                  font-size: 32px;
                  i {
                    font-style: normal;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
