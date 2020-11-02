<template>
  <!-- 头部 -->
  <header class="headerContainer">
    <div class="top">
      <div class="top-container">
        <div class="topLeft">
          <span>让旅行更幸福</span>
          <div class="state iconfont icon-diqiu">
            Language
            <ul class="stateList">
              <li></li>
            </ul>
          </div>
        </div>
        <ul class="topRight">
          <li><a class="active" href="javascript:;">你好,请登陆</a></li>
          <li><a class="active" href="javascript:;">免费注册</a></li>
          <li><a href="javascript:;">消息</a></li>
          <li><a href="javascript:;">我的携程</a></li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a class="active" href="javascript:;">客服中心</a></li>
          <li><a class="iconfont icon-shouji"></a></li>
          <li><a class="iconfont icon-weixin"></a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
// 头部
.headerContainer {
  width: 100%;
  .top {
    width: 100%;
    height: 36px;
    line-height: 36px;
    background-color: #f4f4f4;
    color: #666;
    font-size: 12px;
    .top-container {
      width: 1180px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      position: relative;
      .topLeft {
        width: 50%;
        height: 100%;
        display: flex;
        position: relative;
        .state {
          position: absolute;
          left: 103px;
          top: 0;
          font-size: 12px;
          cursor: pointer;
        }
      }
      .topRight {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        li {
          height: 100%;
          a {
            text-decoration: none;
            color: #666;
            border-right: 1px solid #dddddd;
            padding: 0 10px;

            &.active:hover {
              color: #3983e5;
            }
            &.iconfont {
              color: #3983e5;
              height: 16px;
              width: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
