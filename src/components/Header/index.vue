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
          <li>
            <router-link class="active" to="/login">你好，请登陆</router-link>
          </li>
          <li><a class="active" href="javascript:;">免费注册</a></li>
          <li>
            <i class="iconfont icon-duanxin"></i>
            <a href="javascript:;">消息</a>
          </li>
          <li class="active">
            <a href="javascript:;"><span>我的携程</span></a>
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
            <!-- <a href="javascript:;"><span>我的订单</span></a> -->
            <router-link to="/order"><span>我的订单</span></router-link>
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
          <li><a href="javascript:;">客服中心</a></li>

          <li class="active">
            <a class="iconfont icon-shouji"></a>
            <ul class="qrcode">
              <li>
                <img src="./images/er_ctrip_app.jpg" alt="" />
                <p>手机扫码快速下载</p>
              </li>
              <li class="ctrip-app">
                <a href="javascript:;">携程旅行手机版</a
                ><i class="iconfont icon-right"></i>
              </li>
            </ul>
          </li>
          <li class="active">
            <a class="iconfont icon-weixin"></a>
            <ul class="qrcode">
              <li>
                <img src="./images/er_ctrip_app.jpg" alt="" />
                <p>扫一扫</p>
                <p class="nth2">了解爆款旅行好货</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="logo">
      <div class="ctriplogo">
        <router-link to="/" title="携程旅行网">携程旅行网</router-link>
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
    <!-- 除了首页\机票页面\攻略页面 -->
    <nav
      class="navContainer"
      :class="{
        mb:
          $route.path !== '/home' ||
          $route.path !== '/airlinepage' ||
          $route.path !== '/strategy',
      }"
    >
      <ul class="cui_nav_ul">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li class="divider"></li>
        <template v-for="item in cate1Nav">
          <li
            :key="item.id"
            @mouseenter="getNavId(item.cateID)"
            @mouseleave="navId = ''"
          >
            <router-link :to="item.cateAlias"
              >{{ item.cateName ? item.cateName : "javascript:;" }}
              <i v-show="item.isTwoCate" class="iconfont"></i>
              <span class="point"></span>
            </router-link>
            <div
              v-show="navId && cate2Nav.length > 0"
              :style="{ 'z-index': navId === item.cateID ? 2 : 1 }"
              class="cui_subnav_wrap"
            >
              <ul class="ul_nav_hotel">
                <li v-for="navItem in cate2Nav" :key="navItem.id">
                  <a href="javascript:;">{{ navItem.cateName }}</a>
                </li>
              </ul>
              <a class="cui_ico_order" href="javascript:;"
                ><i class="cui-icon-hotel"></i>酒店订单 &gt;</a
              >
            </div>
          </li>
          <li class="divider" :key="item.cateID"></li>
        </template>
        <li>
          <a href="javascript:;">更多</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navList: [],
      navId: "",
    };
  },
  mounted() {
    // 发请求获取导航数据
    this.getNavData();
  },
  methods: {
    // 鼠标移入赋值navId
    getNavId(navId) {
      this.navId = "";
      this.navId = navId;
    },
    // 获取导航数据回调函数
    async getNavData() {
      let result = await this.$API.index.getNavData();
      //判断状态码是否为200
      if (result.resultDesc.errCode === 200) {
        // 自定义唯一标识
        let time,
          id = 1;
        // 遍历将唯一标识塞进去
        let navList = result.resultData.map((item) => {
          //  这里给一级导航添加是否有二级导航标识
          let cateTwo = result.resultData.some(
            (twoItem) => twoItem.cateParentID === item.cateID
          );
          //  判断通过将二级导航标识添加
          if (cateTwo) {
            item.isTwoCate = true;
          }
          //  这下面处理唯一标识
          time = Date.now();
          item.id = time + id++;
          return item;
        });

        this.navList = navList;
      }
    },

  },
  computed: {
    // 计算一级分类导航
    cate1Nav() {
      return this.navList.filter((item) => !item.cateParentID);
    },
    // 计算二级分类导航
    cate2Nav() {
      return this.navList.filter((item) => item.cateParentID === this.navId);
    },
  },
};
</script> 

