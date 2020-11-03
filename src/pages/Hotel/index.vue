<template>
<!--  -->
  <div class="hotel">   
    <!-- 背景图区域 -->
    <div class="background">
      <div class="backgroundUrl"></div>
    </div>
    <!-- 内容区 -->
    <div class="hotelcontainer">
        <!-- 大logo区 -->
      <div class="hotelHeaderwrapper">
        <div class="onload">
          <img src="./images/onload.png" alt="" />
        </div>
      </div>
      <!-- 订票区 -->
      <div class="order">
        <!-- 预定酒店区 -->
        <div class="orderTime">
          <div class="destition">
            <span>目的地/酒店名称</span>
            <input type="text" placeholder="城市、机场、区域、地标或者酒店名称">
          </div>
        </div>
        <!-- 星级区 -->
        <div class="starLevel">
          <div class="star">星级</div>
          <div class="starT">
            <span>≤ 2</span>
            <i class="iconfont icon-wujiaoxing"></i>
          </div>
          <div class="starS">
                <span>3</span>
            <span class="iconfont icon-wujiaoxing"></span>
          </div>
          <div class="starF">
                <span>4</span>
            <span class="iconfont icon-wujiaoxing"></span>
          </div>
           <div class="starFi">
                <span>5</span>
            <span class="iconfont icon-wujiaoxing"></span>
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
   position: relative;
}
  /* 背景图 */
  .background{
    width: 100%;
    height: 280px;
  }
  .backgroundUrl{
    width: 100%;
    height: 100%;
    background:url(./images/hotelHeaderBackground.webp);
    background-size:cover;
    border-bottom-right-radius:  80%;
    border-bottom-left-radius:  80%;
  }
  /* 内容区 */
  .hotelcontainer{
    width: 1180px;
    height: 1180px;
    background:rgb(235, 194, 194);
    position: absolute;
    top:0;
    left:50%;
    transform: translateX(-50%);
  }
  /* 订酒店区域 */
  .hotelHeaderwrapper .onload  {
    width: 1160px;
    height: 50px;
    margin-left: 10px;
    position: absolute;
    top:75px;
    margin:0 auto;
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
    top:160px;
    position: absolute;
  } 
  .starLevel{
    display: flex;
    width: 100%;
  }
 



</style>
