<template>
  <div class="base_top">
    <!-- 地区选择 -->
    <div class="List">
      <ul>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
        <li>
          <h4>
            <i></i>
            <span>境内旅游</span>
          </h4>
          <p>
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;" class="orange">丽江</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">大连</a>
            <a href="javascript:;">杭州</a>
          </p>
          <div class="eara"></div>
        </li>
      </ul>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <div class="bannerContainer">
        <el-carousel height="490">
          <el-carousel-item>
            <img src="../images/banner1.jpg" alt="" />
            <!-- <img src="./images/banner1.jpg" alt="" /> -->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="seviceContainer">
        <div class="tit">
          <i></i>
          <p>放心的价格 放心的服务</p>
        </div>
        <div class="safe">
          <span>
            <i></i>
          </span>
          <ul>
            <li class="main">客户第一的保障措施</li>
            <li>·航变无忧</li>
            <li>·拒签无忧</li>
            <li>·出行保障</li>
          </ul>
        </div>
        <div class="serve">
          <span>
            <i></i>
          </span>
          <ul>
            <li class="main">7*24优质服务</li>
            <li>·15分钟专业客服全时响应</li>
            <li>·微领队简单您的旅行</li>
            <li>·全球SOS紧急支援服务</li>
          </ul>
          <b class="other">详情 > </b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTop",
};
</script>

<style lang="less" scoped>
// 地区选择与轮播图
.base_top {
  width: 1180px;
  height: 654px;
  display: flex;
  .List {
    width: 258px;
    height: 653px;
    border-top: 2px solid #68b1fc;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    ul {
      li:first-child {
        padding-top: 19px;
      }
      li {
        border: 1px solid #eaeaea;
        padding: 9px 15px 8px 20px;
        margin-bottom: -1px;
        vertical-align: top;
        h4 {
          position: relative;
          padding-left: 28px;
          margin-bottom: 5px;
          display: flex;
          i {
            position: absolute;
            top: 0;
            left: 0;
            background: url("../images/icon.jpg") no-repeat 0 0;
            display: block;
            width: 26px;
            height: 26px;
            transition: all 0.3s linear;
          }
          span {
            font: 600 18px/22px Microsoft Yahei, sans-serif;
          }
        }
        p {
          a {
            text-decoration: none;
            font-size: 12px;
            line-height: 1.5;
            color: #666;
            padding-left: 5px;
          }
          .orange {
            color: #f60 !important;
          }
        }
        &:nth-child(2) h4 i {
          background: url("../images/icon.jpg") no-repeat 0 -40px;
        }
        &:nth-child(3) h4 i {
          background: url("../images/icon.jpg") no-repeat 0 -80px;
        }
        &:nth-child(4) h4 i {
          background: url("../images/icon.jpg") no-repeat 0 -120px;
        }
        &:nth-child(5) h4 i {
          background: url("../images/icon.jpg") no-repeat 0 -160px;
        }
        &:nth-child(6) h4 i {
          background: url("../images/icon.jpg") no-repeat 0 -200px;
        }
        &:nth-child(7) h4 i {
          background: url("../images/icon.jpg") no-repeat 0 -240px;
        }
        &:nth-child(8) h4 i {
          background: url("../images/icon.jpg") no-repeat 0 -280px;
        }
        &:nth-child(9) h4 i {
          background: url("../images/icon.jpg") no-repeat 0 -320px;
        }
      }
    }
  }
  .banner {
    width: 916px;
    height: 654px;
    margin-left: 10px;
    .bannerContainer {
      width: 906px;
      height: 490px;
      .el-carousel {
        width: 906px;
        height: 490px;
        /deep/ .el-carousel__item {
          width: 906px;
          height: 490px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .seviceContainer {
      width: 906px;
      height: 152px;
      border: 4px solid #ffe7ad;
      width: 898px;
      margin: 0 auto;
      margin-top: 12px;
      display: flex;
      .tit {
        width: 218px;
        height: 144px;
        background-color: #fff;
        // line-height: 144px;
        i {
          width: 120px;
          height: 34px;
          display: block;
          margin: 41px auto 0 auto;
          background: url("../images/service.png") no-repeat -20px -10px;
        }
        p {
          font-size: 14px;
          color: #999;
          width: 145px;
          height: 20px;
          line-height: 20px;
          margin: 8px auto;
        }
      }
      .safe,
      .serve {
        font-size: 14px;
        color: #666;
        height: 144px;
        width: 340px;
        background-color: #fdfbeb;
        padding: 22px 28px;
        span {
          display: inline-block;
          width: 60px;
          height: 60px;
          padding: 9px;
          margin: 20px 0;
          background-color: #ff8a27;
          border-radius: 30px;
          i {
            width: 42px;
            height: 42px;
            display: block;
            background: url("../images/service.png") no-repeat -72px -64px;
          }
        }
        ul {
          display: inline-block;
          margin-left: 24px;
          vertical-align: super;
          li {
            color: #f60;
            padding: 2px 0;
            line-height: 20px;
          }
          .main {
            font-size: 20px;
            color: #333;
            font-weight: 700;
            height: 24px;
            line-height: 24px;
            margin-bottom: 6px;
          }
        }
      }
      .serve {
        position: relative;
        span {
          i {
            background: url("../images/service.png") no-repeat -10px -64px;
          }
        }
        .other {
          position: absolute;
          bottom: 4px;
          right: 9px;
          color: #0086f6;
        }
      }
    }
  }
}
</style>
