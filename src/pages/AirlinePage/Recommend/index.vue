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
          <div class="district-item">
            <div class="title">精选推荐</div>
            <ul class="city-list">
              <li>
                <div class="city-img"></div>
                <img src="https://pic.c-ctrip.com/flight/fuzzy/SHE/284.jpg"
                  alt=""/>
                <div class="city-info">
                  <div class="from-to-city">
                    <span class="name">北京</span>
                    <i class="iconfont icon-jiantou_qiehuanyou"></i>
                    <span class="name">沈阳</span>
                  </div>
                </div>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="district-item">
            <div class="title">日韩</div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="district-item">
            <div class="title">东南亚</div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
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
.box-card {
  .district-item {
    display: inline-block;
    vertical-align: top;
    margin-right: 15px;
    .title {
      font-size: 18px;
      color: #333333;
      margin-bottom: 16px;
      font-weight: 600;
    }
    .city-list {
      width: 344px;
      border: 1px solid #e4e4e4;
      padding: 4px 12px;
      border-radius: 4px;
      background: purple;
    }
  }
}
</style>
