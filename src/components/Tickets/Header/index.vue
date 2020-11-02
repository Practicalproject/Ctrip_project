<template>
  <div class="container">
    <img
      class="left"
      src="https://pages.c-ctrip.com/ticket/online/index/title_bgL.png"
      alt=""
    />
    <div class="city">
      <i class="iconfont icon-location"></i>
      北京
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang='less' scoped>
.container {
  width: 1180px;
  margin: 10px auto;
  background-color: wheat;
  height: 40px;
  position: relative;
  .left {
    width: 252px;
    height: 51px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .city{
    width: 150px;
    padding: 0 12px;
    height: 38px;
    background-color: violet;
    text-align: center;
    line-height: 38px;
    position: absolute;
    left: 180px;
    top: 0;
  }
}
</style>