<style lang="less" scoped>
// 头部
.headerContainer {
  width: 100%;
  .mb {
    margin-bottom: 54px;
    .cui_nav_ul {
      .cui_subnav_wrap {
        display: block;
      }
    }
  }

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

            .qrcode {
              display: none;
              width: 144px;
              position: absolute;
              top: 36px;
              right: 0;
              background-color: white;
              box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
              text-align: center;
              border: 1px solid #d9d9d9;
              z-index: 2;
              li {
                padding: 16px 0 13px;
                img {
                  border: none;
                  vertical-align: middle;
                  display: inline-block;
                }
                p {
                  margin-top: 10px;
                  font-size: 12px;
                  color: #666;
                  height: 12px;
                  line-height: 12px;
                }
                &.ctrip-app {
                  padding: 0;
                  width: 100%;
                  line-height: 36px;
                  height: 36px;
                  color: white;
                  background-color: #2477e3;
                  opacity: 0.5;
                  text-align: center;
                  cursor: pointer;
                  a {
                    text-decoration: none;
                    color: white;
                  }
                  .icon-right {
                    font-size: 12px;
                    margin-left: 4px;
                    overflow: hidden;
                  }
                }
              }
            }
            &:hover {
              color: #4c4c4c;
              font-size: 12px;
              box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
              height: 36px;
              background-color: white;
              .nav-drowndrop,
              .qrcode {
                display: block;
              }
              > i {
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
                content: "";
                display: block;
                width: 1px;
                height: 100%;
                background-color: #ddd;
                position: absolute;
                right: 0;
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
      top: 10px;
      font-family: Arial, tahoma, verdana, "Microsoft YaHei", Simsun, sans-serif;
      padding: 10px 20px 0px 16px;
      border: 1px solid #fff;
      z-index: 1;

      .nav-tel-list {
        text-align: right;
        color: #666;
        font-size: 12px;
        line-height: 20px;
        li {
          height: 20px;
          color: #666;
          &.tel-list-more {
            display: none;
          }
        }
      }
      .iconfont {
        color: #666;
        position: absolute;
        top: 25px;
        right: 5px;
        font-size: 12px;
      }

      &:hover {
        background: #fff;
        padding: 10px 20px 10px 16px;
        border: 1px solid #d9d9d9;
        box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
        li.tel-list-more {
          display: block;
        }

        b.iconfont {
          display: inline-block;
          transform: rotate(180deg);
        }
      }
    }
  }

  nav {
    width: 100%;
    height: 40px;
    background-color: #2577e3;
    margin: 0 auto 54px;
    margin-bottom: 10px;
    .cui_nav_ul {
      .router-link-active{
        background-color: rgb(10, 86, 187);
      }
      position: relative;
      // z-index: 25;
      min-width: 980px !important;
      max-width: 1180px;
      margin: 0 auto;
      padding: 0;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      background-color: #2577e3;
      > li {
        float: left;
        display: inline-block;
        height: 40px;
        > a {
          position: relative;
          display: block;
          height: 40px;
          padding: 0 11px;
          color: #fff;
          cursor: pointer;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.2s ease 0s;

          .iconfont {
            display: inline-block;
            width: 0;
            height: 0;
            overflow: hidden;
            line-height: 0;
            font-size: 0;
            margin-left: 5px;
            vertical-align: middle;
            border-top: 3px solid #fff;
            border-bottom: 0 none;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            -webkit-transition: transform 0.2s ease 0s;
            transition: transform 0.2s ease 0s;
          }
        }
        &:hover {
          background: #0a56bb;
          .iconfont {
            display: inline-block;
            width: 0;
            height: 0;
            overflow: hidden;
            line-height: 0;
            font-size: 0;
            margin-left: 5px;
            vertical-align: middle;
            border-bottom: 3px solid #fff;
            border-top: 0 none;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
          }
          .point {
            display: block;
          }
          .cui_subnav_wrap {
            display: block;
          }
        }
        .point {
          display: none;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -7px;
          width: 0;
          height: 0;
          overflow: hidden;
          line-height: 0;
          font-size: 0;
          vertical-align: middle;
          border-bottom: 7px solid #fff;
          border-top: 0 none;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
        }
        .cui_subnav_wrap {
          display: none;
          white-space: nowrap;
          position: absolute;
          // z-index: 8;
          left: 0;
          top: 40px;
          line-height: 40px;
          color: #666;
          width: 100%;
          background-color: #fff;
          .ul_nav_hotel {
            width: auto !important;
            height: 37px;
            line-height: 37px;
            margin: 0;
            border: 1px solid #2577e3;
            border-top: none;
            font-size: 14px;
            li {
              position: relative;
              float: left;
              display: inline-block;
              height: auto;
              margin: 0 8px;
              color: #333;
              font-size: 14px;
              a {
                color: #333;
                font-size: 14px;
                text-decoration: none;
                &:hover {
                  color: #2577e3;
                }
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                top: 2px;
                right: -9px;
                width: 1px;
                height: 14px;
                padding-left: 0;
                background-color: #ccc;
                margin: 11px 0 0;
                clear: none;
                border: none;
              }
              &:last-of-type::after{
                display:none
              }
            }
          }
          .cui_ico_order {
            position: absolute;
            top: 10px;
            right: 18px;
            padding-left: 20px;
            background-position: -67px -542px;
            line-height: 18px;
            font-size: 14px;
            color: #333;
            text-decoration: none;
            &:hover {
              color: #2577e3;
            }
            i {
              display: inline-block;
              background-image: url(./images/un_icon_index_type20170111.png);
              background-repeat: no-repeat;
              width: 16px;
              height: 16px;
              vertical-align: middle;
              margin-right: 5px;
              margin-top: -1px;
              background-position: -26px 0;
            }
          }
        }
      }
      .divider {
        width: 1px;
        height: 14px;
        padding-left: 0;
        margin: 13px 0 0;
        background-color: #1d67dd;
        clear: none;
        border: none;
      }
    }
  }
}
</style>
