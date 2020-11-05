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
              <el-form
                :model="loginInfo"
                status-icon
                :rules="rules"
                show-message
                inline-message
              >
                <el-form-item prop="name">
                  <!-- <template slot-scope="error">
                    {{ $message.error(error) }}
                  </template> -->
                  <el-input
                    v-model="loginInfo.email"
                    type="text"
                    autocomplete="off"
                    placeholder="国内手机号/用户名/邮箱/卡号"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    v-model="loginInfo.pwd"
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
                      id="normal30day"
                    />30天内自动登录</label
                  >
                  <a href="javascript:;" class="login-entry-dynamic"
                    >手机动态密码登录 <i class="icon-arrowr"></i
                  ></a>
                </div>
                <el-form-item>
                  <el-button type="primary" @click="toLogin">登 录</el-button>
                </el-form-item>
                <p class="agreement-list">
                  登录即代表您同意我们的<a
                    href="javascript:;"
                    class="serviceAgreement"
                    >服务协议</a
                  >和<a href="javascript:;" class="privacyPolicy">隐私政策</a>
                </p>
              </el-form>
              <div class="lg_weblogin">
                <div class="login-about">
                  <a href="javascript:;" id="overseas_login">境外手机</a
                  ><span class="sep">|</span
                  ><a href="javascript:;" class="companylogin">公司客户</a
                  ><span class="sep">|</span
                  ><a
                    class="cardlogin"
                    target="_self"
                    href="javascript:;"
                    style="display: none"
                    >合作卡</a
                  ><span class="sep" id="cardloginsep" style="display: none"
                    >|</span
                  ><a class="fuli" target="_self" href="javascript:;">携程通</a
                  ><a href="javascript:;" class="free-regist" target="_black"
                    >免费注册</a
                  >
                </div>
                <div class="login-other">
                  <a
                    href="javascript:;"
                    class="icon-alipay"
                    url="/user/authorize/alipay"
                    >支付宝</a
                  ><a
                    href="javascript:;"
                    class="icon-qq"
                    url="/user/authorize/qq"
                    >QQ</a
                  ><a
                    href="javascript:;"
                    class="icon-baidu"
                    url="/user/authorize/baidu"
                    >百度</a
                  ><a
                    href="javascript:;"
                    class="icon-sina"
                    url="/user/authorize/sina"
                    >新浪微博</a
                  ><a
                    href="javascript:;"
                    class="icon-wechat"
                    url="/user/authorize/wechat"
                    >微信</a
                  ><a
                    href="javascript:;"
                    style="display: none"
                    class="icon-163"
                    url="/member/neteLogin/NeteAuthorize.aspx"
                    >网易</a
                  ><a
                    href="javascript:;"
                    class="icon-renren"
                    url="/member/RenrenLogin/Authorize.aspx"
                    style="display: none"
                    >人人网</a
                  >
                </div>
              </div>
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
      loginInfo: {
        email: "",
        pwd: "",
      },
      rules: {
        name: [
          // { required: true, message: "请输入邮箱", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        // password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.testImg = testImg;
  },
  methods: {
    async toLogin() {
      let { email, pwd } = this.loginInfo;
      let result = await this.$API.index.reqlogin(email, pwd);
      if (result.code === 20000) {
        this.$message.success(result.msg);
      } else {
        this.$message.error(result.msg);
      }
    },
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
                    padding: 5px 75px 5px 13px;
                  }
                  &:focus {
                    border: 1px solid #ccc;
                  }
                }
                .isPassword {
                  color: #666;
                  margin-right: 10px;
                  &:hover {
                    text-decoration: revert;
                  }
                }
                .el-input__suffix-inner {
                  float: right;
                }
                .el-input__validateIcon {
                  float: right;
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
                  .icon-arrowr {
                    display: inline-block;
                    background: url(//pic.c-ctrip.com/platform/online/login/un_login_20170818.png)
                      no-repeat;
                    width: 12px;
                    height: 12px;
                    background-position: 0 0;
                    vertical-align: -2px;
                  }
                }
              }
              .el-button--primary {
                width: 100%;
                height: 42px;
                background-color: #ff9a14;
                border: none;
                font-size: 16px;
                &:hover {
                  background: #cc7b10;
                }
              }

              .agreement-list {
                font-size: 12px;
                margin-top: 5px;
                color: #999;
                line-height: 12px;
                text-align: center;
                a {
                  padding: 0 3px;
                  color: #999;
                  border-bottom: 1px dotted #999;
                }
              }
            }
            .lg_weblogin {
              display: block;
              margin-top: 52px;
              .login-about {
                margin-bottom: 20px;
                line-height: 1;
                a {
                  color: #666;
                  &:hover {
                    text-decoration: revert;
                  }
                }
                .sep {
                  padding: 0 10px;
                  color: #ccc;
                }
                a.free-regist {
                  float: right;
                  color: #3882e5;
                }
              }
              .login-other {
                text-align: left;
                margin-right: -18px;
                a {
                  margin-right: 18px;
                }
                .icon-alipay {
                  display: inline-block;
                  background: url(//pic.c-ctrip.com/platform/online/login/un_login_third.png)
                    no-repeat;
                  vertical-align: middle;
                  width: 30px;
                  height: 0;
                  padding-top: 30px;
                  overflow: hidden;
                  background-position: 0 0;
                }
                .icon-qq {
                  display: inline-block;
                  background: url(//pic.c-ctrip.com/platform/online/login/un_login_third.png)
                    no-repeat;
                  vertical-align: middle;
                  width: 30px;
                  height: 0;
                  padding-top: 30px;
                  overflow: hidden;
                  background-position: -35px 0;
                }
                .icon-baidu {
                  display: inline-block;
                  background: url(//pic.c-ctrip.com/platform/online/login/un_login_third.png)
                    no-repeat;
                  vertical-align: middle;
                  width: 30px;
                  height: 0;
                  padding-top: 30px;
                  overflow: hidden;
                  background-position: -70px 0;
                }
                .icon-sina {
                  display: inline-block;
                  background: url(//pic.c-ctrip.com/platform/online/login/un_login_third.png)
                    no-repeat;
                  vertical-align: middle;
                  width: 30px;
                  height: 0;
                  padding-top: 30px;
                  overflow: hidden;
                  background-position: -105px 0;
                }
                .icon-wechat {
                  display: inline-block;
                  background: url(//pic.c-ctrip.com/platform/online/login/un_login_third.png)
                    no-repeat;
                  vertical-align: middle;
                  width: 30px;
                  height: 0;
                  padding-top: 30px;
                  overflow: hidden;
                  background-position: -140px 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
