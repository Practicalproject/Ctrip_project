<template>
  <div class="conent">
    <!-- 头部 -->
    <div class="header">
      <a href="http://www.ctrip.com"></a>
      <p>客服中心</p>
    </div>
    <!-- 内容 -->
    <div class="wrap">
      <!-- 船票 -->
      <div class="tit">
        <h2>黄浦江游览（十六铺码头）精华游船票</h2>
        <div class="ticket">
          <p class="date">使用日期</p>
          <ul>
            <li>
              <a href="javascript:;">
                今天11-04
                <p>¥80</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                明天11-05
                <p>¥80</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                后天11-06
                <p>¥80</p>
              </a>
            </li>
            <li>
              <a href="javascript:;"
                >11-07
                <p>¥80</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 成人票 -->
      <div class="adult">
        <div class="adult_wrap">
          <div class="adult_left">
            <div class="le_to">
              <h3>成人票</h3>
              <p>购买须知 <span>▼</span></p>
            </div>
            <ul>
              <li><span style="font-size: 15px">☑</span> 随时退</li>
              <li><span style="font-size: 15px">☑</span> 入园保障</li>
            </ul>
          </div>
          <div class="adult_right">
            <p>
              <span>￥</span>
              <span class="picr">80</span>
            </p>
            <ul>
              <li><button class="minus">一</button></li>
              <li><input type="text" value="1" /></li>
              <li><button class="plus">＋</button></li>
            </ul>
          </div>
        </div>
        <div class="adult_bot">同一有效证件同一使用日期限购一份。</div>
      </div>
      <!-- 出行人信息 -->
      <div class="goperson">
        <div class="go_tit">
          <h2>出行人信息</h2>
          <p>需填写<span>1个</span>出行人</p>
        </div>
        <ul>
          <li class="go_per">出行人</li>
          <li class="go_name">
            <p>中文姓名<span>*</span></p>

            <input type="text" placeholder="须与证件上的名字一致" />
            <div>
              <span class="name_china">中</span>
              <span>En</span>
            </div>
          </li>
          <li class="go_name">
            <p>手机<span>*</span></p>

            <input type="text" placeholder="接收确认短信" />
          </li>
          <li class="go_name">
            <p>身份证<span>*</span></p>

            <input type="text" placeholder="请填写证件号码" />
          </li>
        </ul>
      </div>

      <!-- 联系人信息 -->
      <div class="linkman">
        <h2>联系信息</h2>
        <div class="link_wrap">
          <span class="phone">联系手机 <span>*</span> </span>
          <input type="text" placeholder="接收确认短信" />
        </div>
      </div>

      <!-- 支付按钮 -->
      <div class="gomoney">去支付</div>
    </div>
    <!-- 固定订单 -->
    <div class="order">

    </div>
  </div>
