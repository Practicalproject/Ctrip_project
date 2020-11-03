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
              <img src="./images/banner1.jpg" alt="" />
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

    <!-- 地区旅游点 -->
    <div class="localProWrap">
      <div class="localPro">
        <div class="localHeader">
          <i class="china"></i>
          <h2>境内自由行</h2>
          <div class="city">
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">云南</a>
            <a href="javascript:;">成都</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;">古北水镇</a>
            <a href="javascript:;">重庆</a>
            <a href="javascript:;">海南</a>
            <a href="javascript:;">桂林</a>
            <a href="javascript:;">上海</a>
          </div>
          <a href="javascript:;">
            更多精选产品
            <i class="more"></i>
          </a>
        </div>
        <div class="localCon">
          <div class="localWrap">
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="localProWrap">
      <div class="localPro">
        <div class="localHeader">
          <i class="china"></i>
          <h2>境内自由行</h2>
          <div class="city">
            <a href="javascript:;">三亚</a>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">云南</a>
            <a href="javascript:;">成都</a>
            <a href="javascript:;">厦门</a>
            <a href="javascript:;">古北水镇</a>
            <a href="javascript:;">重庆</a>
            <a href="javascript:;">海南</a>
            <a href="javascript:;">桂林</a>
            <a href="javascript:;">上海</a>
          </div>
          <a href="javascript:;">
            更多精选产品
            <i class="more"></i>
          </a>
        </div>
        <div class="localCon">
          <div class="localWrap">
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="localItem">
              <div class="localImg">
                <img src="./images/travelPic.jpg" alt="" />
              </div>
              <div class="localDetail">
                <h3>
                  上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                  放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
                </h3>
                <div class="price">
                  <span>
                    <i>￥</i>
                    1700
                    <em>起</em>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
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
  height: 3000px;
  margin: 0 auto;
  // 搜索区域
  .searchContainer {
    width: 100%;
    margin-bottom: 20px;
    padding-top: 6px;
    display: flex;
    // img {
    //   display: block;
    // }
    .cityContainer {
      position: relative;
      width: 176px;
      height: 46px;
      border: 1px solid #bbbbbb;
      display: inline-block;
      text-align: center;
      line-height: 39px;
      background-color: #eeeeee;
      vertical-align: bottom;
      .posit {
        position: absolute;
        width: 14px;
        height: 18px;
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
        height: 7px;
        background-position: -41px -5px;
        top: 5px;
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
      height: 46px;
      right: 190px;
      border: 3px solid #fe9813;
      border-radius: 5px;
      box-sizing: border-box;
      margin-left: 20px;
      display: flex;
      z-index: 5;
      .searchContent {
        width: 486px;
        height: 100%;
        display: flex;
        input {
          width: 360px;
          height: 100%;
          font-size: 16px;
          border: none;
          padding-left: 10px;
        }
        .catalogList {
          width: 117px;
          height: 100%;
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
        height: 100%;
        width: 128px;
        color: #fff;
        text-align: center;
        line-height: 38px;
        background-color: #fb9125;
        box-shadow: inset 0 1px 0 0 #fcad5c;
        border: 1px solid #e08821;
        cursor: pointer;
        // border-radius: 0 5px 5px 0;
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
              background: url("./images/icon.jpg") no-repeat 0 0;
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
            background: url("./images/icon.jpg") no-repeat 0 -40px;
          }
          &:nth-child(3) h4 i {
            background: url("./images/icon.jpg") no-repeat 0 -80px;
          }
          &:nth-child(4) h4 i {
            background: url("./images/icon.jpg") no-repeat 0 -120px;
          }
          &:nth-child(5) h4 i {
            background: url("./images/icon.jpg") no-repeat 0 -160px;
          }
          &:nth-child(6) h4 i {
            background: url("./images/icon.jpg") no-repeat 0 -200px;
          }
          &:nth-child(7) h4 i {
            background: url("./images/icon.jpg") no-repeat 0 -240px;
          }
          &:nth-child(8) h4 i {
            background: url("./images/icon.jpg") no-repeat 0 -280px;
          }
          &:nth-child(9) h4 i {
            background: url("./images/icon.jpg") no-repeat 0 -320px;
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
            background: url("./images/service.png") no-repeat -20px -10px;
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
              background: url("./images/service.png") no-repeat -72px -64px;
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
              background: url("./images/service.png") no-repeat -10px -64px;
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
  // 地区旅游点
  .localProWrap {
    .localPro {
      margin: 0 auto;
      width: 1180px;
      padding: 30px 0 5px;
      .localHeader {
        border-bottom: 1px solid #dee2e5;
        display: block;
        display: flex;
        .china {
          background: url("./images/China.png") center center no-repeat;
          width: 24px;
          display: block;
          height: 24px;
          margin: 3px 8px 3px 0;
        }
        h2 {
          font: 24px/30px PingFangSC-Medium;
          width: 200px;
          height: 30px;
          margin-bottom: 8px;
          color: #333;
        }
        .city {
          height: 33px;
          margin-top: 5px;
          width: 800px;
          display: flex;
          align-content: space-around;
          a {
            text-decoration: none;
            color: #333;
            font: 16px/22px Microsoft Yahei;
            height: 30px;
            padding: 0 8px;
            margin: 3px 12px;
            cursor: pointer;
            border-bottom: 3px solid #ffb80f;
          }
        }
        a {
          text-decoration: none;
          margin-top: 8px;
          padding-right: 10px;
          font: 14px/20px Microsoft Yahei;
          color: #999;
          cursor: pointer;
          position: relative;
          .more {
            width: 7px;
            height: 10px;
            display: block;
            background: url("./images/sprit.png") no-repeat 0 -980px;
            position: absolute;
            top: 5px;
            right: 0;
          }
        }
      }
      .localCon {
        .localWrap {
          margin: 0 -12px;
          padding: 16px 0;
          background: #fff;
          font-size: 12px;
          display: flex;
          flex-wrap: wrap;
          align-content: sapce-evenly;
          .localItem {
            width: 277px;
            height: 260px;
            margin: 0 12px;
            margin-bottom: 24px;
            text-decoration: none;
            &:hover {
              box-shadow: 2px 2px 2px 2px #eee;
            }
            .localImg {
              overflow: hidden;
              img {
                width: 277px;
                height: 156px;
                &:hover {
                  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
                  width: 277px;
                  height: 156px;
                  transform: scale(1.1);
                }
              }
            }
            .localDetail {
              width: 277px;
              height: 104px;
              border: 1px solid #eee;
              border-top: none;
              h3 {
                font: 16px/24px "Microsoft Yahei";
                padding: 8px 12px 0;
                height: 56px;
                overflow: hidden;
                color: #222;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
              }
              .price {
                padding-left: 12px;
                padding-right: 12px;
                padding-top: 4px;
                span {
                  font-size: 24px;
                  display: inline-block;
                  color: #f60;
                  i {
                    font: 14px/1.5 Microsoft YaHei;
                  }
                  em {
                    font: 14px Microsoft Yahei, sans-serif;
                    margin: 0 3px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  //
}
</style>
