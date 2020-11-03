<template>
  <div>
    <Search></Search>
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
import Search from './Search'
import Swiper from './Swiper'
import Wrapper from './Wrapper'
import Falsh from './Falsh'
import Popular from './Popular'
import PlayList from './PlayList'
import SurrCities from './SurrCities'
import Scenic from './Scenic'
export default {
  name: "Tickets",
  components: {
    Search,
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
