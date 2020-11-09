<template>
  <div class="search-map-container">
    <h2 class="search-map-title">低价地图</h2>
    <div class="channel-search-map">
      <div class="search-box">
        <div class="search-box-header">
          <div class="city-picker-selector">
            <div class="">
              <div class="city-name-con" @click="changeUpDown()">
                <span>北京出发</span
                ><i class="iconfont icon-arrow-down-bold" v-if="isShow"></i
                ><i class="iconfont icon-arrow-up-bold" v-else></i>
              </div>
            </div>
          </div>
        </div>
        <div class="search-box-calendar modify-search-v3">
          <div class="form-item-v3-group form-item-v3-group-ow clearfix">
            <div class="form-item-v3 flt-date">
              <label class="form-label-v3">出发日期</label>
              <div class="depart-date">
                <div
                  u_key="date_picker"
                  u_remark="日期选择框[flightWay:OW,date:2020-11-13,mode:departTime]"
                  class="modifyDate depart-date"
                  style="display: inline-block; width: 100%"
                >
                  <label
                    ><div class="date-components">
                      <input
                        type="text"
                        placeholder="yyyy-mm-dd"
                        value="2020-11-13"
                      />
                      <div date_input_ref="[object Object]"></div>
                    </div>
                    <span class="week" style="display: none">周五</span></label
                  >
                </div>
              </div>
            </div>
            <div class="form-item-v3 flt-date">
              <div class="oneway"><a>+ 添加返程</a></div>
            </div>
          </div>
        </div>
        <div class="country-con">
          <ul class="country-list">
            <li class="active" @click="changeMap(0)">
              <div class="text-item">
                <div class="name-price">大理</div>
                <div class="price">
                  <dfn>¥</dfn><span class="amount">113</span
                  ><span class="qi">起</span>
                </div>
              </div>
              <div class="country-img">
                <img src="//pages.c-ctrip.com/flt_static/muse/TH.jpg" />
              </div>
            </li>
            <li class="item-right" @click="changeMap(1)">
              <div class="text-item">
                <div class="name-text">青岛</div>
                <div class="no-result-text">
                  当前日期无结果<br />可切换其他日期查看
                </div>
              </div>
              <div class="country-img">
                <img src="//pages.c-ctrip.com/flt_static/muse/DE.jpg" />
              </div>
            </li>
            <li class=" " @click="changeMap(2)">
              <div class="text-item">
                <div class="name-text">香港</div>
                <div class="no-result-text">
                  当前日期无结果<br />可切换其他日期查看
                </div>
              </div>
              <div class="country-img">
                <img src="//pages.c-ctrip.com/flt_static/muse/GATDQ.jpg" />
              </div>
            </li>
            <li class="item-right" @click="changeMap(3)">
              <div class="text-item">
                <div class="name-text">三亚</div>
                <div class="no-result-text">
                  当前日期无结果<br />可切换其他日期查看
                </div>
              </div>
              <div class="country-img">
                <img src="//pages.c-ctrip.com/flt_static/muse/MY.jpg" />
              </div>
            </li>
            <li class="search-more" href="javascript:;">
              <div class="text-item">
                <div class="more">更多</div>
                <div class="iconfont icon-more"></div>
                <div class="text">探索世界低价</div>
              </div>
              <div class="front-img">
                <img
                  src="http://pic.c-ctrip.com/fltcommon/index/more_frontImg.png"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="low_price_map">
        <!-- <div
          id="divMap"
          class="map-main"
          style="
            overflow: hidden;
            position: relative;
            z-index: 0;
            background-color: rgb(243, 241, 236);
            color: rgb(0, 0, 0);
            text-align: left;
          "
        >
          <div
            style="
              overflow: visible;
              position: absolute;
              z-index: 0;
              left: -84px;
              top: -284px;
              cursor: url('https://api.map.baidu.com/images/openhand.cur') 8 8,
                default;
            "
          >
            <div
              class="BMap_mask"
              style="
                position: absolute;
                left: 84px;
                top: 284px;
                z-index: 9;
                overflow: hidden;
                user-select: none;
                width: 846px;
                height: 580px;
              "
            ></div>
            <div
              style="
                position: absolute;
                height: 0px;
                width: 0px;
                left: 0px;
                top: 0px;
                z-index: 200;
              "
            >
              <div
                style="
                  position: absolute;
                  height: 0px;
                  width: 0px;
                  left: 0px;
                  top: 0px;
                  z-index: 800;
                "
              ></div>
              <div
                style="
                  position: absolute;
                  height: 0px;
                  width: 0px;
                  left: 0px;
                  top: 0px;
                  z-index: 700;
                "
              ></div>
              <div
                style="
                  position: absolute;
                  height: 0px;
                  width: 0px;
                  left: 0px;
                  top: 0px;
                  z-index: 600;
                "
              ></div>
              <div
                style="
                  position: absolute;
                  height: 0px;
                  width: 0px;
                  left: 0px;
                  top: 0px;
                  z-index: 500;
                "
              >
                <div
                  class="popup-tip-anchor"
                  style="
                    cursor: auto;
                    user-select: none;
                    left: 549px;
                    top: 716px;
                  "
                >
                  <div class="popup-bubble-anchor">
                    <div
                      class="divCitySummaryContainer popup-bubble-content"
                      id="clone_divCityMapMark359_113_"
                      style="top: -40px"
                    >
                      <div class="map-pop pop-hover" rel-id="359_113_">
                        <p class="pop-city" rel-id="359_113_">曼谷</p>
                        <p class="pop-price" rel-id="359_113_">
                          <dfn>¥</dfn>113
                        </p>
                        <div class="map-point"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="popup-tip-anchor"
                  style="
                    cursor: auto;
                    user-select: none;
                    left: 465px;
                    top: 432px;
                  "
                >
                  <div class="popup-bubble-anchor">
                    <div
                      class="divCitySummaryContainer popup-bubble-content"
                      id="clone_divCityMapMark623_463_"
                      style="top: -40px"
                    >
                      <div class="map-pop pop-hover" rel-id="623_463_">
                        <p class="pop-city" rel-id="623_463_">清迈</p>
                        <p class="pop-price" rel-id="623_463_">
                          <dfn>¥</dfn>463
                        </p>
                        <div class="map-point"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="
                  position: absolute;
                  height: 0px;
                  width: 0px;
                  left: 0px;
                  top: 0px;
                  z-index: 400;
                "
              ></div>
              <div
                style="
                  position: absolute;
                  height: 0px;
                  width: 0px;
                  left: 0px;
                  top: 0px;
                  z-index: 300;
                "
              ></div>
              <div
                style="
                  position: absolute;
                  height: 0px;
                  width: 0px;
                  left: 0px;
                  top: 0px;
                  z-index: 201;
                "
              ></div>
              <div
                style="
                  position: absolute;
                  height: 0px;
                  width: 0px;
                  left: 0px;
                  top: 0px;
                  z-index: 200;
                "
              ></div>
            </div>
            <div
              style="
                position: absolute;
                overflow: visible;
                top: 0px;
                left: 0px;
                z-index: 1;
              "
            >
              <div
                style="
                  position: absolute;
                  overflow: visible;
                  z-index: -100;
                  left: 507px;
                  top: 574px;
                  display: block;
                  transform: translate3d(0px, 0px, 0px);
                "
              >
                <img
                  src="https://maponline0.bdimg.com/tile/?qt=vtile&amp;x=21&amp;y=3&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -44px;
                    top: -133px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline3.bdimg.com/tile/?qt=vtile&amp;x=20&amp;y=3&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -300px;
                    top: -133px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline1.bdimg.com/tile/?qt=vtile&amp;x=22&amp;y=3&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: 212px;
                    top: -133px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline3.bdimg.com/tile/?qt=vtile&amp;x=21&amp;y=2&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -44px;
                    top: 123px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline1.bdimg.com/tile/?qt=vtile&amp;x=21&amp;y=4&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -44px;
                    top: -389px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline2.bdimg.com/tile/?qt=vtile&amp;x=19&amp;y=3&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -556px;
                    top: -133px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline2.bdimg.com/tile/?qt=vtile&amp;x=20&amp;y=2&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -300px;
                    top: 123px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline0.bdimg.com/tile/?qt=vtile&amp;x=20&amp;y=4&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -300px;
                    top: -389px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline0.bdimg.com/tile/?qt=vtile&amp;x=22&amp;y=2&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: 212px;
                    top: 123px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline2.bdimg.com/tile/?qt=vtile&amp;x=22&amp;y=4&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: 212px;
                    top: -389px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline1.bdimg.com/tile/?qt=vtile&amp;x=19&amp;y=2&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -556px;
                    top: 123px;
                    max-width: none;
                    opacity: 1;
                  "
                /><img
                  src="https://maponline3.bdimg.com/tile/?qt=vtile&amp;x=19&amp;y=4&amp;z=7&amp;styles=pl&amp;scaler=1&amp;udt=20181205&amp;from=jsapi3_0"
                  style="
                    position: absolute;
                    border: none;
                    width: 256px;
                    height: 256px;
                    left: -556px;
                    top: -389px;
                    max-width: none;
                    opacity: 1;
                  "
                />
              </div>
            </div>
            <div
              style="
                position: absolute;
                overflow: visible;
                top: 0px;
                left: 0px;
                z-index: 2;
                display: none;
              "
            ></div>
            <div
              style="
                position: absolute;
                overflow: visible;
                top: 0px;
                left: 0px;
                z-index: 3;
              "
            ></div>
            <div
              style="
                position: absolute;
                overflow: visible;
                top: 0px;
                left: 0px;
                z-index: 4;
              "
            ></div>
          </div>
          <div
            class="pano_close"
            title="退出全景"
            style="z-index: 1201; display: none"
          ></div>
          <a
            class="pano_pc_indoor_exit"
            title="退出室内景"
            style="z-index: 1201; display: none"
            ><span style="float: right; margin-right: 12px">出口</span></a
          >
          <div
            class="anchorBL"
            style="
              height: 32px;
              position: absolute;
              z-index: 30;
              text-size-adjust: none;
              bottom: 20px;
              right: auto;
              top: auto;
              left: 1px;
            "
          >
            <a
              title="到百度地图查看此区域"
              target="_blank"
              href="http://map.baidu.com/?sr=1"
              style="outline: none"
              ><img
                style="border: none; width: 77px; height: 32px"
                src="https://api.map.baidu.com/images/copyright_logo.png"
            /></a>
          </div>
          <div
            id="zoomer"
            style="
              position: absolute;
              z-index: 0;
              top: 0px;
              left: 0px;
              overflow: hidden;
              visibility: hidden;
              cursor: url(https://api.map.baidu.com/images/openhand.cur) 8 8,
                default;
            "
          >
            <div class="BMap_zoomer" style="top: 0; left: 0"></div>
            <div class="BMap_zoomer" style="top: 0; right: 0"></div>
            <div class="BMap_zoomer" style="bottom: 0; left: 0"></div>
            <div class="BMap_zoomer" style="bottom: 0; right: 0"></div>
          </div>
          <div
            unselectable="on"
            class="BMap_stdMpCtrl BMap_stdMpType1 BMap_noprint anchorBR"
            style="
              width: 37px;
              height: 97px;
              bottom: 10px;
              right: 10px;
              top: auto;
              left: auto;
              position: absolute;
              z-index: 1100;
              text-size-adjust: none;
            "
          >
            <div class="BMap_stdMpPan">
              <div class="BMap_button BMap_panN" title="向上平移"></div>
              <div class="BMap_button BMap_panW" title="向左平移"></div>
              <div class="BMap_button BMap_panE" title="向右平移"></div>
              <div class="BMap_button BMap_panS" title="向下平移"></div>
              <div class="BMap_stdMpPanBg BMap_smcbg"></div>
            </div>
            <div class="BMap_stdMpZoom" style="height: 42px; width: 37px">
              <div class="BMap_button BMap_stdMpZoomIn" title="放大一级">
                <div class="BMap_smcbg"></div>
              </div>
              <div
                class="BMap_button BMap_stdMpZoomOut"
                title="缩小一级"
                style="top: 21px"
              >
                <div class="BMap_smcbg"></div>
              </div>
              <div class="BMap_stdMpSlider" style="height: 0px">
                <div class="BMap_stdMpSliderBgTop" style="height: 0px">
                  <div class="BMap_smcbg"></div>
                </div>
                <div class="BMap_stdMpSliderBgBot"></div>
                <div class="BMap_stdMpSliderMask" title="放置到此级别"></div>
                <div
                  class="BMap_stdMpSliderBar"
                  title="拖动缩放"
                  style="
                    cursor: url('https://api.map.baidu.com/images/openhand.cur')
                        8 8,
                      default;
                  "
                >
                  <div class="BMap_smcbg"></div>
                </div>
              </div>
              <div class="BMap_zlHolder">
                <div class="BMap_zlSt"><div class="BMap_smcbg"></div></div>
                <div class="BMap_zlCity"><div class="BMap_smcbg"></div></div>
                <div class="BMap_zlProv"><div class="BMap_smcbg"></div></div>
                <div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div>
              </div>
            </div>
            <div
              class="BMap_stdMpGeolocation"
              style="
                position: initial;
                display: none;
                margin-top: 43px;
                margin-left: 10px;
              "
            >
              <div
                class="BMap_geolocationContainer"
                style="
                  position: initial;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  margin: 0px;
                  box-sizing: border-box;
                "
              >
                <div
                  class="BMap_geolocationIconBackground"
                  style="
                    width: 24px;
                    height: 24px;
                    background-image: url(https://api.map.baidu.com/images/navigation-control/geolocation-control/pc/bg-20x20.png);
                    background-size: 20px 20px;
                    background-position: 3px 3px;
                    background-repeat: no-repeat;
                  "
                >
                  <div
                    class="BMap_geolocationIcon"
                    style="
                      position: initial;
                      width: 24px;
                      height: 24px;
                      cursor: pointer;
                      background-image: url('https://api.map.baidu.com/images/navigation-control/geolocation-control/pc/success-10x10.png');
                      background-size: 10px 10px;
                      background-repeat: no-repeat;
                      background-position: center;
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            unselectable="on"
            class="BMap_cpyCtrl BMap_noprint anchorBL"
            style="
              cursor: default;
              white-space: nowrap;
              color: black;
              background: none;
              font: 11px / 15px arial, sans-serif;
              bottom: 2px;
              right: auto;
              top: auto;
              left: 2px;
              position: absolute;
              z-index: 10;
              text-size-adjust: none;
            "
          >
            <span _cid="1" style="display: inline"
              ><span
                style="
                  background: rgba(255, 255, 255, 0.701961);
                  padding: 0px 1px;
                  line-height: 16px;
                  display: inline;
                  height: 16px;
                "
                >©&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 -
                京ICP证030173号 - Data © 长地万方 &amp;
                <a target="_blank" href="http://www.openstreetmap.org/"
                  >OpenStreetMap</a
                >
                &amp;
                <a
                  target="_blank"
                  href="http://corporate.navteq.com/supplier_terms.html"
                  >HERE</a
                ></span
              ></span
            >
          </div>
        </div>
        <div style="display: none">
          <div class="divCitySummaryContainer" id="divCityMapMark359_113_">
            <div class="map-pop pop-hover" rel-id="359_113_">
              <p class="pop-city" rel-id="359_113_">曼谷</p>
              <p class="pop-price" rel-id="359_113_"><dfn>¥</dfn>113</p>
              <div class="map-point"></div>
            </div>
          </div>
          <div class="divCitySummaryContainer" id="divCityMapMark623_463_">
            <div class="map-pop pop-hover" rel-id="623_463_">
              <p class="pop-city" rel-id="623_463_">清迈</p>
              <p class="pop-price" rel-id="623_463_"><dfn>¥</dfn>463</p>
              <div class="map-point"></div>
            </div>
          </div>
        </div> -->

        <amap :zoom="15" :center="location.position">
          <amap-marker
            :position="location.position"
            :label="location.label"
            draggable
          />
        </amap>
      </div>
    </div>
  </div>
</template>

<script>
// 引入高德地图
import { Amap, Marker } from "@amap/amap-vue";
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "Map",
  data() {
    return {
      location: {
        position: [100.164, 25.69484],
        label: {
          content: "大理",
          direction: "bottom",
        },
      },
      isShow:true,
    };
  },
  components: {
    Amap,
    AmapMarker: Marker,
  },
  methods: {
    // 点击切换地图
    changeMap(num) {
      if (num === 1) {
        let location = {
          position: [120.383693, 36.061834],
          label: {
            content: "青岛",
            direction: "bottom",
          },
        };
        this.location = cloneDeep(location);
      } else if (num === 2) {
        let location = {
          position: [114.171202, 22.277469],
          label: {
            content: "香港",
            direction: "bottom",
          },
        };
        this.location = cloneDeep(location);
      } else if (num === 3) {
        let location = {
          position: [109.649664, 18.235582],
          label: {
            content: "三亚",
            direction: "bottom",
          },
        };
        this.location = cloneDeep(location);
      } else {
        let location = {
          position: [100.164, 25.69484],
          label: {
            content: "大理",
            direction: "bottom",
          },
        };
        this.location = cloneDeep(location);
      }
    },
    // 点击切换上下标志
    changeUpDown(){
      this.isShow=!this.isShow
    }
  },
};
</script>

<style lang="less" scoped>
.clearfix::after {
  content: "";
  // 转换成块级元素
  display: block;
  // 高度为0
  height: 0;
  // 清除浮动的影响
  clear: both;
  // 元素隐藏
  visibility: hidden;
}
.search-map-container {
  width: 1182px;
  margin: 40px auto 50px;
  .search-map-title {
    font-size: 20px;
    color: #333333;
    margin-bottom: 16px;
    font-weight: 500;
    height: 28px;
    line-height: 28px;
  }
  .channel-search-map {
    height: 580px;
    width: 100%;
    background: #ffffff;
    -webkit-box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    font-size: 0;
    .search-box {
      padding: 16px 16px 16px 16px;
      width: 336px;
      float: left;
      background: #fff;
      border-radius: 8px 0 0 8px;
      .search-box-header {
        width: 100%;
        margin-bottom: 16px;
        height: 28px;
        line-height: 28px;
        .city-picker-selector {
          height: 26px;
          padding: 0px 8px;
          font-size: 14px;
          color: #666666;
          text-align: center;
          float: left;
          cursor: pointer;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0);
        }
      }
      .search-box-calendar {
        width: 302px;
        height: 62px;
        background: #fff;
        margin-bottom: 16px;
        .form-item-v3-group {
          width: 100%;
          -webkit-box-shadow: none;
          box-shadow: none;
          border: 1px solid #cccccc;
          &:last-child {
            margin-right: 0;
          }
        }
        .flt-date {
          width: 50%;
          float: left;
          position: relative;
          .oneway a {
            width: 96px;
            height: 32px;
            text-align: center;
            line-height: 32px;
            color: #bbb;
            font-size: 14px;
            display: block;
            top: 16px;
            right: 16px;
            cursor: pointer;
            position: absolute;
          }
        }
        .form-item-v3 {
          height: 62px;
          float: left;
          position: relative;
          display: block;
          input{
            width: 100%;
            height: 62px;
            border: none;
            padding-left: 20px;
          }
        }
      }
      .country-con {
        .country-list {
          li {
            float: left;
            background: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(0, 0, 0, 0.05)),
              to(rgba(0, 0, 0, 0.4))
            );
            background: -o-linear-gradient(
              top,
              rgba(0, 0, 0, 0.05) 0%,
              rgba(0, 0, 0, 0.4) 100%
            );
            background: linear-gradient(
              -180deg,
              rgba(0, 0, 0, 0.05) 0%,
              rgba(0, 0, 0, 0.4) 100%
            );
            width: 144px;
            height: 94px;
            border-radius: 4px;
            position: relative;
            margin-right: 16px;
            cursor: pointer;
            margin-bottom: 16px;
            z-index: 1;
            .text-item {
              position: absolute;
              text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
              height: 58px;
              width: 124px;
              left: 10px;
              bottom: 10px;
              z-index: 3;
              .name-price {
                color: #ffffff;
                font-size: 18px;
                width: 100%;
                height: 22px;
                bottom: 24px;
                position: absolute;
                text-align: left;
                letter-spacing: 0px;
                font-weight: 600;
              }
              .price {
                color: #ffffff;
                position: absolute;
                left: 0;
                bottom: 0;
                text-align: left;
                width: 100%;
                height: 20px;
                letter-spacing: 0px;
                dfn {
                  height: 15px;
                  font-size: 12px;
                  font-weight: normal;
                }
                .amount {
                  height: 20px;
                  font-size: 16px;
                  font-weight: 600;
                }
                .qi {
                  height: 16px;
                  font-size: 12px;
                  font-weight: normal;
                }
              }
            }
            .country-img {
              width: 144px;
              height: 94px;
              border-radius: 4px;
              display: inline-block;
              vertical-align: top;
              overflow: hidden;
              z-index: 0;
              img {
                width: 100%;
                height: 100%;
              }
            }
            &:nth-child(3) {
              .text-item {
                position: absolute;
                text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
                height: 58px;
                width: 124px;
                left: 10px;
                bottom: 10px;
                z-index: 3;
                .name-text {
                  color: #ffffff;
                  font-size: 18px;
                  width: 100%;
                  height: 22px;
                  bottom: 35px;
                  position: absolute;
                  text-align: left;
                  letter-spacing: 0px;
                  font-weight: 600;
                }
                .no-result-text {
                  left: 0;
                  bottom: 0;
                  font-size: 12px;
                  color: #ffffff;
                  position: absolute;
                  font-weight: normal;
                  letter-spacing: 0px;
                  height: 32px;
                  width: 124px;
                  z-index: 3;
                }
                .country-img {
                  width: 144px;
                  height: 94px;
                  border-radius: 4px;
                  display: inline-block;
                  vertical-align: top;
                  overflow: hidden;
                  z-index: 0;
                }
              }
            }
          }
          .item-right {
            margin-right: 0px;
            .text-item {
              position: absolute;
              text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
              height: 58px;
              width: 124px;
              left: 10px;
              bottom: 10px;
              z-index: 3;
              .name-text {
                color: #ffffff;
                font-size: 18px;
                width: 100%;
                height: 22px;
                bottom: 35px;
                position: absolute;
                text-align: left;
                letter-spacing: 0px;
                font-weight: 600;
              }
              .no-result-text {
                left: 0;
                bottom: 0;
                font-size: 12px;
                color: #ffffff;
                position: absolute;
                font-weight: normal;
                letter-spacing: 0px;
                height: 32px;
                width: 124px;
                z-index: 3;
              }
            }
          }
          .search-more {
            background: url(//pic.c-ctrip.com/fltcommon/index/more_backgroundImg.png);
            background-size: 100%;
            position: relative;
            border: none;
            z-index: 0;
            .text-item {
              cursor: text;
              cursor: pointer;
              text-shadow: none;
              position: absolute;
              z-index: 3;
              height: 46px;
              width: 72px;
              left: 10px;
              bottom: 24px;
              .more {
                color: #0086f6;
                position: absolute;
                top: 0px;
                font-size: 18px;
                font-weight: 600;
                height: 22px;
                letter-spacing: 0px;
                width: 36px;
              }
              .icon-more {
                color: #0086f6;
                height: 12px;
                width: 12px;
                position: absolute;
                left: 40px;
                top: 3px;
                font-weight: 800;
              }
              .text {
                color: #0086f6;
                position: absolute;
                left: 0;
                bottom: 0;
                font-size: 12px;
                font-weight: normal;
                height: 16px;
                letter-spacing: 0px;
                width: 72px;
              }
            }
            .front-img {
              position: absolute;
              z-index: 3;
              height: 56px;
              width: 56px;
              bottom: 0;
              right: 0;
            }
          }
          .active {
            border-radius: 4px;
            height: 94px;
            width: 144px;
            background: #0086f6;
          }
        }
      }
    }
    .low_price_map {
      position: relative;
      float: left;
      width: 846px;
      height: 580px;
      background: #ccc;
      border-radius: 0 8px 8px 0;
      #divMap {
        width: 100%;
        height: 580px;
        border-radius: 0 8px 8px 0;
      }
    }
  }
}
</style>
