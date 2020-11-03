<template>
  <div>
    <HotList></HotList>
    <OutHotels></OutHotels>
    <PriceTicket></PriceTicket>
    <CarRental></CarRental>
  </div>
</template>

<script>
import HotList from "./HotList";
import OutHotels from "./OutHotels";
import PriceTicket from "./PriceTicket";
import CarRental from "./CarRental";
export default {
  name: "Home",
  components: {
    HotList,
    OutHotels,
    PriceTicket,
    CarRental,
  },
};
</script>

<style lang="less" scoped>
</style>
