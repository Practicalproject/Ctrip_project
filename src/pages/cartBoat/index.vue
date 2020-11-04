<template>
  <div>
    <div class="header">
      <div class="leftForm">
        <div class="leftTop">
          <div class="titl">
            <a href="javascript:;" class="cart">汽车票查询</a>
            <a href="javascript:;" class="boat changetitl">船票查询</a>
          </div>
          <!-- <div class="wrap1">
          <div class="userValue">
            <ul>
              <li>
                <span>出发城市</span>
                <input type="text" placeholder="中文/拼音/首字母" />
              </li>
              <li>
                <span>到达城市</span>
                <input type="text" placeholder="中文/拼音/首字母" />
              </li>
              <li>
                <span>出发日期</span>
                <input type="text" value="2020-11-2" />
              </li>
            </ul>
            <div class="search">
              <button>搜  索</button>
            </div>
          </div>
          <dl style="display: none">
            <dt>搜索历史</dt>
            <dd>
              <a href="javascript:;">测试-测试</a>
            <a href="javascript:;">测试-测试 </a>
            <a href="javascript:;">测试-测试</a>
            留着等写动态数据
            
            </dd>
          </dl>
        </div> -->
          <div class="wrap2">
            <div class="userValue">
              <ul>
                <li>
                  <span>航线</span>
                  <input type="text" placeholder="选择航线" />
                </li>
                <li>
                  <span>起航日期</span>
                  <input type="text" placeholder="2020-11-3" />
                </li>
              </ul>
              <div class="search">
                <button>搜 索</button>
              </div>
              <a href="javascript:;" class="searchBoat">查询轮船订单</a>
            </div>
            <dl style="display: none">
              <dt>搜索历史</dt>
              <dd>
                <!-- <a href="javascript:;">测试-测试</a>
            <a href="javascript:;">测试-测试 </a>
            <a href="javascript:;">测试-测试</a>
            留着等写动态数据
             -->
              </dd>
            </dl>
          </div>
        </div>
        <div class="leftBottom">
          <h3>汽车票工具箱</h3>
          <div class="bottomNav">
            <a href="javascript:;" class="leftmargin">
              <i class="order"></i>
              我的订单
            </a>
            <a href="javascript:;">
              <i class="service"></i>
              在线客服
            </a>
          </div>
        </div>
      </div>
      <div class="rightImg">
        <!-- 广告图 -->
        <div>
          <a href="https://contents.ctrip.com/activitysetupapp/mkt/index/pc"
            ><div class="adverbanner"></div
          ></a>
        </div>
        <!-- 二维吗 -->
        <div class="QrCode">
          <img
            src="//pages.c-ctrip.com/bus-resource/ditui/wxbanner-1.png"
            alt="请检查网络设置..."
          />
        </div>
        <h3>战略合作伙伴</h3>
        <div class="cully">
          <div>
            <img src="./images/hzcy.png" />
            <p class="hzcy">杭州长运</p>
          </div>
          <div>
            <img src="./images/scqcp.png" />
            <p>四川客运联网</p>
          </div>
          <div>
            <img src="./images/lvtu.png" />
            <p>江西旅途100</p>
          </div>
          <div>
            <img src="./images/henan.png" />
            <p>河南客运联网</p>
          </div>
          <div>
            <img src="./images/ynky.png" />
            <p>云南客运联网</p>
          </div>
          <div>
            <img src="./images/nbby.png" />
            <p>宁波公运集团</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footerWrap">
        <ul>
          <li>
            <i class="APP"></i>
          </li>
          <li class="wxLi">
            <i class="WX"></i>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "cartBoat",
};
</script>
<style lang='less' scoped>
.header {
  width: 1180px;
  height: 539px;
  margin: 100px auto 0;
  display: flex;
  justify-content: space-between;
  //   background: pink;
  .leftForm {
    width: 380px;
    height: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .titl {
      border: 1px solid #c3d4e5;
      border-radius: 5px 5px 0 0;
      display: flex;
      background: #ecf4fc;
      a {
        // flex-direction: column;
        // align-items: center;
        display: block;
        width: 189px;
        height: 43px;
        font: normal 18px "Microsoft Yahei";
        line-height: 43px;
        text-align: center;
        color: #06c;
        box-sizing: border-box;
      }
      a:hover {
        color: #fff;
        // border: 1px solid #92bbf0;
        background: #92bbf0;
      }
      .cart:hover {
        border-radius: 5px 0 0 0;
        padding-right: 1px;
      }
      .boat:hover {
        border-radius: 0 5px 0 0;
      }
      // 切换表单标题背景的class
      .changetitl {
        border-radius: 5px 5px 0 0;
        background: #3983e5;
        color: #fff;
        height: 46px;
        position: absolute;
        top: 1px;
        right: 0;
      }
    }
    .wrap1 {
      box-sizing: border-box;
      width: 380px;
      height: 316px;
      border-radius: 5px 5px 5px 5px;
      border: 7px solid #2f79db;
      .userValue {
        width: 100%;
        ul {
          padding-top: 40px;
          width: 100%;
          li {
            padding: 6px 0 7px;
            span {
              color: #555;
              width: 80px;
              //   height: 29px;
              padding: 5px 15px 5px 5px;
              font: normal 14px "Microsoft Yahei";
              text-align: right;
              display: inline-block;
            }
            input {
              width: 224px;
              height: 22px;
              padding: 3px;
              border: solid 1px #ccc;
              box-shadow: 1px 1px 3px #dddddd inset;
              font: normal 12px/22px Tahoma, Simsun, sans-serif;
              vertical-align: middle;
            }
            input::-webkit-input-placeholder {
              /* placeholder颜色  */
              color: #ccc;
            }
          }
        }
        .search {
          padding: 4px 0;
          margin-left: 103px;
          button {
            background: #ffb000;
            width: 232px;
            height: 33px;
            border: 1px solid #e77c00;
            border-radius: 3px;
            box-shadow: 0 1px 0 rgba(95, 50, 0, 0.7);
            vertical-align: middle;
            font: bold 16px/32px "Microsoft Yahei";
            color: #fff;
            text-align: center;
            //   overflow: hidden;
            //   outline: none;
          }
        }
      }
      dl {
        margin: 30px 5px 0;
        color: #999;
        overflow: hidden;
        display: flex;
        dt {
          width: 80px;
          padding-right: 10px;
          text-align: right;
          color: #999;
        }
        dd {
          a {
            color: #999;
            // float: left;
          }
        }
      }
    }
    .wrap2 {
      box-sizing: border-box;
      width: 380px;
      height: 316px;
      border-radius: 5px 5px 5px 5px;
      border: 7px solid #2f79db;
      .userValue {
        width: 100%;
        ul {
          padding-top: 40px;
          width: 100%;
          li {
            padding: 6px 0 7px;
            span {
              color: #555;
              width: 80px;
              //   height: 29px;
              padding: 5px 15px 5px 5px;
              font: normal 14px "Microsoft Yahei";
              text-align: right;
              display: inline-block;
            }
            input {
              width: 160px;
              color: gray;
              height: 22px;
              padding: 7px 0 7px 5px;
              border: solid 1px #ccc;
              box-shadow: 1px 1px 3px #dddddd inset;
              font: normal 12px/22px Tahoma, Simsun, sans-serif;
              vertical-align: middle;
            }
            input::-webkit-input-placeholder {
              /* placeholder颜色  */
              color: #ccc;
            }
          }
        }
        .search {
          padding: 4px 0;
          margin-left: 103px;
          button {
            background: #ffb000;
            width: 232px;
            height: 33px;
            border: 1px solid #e77c00;
            border-radius: 3px;
            box-shadow: 0 1px 0 rgba(95, 50, 0, 0.7);
            vertical-align: middle;
            font: bold 16px/32px "Microsoft Yahei";
            color: #fff;
            text-align: center;
            //   overflow: hidden;
            //   outline: none;
          }
        }
        .searchBoat {
          color: #06c;
          float: right;
          margin: 15px 35px 0 0;
          line-height: 20px;
          border-bottom: 1px solid #06c;
          display: inline;
        }
      }
    }
    .leftBottom {
      box-sizing: border-box;
      h3 {
        padding-bottom: 5px;
        margin-bottom: 10px;
      }
      .bottomNav {
        display: flex;
        a {
          width: 124px;
          height: 92px;
          background-color: #e0f0ff;
          text-align: center;

          // display: block;
          .order {
            display: block;
            width: 42px;
            height: 42px;
            margin: 15px auto 5px;
            background: url(//pic.c-ctrip.com/bus/icon_tool.gif) no-repeat;
          }
          .service {
            display: block;
            width: 42px;
            height: 42px;
            margin: 15px auto 5px;
            background: url(//pic.c-ctrip.com/bus/icon_tool.gif) no-repeat;
            background-position: -90px 0;
          }
        }
        a:hover {
          background: #2477e1;
          color: #fff;
          text-decoration: none;
        }
        a:hover .order {
          background-position: 0 -45px;
        }
        a:hover .service {
          background-position: -90px -45px;
        }
        .leftmargin {
          margin-right: 4px;
          border-radius: 8px 0 0 0;
        }
      }
    }
  }
  .rightImg {
    .adverbanner {
      width: 780px;
      height: 235px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      background-image: url(https://dimg04.c-ctrip.com/images/zg021f000001g9o96AB6B.png);
    }
    .QrCode {
      margin-top: 15px;
      margin-bottom: 10px;
    }
    h3 {
      border-bottom: 2px solid #2477e1;
      padding-bottom: 13px;
    }
    .cully {
      padding-left: 35px;
      width: 710px;
      display: flex;
      div {
        width: 118.33px;
        height: 110px;
        text-align: center;
        position: relative;
        img {
          width: 95px;
          height: 50px;
          margin: 8px auto 0;
        }
        p {
          height: 40px;
          line-height: 20px;
          color: #666;
          font-size: 12px;
          padding: 0 10px;
          text-align: center;
          position: absolute;
          bottom: -10px;
          left: 15px;
        }
        .hzcy {
          left: 22px;
        }
      }
    }
  }
}

.footer {
  width: 100%;
  height: 185px;
  margin-bottom: 20px;
  background-color: #eee; //#eeeeee
  .footerWrap {
    max-width: 1180px;
    min-width: 980px;
    width: auto;
    margin: 0 auto;
    ul {
      display: flex;
      text-align: center;
      li {
        margin-top: 30px;
        height: 125px;
        width: 50%;
        .APP {
          width: 320px;
          height: 125px;
          display: inline-block;
          background: url(//pic.c-ctrip.com/bus/index_QRcode.gif) no-repeat;
        }
        .WX {
          width: 320px;
          height: 125px;
          display: inline-block;
          background: url(//pic.c-ctrip.com/bus/index_QRcode.gif) no-repeat;
          background-position: 0 -125px;
        }
      }
      .wxLi {
        border-left: 3px solid #fff;
      }
    }
  }
}
</style>