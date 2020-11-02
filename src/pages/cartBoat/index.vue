<template>
  <div>
    <div class="header">
      <div class="left">
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
            <h3>汽车工具箱</h3>
            <div>
              <a href="javascript:;">
                <i></i>
                我的订单
              </a>
              <a href="javascript:;">
                <i></i>
                在线客服
              </a>
            </div>
        </div>
      </div>
    </div>
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
  margin: 100px auto;
  //   background: pink;
  .left {
    width: 380px;
    height: 355px;
    position: relative;
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
  }
}
</style>