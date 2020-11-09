<template>
  <div>
    <!-- 头部 -->
    <Search></Search>
    <!-- 轮播图 -->
    <Swiper></Swiper>
    <!-- 六个圈 -->
    <Wrapper></Wrapper>
    <!-- 限时抢购 -->
    <Falsh></Falsh>
    <!-- 人气景点 -->
    <Popular></Popular>
    <!-- 玩乐推荐榜 -->
    <PlayList></PlayList>
    <!-- 周边城市 -->
    <SurrCities></SurrCities>
    <!-- 景点门票 -->
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
