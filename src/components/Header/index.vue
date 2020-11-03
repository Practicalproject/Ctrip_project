<template>
  <!-- 头部 -->
  <header class="headerContainer">
    <div class="top">
      <div class="top-container">
        <div class="topLeft">
          <span>让旅行更幸福</span>
          <div class="state">
            <span>
              <em class="iconfont icon-diqiu"></em>
              Language
              <i class="iconfont icon-downlist"></i>
            </span>
            <ul class="stateList">
              <li></li>
            </ul>
          </div>
        </div>
        <ul class="topRight">
          <li><a class="active" href="javascript:;">你好，请登陆</a></li>
          <li><a class="active" href="javascript:;">免费注册</a></li>
          <li>
            <a href="javascript:;"
              ><i class="iconfont icon-duanxin"></i><span>消息</span></a
            >
          </li>
          <li>
            <a href="javascript:;"
              >我的携程<i class="iconfont icon-downlist"></i
            ></a>
          </li>
          <li>
            <a href="javascript:;"
              >我的订单<i class="iconfont icon-downlist"></i
            ></a>
          </li>
          <li><a class="active" href="javascript:;">客服中心</a></li>
          <li><a class="iconfont icon-shouji"></a></li>
          <li><a class="iconfont icon-weixin"></a></li>
        </ul>
      </div>
    </div>

    <div class="logo">
      <div class="ctriplogo">
        <a title="携程旅行网" href="javascript:;">携程旅行网</a>
      </div>
      <div v-if="$route.path === '/home'" class="cui_search">
        <input type="text" placeholder="搜索旅行地/酒店/旅游/景点门票/交通" />
        <button class="iconfont icon-fangdajing"></button>
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
          span {
            .iconfont {
              font-size: 14px;
              vertical-align: middle;
            }
          }
        }
      }
      .topRight {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        li {
          height: 100%;
          &:first-of-type {
            a {
              color: #0066cc;
              border: none;
              padding-right: 10px;
            }
          }
          &:nth-of-type(2) {
            a {
              padding-left: 10px;
            }
          }
          a {
            text-decoration: none;
            color: #666;
            border-right: 1px solid #dddddd;
            padding: 0 15px;

            &.active:hover {
              color: #3983e5;
            }

            &.iconfont {
              color: #3983e5;
              height: 16px;
              width: 10px;
              border: none;
            }
            i.iconfont {
              display: inline-block;
              vertical-align: middle;
              margin-top: -4px;
              margin-right: 3px;
            }
          }
        }
      }
    }
  }

  .logo {
    width: 1180px;
    margin: 0 auto;
    height: 80px;
    background-color: tan;
    .ctriplogo {
      float: left;
      display: inline-block;
      width: 203px;
      height: 34px;
      margin: 23px 0;
      overflow: hidden;
      a {
        display: block;
        width: 100%;
        height: 100%;
        background: url(./images/logo.png) no-repeat;
        background-size: 100% 100%;
        text-indent: -999px;
        overflow: hidden;
      }
    }
    .cui_search {
      float: left;
      margin: 23px 0;
      width: 28%;
      font-family: "Microsoft Yahei", Tahoma;
      position: relative;

      input {
        width: 100%;
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #8ebefc;
        box-shadow: 2px 2px 1px 0 rgba(164, 203, 255, 0.25) inset;
        border-radius: 5px;
        font-size: 12px;
        font-family: "Microsoft Yahei", Tahoma;
        margin-left: 40px;
        padding-left: 4px;
        &:focus {
          border-color: #2b82f4;
          box-shadow: 1px 1px 0 0 rgba(146, 187, 241, 1) inset;
        }
        &:focus + button {
          border-color: #2b82f4;
          background-color: #2b82f4;
        }
      }
      button {
        position: absolute;
        right: -40px;
        top: 0;
        border-radius: 5px;
        border: none;
        width: 42px;
        height: 30px;
        border: 1px solid #8ebefc;
        border-radius: 0 5px 5px 0;
        background-color: #a4cbff;
        color: white;
        border-left: none;
      }
    }
  }
}
</style>
