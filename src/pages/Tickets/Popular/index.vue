<template>
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <div class="header_title">人气景点</div>
      <div class="header_nav">
        <ul>
          <li class="item active">热门</li>
          <li>亲子同游</li>
          <li>情侣出游</li>
          <li>全家出游</li>
          <li>赏月</li>
          <li>网红打卡地</li>
          <li>皇城古迹</li>
        </ul>
      </div>
      <div class="more">
        更多
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <el-card class="content_item">
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <div class="item_text">
          <div class="text_title">
            <span>故宫</span>
          </div>
          <div class="text_content">
            <div class="contentText">
              <span>￥</span>
              <span>10</span>
              起
            </div>
            <div class="review">3525条点评</div>
          </div>
        </div>
      </el-card>
      <el-card class="content_item">
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <div class="item_text">
          <div class="text_title">
            <span>故宫</span>
          </div>
          <div class="text_content">
            <div class="contentText">
              <span>￥</span>
              <span>10</span>
              起
            </div>
            <div class="review">3525条点评</div>
          </div>
        </div>
      </el-card>
      <el-card class="content_item">
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <div class="item_text">
          <div class="text_title">
            <span>故宫</span>
          </div>
          <div class="text_content">
            <div class="contentText">
              <span>￥</span>
              <span>10</span>
              起
            </div>
            <div class="review">3525条点评</div>
          </div>
        </div>
      </el-card>
      <el-card class="content_item">
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <div class="item_text">
          <div class="text_title">
            <span>故宫</span>
          </div>
          <div class="text_content">
            <div class="contentText">
              <span>￥</span>
              <span>10</span>
              起
            </div>
            <div class="review">3525条点评</div>
          </div>
        </div>
      </el-card>
      <el-card class="content_item">
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <div class="item_text">
          <div class="text_title">
            <span>故宫</span>
          </div>
          <div class="text_content">
            <div class="contentText">
              <span>￥</span>
              <span>10</span>
              起
            </div>
            <div class="review">3525条点评</div>
          </div>
        </div>
      </el-card>
      <el-card class="content_item">
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <div class="item_text">
          <div class="text_title">
            <span>故宫</span>
          </div>
          <div class="text_content">
            <div class="contentText">
              <span>￥</span>
              <span>10</span>
              起
            </div>
            <div class="review">3525条点评</div>
          </div>
        </div>
      </el-card>
      <el-card class="content_item">
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <div class="item_text">
          <div class="text_title">
            <span>故宫</span>
          </div>
          <div class="text_content">
            <div class="contentText">
              <span>￥</span>
              <span>10</span>
              起
            </div>
            <div class="review">3525条点评</div>
          </div>
        </div>
      </el-card>
      <el-card class="content_item">
        <div class="item_image">
          <img src="./images/01.jpg" alt="" />
        </div>
        <div class="item_text">
          <div class="text_title">
            <span>故宫</span>
          </div>
          <div class="text_content">
            <div class="contentText">
              <span>￥</span>
              <span>10</span>
              起
            </div>
            <div class="review">3525条点评</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popular",
};
</script>

<style lang='less' scoped>
.container {
  margin: 10px auto;
  width: 1180px;
  .header {
    height: 55px;
    width: 100%;
    // background-color: violet;
    border-bottom: #0086f6 3px solid;
    line-height: 55px;
    margin-bottom: 15px;
    .header_title {
      float: left;
      font-size: 30px;
      color: #0086f6;
      font-weight: 700;
    }
    .header_nav {
      font-size: 16px;
      color: #333;
      float: left;
      margin-left: 50px;
      height: 100%;
      ul {
        height: 100%;

        li {
          float: left;
          font-size: 16px;
          color: #333;
          padding: 0 12.5px;
          position: relative;
          &::after {
            content: "";
            display: block;
            border: 1px solid #999;
            width: 1px;
            height: 15px;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          &:last-child::after {
            content: "";
            border: none;
          }
        }
      }
      .active {
        font-weight: 700;
      }
    }
    .more {
      float: right;
    }
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .content_item {
      width: 230px;
      border-radius: 10px;
      margin: 0 10px 20px 0;
      /deep/.el-card__body {
        padding: 0;
      }
      .item_text {
        width: 230px;
        height: 72px;
        margin: 12px 14px 0;
        .text_title {
          width: 100%;
          height: 22px;
          font-size: 20px;
          line-height: 22px;
          font-weight: 700;
        }
        .text_content {
          width: 202px;
          height: 23px;
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
          }
        }
      }

      .item_image {
        width: 100%;
        img {
          width: 100%;
          height: 180px;
        }
      }
    }
  }
}
</style>
