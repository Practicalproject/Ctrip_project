<template>
  <div class="container">
    <!-- 头部区域 -->
    <div class="header">
      <a href="javascript:;">行程介绍</a>
      <a href="javascript:;">图文详情</a>
      <a href="javascript:;">费用·须知</a>
      <a href="javascript:;">用户点评（1）</a>
    </div>
    <!-- 内容区 -->
    <div class="describeList">
      <!-- 浮动区域 -->
      <div class="rou-nav">
        <ul>
          <li>环岛半日游</li>
          <li>环岛一日游</li>
        </ul>
      </div>
      <!-- 行程区 -->
      <div class="tripArea">
        <div class="travelProfile">
          <ul>
            <li class="tp1">行程概要</li>
            <li class="tp2">游玩约5小时、交通约1小时；支持接送</li>
          </ul>
        </div>
      </div>
      <!-- 旅游顺序 -->
      <div class="tripTime">
        <ul>
          <li class="start">
            <span class="time">09:00</span>
            <span class="iconfont icon-circle"></span>
            <div class="theme">
              <div class="poi">
                <div class="left body">上门接：</div>
                <div class="right">全岛上门接送</div>
              </div>
              <p class="detail-txt">
                出发时间自由，由您下单时选择出发时间（请选择出发时间至少为下单时间往后三小时，以便为您定制行程和安排车辆），司机在您预订的时间到酒店大堂接您。VIP包车独立团，不拼车拼团
              </p>
              <p class="summary-time">行驶时间：约30分钟</p>
            </div>
          </li>
          <li class="start">
            <span class="time">09:30</span>
            <span class="iconfont icon-circle"></span>
            <div class="theme">
              <div class="poi">
                <div class="left body">游玩景点：</div>
              </div>
              <p class="detail-txt">
                <a href="javascript"> 查龙寺 、</a>
                <a href="javascript"> 卡伦观景台 、</a>
                <a href="javascript"> 普吉镇 、</a>
                <a href="javascript"> 山顶大佛 、</a>
                <a href="javascript"> 神仙半岛 、</a>
                <a href="javascript"> 普吉镇周末市场 、</a>
                <a href="javascript"> 芭东夜市 、</a>
                <a href="javascript"> 芭东海滩 、</a>
                <a href="javascript"> 卡伦海滩 、</a>
                <a href="javascript"> 普吉巨石海滩秋千</a>
              </p>
              <!-- 景区照片 -->
              <div class="scenicPhotos">
                <a href="javascript:;">
                  <img src="./images/查龙寺.jpg" alt="" />
                  <p></p>
                </a>
                <a href="javascript:;">
                  <img src="./images/普吉巨石.jpg" alt="" />
                  <p></p>
                </a>
                <a href="javascript:;">
                  <img src="./images/海豚馆.jpg" alt="" />
                  <p></p>
                </a>
                <a href="javascript:;">
                  <img src="./images/泰拳表演.jpg" alt="" />
                  <p></p>
                </a>
              </div>
              <p class="summary-time">行驶时间：约30分钟</p>
            </div>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "review",
};
</script>

<style  lang ='less' scoped>
.container {
  width: 1180px;
  margin: 0 auto;
  .header {
    height: 60px;
    width: 898px;
    padding: 0 0 0 70px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    a {
      line-height: 55px;
      font-size: 18px;
      font-weight: 600;
      margin-right: 50px;
      color: #333;
      display: block;
      float: left;
    }
    a :hover {
      color: #2680ff;
    }
  }
  /* 中间内容  详情区 */
  .describeList {
    width: 898px;
    padding: 0 0 0 70px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border: 1px solid #ddd;
    margin-top: -1px;
    padding: 30px 75px 30px;
    zoom: 1;
    background: #fff;
    position: relative;
    /* 浮动区域 */
    .rou-nav {
      position: absolute;
      top: 0px;
      left: 69px;
      ul li {
        margin-right: 10px;
        display: block;
        width: 120px;
        height: 40px;
        line-height: 38px;
        text-align: center;
        position: relative;
        zoom: 1;
        background-color: #fff;
        box-sizing: border-box;
        display: block;
        color: #333;
        text-decoration: none;
        border: 2px solid #e3e3e3;
        font-size: 14px;
        margin-top: 10px;
        float: left;
      }
    }
    /* 行程区域 */
    .tripArea {
      margin: 38px 0;
      /* 行程概要 */
      .travelProfile .tp1 {
        background-color: #e1edff;
        display: inline-block;
        line-height: 30px;
        height: 30px;
        text-align: center;
        width: 80px;
        color: #2680ff;
        margin-right: 10px;
      }
      .travelProfile .tp2 {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        display: inline;
        color: #666;
      }
    }
    /* 旅游顺序 */
    .tripTime {
      width: 746px;
      .start {
        display: block;
        width: 746px;
        height: 109px;
        /* border: 1px solid red; */
        padding: 0 0 0 60px;
        position: relative;
        .icon-circle {
          width: 12px;
          height: 20px;
          left: 53px;
          color: blue;
          display: inline-block;
          position: absolute;
          height: 20px;
        }
        .time {
          position: absolute;
          left: 0;
          color: #333;
        }
        .theme {
          padding: 0 0 26px 16px;
          border-left: 2px solid rgb(225, 237, 255);
          height: 109px;
          .poi .left {
            width: 56px;
            height: 19px;
            line-height: 19px;
            font-size: 14px;
            font-weight: 700;
            float: left;
          }
          .right {
            font-size: 14px;
            height: 19px;
            line-height: 19px;
          }
          .detail-txt {
            font-size: 14px;
            margin-top: 5px;
            color: #364552;
          }
          .summary-time {
            font-size: 12px !important;
            color: #9da5ad !important;
            display: block !important;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>
