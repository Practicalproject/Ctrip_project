<template>
  <div class="advantage">
    <dl>
      <dt>
        <i></i>
      </dt>
      <dd>
        <h5>自由配</h5>
        机票酒店自由搭配
      </dd>
    </dl>
    <dl>
      <dt>
        <i class="lowPrice"></i>
      </dt>
      <dd>
        <h5>价格低</h5>
        机酒套餐最高立省30%
      </dd>
    </dl>
    <dl>
      <dt>
        <i class="allResourse"></i>
      </dt>
      <dd>
        <h5>资源全</h5>
        全球10万条路线任意选
      </dd>
    </dl>
    <dl>
      <dt>
        <i class="bookFast"></i>
      </dt>
      <dd>
        <h5>预订快</h5>
        机票酒店一键预订
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "Advantage",
};
</script>

<style lang="less" scoped>
//优势
.advantage {
  width: 1180px;
  height: 90px;
  background-color: #fcfcfc;
  margin: 0 auto 20px;
  border: 1px solid #e9ecf2;
  display: flex;
  dl {
    width: 294px;
    height: 44px;
    padding-left: 100px;
    margin-top: 20px;
    position: relative;
    dt {
      position: absolute;
      top: 0;
      left: 40px;
      width: 44px;
      height: 44px;
      i {
        display: inline-block;
        width: 44px;
        height: 44px;
        background: url("https://pic.c-ctrip.com/flt_htl/v3/indx_taocan.png?20160223.png")
          no-repeat 0 -706px;
      }
      .lowPrice {
        background: url("https://pic.c-ctrip.com/flt_htl/v3/indx_taocan.png?20160223.png")
          no-repeat -60px -706px;
      }
      .allResourse {
        background: url("https://pic.c-ctrip.com/flt_htl/v3/indx_taocan.png?20160223.png")
          no-repeat 0 -766px;
      }
      .bookFast {
        background: url("https://pic.c-ctrip.com/flt_htl/v3/indx_taocan.png?20160223.png")
          no-repeat -60px -766px;
      }
    }
    dd {
      font: 14px/22px Microsoft Yahei;
      color: #b0bfcc;
      height: 5px;
      h5 {
        font: 18px/22px Microsoft Yahei;
        color: #7699b4;
      }
    }
  }
}
</style>
