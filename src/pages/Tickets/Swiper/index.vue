<template>
  <div class="container">
    <!-- 左侧 -->
    <div class="leftBox"></div>
    <!-- 右侧 -->
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item>
          <img class="item" src="" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang='less' scoped>
.container {
  width: 1180px;
  margin: 20px auto;
  .leftBox {
    padding: 20px;
    height: 371px;
    width: 300px;
    background-color: pink;
    box-shadow: #0086f6 0 0 0 2px inset;
    border-radius: 4px;
    display: inline-block;
  }
  .block {
    float: right;
    width: 830px;
    // height: 410px;
    background-color: red;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
