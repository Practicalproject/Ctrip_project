<template>
  <div class="registerContainer">
    <button type="primary" class="ver" @click="clickver" ref="btn" :disabled='timeOut<60' v-if="!gopas">
      点击发送验证码
    </button>
    <button
    style="border:1px solid #DCDFE6"
      class="button1 iconfont icon-hj"
      @click="butpas1"
      v-show="!gopas"
    ></button>
    <button
    style="border:1px solid #DCDFE6"
      class="button2 iconfont icon-hj"
      @click="butpas2"
      v-show="!gopas"
    ></button>
    <!-- 头部 -->
    <header>
      <h1 class="ctriplogo_login">
        <router-link to="/home" title="携程旅行网">携程旅行网</router-link>
      </h1>
    </header>
    <div class="cui_bd">
      <div class="reg_wrap hh_reg_wrap">
        <el-steps align-center :active="active" finish-status="success">
          <el-step title="验证手机"></el-step>
          <el-step title="设置密码"></el-step>
          <el-step title="注册成功"></el-step>
        </el-steps>
        <div class="reg_form">
          <el-form class="demo-form-inline" v-if="gopas">
            <el-form-item label="手机号" label-width="185px">
              <el-input placeholder="请输入有效手机号" v-model="phone"></el-input>
            </el-form-item>
            <!-- <el-form-item label="验证码" label-width="185px">
              <el-input
                v-model="yanzhengma"
                placeholder="请输入验证码"
              ></el-input>
            </el-form-item> -->
            <el-form-item label="" label-width="185px">
              <label class="base_label">
                <input type="radio" :checked="isRead" @click="isRead_neg" />
                同意
                <a id="agreementUrl" href="javascript:;">《服务协议》</a>和<a
                  id="policyUrl"
                  href="javascript:;"
                  >《隐私政策》</a
                ></label
              >
            </el-form-item>
            <el-form-item label="" label-width="185px">
              <el-button type="primary" @click="verPhone" :disabled="!isRead"
                >下一步，设置密码</el-button
              >
            </el-form-item>
          </el-form>
          <el-form
            status-icon
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm setForm"
            v-else
          >
            <el-form-item label="注册手机号" prop="pass">
              <span>{{ changePhone() }}</span>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                :type="password1"
                autocomplete="off"
                v-model="passw"
                placeholder="6-20位字母和数字的组合"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                :type="password2"
                autocomplete="off"
                v-model="passwo"
                placeholder="确认密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input
                v-model="yanzhengma"
                placeholder="请输入验证码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 202px" @click="sign"
              :disabled='verFlag'
                >完成</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      active: 1, //时间线进度条
      phone: "", //注册手机号
      isRead: false, //阅读服务条款按钮
      gopas: true, //切换显示
      passw: "", //密码
      passwo: "", //确认密码
      password1: "password",
      password2: "password",
      userData: {},
      yanzhengma: "",
      timeOut: 60,
      code:'',
      verFlag:true,
      set:''
    };
  },
  methods: {
    // 点击发送验证码
    clickver() {
      this.verFlag = false
    let setInt = setInterval(() => {
        this.timeOut--;
        this.$refs.btn.innerHTML = '验证码已发送('+this.timeOut+'s)';
        if(this.timeOut === 0){
          clearInterval(setInt)
          this.timeOut = 60
          this.$refs.btn.innerHTML = '点击发送验证码';
        }
      }, 1000);
      this.set = setInt
      // 发送请求 //  /login/digits
      this.$API.index.reqLogin(this.phone)
    },
    // 手机号正则验证
    verPhone() {
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        this.open3();
      } else {
        this.active = 2; //修改时间线进度条
        // 验证通过显示密码
        this.gopas = false;
      }
    },
    // 手机号错误提示框
    open3() {
      this.$message({
        message: "请输入正确的手机号码哦~",
        type: "warning",
      });
    },
    // 切换服务条款按钮切换状态
    isRead_neg() {
      this.isRead = !this.isRead;
    },

    // 切歌手机号中间四位替换****
    changePhone() {
      return this.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    },

    // 设置密码

    //点击小眼睛切换输入状态
    butpas1() {
      if (this.password1 === "password") {
        this.password1 = "text";
      } else {
        this.password1 = "password";
      }
    },
    butpas2() {
      if (this.password2 === "password") {
        this.password2 = "text";
      } else {
        this.password2 = "password";
      }
    },

    // 注册
    async sign() {
      clearInterval(this.set)
      // 正则为true并且确认密码一致
      if (
        /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.passw) &&
        this.passw === this.passwo
      ) {
        this.userData = await this.$API.index.loginUser(this.phone, this.passw,this.yanzhengma);
        if (this.userData.code === 20000) {
          this.open6();
          this.active = 3;
          setTimeout(() => {
            this.$router.push("/login");
          }, 3000);
        } else if (this.userData.code === 20001) {
          this.open7();
        }
        // 正则不通过,提示消息
      } else if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.passw)
      ) {
        this.open4();
      } else if (this.passw !== this.passwo) {
        this.open5();
      }
    },

    // 弹窗
    //正则弹窗
    open4() {
      this.$message({
        message: "密码需为6-20位字母和数字的组合哦~",
        type: "warning",
      });
    },
    open5() {
      this.$message({
        message: "您两次输入的密码不一致哦~",
        type: "warning",
      });
    },
    //登录弹窗
    // 注册成功
    open6() {
      this.$message({
        message: "恭喜老铁注册成功喽~,即将为您跳转到登录页,么么哒.... ",
        type: "success",
      });
    },
    // 用户已注册
    open7() {
      this.$message({
        message: "警告哦~您输入的验证码无效哦~~",
        type: "warning",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.registerContainer {
  width: 100%;

  //验证码按钮
  .ver {
    font-size: 12px;
    position: absolute;
    top: 196px;
    left: 744px;
    z-index: 10;
    background-color: #409EFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 112px;
    height: 35px;
    line-height: 35px;
    outline: none;
  }
  // 头部
  .button1 {
    position: absolute;
    left: 862px;
    top: 252px;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    color: #c0c4cc;
    z-index: 10;
    outline: none;
  }
  .button2 {
    position: absolute;
    left: 862px;
    top: 302px;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 4px;
    background-color: #fff;
    color: #c0c4cc;
    z-index: 10;
    outline: none;
  }
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
  .cui_bd {
    margin: 20px auto;
    width: 1000px;
    padding: 0 10px;
    min-height: 500px;

    .reg_wrap {
      position: relative;
      z-index: 1;
      min-height: 350px;
      padding-right: 260px;
      .reg_form {
        padding: 30px 0;
        /deep/.el-form-item {
          margin-bottom: 10px;
          .el-input__inner {
            width: 202px;
          }
          .base_label {
            a {
              text-decoration: none;
              color: #999;
            }
          }
        }
        .setForm {
          padding-left: 84px;
        }
      }
    }
    .hh_reg_wrap {
      padding: 0;
    }
  }
}
</style>
