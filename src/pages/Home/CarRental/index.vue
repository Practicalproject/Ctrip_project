<template>
  <!--   租车区域 -->

  <div class="modcar">
    <!-- 标题行 -->
    <div class="modhd">
      <h2 class="title">
        <span class="current" idx="4">境外租车</span>
        <span idx="2">境外接送车</span>
        <span idx="3">国内租车</span>
        <span idx="1">国内接送车</span>
        <span idx="0">日租包车</span>
      </h2>
    </div>
    <!-- 内容区 -->
    <div class="modbd">
      <!-- 内容区左侧 -->
      <div class="entrance">
        <dl class="keyword">
          <dt class="keywordTitle">热门城市</dt>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">洛杉矶</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">旧金山</a>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">墨尔本</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">纽约</a>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">古曼</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">基督城</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">吉普赛</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">温哥华</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">悉尼</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">奥克兰</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">拉斯维加斯</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">西雅图</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">伦敦</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">法兰克福</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">多伦多</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">巴西</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
          <dd class="keywordContainer">
            <span class="bgspan">
              <a href="javascript: ;">迪拜</a>
              <span class="iconfont icon-hot2"></span>
            </span>
          </dd>
        </dl>
      </div>

      <!-- 内容右侧区域 -->
      <div class="product">
        <div class="priducthd">
          <ul class="inner-tabs">
            <li>
              <a href="javascript: ;">美国</a>
            </li>
            <li>
              <a href="javascript: ;">泰国</a>
            </li>
            <li>
              <a href="javascript: ;">澳大利亚</a>
            </li>
            <li>
              <a href="javascript: ;">英国</a>
            </li>
            <li>
              <a href="javascript: ;">加拿大</a>
            </li>
            <li>
              <a href="javascript: ;">新西兰</a>
            </li>
            <li>
              <a href="javascript: ;">德国</a>
            </li>
            <li>
              <a class="iconfont"></a>
            </li>
          </ul>
          <a href="javascript: ;">
            更多境外租车
            <i class="iconfont icon-next"></i>
          </a>
        </div>
        <div class="priductbd"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarRental",
};
</script>

<style  lang ='less' scoped>
/* 租车区域 */
.modcar {
  width: 1180px;
  margin: 28px auto 0;
  /* 标题行 */
  .modhd {
    width: 1180px;
    height: 38px;
    .title span {
      position: relative;
      bottom: -3px;
      float: left;
      height: 36px;
      line-height: 30px;
      color: #333;
      margin-right: 30px;
    }
  }
  /* 主内容区 */
  .modbd {
    width: 1180px;
    height: 245px;

    display: flex;
    /* 左侧 */
    .entrance {
      width: 227px;
      height: 220px;
      padding: 0 20px 15px 20px;
      .keyword {
        width: 187px;
        height: 230px;

        .keywordTitle {
          width: 100%;
          height: 38px;
          padding: 4px 0 0 0;
          font: 700 14px/34px "Microsoft yahei";
          color: #333;
        }
        dd {
          position: relative;
          float: left;
          display: block;
          border-left: 1px solid #ececec;
          line-height: 18px;
          height: 18px;
          font: 12px "Microsoft yahei", arial, Simsun, sans-serif;
          margin: 7px 10px;
          white-space: nowrap;
          .bgspan {
            display: block;
            width: 100%;
            height: 100%;
            a {
              text-decoration: none;
              color: #666;
              display: inline-block;
              max-width: 72px;
            }
            .iconfont {
              position: absolute;
              top: -12px;
              right: -4px;
              width: 11px;
              height: 11px;
              background-position: -16px -32px;
            }
          }
        }
        /* .keyContainer {
          width: 197px;
          height: 190px;
        background: violet;
        } */
      }
    }
    /* 右侧 */
    .product {
      width: 950px;
      height: 245px;
      border: 1px solid red;
      .priducthd {
        font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
        ul {
          float: left;
          height: 20px;
          margin-bottom: 10px;
          display: block;
          list-style-type: disc;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 40px;
          
        }
          li {
            float: left;
            list-style: none;
            /* background: #3983e5; */
            color: #fff;
            border-radius: 3px;
            display: inline-block;
            line-height: 20px;
            margin-right: 15px;
            padding: 0 8px;
          }
          a {
            float: right;
            text-decoration: none;
          }
      }
    }
  }
}
</style>


