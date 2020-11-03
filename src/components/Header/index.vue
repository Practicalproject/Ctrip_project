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
              <li>
                <a id="ctrip_cn" class="language_big5" href="//www.ctrip.com"
                  >简体中文</a
                >
              </li>
              <li>
                <a id="ctrip_eng" class="language_en" href="javascript:;"
                  >English (United States)</a
                >
              </li>
              <li>
                <a id="ctrip_uk" class="language_gb" href="javascript:;"
                  >English (United Kingdom)</a
                >
              </li>
              <li>
                <a id="ctrip_hk" href="javascript:;" class="language_hk"
                  >繁體中文 (中國香港)</a
                >
              </li>
              <li>
                <a id="ctrip_hk_en" href="javascript:;" class="language_hk"
                  >English(Hong Kong,China)</a
                >
              </li>
              <li>
                <a id="ctrip_korea" href="javascript:;" class="language_korea"
                  >韩语版</a
                >
              </li>
              <li>
                <a id="ctrip_jap" href="javascript:;" class="language_jap"
                  >日语版</a
                >
              </li>
              <li>
                <a id="ctrip_sg" href="javascript:;" class="language_sg"
                  >English (Singapore)</a
                >
              </li>
              <li>
                <a id="ctrip_au" href="javascript:;" class="language_au"
                  >English (Australia)</a
                >
              </li>
              <li>
                <a id="ctrip_de" href="javascript:;" class="language_de"
                  >Deutsch</a
                >
              </li>
              <li>
                <a id="ctrip_fr" href="javascript:;" class="language_fr"
                  >Français</a
                >
              </li>
              <li>
                <a id="ctrip_es" href="javascript:;" class="language_es"
                  >Español</a
                >
              </li>
              <li>
                <a id="ctrip_it" href="javascript:;" class="language_it"
                  >Italiano</a
                >
              </li>
              <li>
                <a id="ctrip_ru" href="javascript:;" class="language_ru"
                  >Русский</a
                >
              </li>
              <li>
                <a id="ctrip_th" class="language_th" href="javascript:;"
                  >泰国站</a
                >
              </li>
              <li>
                <a id="ctrip_id" class="language_id" href="javascript:;"
                  >Bahasa Indonesia</a
                >
              </li>
              <li>
                <a id="ctrip_my" class="language_my" href="javascript:;"
                  >Bahasa Malaysia</a
                >
              </li>
              <li>
                <a id="ctrip_my_en" class="language_my" href="javascript:;"
                  >English (Malaysia)</a
                >
              </li>
              <li>
                <a id="ctrip_vn" class="language_vn" href="javascript:;"
                  >越南语</a
                >
              </li>
              <li>
                <a id="ctrip_nl" class="language_nl" href="javascript:;"
                  >荷兰语</a
                >
              </li>
              <li>
                <a id="ctrip_pl" class="language_pl" href="javascript:;"
                  >波兰语&gt;</a
                >
              </li>
              <li>
                <a id="ctrip_gr" class="language_gr" href="javascript:;"
                  >希腊语</a
                >
              </li>
              <li>
                <a id="ctrip_tr" class="language_tr" href="javascript:;"
                  >土耳其语</a
                >
              </li>
              <li>
                <a id="ctrip_pt" class="language_pt" href="javascript:;"
                  >巴西葡萄牙语</a
                >
              </li>
            </ul>
          </div>
        </div>
        <ul class="topRight">
          <li><a class="active" href="javascript:;">你好，请登陆</a></li>
          <li><a class="active" href="javascript:;">免费注册</a></li>
          <li>
            <i class="iconfont icon-duanxin"></i>
            <a href="javascript:;">消息</a>
          </li>
          <li class="active">
            <a href="http://www.baidu.com"><span>我的携程</span></a>
            <i class="iconfont icon-downlist"></i>
            <ul class="nav-drowndrop">
              <li>
                <a href="javascript:;">我的收藏</a>
              </li>
              <li>
                <a href="javascript:;">我的优惠券</a>
              </li>
              <li>
                <a href="javascript:;">常用信息</a>
              </li>
              <li>
                <a href="javascript:;">我的钱包</a>
              </li>
            </ul>
          </li>
          <li class="active">
            <a href="javascript:;"><span>我的订单</span></a>
            <i class="iconfont icon-downlist"></i>
            <ul class="nav-drowndrop">
              <li>
                <a href="javascript:;">机票+相关订单</a>
              </li>
              <li>
                <a href="javascript:;">酒店订单</a>
              </li>
              <li>
                <a href="javascript:;">旅游订单</a>
              </li>
              <li>
                <a href="javascript:;">火车票订单</a>
              </li>
              <li>
                <a href="javascript:;">全部订单</a>
              </li>
              <li>
                <a href="javascript:;">手机号查订单</a>
              </li>
            </ul>
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
      <div class="nav-tel">
        <ul class="nav-tel-list">
          <li>境内：95010</li>
          <li>（或）400-830-6666</li>
          <li class="tel-list-more">香港（中国）：+ 852-3008-3295</li>
          <li class="tel-list-more">境外：+ 86-21-3406-4888</li>
        </ul>
        <b class="iconfont icon-downlist"></b>
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
          &:hover {
            background: #e4e7eb;
            text-decoration: none;
            cursor: pointer;
            color: #666;
            font-size: 12px;
            box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);

            height: 36px;
          }
          &:hover span {
            background-color: #fff;
            border-bottom: none;
            margin: 0px;
            border: 1px solid #d9d9d9;
            box-sizing: border-box;
          }
          &:hover .stateList {
            display: block;
          }
          &:hover .icon-downlist {
            transform: rotate(180deg);
            display: inline-block;
          }
          span {
            border: 1px solid transparent;
            height: 36px;
            display: block;
            padding: 0px 15px 0px 13px;
            .iconfont {
              font-size: 14px;
              vertical-align: middle;
            }
          }
          .stateList {
            border: 1px solid #d9d9d9;
            background: #fff;
            padding: 10px;
            margin: 0;
            width: 591px;
            overflow: hidden;
            box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
            position: absolute;
            top: 35px;
            left: 0;
            z-index: 2;
            display: none;
            li {
              float: left;
              display: inline-block;
              width: 183px;
              padding: 5px 7px;
              margin-bottom: 5px;
              &:hover {
                background-color: #f5f5f5;
              }
              a {
                background-image: url(//pic.c-ctrip.com/platform/online/home/un_header_language_1807.png);
                background-repeat: no-repeat;
                white-space: nowrap;
                display: block;
                padding-left: 26px;
                color: #4c4c4c;
                height: 20px;
                font-family: Arial, tahoma, verdana, "Microsoft YaHei", Simsun,
                  sans-serif;
                overflow: hidden;
                line-height: 20px;
                text-decoration: none;
              }
            }
          }
        }
      }
      .topRight {
        > li {
          float: left;
          height: 36px;
          line-height: 36px;
          padding: 0 10px;
          position: relative;
          &:nth-of-type(1)::after,
          &:nth-last-of-type(1)::after,
          &:nth-last-of-type(2)::after {
            display: none;
          }
          &:nth-of-type(1) a,
          &:nth-last-of-type(1) a,
          &:nth-last-of-type(2) a {
            color: #0066cc;
          }

          &::after {
            content: "";
            display: block;
            height: 15px;
            width: 1px;
            background-color: #ddd;
            position: absolute;
            right: -1px;
            top: 50%;
            transform: translateY(-50%);
          }
          > a {
            text-decoration: none;
            color: #666;
            display: inline-block;
          }
          > i.iconfont {
            font-size: 14px;
          }
          > i.iconfont.icon-duanxin {
            margin-right: 3px;
          }
          &.active {
            .nav-drowndrop {
              white-space: nowrap;
              display: none;
              position: absolute;
              left: 0px;
              top: 36px;
              // width: 100%;
              min-width: 100%;
              border: 1px solid #d9d9d9;
              z-index: 2;
              background-color: white;
              li {
                height: 30px;
                line-height: 30px;
                a {
                  padding: 0 10px;
                  text-decoration: none;
                  color: #666;
                  display: block;
                  &:hover {
                    color: #0066cc;
                  }
                }
                &:hover {
                  background-color: #f6f6f6;
                }
              }
            }
            &:hover {
              color: #4c4c4c;
              font-size: 12px;
              box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
              height: 36px;
              .nav-drowndrop {
                display: block;
              }
              i{
                display: inline-block;
                transform: rotate(180deg);
              }
              &::before {
                content: "";
                display: block;
                width: 1px;
                height: 100%;
                background-color: #ddd;
                position: absolute;
                left: 0;
              }
              &::after {
                height: 100%;
              }
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
    position: relative;
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
      margin: 25px 0;
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
        outline-style: none;
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
    .nav-tel {
      position: absolute;
      right: 0;
      top: 0;
      margin: 25px 0;
      display: flex;
      align-items: center;
      .nav-tel-list {
        text-align: right;
        li {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          color: #666;
          &.tel-list-more {
            display: none;
          }
        }
      }
      .iconfont {
        color: #666;
      }
    }
  }
}
</style>
