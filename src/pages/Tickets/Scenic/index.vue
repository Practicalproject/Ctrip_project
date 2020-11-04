<template>
  <div class="scenic_contain">
    <!-- 头部区域 -->
    <div class="contain_header">
      <div class="header_item">
        <h2>景点门票</h2>
      </div>
      <div class="header_item">
        <h2>景点门票</h2>
      </div>
    </div>
    <!-- 中间主体 -->
    <div class="contain_middle">
      <el-card class="middle_item">
        <!-- 左侧图片 -->
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <!-- 右侧文本 -->
        <div class="item_title">
          <div class="title_left">123</div>
          <div class="title_right">asda</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scenic",
};
</script>

<style lang='less' scoped>
.scenic_contain {
  width: 1180px;
  margin: 20px auto;
  // background-color: yellow;
  // 头部区域
  .contain_header {
    display: flex;
    // background-color: yellowgreen;
    border-bottom: 3px solid #0086f6;
    margin-bottom: 15px;
    .header_item {
      h2 {
        font-size: 28px;
        color: #333;
        font-weight: 700;
        line-height: 58px;
        margin-right: 12.5px;
      }
    }
  }
  // 中间主体
  .contain_middle {
    .middle_item {
      width: 800px;
      height: 150px;
      margin: 0 20px 10px 0;
      border-radius: 5px;
      /deep/.el-card__body {
        padding: 0;
        display: flex;
        .item_image {
          width: 243px;
          height: 150px;
          background-color: red;
          img {
            width: 100%;
            height: 100%;
            border-radius: 5px 0 0 5px;
          }
        }
        .item_title {
          width: 200px;
          height: 200px;
          background-color: red;
          display: flex;
          .title_left{

          }
          .title_right{
            
          }
        }
      }
    }
  }
}
</style>
