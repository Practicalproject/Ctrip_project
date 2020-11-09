<template>
  <div class="continer">
    <!-- 头部 -->
    <div class="divider">
      <h1>玩乐推荐榜</h1>
    </div>
    <!-- 主体 -->
    <div class="falshList">
      <el-card class="falshItem">
        <img src="./images/01.jpg" alt="" />

        <div class="text">
          <!-- 描述 -->
          <div class="title">
            <span
              >北京密云古北水镇门票成人票北京密云古北水镇门票成人票北aaaaaaa票</span
            >
          </div>
          <div class="content">
            <!-- 价钱 -->
            <div class="contentText">
              <span>￥</span>
              <span>140</span>
              起
            </div>
            <!-- 评分 -->
            <div class="review">
              <span class="score">4.9分</span>
              <span class="pin">月销2100份</span>
            </div>
          </div>
        </div>
        <div class="headings">TOP 1</div>
      </el-card>
      <el-card class="falshItem">
        <img src="./images/02.jpg" alt="" />
        <div class="text">
          <div class="title">
            <span>北京密云古北水镇门票成人票北京密云古北水镇门票成人票</span>
          </div>
          <div class="content">
            <div class="contentText">
              <span>￥</span>
              <span>140</span>
              起
            </div>
            <div class="review">
              <span class="score">4.9分</span>
              <span class="pin">月销2100份</span>
            </div>
          </div>
        </div>
        <div class="headings">TOP 2</div>
      </el-card>
      <el-card class="falshItem">
        <img src="./images/03.jpg" alt="" />
        <div class="text">
          <div class="title">
            <span>北京密云古北水镇门票成人票</span>
          </div>
          <div class="content">
            <div class="contentText">
              <span>￥</span>
              <span>140</span>
              起
            </div>
            <div class="review">
              <span class="score">4.9分</span>
              <span class="pin">月销2100份</span>
            </div>
          </div>
        </div>
        <div class="headings">TOP 3</div>
      </el-card>
      <el-card class="falshItem">
        <img src="./images/04.jpg" alt="" />
        <div class="text">
          <div class="title">
            <span>北京密云古北水镇门票成人票</span>
          </div>
          <div class="content">
            <div class="contentText">
              <span>￥</span>
              <span>140</span>
              起
            </div>
            <div class="review">
              <span class="score">4.9分</span>
              <span class="pin">月销2100份</span>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayList",
};
</script>

<style lang='less' scoped>
.continer {
  width: 1180px;
  margin: 20px auto;
  // 头部
  .divider {
    height: 55px;
    color: #ff7700;
    line-height: 55px;
    h1 {
      font-size: 30px;
      font-weight: 700;
      border-bottom: 3px solid #ff7700;
    }
  }
  // 内容区
  .falshList {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .falshItem {
      width: 280px;
      height: 270px;
      position: relative;
      border-radius: 15px;
      position: relative;
      /deep/.el-card__body {
        padding: 0;
      }
      img {
        height: 158px;
        width: 100%;
      }
      &:hover {
        cursor: pointer;
      }
      // 描述
      .text {
        width: 252px;
        height: 72px;
        margin: 12px 14px 0;
        .title {
          width: 100%;
          height: 45px;
          font-size: 16px;
          color: #333;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }

      // 价钱
      .content {
        width: 100%;
        height: 28px;
        margin: 14px 0;
        display: flex;
        justify-content: space-between;
        .contentText {
          span {
            color: #f60;
            font-size: 24px;
          }
          span:nth-child(1) {
            font-size: 16px;
          }
        }
        .review {
          font-size: 14px;
          line-height: 28px;
          .score {
            font-size: 14px;
            color: #0086f6;
            line-height: 28px;
          }
          .pin {
            font-size: 14px;
            color: #666;
            margin-left: 10px;
          }
        }
      }

      // 排行榜 TOP
      .headings {
        height: 34px;
        padding: 0 10px;
        background-color: #f63b2e;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 0;
        color: white;
        font-size: 14px;
        line-height: 34px;
      }
    }
  }
}
</style>
