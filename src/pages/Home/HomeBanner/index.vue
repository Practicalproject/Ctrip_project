<template>
  <div>
    <div class="wrap">
      <!-- swiper轮播图 -->
      <div class="wrp_wiper">
        <div class="swiper_contain">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./images/1.jpg" />
              </div>
              <div class="swiper-slide">
                <img src="./images/2.jpg" />
              </div>
              <div class="swiper-slide">
                <img src="./images/3.jpg" />
              </div>
              <div class="swiper-slide">
                <img src="./images/4.jpg" />
              </div>
              <div class="swiper-slide">
                <img src="./images/5.jpg" />
              </div>
              <div class="swiper-slide">
                <img src="./images/6.jpg" />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!-- 搜索框 -->
      <div class="wrap_positioning">
        <div class="positioning_small">
          <div class="small_left"></div>
          <div class="small_right"></div>
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
      // 左侧边栏tab导航
      tabPosition: "left",

      //   activeName: "second",

      // 表单需要
      form: {
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
  methods: {
    //   form表单
    onSubmit() {},
    // tab切换
    handleClick(tab, event) {},
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable:true,
      //   },
    });
  },
};
</script>
<style lang='less' scoped>
.wrap {
  position: relative;
  .wrp_wiper {
    .swiper_contain {
      margin-bottom: 20px;
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
  }
  .wrap_positioning {
    width: 1180px;
    height: 340px;
    // background-color: red;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
    .positioning_small{
      background-color: salmon;
      width: 580px;
      height: 300px;
      .small_left{
        width: 100px;
        height: 100px;
        background-color: skyblue;
      }
      .small_right{
        width: 100px;
        height: 100px;
        background-color: sienna;
      }
    }
  }
}
</style>