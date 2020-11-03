<template>
  <div>
    <HotList></HotList>
    <OutHotels></OutHotels>
    <PriceTicket></PriceTicket>
  </div>
</template>

<script>
import HotList from "./HotList";
import OutHotels from "./OutHotels";
import PriceTicket from "./PriceTicket";

export default {
  name: "Home",
  components: {
    HotList,
    OutHotels,
    PriceTicket,
  },
};
</script>

<style lang="less" scoped></style>;
