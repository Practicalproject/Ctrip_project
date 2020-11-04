<template>
  <!-- 企业商旅 -->
  <div class="BusinessTravelCon">
    <div class="bsHeader">
      <h2>
        <span class="bs">
          企业商旅
          <i></i>
        </span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessTravel",
};
</script>

<style lang="less" scoped>
.BusinessTravelCon {
  width: 1180px;
  margin: 28px auto 0;
  width: 1180px;
  height: 93px;
  .bsHeader {
    height: 36px;
    width: 1180px;
    border-bottom: 2px solid #3983e5;
    h2 {
      text-align: left;
      float: left;
      span {
        color: #06c;
        bottom: -3px;
        height: 36px;
        line-height: 30px;
        margin-right: 30px;
        cursor: pointer;
        font-size: 16px;
        position: relative;
        i {
          position: absolute;
          left: 50%;
          margin-left: -6px;
          bottom: -6px;
          width: 12px;
          height: 6px;
          overflow: hidden;
          line-height: 0;
          font-size: 0;
          border-bottom: 6px solid #3983e5;
          border-top: 0 none;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
      }
    }
  }
}
</style>
