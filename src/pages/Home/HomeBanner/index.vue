<template>
  <div class="swiper-container">
    <div class="mod-wrap">
      <div class="mod">
        <h2 class="line-title">境外直通车<i class="icon-arrow"></i></h2>
        <ul class="line-list">
          <li>
            <i class="cui-icon-hotel"></i><a href="javascript:;">海外酒店</a>
          </li>
          <li>
            <i class="cui-icon-flight"></i
            ><a href="javascript:;">国际•港澳台机票</a>
          </li>
          <li>
            <i class="cui-icon-car"></i><a href="javascript:;">境外租车</a>
          </li>
          <li>
            <i class="cui-icon-train"></i
            ><a href="javascript:;">国际/港台火车票</a>
          </li>
          <li>
            <i class="cui-icon-outboundtravel"></i
            ><a href="javascript:;">出境游</a>
          </li>
          <li>
            <i class="cui-icon-HHtravel"></i><a href="javascript:;">高端游</a>
          </li>
          <li>
            <i class="cui-icon-ticket"></i><a href="javascript:;">门票•玩乐</a>
          </li>
          <li><i class="cui-icon-visa"></i><a href="javascript:;">签证</a></li>
          <li>
            <i class="cui-icon-insurance"></i><a href="javascript:;">保险</a>
          </li>
          <li>
            <i class="cui-icon-wifi"></i><a href="javascript:;">WiFi•电话卡</a>
          </li>
          <li>
            <i class="cui-icon-pickup"></i><a href="javascript:;">境外接送机</a>
          </li>
          <li>
            <i class="cui-icon-foreign"></i><a href="javascript:;">外币兑换</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="wrap">
      <!-- swiper轮播图 -->
      <div class="wrp_wiper">
        <div class="swiper-container" ref="mySwiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/1.jpg"/>
            </div>
            <div class="swiper-slide">
              <img src="./images/2.jpg"/>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </div>
      </div>
      <!-- 搜索框 -->
      <div class="wrap_positioning">
        <div class="positioning_small">
          <!-- 左侧列表 -->
          <ul class="s_tab">
            <li class="s_tab_current active"><b>酒店</b></li>
            <li class="s_tab_nocurrent"><b>机票</b></li>
            <li class="s_tab_nocurrent"><b>旅游</b></li>
            <li class="s_tab_nocurrent"><b>跟团游</b></li>
            <li class="s_tab_nocurrent"><b>打包订</b></li>
            <li class="s_tab_nocurrent"><b>火车</b></li>
            <li class="s_tab_nocurrent"><span class="label-cn" style="right:-6px;top:-6px;"><em>租车周三惠</em><i
                class="triangle"></i></span><b>用车</b></li>
          </ul>
          <!--          右侧列表-->
          <div class="s_content">
            <p class="s_subtab_a" id="hotelSwitch">
              <a href="javascript:;" class="current">国内酒店</a>
              <a href="javascript:;">海外酒店</a>
              <a href="javascript:;">民宿</a>
              <a style="display:none;" href="javascript:;" data-index="3" class="">酒店团购</a>
              <a style="display:none;" href="javascript:;" data-index="4" class="">酒店+景点</a>
              <a style="display:none;" href="javascript:;" data-index="5" class="">会议•团房</a>
            </p>
            <el-form label-width="80px">
              <el-form-item label="目的地">
                <el-input placeholder="中文/拼音"></el-input>
              </el-form-item>

              <template>
                <el-col :span="12">
                  <el-form-item label="入住日期">
                    <el-date-picker placeholder="选择时间" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="退房日期">
                    <el-date-picker placeholder="选择时间" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
              </template>

              <template>
                <el-col :span="12">
                  <el-form-item label="房间数">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="住客数">
                    <el-input @focus="popUp"/>
                  </el-form-item>
                </el-col>
              </template>

              <template>
                <el-col :span="12">
                  <el-form-item label="酒店级别">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="关键词">
                    <el-input @focus="popUp" placeholder="(选填)酒店名/地标/商圈"/>
                  </el-form-item>
                </el-col>
              </template>
              <el-form-item>
                <el-button>搜索</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!--          <div class="small_left">-->
          <!--            <ul>-->
          <!--              <li class="active">-->
          <!--                <a href="javascript:;">酒店</a>-->
          <!--              </li>-->
          <!--              <li>-->
          <!--                <a href="javascript:;">酒店</a>-->
          <!--              </li>-->
          <!--              <li>-->
          <!--                <a href="javascript:;">酒店</a>-->
          <!--              </li>-->
          <!--              <li>-->
          <!--                <a href="javascript:;">酒店</a>-->
          <!--              </li>-->
          <!--              <li>-->
          <!--                <a href="javascript:;">酒店</a>-->
          <!--              </li>-->
          <!--              <li>-->
          <!--                <a href="javascript:;">酒店</a>-->
          <!--              </li>-->
          <!--              <li>-->
          <!--                <a href="javascript:;">酒店</a>-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
          <!--          &lt;!&ndash; 右侧内容 &ndash;&gt;-->
          <!--          <div class="small_right">-->
          <!--            &lt;!&ndash; 上方导航 &ndash;&gt;-->
          <!--            <div class="right_top">-->
          <!--              <span>-->
          <!--                <a href="javascript:;">国内酒店</a>-->
          <!--              </span>-->
          <!--              <span class="right_top_action">-->
          <!--                <a href="javascript:;">海外酒店</a>-->
          <!--              </span>-->
          <!--              <span>-->
          <!--                <a href="javascript:;">民宿</a>-->
          <!--              </span>-->
          <!--            </div>-->
          <!--            &lt;!&ndash; 下方表单 &ndash;&gt;-->
          <!--            <div class="right_bot">-->
          <!--              <el-form-->
          <!--                  ref="form"-->
          <!--                  :model="sizeForm"-->
          <!--                  label-width="80px"-->
          <!--                  size="mini"-->
          <!--              >-->
          <!--                <el-form-item label="目的地">-->
          <!--                  <el-input-->
          <!--                      v-model="sizeForm.name"-->
          <!--                      placeholder="中文/拼音"-->
          <!--                  ></el-input>-->
          <!--                </el-form-item>-->
          <!--                <el-form-item label="入住日期">-->
          <!--                  <el-col :span="10">-->
          <!--                    <el-date-picker-->
          <!--                        type="date"-->
          <!--                        placeholder="选择日期"-->
          <!--                        v-model="sizeForm.date1"-->
          <!--                        style="width: 100%"-->
          <!--                    ></el-date-picker>-->
          <!--                  </el-col>-->
          <!--                  <el-col class="line" :span="4">退房日期</el-col>-->
          <!--                  <el-col :span="10">-->
          <!--                    <el-time-picker-->
          <!--                        type="date"-->
          <!--                        placeholder="选择日期"-->
          <!--                        v-model="sizeForm.date2"-->
          <!--                        style="width: 100%"-->
          <!--                    ></el-time-picker>-->
          <!--                  </el-col>-->
          <!--                </el-form-item>-->
          <!--                <el-form-item label="入住日期">-->
          <!--                  <el-col :span="10">-->
          <!--                    <el-date-picker-->
          <!--                        type="date"-->
          <!--                        placeholder="选择日期"-->
          <!--                        v-model="sizeForm.date1"-->
          <!--                        style="width: 100%"-->
          <!--                    ></el-date-picker>-->
          <!--                  </el-col>-->
          <!--                  <el-col class="line" :span="4">退房日期</el-col>-->
          <!--                  <el-col :span="10">-->
          <!--                    <el-time-picker-->
          <!--                        type="date"-->
          <!--                        placeholder="选择日期"-->
          <!--                        v-model="sizeForm.date2"-->
          <!--                        style="width: 100%"-->
          <!--                    ></el-time-picker>-->
          <!--                  </el-col>-->
          <!--                </el-form-item>-->
          <!--                <el-form-item label="入住日期">-->
          <!--                  <el-col :span="10">-->
          <!--                    <el-date-picker-->
          <!--                        type="date"-->
          <!--                        placeholder="选择日期"-->
          <!--                        v-model="sizeForm.date1"-->
          <!--                        style="width: 100%"-->
          <!--                    ></el-date-picker>-->
          <!--                  </el-col>-->
          <!--                  <el-col class="line" :span="4">退房日期</el-col>-->
          <!--                  <el-col :span="10">-->
          <!--                    <el-time-picker-->
          <!--                        type="date"-->
          <!--                        placeholder="选择日期"-->
          <!--                        v-model="sizeForm.date2"-->
          <!--                        style="width: 100%"-->
          <!--                    ></el-time-picker>-->
          <!--                  </el-col>-->
          <!--                </el-form-item>-->
          <!--                <el-button type="success" class="el_button">搜索</el-button>-->
          <!--              </el-form>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";

