<template>
    
  <div class="tourismContainer">
    <div class="containerWraper">
        <!-- 头部 -->
      <div class="header">
          <!-- 图标 -->
        <div class="backUrl ">
            <img src="./images/03.png" alt="" />
        </div>
        <div class="city">
            <span class="iconfot icon-zuobiao"></span>
            <span></span>
            <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tourism",
};
</script>

<style  lang ='less' scoped>
/* 主核心区域 */
.containerWraper {
  width: 1180px;
  height: 1000px;
  margin: 0 auto;
  border: 1px solid red;
  .header {
    width: 100%;
    height: 66px;
    margin-bottom: 20px;
    padding-top: 6px;
    .backUrl img {
      display: block;
      width: 94px;
      height: 43px;
    }
    .city{
        .icon-zuobiao{
            display: block;
            
        }
    }

  }
}
</style>

