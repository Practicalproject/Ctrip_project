<template>
  <div class="hotel">   
    <div class="hotelcontainer">
      <div class="hotelHeaderwrapper">
        <div class="onload">
          <img src="./images/onload.png" alt="" />
        </div>
      </div>
      <!-- 订票区 -->
      <div class="order">
        <div class="orderTime">
          <div class="destition">
            <span>目的地/酒店名称</span>
            <input type="text" placeholder="城市、机场、区域、地标或者酒店名称">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotel",
};
</script>

<style  lang ='less' scoped>
/* 最外层容器 */
  .hotel{
    width: 100%;
    height: 1000px;
  }
  /* 内容区 */
  .hotelcontainer{
    width: 1180px;
    height: 280px;
    margin: 0 auto;
    background:hotpink;
    position: relative;
  }
  /* 订酒店区域 */
  .hotelHeaderwrapper .onload  {
    width: 1160px;
    height: 50px;
    margin-left: 10px;
    position: absolute;
    top:75px;
    
  }
  .hotelHeaderwrapper  img{
    display: block;
   
  }
  /* 订票区 */
  .order {
    width:1160px;
    height: 168px;
    background-origin: border-box;
    background:red;
    box-shadow: 0 8px 20px 0 rgba(97,121,157,.16);
    box-sizing: border-box;
    border: 1px solid block;
    padding: 24px;
    bottom:-10px ;
    position: absolute;
  }



</style>
