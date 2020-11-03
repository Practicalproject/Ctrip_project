<template>
  <div class="mainContainer">
    <!-- 搜索区域 -->
    <div class="searchContainer">
      <img src="./images/03.png" alt="" />
      <dl class="cityContainer">
        <dt>
          <i class="iconfont icon-dingweiweizhi posit"></i>
          <span class="city">北京</span>
          <span class="station">站</span>
          <b class="iconfont icon-downlist downAndUp"></b>
          <!-- <b class="iconfont icon-shang"></b> -->
        </dt>
        <dd></dd>
      </dl>
      <div class="search_wrap">
        <div class="searchContent">
          <dl class="catalogList">
            <dt>
              <i>出发地参团</i>
              <b class="iconfont icon-downlist downAndUp"></b>
            </dt>
            <!-- <dd>
              <a href="javascript:;">全部产品</a>
            </dd>
            <dd>
              <a href="javascript:;">全部产品</a>
            </dd> -->
          </dl>
          <div>
            <input
              type="text"
              name=""
              placeholder="请输入目的地、主题或关键字"
            />
          </div>
        </div>
        <div href="javascript:;" class="searchBtn">
          <i class="iconfont icon-fangdajing"></i>
          <span>搜 索</span>
        </div>
      </div>
    </div>
    <!-- 地区选择与轮播图 -->
    <div class="base_top">
      <div class="List"></div>
      <div class="banner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndependentTravel",
};
</script>

<style lang="less" scoped>
// #007aff
.mainContainer {
  width: 1180px;
  margin: 0 auto;
  .searchContainer {
    width: 100%;
    margin-bottom: 20px;
    padding-top: 6px;
    display: flex;
    img {
      display: block;
    }
    .cityContainer {
      position: relative;
      width: 176px;
      height: 39px;
      border: 1px solid #bbbbbb;
      display: inline-block;
      text-align: center;
      line-height: 39px;
      background-color: #eeeeee;
      .posit {
        position: absolute;
        width: 14px;
        height: 17px;
        left: 21px;
        top: 0px;
        color: #06c;
      }
      .city {
        color: #007aff;
        font-size: 16px;
        padding-right: 3px;
      }
      .downAndUp {
        color: #007aff;
        position: absolute;
        width: 8px;
        height: 5px;
        background-position: -41px -5px;
        top: 0px;
        right: 10px;
      }
      .station {
        font-size: 12px;
      }
      :hover {
        background-color: #ffffff;
      }
    }
    .search_wrap {
      width: 610px;
      right: 190px;
      border: 3px solid #fe9813;
      margin-left: 20px;
      display: flex;
      z-index: 5;
      .searchContent {
        width: 486px;
        height: 40px;
        display: flex;
        input {
          width: 360px;
          height: 38px;
          font-size: 16px;
          border: none;
          padding-left: 10px;
        }
        .catalogList {
          width: 117px;
          height: 38px;
          border-color: #fe9813;
          border-right-width: 2px;
          border-width: 1px;
          border-style: solid;
          text-align: center;
          line-height: 38px;
          background-color: #fff8d5;
          i {
            font-size: 14px;
            font-style: normal;
          }
          .iconfont {
            padding-left: 8px;
            color: #fe9813;
          }
          :hover {
            background-color: #fff;
          }
        }
      }
      .searchBtn {
        display: block;
        height: 38px;
        width: 128px;
        color: #fff;
        text-align: center;
        line-height: 38px;
        background-color: #fb9125;
        box-shadow: inset 0 1px 0 0 #fcad5c;
        border: 1px solid #e08821;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        text-decoration: none;
        i {
          font-weight: 400;
        }
        span {
          padding: 0 7px;
          font-size: 16px;
        }
      }
    }
  }
  .base_top {
    width: 1180px;
    height: 654px;
    display: flex;
    .List {
      width: 258px;
      height: 653px;
      background-color: rebeccapurple;
    }
    .banner {
      width: 916px;
      height: 654px;
      background-color: pink;
    }
  }
}
</style>
