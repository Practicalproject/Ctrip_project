<template>
  <!--  -->
  <div class="hotel">
    <!-- 背景图区域 -->
    <div class="background1">
      <div class="backgroundUrl"></div>
    </div>

    <!-- 内容区 -->
    <div class="hotelcontainer">
      <!-- 大logo区 -->
      <div class="header">
        <div class="hotelHeaderwrapper">
          <div class="onload">
            <img src="./images/onload.png" alt="" />
          </div>
        </div>

        <!-- 订票区 -->
        <div class="order">
          <!-- 搜索区 -->
          <ul class="inner-page">
            <li class="orderTime">
              <!-- 目的地选择区 -->
              <div class="orderTime-inner">
                <div class="search">
                  <label for="destition"> 目的地/酒店名称 </label>
                  <input
                    class="destition"
                    type="text"
                    placeholder="城市、机场、区域、地标或者酒店名称"
                  />
                </div>
                <!-- 搜索显示城市区 -->
                <div class="hot-city-picker">
                  <div class="area">
                    <p class="title">国内热门城市</p>
                    <ul class="city">
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                    </ul>
                  </div>
                  <div class="area">
                    <p class="title">国内热门城市</p>
                    <ul class="city">
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                      <li><span>北京</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="checkIntime">
              <div class="start">
                <label for="">入住时间</label>
                <input type="text" placeholder="" />
              </div>
              <span>1晚</span>
              <div class="end">
                <label for="">退房时间</label>
                <input type="text" placeholder="" />
              </div>
            </li>
          </ul>
          <!-- 星级区 -->
          <div class="starLevel">
            <div class="star">星级</div>
            <div class="level1">
              <span class="level">
                <em>≤2</em>&nbsp;
                <i class="iconfont icon-wujiaoxing"></i>
              </span>
              <span class="level"
                >&nbsp;
                <em>3</em>
                <i class="iconfont icon-wujiaoxing"></i>
              </span>
              <span class="level"
                >&nbsp;
                <em>4</em>
                <i class="iconfont icon-wujiaoxing"></i>
              </span>
              <span class="level"
                >&nbsp;
                <em>5</em>
                <i class="iconfont icon-wujiaoxing"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 酒店服务区 -->
      <div class="hotelServerwrapperContainer">
        <h3>酒店业务服务升级</h3>
        <ul>
          <li>
            <span>
              <img src="./images/下载.png" alt="" />
            </span>
            <p></p>
          </li>
          <li>
            <span></span>
            <p></p>
          </li>
          <li>
            <span></span>
            <p></p>
          </li>
        </ul>
        <p class="link"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotel",
};
</script>

<style  lang ='less' scoped>
/* 最外层容器 */
.hotel {
  width: 100%;
  position: absolute;
}
/* 背景图 */
.background1 {
  width: 100%;
  height: 280px;
  position: relative;
}
.backgroundUrl {
  width: 100%;
  height: 100%;
  background: url(./images/hotelHeaderBackground.webp);
  background-size: cover;
  border-bottom-right-radius: 80%;
  border-bottom-left-radius: 80%;
}
/* 内容区 */
.hotelcontainer {
  width: 1180px;
  height: 1180px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  .header {
    overflow: hidden;
  }
}
/* 订酒店区域 */
.hotelHeaderwrapper .onload {
  width: 1160px;
  height: 50px;
  margin-left: 10px;
  position: absolute;
  top: 75px;
  margin: 0 auto;
}
.hotelHeaderwrapper img {
  display: block;
}
/* 订票区 */
.order {
  width: 1160px;
  height: 168px;
  background-origin: border-box;
  background: white;
  box-shadow: 0 8px 20px 0 rgba(97, 121, 157, 0.16);
  box-sizing: border-box;
  padding: 24px;
  top: 145px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
/* 搜索区 */
.inner-page {
  width: 100%;
  display: flex;
  /* background: rgb(165, 165, 240); */
  /* li */
  .orderTime {
    width: 25%;
    position: relative;
    .search {
      display: flex;
      flex-direction: column;
      label {
        position: absolute;
        top: 16px;
        left: 16px;
        font-size: 14px;
        color: #8592a6;
        line-height: 18px;
        user-select: none;
      }
      input {
        display: block;
        padding: 8px 16px 0;
        position: absolute;
        border: none;
        border-bottom: 2px solid transparent;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        color: #0f294d !important;
        line-height: 10px;
        height: 22px;
        bottom: 0;
      }
    }
  }
  /* 入住时间 */
  .checkIntime {
    display: flex;
    justify-content: space-between;
    width: 25%;
    position: relative;
    .start label {
      font-size: 14px;
      color: #8592a6;
      line-height: 18px;
      user-select: none;
    }
  }
}

/* 隐藏区 */
.orderTime-inner .hot-city-picker {
  display: none;
  position: absolute;
  width: 533px;
  height: 400px;
  background: white;
  .area {
    width: 100%;
    height: 200px;
    background: white;
    .title {
      display: block;
      height: 30px;
      font-size: 14px;
      color: #666;
      background: #f7f7fb;
      height: 30px;
      line-height: 30px;
      padding-left: 8px;
      font-weight: 700;
    }
  }
}

.area ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  align-items: center;
}
.area ul li {
  width: 20%;
  height: 32px;
}
ul li span {
  line-height: 32px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 1px 5px;
}
span:hover {
  background: rgb(160, 179, 221);
}

/* 星级评论区 */
.starLevel {
  height: 24px;
  width: 100%;
  margin-right: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  margin: 24px 0 0;
  display: inline-flex;
  align-items: center;
  .level1 {
    width: 50px;
    display: flex;
    span {
      display: block;
      height: 22px;
      line-height: 22px;
      text-align: center;
      width: 50px;
      margin-left: 16px;
    }
  }
}
</style>
