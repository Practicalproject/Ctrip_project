<template>
  <div class="flightC">
    <div class="flyHeader">
      <h2>
        <span class="current">
          国际•港澳台特价机票
          <i></i>
        </span>
        <span>
          国内特价机票
          <i class="iconfont icon-shang"></i>
        </span>
      </h2>
      <div class="pullRight">
        <a class="dropdown">
          上海出发
          <!-- <i class="iconfont icon-shang"></i> -->
          <span class="iconfont icon-downlist"></span>
        </a>
        <div class="dropCon">
          <div class="dropList">
            <a href="javascript:;">北京</a>
            <a href="javascript:;">上海</a>
            <a href="javascript:;">广州</a>
            <a href="javascript:;">深圳</a>
            <a href="javascript:;">杭州</a>
            <a href="javascript:;">成都</a>
            <a href="javascript:;">南京</a>
            <a href="javascript:;">武汉</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ticketsDetail">
      <div class="product_hd">
        <ul>
          <li class="active">热门往返</li>
          <li>亚洲</li>
          <li>欧洲</li>
          <li>美洲</li>
          <li>非洲</li>
        </ul>
        <span> 更多国际•港澳台特价机票 > </span>
      </div>
      <div class="product_con"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceTicket",
};
</script>


<style lang="less" scoped>
.flightC {
  width: 1180px;
  height: 437px;
  margin: 28px auto 0;
  .flyHeader {
    height: 36px;
    width: 1180px;
    border-bottom: 2px solid #3983e5;
    h2 {
      text-align: left;
      float: left;
      span {
        color: #333;
        bottom: -3px;
        height: 36px;
        line-height: 30px;
        margin-right: 30px;
        cursor: pointer;
        font-size: 16px;
        position: relative;
        &:hover {
          color: #06c;
          cursor: default;
        }
        i {
          position: absolute;
          left: 50%;
          margin-left: -6px;
          bottom: -6px;
          width: 12px;
          height: 6px;
          overflow: hidden;
          line-height: 0;
          font-size: 0;
          border-bottom: 6px solid #3983e5;
          border-top: 0 none;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
      }
      .current {
        cursor: default;
        color: #06c;
      }
    }
    .pullRight {
      float: right;
      font-size: 12px;
      position: relative;
      .dropdown {
        position: relative;
        height: 22px;
        line-height: 22px;
        color: #3983e4;
        padding: 4px 5px 0;
        display: inline-block;
        overflow: hidden;
        // span {
        // display: block;
        // position: absolute;
        // top: -5px;
        // left: 0;
        // }
      }
      .dropCon {
        position: absolute;
        z-index: 10;
        top: 34px;
        right: 0;
        width: 90px;
        height: 186px;
        background: #fff;
        border: 1px solid #999;
        // display: none;
        .dropList {
          width: 87px;
          padding: 4px;
          height: auto;
          overflow: hidden;
          a {
            text-decoration: none;
            display: block;
            padding: 0 10px;
            height: 22px;
            line-height: 22px;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
            &:hover {
              color: white;
              background-color: #74a8ed;
            }
          }
        }
      }
    }
  }
  .ticketsDetail {
    // background-color: pink;
    padding: 15px 19px 0;
    font-size: 12px;
    .product_hd {
      width: 1140px;
      height: 20px;
      // background-color: pink;
      position: relative;
      ul {
        height: 20px;
        margin-bottom: 10px;
        // float: right;
        li {
          display: inline-block;
          line-height: 20px;
          margin-right: 15px;
          color: #3983e5;
          padding: 0 8px;
          &:hover {
            background: #3983e5;
            color: #fff;
            border-radius: 3px;
          }
        }
        .active {
          background: #3983e5;
          color: #fff;
          border-radius: 3px;
        }
      }
      a {
        text-decoration: none;
        // float: right;
        position: absolute;
        right: 20px;
        top: 15px;
      }
    }

    .product_con {
      width: 1140px;
      height: 353px;
      background-color: skyblue;
    }
  }
}
</style>
