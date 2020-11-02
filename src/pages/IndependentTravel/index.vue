<template>
  <div class="mainContainer">
    <!-- 搜索区域 -->
    <div class="searchContainer">
      <img src="./images/03.png" alt="" />
      <dl class="cityContainer">
        <dt>
          <i class="iconfont icon-location"></i>
          <span class="city">北京</span>
          <span>站</span>
          <b class="iconfont icon-downlist"></b>
          <b class="iconfont icon-shang"></b>
        </dt>
        <dd></dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndependentTravel",
};
</script>

<style lang="less" scoped>
.mainContainer {
  width: 1180px;
  height: 200px;
  margin: 0 auto;
  background-color: #cccccc;
  .searchContainer {
    .cityContainer {
      width: 176px;
      height: 39px;
      border: 1px solid #000000;
      display: inline-block;
    }
  }
}
</style>
