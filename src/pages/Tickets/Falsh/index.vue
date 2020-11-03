<template>
  <div class="continer">
    <!-- 头部 -->
    <div class="divider">
      <h1>限时抢购</h1>
    </div>
    <!-- 主体 -->
    <div class="falshList">
      <el-card class="falshItem">
        <img src="./images/01.jpg" alt="" />
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
            <button class="btn">抢购</button>
          </div>
        </div>
        <div class="headings">携程精选</div>
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
            <button class="btn">抢购</button>
          </div>
        </div>
        <div class="headings">携程精选</div>
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
            <button class="btn">抢购</button>
          </div>
        </div>
        <div class="headings">携程精选</div>
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
            <button class="btn">抢购</button>
          </div>
        </div>
        <div class="headings">携程精选</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Falsh",
};
</script>

<style lang='less' >
.continer {
  width: 1180px;
  margin: 20px auto;
  .divider {
    height: 55px;
    color: red;
    line-height: 55px;
    h1 {
      font-size: 30px;
      font-weight: 700;
      border-bottom: 3px solid red;
    }
  }
  .falshList {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    
    .falshItem {
      width: 280px;
      height: 250px;
      position: relative;
      .el-card__body {
        padding: 0;
      }
      img {
        height: 158px;
        width: 100%;
      }
      .text {
        width: 252px;
        height: 72px;
        margin: 12px 14px 0;
        .title {
          width: 100%;
          height: 22px;
          font-size: 16px;
          line-height: 22px;
          overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
        }
      }
      .content {
        width: 100%;
        height: 23px;
        margin: 14px 0;
        position: relative;
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
        .btn {
          background-color: #f60;
          height: 35px;
          width: 72px;
          line-height: 35px;
          border: none;
          border-radius: 5px;
          position: absolute;
          right: 0;
          top: -3px;
          font-size: 18px;
          color: white;
        }
      }
      .headings{
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
