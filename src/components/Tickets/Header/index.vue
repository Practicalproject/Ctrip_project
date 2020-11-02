<template>
  <div class="container">
    <img
      class="left"
      src="https://pages.c-ctrip.com/ticket/online/index/title_bgL.png"
      alt=""
    />
    <div class="city">
      <i></i>
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
  .left {
    width: 252px;
    height: 51px;
  }
  .city{

  }
}
</style>
