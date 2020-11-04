<template>
  <div class="loginContainer">
    <!-- 头部 -->
    <header>
      <h1 class="ctriplogo_login">
        <router-link to="/" title="携程旅行网">携程旅行网</router-link>
      </h1>
    </header>
    <!-- 警告 -->
    <div class="tips-security">
      <i></i
      >依据《网络安全法》，为保障您相关功能的正常使用，账号需绑定手机，如您未绑定则登录后会引导您操作绑定。
      新版<a href="javascript:;">《隐私政策》</a>已上线，感谢您的支持。
    </div>
    <!-- 主体 -->
    <div class="container">
      <div class="lg_banner_wrap">
        <div
          id="bannerpic"
          style="
            overflow: hidden;
            width: 100%;
            height: 540px;
            position: relative;
          "
        >
          <div
            style="
              transform: scale(1) translateY(0px) translateX(0);
              transform-origin: 0px 0px;
              width: 1920px;
              height: 540px;
              position: relative;
            "
          >
            <div
              creativeid="7945"
              :style="{
                width: '1920px',
                height: '540px',
                'background-repeat': 'no-repeat',
                'background-image': `url(${testImg})`,
              }"
            >
              <div
                style="
                  opacity: 0.3;
                  background: rgb(0, 0, 0);
                  width: 32px;
                  height: 20px;
                  border-radius: 0px 8px 0px 0px;
                  position: absolute;
                  z-index: 9999;
                  left: 147.5px;
                  bottom: 0px;
                "
              >
                <span
                  style="
                    opacity: 0.9;
                    color: rgb(255, 255, 255);
                    font-size: 12px;
                    font-family: 'Microsoft YaHei';
                    width: 32px;
                    height: 20px;
                    letter-spacing: 0px;
                    line-height: 20px;
                    display: block;
                    text-align: center;
                  "
                  >广告</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mod-box">
        <div class="lg_loginwrap">
          <div class="lg_loginbox">
            <h2 class="lg_loginbox_title">
              携程账号登录
              <a href="javascript:;" class="login_phone_number"
                >手机号查单<i>&gt;</i></a
              >
            </h2>
            <div class="form_wrap">
              <el-form :model="loginInfo" status-icon>
                <el-form-item prop="pass">
                  <el-input
                    type="text"
                    autocomplete="off"
                    placeholder="国内手机号/用户名/邮箱/卡号"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                  <el-input
                    type="password"
                    autocomplete="off"
                    placeholder="登陆密码"
                  >
                    <template #suffix>
                      <a class="isPassword" href="javascript:;">忘记密码</a>
                    </template>
                  </el-input>
                </el-form-item>
                <div class="login-set">
                  <label class="auto-login"
                    ><input
                      type="checkbox"
                      checked="checked"
                      id="normal30day"
                    />30天内自动登录</label
                  >
                  <a href="javascript:;" class="login-entry-dynamic"
                    >手机动态密码登录 <i class="icon-arrowr"></i
                  ></a>
                </div>
                <el-form-item>
                  <el-button type="primary">登 录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testImg from "./images/1.jpg";
export default {
  name: "Login",
  data() {
    return {
      testImg: "",
      // 收集登陆信息
      loginInfo: {},
    };
  },
  mounted() {
    this.testImg = testImg;
  },
};
</script>

<style lang="less" scoped>
.loginContainer {
  width: 100%;
  // 头部
  header {
    width: 980px;
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
    .ctriplogo_login {
      float: left;
      width: 203px;
      padding-top: 22px;
      margin-right: 10px;
      a {
        display: block;
        width: 100%;
        height: 34px;
        overflow: hidden;
        text-indent: -999em;
        background: url(./images/c_logo2020.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  // 警告
  .tips-security {
    width: 100%;
    padding: 7px 0;
    margin-top: -10px;
    line-height: 16px;
    background: #fffcd8;
    font-family: "Microsoft yahei";
    font-size: 12px;
    color: #666;
    text-align: center;
    vertical-align: middle;
    a {
      text-decoration: none;
      color: #666;
    }
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-position: 0 -191px;
      margin-right: 6px;
      vertical-align: middle;
      background-image: url(//pic.c-ctrip.com/platform/online/login/un_bg_pop.png);
      background-repeat: no-repeat;
    }
  }
  // 主体
  .container {
    width: 100%;
    min-height: 540px;
    position: relative;
    .lg_banner_wrap {
      position: absolute;
      height: 540px;
      top: 0;
      right: 0;
      width: 100%;
      left: 0;
      overflow: hidden;
    }
    .mod-box {
      width: 980px;
      margin: 0 auto;
      z-index: 10;
      position: relative;
      .lg_loginwrap {
        position: relative;
        float: right;
        width: 380px;
        min-height: 540px;
        margin-right: 72px;
        .lg_loginbox {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          // transform: translateY(-50%);
          background: #fff;
          padding: 30px 30px 20px;
          min-height: 370px;
          border-radius: 4px;
          -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
          top: 10px;
          margin-top: 38.5625px;
          .lg_loginbox_title {
            position: relative;
            padding-bottom: 16px;
            font-size: 18px;
            color: #111;
            line-height: 1;
            font-family: PingFangSC-Medium, "Microsoft YaHei", SimSun, Tahoma,
              Verdana, Arial, sans-serif;
            .login_phone_number {
              position: absolute;
              right: 0;
              font-size: 12px;
              text-decoration: none;
              color: #666;
            }
          }
          /deep/.form_wrap {
            .el-form {
              .el-form-item {
                padding: 8px 0;
                margin-bottom: 0;
                .el-input__inner {
                  border-radius: 0;
                  border: 1px solid #ccc;
                  &[type="password"] {
                    padding: 5px 65px 5px 13px;
                  }
                  &:focus {
                    border: 1px solid #ccc;
                  }
                }
                .isPassword {
                  color: #666;
                  &:hover {
                    text-decoration: revert;
                  }
                }
              }
              .login-set {
                margin: 4px 0 13px;
                overflow: hidden;
                .auto-login {
                  float: left;
                  line-height: 1;
                  font-size: 12px;
                  color: #666;
                  input {
                    vertical-align: -2px;
                    margin-right: 5px;
                  }
                }
                .login-entry-dynamic {
                  float: right;
                  color: #666;
                }
              }
              .el-button--primary {
                width: 100%;
                height: 42px;
                background-color: #ff9a14;
                border-color: #ff9a14;
              }
            }
          }
        }
      }
    }
  }
}
</style>
