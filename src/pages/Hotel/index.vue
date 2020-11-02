<template>
  <div class="hotelHeader">
      <div class="mainContainer">
          <img  class="topBackground" src="./images/hotelHeaderBackground.webp" alt="">
          <img  class=".mainContainer" src="./images/下载.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: "hotel",
};
</script>

<style  lang ='less' scoped>
.hotelHeader{
    widows: 100%;
    position: relative;
}
.mainContainer{
     position: relative;
}

.mainContainer .topBackground{
  width: 100%;
  height: 280px;
}
.mainContainer .mainContainer {
    position:absolute;
    width: 1160px;
    height: 50px;
}
</style>
