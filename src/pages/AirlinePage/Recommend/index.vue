<template>
  <div>
    <div class="recommendContainer">
      <div class="w">
        <!-- 头部 -->
        <div class="header">
          <h2 class="title">低价速报</h2>
          <div class="selectCity">北京出发</div>
          <div class="selectDate">日期</div>
        </div>

        <!-- 推荐卡 -->
        <el-card class="box-card">
          123
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
};
</script>

<style lang="less" scoped>
.w {
  width: 1180px;
  margin: 48px auto 0;
  height: 2000px;
  background-color: pink;
}
// 头部
.header {
  width: 100%;
  height: 32px;
  margin-bottom: 16px;
  background-color: green;
  .title {
    float: left;
    font-size: 20px;
    color: #333333;
    font-weight: 500;
    margin-right: 24px;
  }
  .selectCity {
    float: left;
    height: 28px;
    width: 158px;
    background-color: yellow;
    padding: 0 8px;
    cursor: pointer;
    position: relative;
  }
  .selectDate {
    float: left;
    height: 28px;
    width: 190px;
    background-color: paleturquoise;
    padding: 0 8px;
    position: relative;
    cursor: pointer;
    margin-left: 8px;
  }
}

// 推荐卡

</style>
