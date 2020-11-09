<template>
  <ul ref="lift" class="lift lift-show">
    <li class="lift-item lift-vacations">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_tour">旅游</a>
    </li>
    <li class="lift-item lift-hotels">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_hotel">酒店</a>
    </li>
    <li class="lift-item lift-flights mix_active">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_flight">机票</a>
    </li>
    <li class="lift-item lift-car">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_car">用车</a>
    </li>
    <li class="lift-item lift-huodong">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_huodong">玩乐</a>
    </li>
    <li class="lift-item lift-mall">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_buy">购物</a>
    </li>
    <li class="lift-item lift-you">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_you">攻略</a>
    </li>
    <li class="lift-item lift-server">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_service">服务</a>
    </li>
    <li class="lift-item lift-crop">
      <a class="lift-name" href="#ctm_ref=ssc_hp_elevator_sl">商旅</a>
    </li>
  </ul>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "elevatorNavigation",
  data() {
    return {}
  },
  mounted() {
    this.computer()
    document.addEventListener('scroll', this.computer);
  },
  methods: {
    //  计算元素距离页面顶部的距离
    computer() {
      if (document.documentElement.scrollTop > this.$refs.lift.offsetTop) {
        this.$refs.lift.style.top = "200px"
      } else {
        this.$refs.lift.style.top = this.hotListWrapperTop + "px"
      }
    },
  },
  computed: {
    ...mapState({
      hotListWrapperTop: state => state.aishuaikang.hotListWrapperTop
    }),
  },
  watch: {}
}
</script>

<style lang="less" scoped>
.lift {
  position: fixed;
  width: 36px;
  height: 360px;
  margin: 0 auto;
  z-index: 99;
  left: 50%;
  margin-left: -633px;
  top: 200px;
  text-align: center;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  //opacity: 0;
  overflow: hidden;

  .lift-item {
    position: relative;
    display: block;
    width: 36px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    margin-top: -1px;
    overflow: hidden;
    margin-bottom: 1px;
    background-image: url(//pic.c-ctrip.com/platform/online/home/un_icon_leftnav.png);
    background-repeat: no-repeat;

    .lift-name {
      display: inline-block;
      height: 39px;
      border-top: 1px solid #e0e0e0;
      font-style: normal;
      padding-top: 45px;
      overflow: hidden;
      text-align: center;
    }
  }

  .lift-vacations {
    background-position: center 0;
  }

  .lift-hotels {
    background-position: center -40px;
  }

  .lift-flights {
    background-position: center -80px;
  }

  .lift-car {
    background-position: center -120px;
  }

  .lift-huodong {
    background-position: center -160px;
  }

  .lift-mall {
    background-position: center -200px;
  }

  .lift-you {
    background-position: center -240px;
  }

  .lift-server {
    background-position: center -280px;
  }

  .lift-crop {
    background-position: center -320px;
  }
}

</style>