<template>
  <div class="footerContainer">
    <div class="w">
      <div class="footer">
        <dl class="footer-item">
          <dt>为什么选择携程</dt>
          <dd>
            <div class="advan-item advan-server">
              <div class="advan-img">
                <i class="icon icon-server"></i>
              </div>
              <div class="advan-text">
                <p class="advan-title">放心的服务</p>
                <p>领先的服务标准 独创的保障体系</p>
              </div>
            </div>
            <div class="advan-item advan-price">
              <div class="advan-img">
                <i class="icon icon-price"></i>
              </div>
              <div class="advan-text">
                <p class="advan-title">放心的价格</p>
                <p>具竞争力的价格 无任何隐形费用</p>
              </div>
            </div>
            <a
              class="block-link"
              target="_blank"
              href="http://pages.ctrip.com/commerce/promote/201409/other/xcfw/index1.html"
            ></a>
          </dd>
        </dl>
        <dl class="footer-item">
          <dt>旅游咨询</dt>
        </dl>
        <dl class="footer-item">
          <dt>加盟合作</dt>
        </dl>
        <dl class="footer-item">
          <dt>关于携程</dt>
        </dl>
        <dl class="footer-item">
          <dt>微信公众号</dt>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footerContainer {
  .w {
    width: 1180px;
    margin: 0 auto;
    height: 1000px;
    background: pink;
    .footer {
      padding: 28px 0 30px 0;
      color: #666;
      margin: 28px auto 0;
      .footer-item {
        width: 210px;
        height: 150px;
        padding: 0 10px 0 40px;
        float: left;
        // display: inline-block;
        border-left: 1px solid #dedede;
        // margin-left: -1px;
        dt {
          font: 16px/20px "Microsoft yahei";
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
