<template>
  <div>
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
            <div class="swiper-pagination"></div>
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
                <a >境外租车</a>
                <a >国内租车</a>
                <a >接送机</a>
                <a >接送火车</a>
                <a >按天包车</a>
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
                      <input style="width:268px;margin-right:2px" type="text"  data-picker/>
                      <input style="width:154px" type="text"  data-picker>
                    </li>
                    <li>
                        <span>还车时间</span>
                        <input style="width:268px ;margin-right:2px" type="text" data-picker>
                        <input  style="width:154px" type="text" data-picker>
                    </li>
                  </ul>
                </form>
              </div>
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
  name: "useCart",
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  },
};
</script>
<style lang='less' scoped>
.wrap {
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
  .smallIcon {
    width: 1180px;
    margin: 0 auto;
    .smallWrap {
      padding: 10px 0 20px 0;
    }
  }
  .searchOut {
    z-index: 1;
    width: 1180px;
    height: 360px;
    background: pink;
    position: absolute;
    left: 370px;
    top: 116px;
    .searchBox {
      .searTag{
          a{
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