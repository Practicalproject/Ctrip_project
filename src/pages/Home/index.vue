<template>
  <div>
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
    <!-- 热门目的地 -->
    <PopDestinations></PopDestinations>
    <!-- bh旅行服务 -->
    <TravelService></TravelService>
    <!-- bh企业商旅 -->
    <BusinessTravel></BusinessTravel>
    <Partner></Partner>
    <Footer></Footer>
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
import PopDestinations from './PopDestinations'
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
  },
};
</script>

<style lang="less" scoped>
</style>
