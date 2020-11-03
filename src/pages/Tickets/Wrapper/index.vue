<template>
  <div class="container">
    <div class="one">
      <img src="https://pages.c-ctrip.com/ticket/online/icon/Ticket2.png" alt="">
      <div class="text">景点/门票</div>
    </div>
    <div class="one two">
      <img src="https://pages.c-ctrip.com/ticket/online/icon/Experiences.png" alt="">
      <div class="text">特色体验</div>
    </div>
    <div class="one three">
      <img src="https://pages.c-ctrip.com/ticket/online/icon/1daytrip.png" alt="">
      <div class="text">一日游</div>
    </div>
    <div class="one four">
      <img src="https://pages.c-ctrip.com/ticket/online/icon/Travelservice.png" alt="">
      <div class="text">旅行服务</div>
    </div>
    <div class="one five">
      <img src="https://pages.c-ctrip.com/ticket/online/icon/Parking1.png" alt="">
      <div class="text">停车服务</div>
    </div>
    <div class="one sixe">
      <img src="https://pages.c-ctrip.com/ticket/online/icon/Communicationequipment.png" alt="">
      <div class="text">WiFi•电话卡</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
};
</script>

<style lang='less' scoped>
.container{
  width: 1180px;
  margin: 20px auto;
  height: 180px;
  display: flex;
  .one{
    background-image: url(https://pages.c-ctrip.com/ticket/online/index/2.png);
    background-repeat: no-repeat;
    background-size: 140px;
    margin: 0 20px;
    width: 140px;
    height: 180px;
    
    img{
      padding: 14px;
      height: 106px;
      display: block;
      margin: 15px auto;
    }
    .text{
      padding-top: 10px;
      font-size: 18px;
      text-align: center;
    }
  }
  .two{
    background-image: url(https://pages.c-ctrip.com/ticket/online/index/5.png);
  }
  .three{
    background-image: url(https://pages.c-ctrip.com/ticket/online/index/4.png);
  }
  .four{
    background-image: url(https://pages.c-ctrip.com/ticket/online/index/1.png);
  }
  .five{
    background-image: url(https://pages.c-ctrip.com/ticket/online/index/3.png);
  }
  .sixe{
    background-image: url(https://pages.c-ctrip.com/ticket/online/index/2.png);
  }
}
</style>
