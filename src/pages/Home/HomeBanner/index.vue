<template>
  <div>
    <div class="wrap">
      <div>
        <!-- swiper轮播图 -->
        <div>
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
        <!-- 搜索框 -->
        <div>
          <div>
            <el-tabs :tab-position="tabPosition">
              <el-tab-pane label="酒店">
                <el-tabs @tab-click="handleClick">
                  <el-tab-pane label="国内酒店" name="first">
                  </el-tab-pane>
                  <el-tab-pane label="海外酒店" name="second"></el-tab-pane>
                  <el-tab-pane label="民宿" name="third"></el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="机票">
                <el-tabs @tab-click="handleClick">
                  <el-tab-pane label="国内机票" name="first"></el-tab-pane>
                  <el-tab-pane
                    label="国际•港澳台机票"
                    name="second"
                  ></el-tab-pane>
                  <el-tab-pane label="发现低价" name="third"></el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="旅游" addable>
                <el-tabs @tab-click="handleClick">
                  <el-tab-pane label="全部" name="first"></el-tab-pane>
                  <el-tab-pane label="门票" name="second"></el-tab-pane>
                  <el-tab-pane label="周边游" name="third"></el-tab-pane>
                  <el-tab-pane label="自由行" name="fourth"></el-tab-pane>
                  <el-tab-pane label="跟团游" name="gentuanyou"></el-tab-pane>
                  <el-tab-pane label="邮轮" name="youlun"></el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="跟团游">
                <el-tabs @tab-click="handleClick">
                  <el-tab-pane label="推荐" name="first"></el-tab-pane>
                  <el-tab-pane label="周边跟团" name="second"></el-tab-pane>
                  <el-tab-pane label="境内跟团" name="third"></el-tab-pane>
                  <el-tab-pane label="出境跟团" name="fourth"></el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="打包订">
                <el-tabs @tab-click="handleClick">
                  <el-tab-pane label="机票+酒店" name="first"></el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="火车">
                <el-tabs @tab-click="handleClick">
                  <el-tab-pane label="国内火车票" name="first"></el-tab-pane>
                  <el-tab-pane
                    label="国际/港台火车票"
                    name="second"
                  ></el-tab-pane>
                  <el-tab-pane label="国内汽车票" name="third"></el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="用车">
                <el-tabs @tab-click="handleClick">
                  <el-tab-pane label="国内接送机" name="first"></el-tab-pane>
                  <el-tab-pane label="境外接送机" name="second"></el-tab-pane>
                  <el-tab-pane label="国内租车" name="third"></el-tab-pane>
                  <el-tab-pane label="境外租车" name="fourth"></el-tab-pane>
                  <el-tab-pane label="日租跑车" name="rizu"></el-tab-pane>
                </el-tabs>
              </el-tab-pane>
            </el-tabs>
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
body {
  font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
  color: #333;
}
</style>