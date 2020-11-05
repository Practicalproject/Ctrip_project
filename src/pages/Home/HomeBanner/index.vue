<template>
  <div>
    <div class="wrap">
      <!-- swiper轮播图 -->
      <div class="wrp_wiper">
        <div class="swiper-container" ref="mySwiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/1.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/2.jpg" />
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
          <div class="small_left">
            <ul>
              <li class="active">
                <a href="javascript:;">酒店</a>
              </li>
              <li>
                <a href="javascript:;">酒店</a>
              </li>
              <li>
                <a href="javascript:;">酒店</a>
              </li>
              <li>
                <a href="javascript:;">酒店</a>
              </li>
              <li>
                <a href="javascript:;">酒店</a>
              </li>
              <li>
                <a href="javascript:;">酒店</a>
              </li>
              <li>
                <a href="javascript:;">酒店</a>
              </li>
            </ul>
          </div>
          <!-- 右侧内容 -->
          <div class="small_right">
            <!-- 上方导航 -->
            <div class="right_top">
              <span >
                <a href="javascript:;">国内酒店</a>
              </span>
              <span class="right_top_action">
                <a href="javascript:;">海外酒店</a>
              </span>
              <span>
                <a href="javascript:;">民宿</a>
              </span>
            </div>
            <!-- 下方表单 -->
            <div class="right_bot">
              <el-form
                ref="form"
                :model="sizeForm"
                label-width="80px"
                size="mini"
              >
                <el-form-item label="目的地">
                  <el-input
                    v-model="sizeForm.name"
                    placeholder="中文/拼音"
                  ></el-input>
                </el-form-item>
                <el-form-item label="入住日期">
                  <el-col :span="10">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="sizeForm.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="4">退房日期</el-col>
                  <el-col :span="10">
                    <el-time-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="sizeForm.date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="入住日期">
                  <el-col :span="10">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="sizeForm.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="4">退房日期</el-col>
                  <el-col :span="10">
                    <el-time-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="sizeForm.date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="入住日期">
                  <el-col :span="10">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="sizeForm.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="4">退房日期</el-col>
                  <el-col :span="10">
                    <el-time-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="sizeForm.date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-button type="success" class="el_button">搜索</el-button>
              </el-form>
            </div>
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
  name: "HomeBanner",
  data() {
    return {
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  watch: {
    bannerList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.mySwiper1, {
            loop: true, // 循环模式选项
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
      .small_left {
        width: 90px;
        height: 300px;
        background-color: #2577e3;
        ul {
          li {
            height: 40px;
            line-height: 40px;
            // text-align: center;
            a {
              font-size: 14px;
              display: block;
              height: 35px;
              width: 60px;
              margin-left: 20px;
              border-bottom: 1px dashed #fff;
              color: white;
            }
          }
          .active {
            background-color: #fff;
            border-left: 5px solid #ff9915;
            a {
              color: #2577e3;
              font-weight: 700;
            }
          }
        }
      }
      .small_right {
        width: 490px;
        height: 300px;
        // background-color: sienna;
        padding: 20px 20px 5px;
        .right_top {
          display: flex;
          border-bottom: 1px solid #ddd;
          margin-bottom: 8px;
          .right_top_action {
            a {
              color: #06c;
              background-position: 50% -10px;
              cursor: default;
              text-decoration: none;
              border-bottom: 2px solid #2577e3;
            }
          }
          span {
            a {
              height: 25px;
              line-height: 25px;
              margin-right: 20px;
              color: #333;
              font-size: 16px;
              padding-bottom: 3px;
            }
          }
        }
        .right_bot {
          position: relative;
          .el_button {
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
}
</style>