<template>
  <div class="mod-wrap">
    <div class="mod copyright">
      <div class="w">
        <p class="copyright">
          <a
            rel="nofollow"
            href="http://pages.ctrip.com/public/copyright.htm"
            id="copyright"
            >Copyright©</a
          >1999-2020,&nbsp;<a href="http://www.ctrip.com/">ctrip.com</a>. All
          rights reserved.&nbsp;|&nbsp;<a
            rel="nofollow"
            target="_blank"
            href="http://www.beian.miit.gov.cn"
            >ICP证：沪B2-20050130&nbsp;|&nbsp;</a
          ><a rel="nofollow" target="_blank" href="http://beian.miit.gov.cn/"
            >沪ICP备08023580号</a
          >
        </p>
        <p class="gns">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502002731"
            ><i class="icon-gns"></i>沪公网备31010502002731号</a
          >
        </p>
        <p class="supervision-call">
          违法和不良信息举报电话021-22500846丨全国旅游投诉热线12301丨<a
            href="http://pages.c-ctrip.com/commerce/promote/201611/other/zz/pc/index.html"
            target="_blank"
            >上海市旅游网站落实诚信建设主体责任承诺书</a
          >
        </p>
        <div class="honour_wrap">
          <a
            href="http://www.cecpsp.org.cn/index.credit?action=certDetail&amp;id=40288084605466f1016057ea4cb20021"
            class="honour1"
            target="_blank"
            rel="nofollow"
            >信用评级</a
          ><a
            href="http://scjgj.sh.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20110428175405415"
            title="工商亮照标识"
            class="honour2"
            target="_blank"
            rel="nofollow"
            >上海工商</a
          ><a
            href="https://credit.szfw.org/CX20111018000615000623.html"
            title="诚信认证示范企业"
            class="honour3"
            target="_blank"
            rel="nofollow"
            >诚信网站</a
          ><a
            href="http://www.zx110.org/"
            class="honour4"
            target="_blank"
            rel="nofollow"
            title="征信网"
            >网络社会征信网</a
          ><a
            href="http://www.shjbzx.cn/"
            class="honour5"
            target="_blank"
            rel="nofollow"
            title="上海市互联网违法与违规信息举报中心"
            >信息举报中心</a
          ><a
            href="https://ss.knet.cn/verifyseal.dll?sn=e12061531010025926306977"
            class="honour6"
            target="_blank"
            rel="nofollow"
            title="可信网站"
            >可信网站</a
          >
        </div>
        <div class="honour_wrap">
          <a
            href="http://www.creditchina.gov.cn/"
            class="honour10"
            title="信用中国"
            target="_blank"
            rel="nofollow"
            >信用中国</a
          ><a
            href="https://www.12377.cn/"
            class="honour12"
            title="网上有害信息举报专区"
            target="_blank"
            rel="nofollow"
            >网上有害信息举报专区</a
          ><a
            href="http://services.ctrip.com/complaints/rights/AppealCreate.aspx"
            class="honour11"
            title="消费维权联络点"
            target="_blank"
            rel="nofollow"
            >消费维权联络点</a
          ><a
            href="https://fw.scjgj.sh.gov.cn/platform/survey/step1_phone"
            class="honour9"
            title="网购大家评"
            target="_blank"
            rel="nofollow"
            >网购大家评</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CopyRight",
};
</script>

<style lang="less" scoped>
.mod-wrap {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px 0 40px 0;
  .mod.copyright {
    width: 1180px;
    margin: 0 auto;
    text-align: center;
    color: #999;
    font-size: 12px;
    line-height: 1.5;
    p {
      a {
        color: #999;
        &:hover {
          color: #3983e5;
        }
      }
    }
    .gns {
      margin-top: 8px;
      .icon-gns {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 3px;
        background-position: 0 -235px;
        vertical-align: middle;
        background-image: url(//pic.c-ctrip.com/platform/online/home/phone_list20190617.png);
        background-color: #fff;
        background-repeat: no-repeat;
      }
    }
    .supervision-call {
      padding-top: 10px !important;
    }
    .honour_wrap {
      display: inline-block;
      padding-top: 10px;
      text-align: left;
      a {
        float: left;
        margin: 0 4px;
        width: 88px;
        height: 32px;
        border: 1px solid #d1d1d1;
        border-radius: 2px;
        font: 12px/32px Simsun;
        overflow: hidden;
        background-image: url(//pic.c-ctrip.com/platform/online/home/phone_list20190617.png);
        background-color: #fff;
        background-repeat: no-repeat;
        text-indent: 36px;
        &.honour1 {
          background-position: -88px -50px;
        }
        &.honour2 {
          background-position: -88px -85px;
        }
        &.honour3 {
          background-position: 0 -50px;
          overflow: hidden;
          text-indent: -99em;
        }
        &.honour4 {
          background-position: -88px -118px;
          // text-indent: 0;
          // padding: 2px 0 2px 37px;
          // width: 51px;
          // height: 28px;
          // line-height: 1.2;
          // overflow: hidden;
          // text-indent: -99em;
        }
        &.honour5 {
          // width: 95px;
          background-position: 0 -387px;
          overflow: hidden;
          text-indent: -99em;
        }
        &.honour6 {
          background-position: 0 -118px;
          overflow: hidden;
          text-indent: -99em;
        }
        &.honour10 {
          background-position: 0 -429px;
          width: 102px;
          text-indent: -99em;
          overflow: hidden;
        }
        &.honour12 {
          background-position: 0 -155px;
          width: 114px;
          overflow: hidden;
          text-indent: -99em;
        }
        &.honour11 {
          background-position: 0 -480px;
          width: 50px;
          overflow: hidden;
          text-indent: -99em;
        }
        &.honour9 {
          background-position: 0 -350px;
          width: 130px;
          overflow: hidden;
          text-indent: -99em;
        }
      }
    }
  }
}
</style>