<template>
  <div>
    <HotList></HotList>
    <OutHotels></OutHotels>
    <PriceTicket></PriceTicket>
    <CarRental></CarRental>
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
export default {
  name: "Home",
  components: {
    HotList,
    OutHotels,
    PriceTicket,
    CarRental,
    Partner,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
