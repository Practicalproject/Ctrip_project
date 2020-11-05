<template>
  <div class="registerContainer">
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
          <el-form class="demo-form-inline">
            <el-form-item label="手机号" label-width="185px">
              <el-input placeholder="有效手机号"></el-input>
            </el-form-item>
            <el-form-item label="" label-width="185px">
              <label class="base_label"
                >同意
                <a id="agreementUrl" href="javascript:;">《服务协议》</a>和<a
                  id="policyUrl"
                  href="javascript:;"
                  >《隐私政策》</a
                ></label
              >
            </el-form-item>
            <el-form-item label="" label-width="185px">
              <el-button type="primary" @click="onSubmit">下一步，设置密码</el-button>
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
      active: 1,
    };
  },
};
</script>

<style lang="less" scoped>
.registerContainer {
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
      }
    }
    .hh_reg_wrap {
      padding: 0;
    }
  }
}
</style>
