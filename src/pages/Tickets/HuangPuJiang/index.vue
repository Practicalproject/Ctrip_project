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

      <!-- 111 -->
      <el-form
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="form_header">
          <h2>出行人信息</h2>
          <p>须填写 <span style="color: #f40">1个</span> 出行人</p>
        </div>
        <h2 class="header_per">出行人</h2>
        <el-form-item label="中文姓名" prop="pass">
          <el-input type="text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "huangpujiang",
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>
<style lang='less' scoped>
.conent {
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
  .wrap {
    width: 780px;
    height: 2000px;
    margin: 0 auto;
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
    /deep/ .el-form {
      border: 1px solid #ccc;
      padding: 10px 30px;
      box-sizing: border-box;
      .form_header {
        margin-top: -10px;
        margin-left: -30px;
        padding-left: 30px;
        top: 0;
        left: 0;
        display: flex;
        width: 778px;
        height: 42px;
        line-height: 42px;
        background-color: #eff0f2;
        vertical-align: bottom;
        h2 {
          font-size: 18px;
          font-weight: 700;
          margin-right: 5px;
        }
        p {
          font-size: 13px;
          color: #999;
          padding-top: 3.5px;
        }
      }
      .header_per {
        padding-top: 10px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }
    }
  }
}
</style>