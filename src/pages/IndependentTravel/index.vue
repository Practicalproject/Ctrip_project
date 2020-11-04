<template>
  <div class="mainContainer">
    <!-- 搜索区域 -->
    <SearchContainer></SearchContainer>
    <!-- 地区选择与轮播图 -->
    <BaseTop></BaseTop>

    <!-- 地区旅游点 -->
    <LocalPro></LocalPro>
    <LocalPro></LocalPro>

    <!-- 优势 -->
    <Avantage></Avantage>
    <!-- 广告区 -->
    <Advertisement></Advertisement>
  </div>
</template>

<script>
import SearchContainer from "./SearchContainer";
import BaseTop from "./BaseTop";
import LocalPro from "./LocalPro";
import Avantage from "./Avantage";
import Advertisement from "./Advertisement";
export default {
  components: {
    SearchContainer,
    BaseTop,
    LocalPro,
    Avantage,
    Advertisement,
  },
  name: "IndependentTravel",
};
</script>

<style lang="less" scoped>
// #007aff
.mainContainer {
  width: 1180px;
  height: 3000px;
  margin: 0 auto;
}
</style>
