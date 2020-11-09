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
      <div class="swiper-container" ref="mySwiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://dimg04.c-ctrip.com/images/0zg4612000852nrt0CDAE.jpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://dimg04.c-ctrip.com/images/0zg1m1200087lhhp087AD.jpg"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://dimg04.c-ctrip.com/images/0zg4612000852nrt0CDAE.jpg"
            />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Swiper",
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
.container {
  width: 1180px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  // 左侧
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
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        span {
          float: left;
          margin-right: 10px;
          a {
            color: #333;
            font-size: 14px;
            line-height: 1.5;
          }
          &:hover {
            cursor: pointer;
            a {
              color: #0086f6;
            }
          }
        }
      }
    }
    .left_bottom {
      // background-color: skyblue;
      height: 200px;
      width: 100%;
      // border-bottom: 1px solid #ddd;
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
      .bottom_title {
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        overflow: hidden;
        span {
          float: left;
          margin-right: 10px;
          a {
            color: #333;
            font-size: 14px;
            line-height: 1.5;
            display: block;
            margin-right: 5px;
          }
          &:hover {
            cursor: pointer;
            a {
              color: #0086f6;
            }
          }
        }
      }
    }
  }
  // 右侧
  .block {
    // float: right;
    width: 830px;
    // height: 410px;
    background-color: red;
    .swiper-container {
      width: 830px;
      height: 411px;
      .swiper-wrapper {
        img {
          width: 830px;
          height: 411px;
        }
      }
      .swiper-pagination {
        .swiper-pagination-bullet swiper-pagination-bullet-active {
          background-color: red;
        }
      }
    }
  }
}
</style>
