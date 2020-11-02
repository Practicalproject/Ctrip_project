<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Wrapper></Wrapper>
    <Falsh></Falsh>
    <Popular></Popular>
    <PlayList></PlayList>
    <SurrCities></SurrCities>
    <Scenic></Scenic>
  </div>
</template>

<script>
import Header from "@/components/Tickets/Header";
import Swiper from "@/components/Tickets/Swiper";
import Wrapper from "@/components/Tickets/Wrapper";
import Falsh from "@/components/Tickets/Falsh";
import Popular from "@/components/Tickets/Popular";
import PlayList from "@/components/Tickets/PlayList";
import SurrCities from "@/components/Tickets/SurrCities";
import Scenic from "@/components/Tickets/Scenic";
export default {
  name: "Tickets",
  components: {
    Header,
    Swiper,
    Wrapper,
    Falsh,
    Popular,
    PlayList,
    SurrCities,
    Scenic,
  },
};
</script>

<style lang='less' scoped>
</style>