export default {
  name: "HomeBanner",
  data() {
    return {
      options: [
        {
          value: '1',
          label: '一间'
        }, {
          value: '2',
          label: '两间'
        }, {
          value: '3',
          label: '三间'
        }, {
          value: '4',
          label: '四间'
        }, {
          value: '5',
          label: '五间'
        }
      ],
      value: '',
      visible: false,
    }
  },
  // data() {
  //   return {
  //     sizeForm: {
  //       name: "",
  //       region: "",
  //       date1: "",
  //       date2: "",
  //       delivery: false,
  //       type: [],
  //       resource: "",
  //       desc: "",
  //     },
  //   };
  // },
  methods: {
    popUp() {
      console.log("弹出")
    }
  },
  watch: {
    bannerList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.mySwiper1, {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            // navigation: {
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // },
          });
        });
      },
    },
  },
};
</script>


<style lang='less' scoped>
.swiper-container {
  width: 100%;

  .mod-wrap {
    width: 100%;
    height: 22px;
    margin: 10px auto 10px;
    line-height: 22px;
    overflow: hidden;

    .mod {
      width: 1180px;
      margin: 0 auto;
      height: 22px;
      line-height: 22px;

      .line-title {
        position: relative;
        float: left;
        margin-right: 20px;
        padding: 0 5px;
        background: #74a8ed;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        border-radius: 2px;

        .icon-arrow {
          position: absolute;
          right: -8px;
          _right: -9px;
          top: 6px;
          width: 0;
          height: 0;
          border: 4px solid #74a8ed;
          border-color: #fff #fff #fff #74a8ed;
          overflow: hidden;
        }
      }

      .line-list {
        li {
          float: left;
          margin: 0 13px 0 0;
          line-height: 22px;

          a {
            color: #666;

            &:hover {
              color: #3983e5;
            }
          }

          .cui-icon-flight,
          .cui-icon-hotel,
          .cui-icon-train,
          .cui-icon-bus,
          .cui-icon-boat,
          .cui-icon-car,
          .cui-icon-vacations,
          .cui-icon-ticket,
          .cui-icon-huodong,
          .cui-icon-insurance,
          .cui-icon-HHtravel,
          .cui-icon-wifi,
          .cui-icon-visa,
          .cui-icon-outboundtravel,
          .cui-icon-taocan,
          .cui-icon-card,
          .cui-icon-g,
          .cui-icon-tuan,
          .cui-icon-standby,
          .cui-icon-foreign,
          .cui-icon-pickup {
            display: inline-block;
            background-image: url(//pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
            background-repeat: no-repeat;
            width: 16px;
            height: 16px;
            vertical-align: middle;
            margin-right: 5px;
            margin-top: -1px;
          }

          /*机票*/

          .cui-icon-hotel {
            background-position: -26px 0;
          }

          /*酒店*/

          .cui-icon-train {
            background-position: -52px 0;
          }

          /*火车票*/

          .cui-icon-bus {
            background-position: -78px 0;
          }

          /*汽车票*/

          .cui-icon-boat {
            background-position: -104px 0;
          }

          /*船票*/

          .cui-icon-car {
            width: 17px;
            background-position: -130px 0;
          }

          /*用车*/

          .cui-icon-vacations {
            background-position: 0 -26px;
          }

          /*旅游*/

          .cui-icon-ticket {
            background-position: -26px -26px;
          }

          /*门票*/

          .cui-icon-huodong {
            background-position: -52px -26px;
          }

          /*玩乐*/

          .cui-icon-insurance {
            background-position: -78px -26px;
          }

          /*保险*/

          .cui-icon-HHtravel {
            background-position: -104px -26px;
          }

          /*HHtravel*/

          .cui-icon-wifi {
            background-position: -130px -26px;
          }

          /*wifi*/

          .cui-icon-visa {
            background-position: 0 -52px;
          }

          /*签证*/

          .cui-icon-outboundtravel {
            background-position: -26px -52px;
          }

          /*出境游*/

          .cui-icon-taocan {
            background-position: -52px -52px;
          }

          /*酒+景*/

          .cui-icon-card {
            background-position: -78px -52px;
          }

          /*礼品卡*/

          .cui-icon-g {
            background-position: -104px -52px;
          }

          /*全球购*/

          .cui-icon-tuan {
            background-position: -130px -52px;
          }

          /*团购*/

          .cui-icon-standby {
            background-position: 0 -78px;
          }

          /*保底*/

          .cui-icon-foreign {
            background-position: -24px -79px;
          }

          .cui-icon-pickup {
            background-position: -26px -78px;
            background-image: url(//pic.c-ctrip.com/platform/online/home/un_icon_index_type.png);
          }
        }
      }
    }
  }

  .wrap {
    position: relative;
    // 轮播图
    .wrp_wiper {
      .swiper-container {
        height: 340px;

        .swiper-wrapper {
          .swiper-slide {
            img {
              height: 340px;
            }
          }
        }
      }
    }

    // 搜索页
    .wrap_positioning {
      width: 1180px;
      height: 340px;
      // background-color: red;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 1;
      transform: translateX(-50%);

      .positioning_small {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        background-color: white;
        width: 580px;
        height: 300px;
        display: flex;

        .s_tab {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #2577e3;
          width: 90px;
          height: 300px;

          li {
            position: relative;
            float: left;
            display: inline-block;
            width: 100%;
            height: 42px;
            padding: 0 17px 0 13px;
            margin: 0;
            border-left: 4px solid #2577e3;
            font: 16px/42px "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
            text-align: left;
            color: #fff;
            white-space: nowrap;
            cursor: pointer;

            &:first-of-type.active {
              top: 0px;
            }

            &:last-of-type {
              b {
                border: none;
              }
            }

            &.active, &:hover {
              border-left: 4px solid #ff9915;
              background: #fff;
              color: #2577e3;
              top: -1px;

              b {
                border-bottom: none;
              }
            }

            .label-cn {
              position: absolute;
              z-index: 9;
              right: 0px;
              top: -6px;
              display: inline-block;
              padding: 0 2px;
              height: 15px;
              line-height: 15px;
              background-color: #ff9913;
              color: #fff;

              em {
                display: inline-block;
                -webkit-transform: scale(.92);
                -ms-transform: scale(.92);
                -o-transform: scale(.92);
                transform: scale(.92);
                font-size: 12px;
                vertical-align: 2px;
                font-style: normal;
                line-height: 15px;
              }
            }

            b {
              position: relative;
              display: block;
              height: 42px;
              border-bottom: 1px dashed #aac3f1;
              font-weight: normal;
            }
          }
        }

        .s_content {
          background-color: #fff;
          margin-left: 90px;
          width: 490px;
          height: 300px;
          padding: 20px 20px 5px;
          _overflow: hidden;
          text-align: left;

          .s_subtab_a {
            background-image: url(//pic.c-ctrip.com/index/un_bg_line_141218.png);
            position: relative;
            font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
            height: 27px;
            line-height: 20px;
            background-position: 0 -98px;
            background-repeat: repeat-x;
            margin-bottom: 8px;

            a {
              position: relative;
              color: #666;
              font-size: 14px;
              font-weight: bold;
              line-height: 20px;
              text-decoration: none;
              height: 25px;
              float: left;
              margin-right: 20px;
              outline: none medium;
              cursor: pointer;
              display: block;
            }

            .current {
              background-image: url(//pic.c-ctrip.com/index/un_bg_line_141218.png);
              background-repeat: no-repeat;
              color: #06c;
              background-position: 50% -12px;
              cursor: default;
              text-decoration: none;
              padding-bottom: 2px;

            }
          }

          /deep/ .el-form {
            .el-form-item {
              margin-bottom: 0;

              .el-input__inner {
                border-color: #bbb #ddd #ddd #bbb;
                border-radius: 0;
                height: 28px;
                box-shadow: 1px 1px 1px #ddd inset;
              }

              .el-form-item__content {
                position: static;

                .el-button {
                  float: right;
                  margin-top: 30px;
                  width: 145px;
                  height: 33px;
                  color: #fff;
                  text-shadow: 1px 1px 0 #cf7000;
                  background-color: #ffb000;
                  border: solid 1px #e77c00;
                  padding: 0;
                  font-size: 16px;
                  font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
                  font-weight: bold;
                  cursor: pointer;
                  text-align: center;
                  letter-spacing: 0.4em;
                  text-indent: 0.4em;
                  box-shadow: 0 1px 0 rgba(95, 50, 0, 0.7);
                  border-radius: 3px;

                  &:hover {
                    border: 2px solid #000;
                    box-shadow: none;
                    background-color: #f79700;
                    //border-color: #de7800;
                  }

                  span {
                    width: 100%;
                    height: 100%;
                  }

                }
              }

            }


          }
        }

        //.small_left {
        //  width: 90px;
        //  height: 300px;
        //  background-color: #2577e3;
        //  ul {
        //    li {
        //      height: 40px;
        //      line-height: 40px;
        //      // text-align: center;
        //      a {
        //        font-size: 14px;
        //        display: block;
        //        height: 35px;
        //        width: 60px;
        //        margin-left: 20px;
        //        border-bottom: 1px dashed #fff;
        //        color: white;
        //      }
        //    }
        //    .active {
        //      background-color: #fff;
        //      border-left: 5px solid #ff9915;
        //      a {
        //        color: #2577e3;
        //        font-weight: 700;
        //      }
        //    }
        //  }
        //}
        //.small_right {
        //  width: 490px;
        //  height: 300px;
        //  // background-color: sienna;
        //  padding: 20px 20px 5px;
        //  .right_top {
        //    display: flex;
        //    border-bottom: 1px solid #ddd;
        //    margin-bottom: 8px;
        //    .right_top_action {
        //      a {
        //        color: #06c;
        //        background-position: 50% -10px;
        //        cursor: default;
        //        text-decoration: none;
        //        border-bottom: 2px solid #2577e3;
        //      }
        //    }
        //    span {
        //      a {
        //        height: 25px;
        //        line-height: 25px;
        //        margin-right: 20px;
        //        color: #333;
        //        font-size: 16px;
        //        padding-bottom: 3px;
        //      }
        //    }
        //  }
        //  .right_bot {
        //    position: relative;
        //    .el_button {
        //      position: absolute;
        //      right: 0;
        //    }
        //  }
        //}
      }
    }
  }
}
</style>