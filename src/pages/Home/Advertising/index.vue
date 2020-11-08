<template>
  <div id="fl_wrap_default">
    <div class="fl_open_wrap" :class="{active:isShow}">
      <div class="fl_open_wrap_cntr" id="float_100_open" :style="{'background-position': `${time}px`}"
           @click="toAD"></div>
    </div>

    <div class="fl_pop_wrap" :class="{active:!isShow}">
      <div class="fl_pop_wrap_cntr">
        <div class="fl_pop_wrap_cntr_bg"></div>
        <div class="fl_pop_box">
          <div class="fl_pop_pic" id="float_100_link">
            <img alt="" src="./images/pc_activity_1_banner.png">
          </div>
          <div class="fl_pop_cnt">
            <div class="fl_pop_cnt_bg"></div>
            <div class="fl_pop_qrcode">
              <div class="fl_pop_hint">扫描二维码下载</div>
              <img src="./images/pc_activity_1_qcode.png"
                   width="115" height="115" alt=""></div>
          </div>
          <a href="javascript:;" class="fl_wrap_close" title="关闭" @click="toAD" id="float_100_close">×</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      time: 0,
      isShow: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.time = -82
    }, 5000)
  },
  methods: {
    toAD() {
      this.isShow = !this.isShow
    }
  },
}
</script>

<style lang="less" scoped>
#fl_wrap_default {

  .fl_open_wrap {
    position: fixed;
    z-index: 99999;
    bottom: 55px;
    width: 127px;
    height: 136px;
    overflow: hidden;
    transition: left 1s ease;
    left: -100%;

    &.active {
      left: 0;
    }


    .fl_open_wrap_cntr {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url(./images/fl_open_wrap.png) no-repeat;
      cursor: pointer;
      background-position: -82px 0;
      transition: all 1s ease;

    }
  }

  .fl_pop_wrap {
    //display: none;
    position: fixed;
    z-index: 99998;
    bottom: 0;
    width: 100%;
    height: 196px;
    overflow: hidden;
    transition: left 1s ease;
    left: -100%;

    &.active {
      left: 0;
    }
  ;

    .fl_pop_wrap_cntr {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;

      .fl_pop_wrap_cntr_bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #051223;
        opacity: 0.9;
        filter: alpha(opacity=90);
        z-index: -200;
      }

      .fl_pop_box {
        position: relative;
        width: 980px;
        height: 176px;
        margin: auto;
        font-size: 12px;
        font-weight: 1.5;
        color: #333;

        .fl_pop_pic {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;

          img {
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }

        .fl_pop_cnt {
          position: absolute;
          top: 0;
          right: 42px;
          height: 100%;
          padding: 0 2px 0 16px;
          color: #fff;

          .fl_pop_cnt_bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            opacity: 0.2;
            filter: alpha(opacity=20);
            z-index: -100;
          }

          .fl_pop_qrcode {
            position: relative;
            float: left;
            width: 115px;
            margin: 20px 14px 0 0;

            .fl_pop_hint {
              line-height: 1.5;
              text-align: center;
            }

            img {
              margin-top: 6px;
            }
          }
        }

        .fl_wrap_close {
          position: absolute;
          top: 10px;
          right: -4px;
          font-size: 38px;
          line-height: 1.2;
          font-family: Simsun;
          color: #9aa1a8;
          outline: 0 none;
        }
      }
    }
  }

}
</style>