</template>
<script>
export default {
  name: "huangpujiang",
  data() {
    return {};
  },
  mounted(){
    document.documentElement
  },
  methods: {
    fixed(){
      alert(123)
    }
  },
};
</script>
<style lang='less' scoped>
// /中英文切换按钮改变样式
.name_china {
  color: #099fde !important;
}
.conent {
  width: 1180px;
  margin: 0 auto;
  // 头部
  .header {
    width: 1180px;
    height: 59px;
    line-height: 59px;
    display: flex;
    justify-content: space-between;
    margin: 18px auto 8px;
    a {
      display: block;
      width: 126px;
      height: 43px;
      text-indent: -999px;
      background: url(//pic.c-ctrip.com/common/c_logo2013.png) no-repeat;
    }
    p {
      font-size: 12px;
      color: #4c4c4c;
      // transform: translateY(-50%);
    }
  }
  //   内容
  .wrap {
    width: 780px;
    // height: 2000px;
    // margin: 0 auto;
    // background-color: pink;

    // 船票
    .tit {
      width: 780px;
      height: 157px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      h2 {
        background: #fff;
        padding: 20px 30px;
        font-size: 25px;
        font-weight: 700;
      }
      .ticket {
        display: flex;
        width: 718px;
        height: 68px;
        margin: 0 auto;
        position: relative;
        .date {
          position: absolute;
          width: 80px;
          display: inline;
          top: 50%;
          transform: translateY(-50%);
        }
        ul {
          display: flex;
          width: 778px;
          height: 78px;
          box-sizing: border-box;
          position: absolute;
          left: 380px;
          top: 78%;
          transform: translateY(-50%);
          li {
            width: 80px;
            height: 48px;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
            padding-top: 8px;
            margin-right: 5px;
            a {
              color: black;
              p {
                font-weight: 400;
                line-height: 20px;
                font-size: 13px;
                color: #f40;
              }
            }
          }
        }
      }
    }
    // 成人
    .adult {
      width: 780px;
      height: 157px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      padding: 20px 30px;
      box-sizing: border-box;
      position: relative;
      .adult_wrap {
        display: flex;
        .adult_left {
          width: 613px;
          height: 47px;
          ul {
            li {
              font-size: 12px;
              color: #666;
              margin-right: 14px;
            }
          }
          .le_to {
            display: flex;
            h3 {
              font-size: 16px;
              font-weight: 700;
              color: #333;
              margin: 10px 5px 10px 0;
            }
            p {
              margin-top: 15px;
              font-size: 12px;
              color: #19a0f0;
              cursor: pointer;
            }
          }
          ul {
            display: flex;
          }
        }
        .adult_right {
          p {
            text-align: right;
            margin-bottom: 10px;
            color: #f40;
            .picr {
              font-size: 21px;
            }
          }
          //   display: flex;
          ul {
            display: flex;
            .minus {
              border-radius: 5px 0 0 5px;
            }
            .plus {
              font-size: 20px;
              padding-bottom: 5px;
              border-radius: 0 5px 5px 0;
            }
            input {
              width: 37px;
              height: 33px;
              border: 1px solid #099fde;
              text-align: center;
              outline: none;
            }
            button {
              width: 37px;
              height: 33px;
              border: 1px solid #099fde;
              background-color: #fff;
              outline: none;
            }
          }
        }
      }
      .adult_bot {
        width: 100%;
        height: 28px;
        line-height: 18px;
        padding: 5px 15px;
        font-size: 12px;
        color: #481a03;
        position: absolute;
        bottom: 0;
        background-color: #fff7e0;
        margin-left: -30px;
      }
    }
    // 出行人
    .goperson {
      width: 780px;
      padding-bottom: 20px;
      margin-bottom: 10px;
      // height: 100%;
      // background-color: pink;
      border: 1px solid #ccc;
      box-sizing: border-box;
      .go_tit {
        display: flex;
        width: 100%;
        padding: 10px 30px;
        background: #eff0f2;
        h2 {
          margin-right: 5px;
          font-size: 18px;
          font-weight: 700;
        }
        p {
          font-size: 13px;
          color: #999;
          line-height: 18px;
          margin-top: 3px;
          span {
            color: #f40;
          }
        }
      }
      ul {
        li {
          width: 748px;
          height: 50px;
          padding: 0 30px;
          p {
            vertical-align: sub;
            width: 111px;
            text-align: right;
            font-size: 14px;
            color: #000;
            vertical-align: middle;
            span {
              margin: 0 10px;
              vertical-align: middle;
              color: #ff461b;
            }
          }
          input {
            border: 1px solid #ccc;
            padding: 10px;
            width: 300px;
            height: 38px;
            transform: translateY(-25%);
            // border: none;
            outline: none;
          }
        }
        .go_per {
          padding-top: 10px;
          padding-left: 30px;
          //   height: 20px;
          //   line-height: 20px;
          font-size: 14px;
          color: #333;
          font-weight: 700;
        }
        .go_name {
          display: flex;
          padding-bottom: 30px;
          div {
            display: flex;
            // height: 25px
            // padding: 5px;
            margin-top: -8px;
            margin-left: 15px;
            span {
              border: 1px solid #ccc;
              width: 30px;
              padding: 5px;
              height: 35px;
              line-height: 23px;
              text-align: center;
              color: #ccc;
            }
          }
        }
      }
    }

    // 联系人
    .linkman {
      width: 780px;
      border: 1px solid #ccc;
      margin-bottom: 30px;
      h2 {
        padding: 10px 30px;
        background: #eff0f2;
        font-size: 18px;
        font-weight: 700;
      }
      .link_wrap {
        padding: 20px 30px;
        .phone {
          display: inline-block;
          width: 111px;
          text-align: right;
          font-size: 14px;
          color: #000;
          span {
            color: #ff461b;
            margin: 0 10px;
          }
        }
         input {
            border: 1px solid #ccc;
            padding:  10px;
            width: 300px;
            height: 38px;
            transform: translateY(-17%);
            outline: none;
            margin-top:30px;
            vertical-align: sub;
          }
      }
    }
    // 去支付
    .gomoney{
      width: 780px;
      height: 50px;
      background-color: #ff7d13;
      color: #fff;
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      margin-bottom: 80px;
    }
  }
  // 固定订单
  .order{
    background-color: #099fde;
    width: 380px;
    height: 188px;
    position: fixed;
    top: 85px;
    right: 362px;
  }
}
</style>