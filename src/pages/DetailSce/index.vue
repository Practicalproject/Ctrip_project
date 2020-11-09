<template>
  <!-- 经典详情 -->
  <div>
    <DetailBan></DetailBan>
    <Review></Review>
  </div>
</template>

<script>
import DetailBan from "./DetailBan";
import Review from "./Review";
export default {
  components: {
    DetailBan,
    Review,
  },
  name: "DetailSce",
};
</script>

<style lang="less" scoped>
div {
   // width: 100%;
 // height: 100%;
   // background: #f2f5f7;
}
</style>
