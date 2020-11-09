<template>
  <div class="homeContainer">
    <!-- tzg轮播图 -->
    <HomeBanner></HomeBanner>
    <!-- hsf热门 -->
    <HotList></HotList>
    <!-- hsf海外酒店 -->
    <OutHotels></OutHotels>
    <!-- bh特价机票 -->
    <PriceTicket></PriceTicket>
    <!-- 境外租车 -->
    <CarRental></CarRental>
    <!-- 当地玩乐 -->
    <PopDestinations></PopDestinations>
    <!-- 全球购 -->
    <GlobalPurchasing></GlobalPurchasing>
    <!-- 攻略 -->
    <DestinationGuide></DestinationGuide>
    <!-- bh旅行服务 -->
    <TravelService></TravelService>
    <!-- bh企业商旅 -->
    <BusinessTravel></BusinessTravel>
    <!-- suo合作伙伴 -->
    <Partner></Partner>
    <!-- suo底部网站服务 -->
    <Footer></Footer>
    <Advertising></Advertising>
  </div>
</template>

<script>
import HotList from "./HotList";
import OutHotels from "./OutHotels";
import PriceTicket from "./PriceTicket";
import CarRental from "./CarRental";
import Partner from "./Partner";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import TravelService from "./TravelService";
import BusinessTravel from "./BusinessTravel";
import PopDestinations from "./PopDestinations";
import GlobalPurchasing from "./GlobalPurchasing";
import DestinationGuide from "./DestinationGuide";
import Advertising from "./Advertising"

export default {
  name: "Home",
  components: {
    HotList,
    OutHotels,
    PriceTicket,
    CarRental,
    Partner,
    Footer,
    HomeBanner,
    TravelService,
    BusinessTravel,
    PopDestinations,
    GlobalPurchasing,
    DestinationGuide,
    Advertising
  },
};
</script>

<style lang="less" scoped>
.homeContainer {
  background-color: #f6f6f6;
}
</style>
