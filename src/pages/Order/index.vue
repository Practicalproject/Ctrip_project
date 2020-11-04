<template>
  <div class="orderContainer">
    <ul class="leftContainer">
      <li>
        <a href="##"><span>我的携程首页</span></a>
      </li>
      <li class="active">
        <a href="##" class=""><span>订单</span></a>
      </li>
      <li>
        <a href="##"><span>我的消息</span></a>
      </li>
      <li>
        <a href="##"><span>钱包</span></a>
      </li>
      <li>
        <a href="##"><span>优惠券</span></a>
      </li>
      <li>
        <a href="##"><span>积分</span></a>
      </li>
      <li>
        <a href="##"><span>我的收藏</span></a>
      </li>
      <li>
        <a href="##"><span>我的发票</span></a>
      </li>
      <li>
        <a href="##"><span>常用信息</span></a>
      </li>
      <li>
        <a href="##"><span>个人中心</span></a>
      </li>
    </ul>
    <div class="rightContainer">
      <!-- 头部 -->
      <div class="header">
        <a href="##" class="current">全部订单</a>
        <a href="##">未出行</a>
        <a href="##">待支付</a>
        <a href="##">待点评</a>
      </div>

      <!-- 主体 -->
      <ul class="orderBody">
        <li class="order-info">
          <!-- 标题 -->
          <h3>
            <label class="base_label">
              <input type="checkbox" />
            </label>
            <span class="order-number"
              >订单号：<a href="##">13182347153</a>
            </span>
            <span>预订日期：2020-09-12 </span>
            <span class="order-delete"><a href="##">删除订单</a></span>
          </h3>
          <!-- 内容区 -->
          <div class="order-items clearfix">
            <div class="order-detail">
              <ul>
                <li class="order-item-title">北京-沈阳北</li>
                <li class="order-item-txt">出发日期：2020-09-30 22:33 至 10-01 07:25 K53</li>
                <li class="order-item-txt">出行人：索笑宇</li>
              </ul>
            </div>
            <div class="order-price"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
};
</script>

<style lang="less" scoped>
.clearfix::after {
  content: "";
  // 转换成块级元素
  display: block;
  // 高度为0
  height: 0;
  // 清除浮动的影响
  clear: both;
  // 元素隐藏
  visibility: hidden;
}
.orderContainer {
  width: 1180px;
  height: 1000px;
  margin: 0 auto;
  // background: pink;
  display: flex;
  // 左侧
  .leftContainer {
    // background: yellowgreen;
    border: 1px solid #2577e3;
    width: 150px;
    box-sizing: border-box;
    margin-right: 20px;
    li {
      a {
        display: block;
        padding-left: 4px;
        font-size: 14px;
        color: #333;
        width: 148px;
        border-left: 2px solid transparent;
        padding: 13px 10px 13px 12px;
        background-color: #fcfcfc;
        font-family: simsun;
        &:hover {
          color: #06c;
          background: transparent;
          border-left: 2px solid transparent;
        }
      }
      &.active a {
        border-left: 2px solid #06c;
        color: #06c;
        background: transparent;
      }
    }
  }
  // 右侧
  .rightContainer {
    // background: skyblue;
    width: 1010px;

    // 头部
    .header {
      height: 39px;
      background-color: pink;
      margin-bottom: 20px;
      a {
        float: left;
        margin-right: 5px;
        width: 138px;
        height: 37px;
        line-height: 37px;
        border: 2px solid #ccc;
        border-bottom: 0 none;
        font-family: Microsoft Yahei;
        font-size: 18px;
        color: #666;
        text-align: center;
        &.current {
          position: relative;
          top: 2px;
          margin-top: -2px;
          height: 39px;
          border-color: #2577e3;
          background-color: #fff;
          color: #06c;
          cursor: default;
        }
      }
    }

    // 主体
    .orderBody {
      .order-info {
        border: 1px solid #ddd;
        margin-bottom: 10px;
        // 标题
        h3 {
          height: 34px;
          line-height: 34px;
          font-size: 12px;
          padding-left: 10px;
          background-color: #f6f6f6;
          input {
            vertical-align: middle;
            margin-right: 3px;
          }
          span {
            margin-right: 20px;
            a {
              color: #06c;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        // 内容区
        .order-detail {
          max-width: 720px;
          float: left;
          margin: 10px 0 10px 28px;
          ul {
            .order-item-title {
              font-size: 16px;
              line-height: 20px;
              color: #111;
              font-weight: 700;
              margin-bottom: 6px;
            }
            .order-item-txt {
              font-size: 12px;
              line-height: 16px;
              color: #333;
              margin-bottom: 6px;
            }
          }
          .order-price {
            float: right;
          }
        }
      }
    }
  }
}
</style>
