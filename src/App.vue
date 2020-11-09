<template>
  <div>
    <Header
      v-if="
        $route.path !== '/login' &&
        $route.path !== '/register' &&
        $route.path !== '/huangpujiang'
      "
    ></Header>
    <router-view></router-view>
    <CopyRight></CopyRight>
    <Backtop v-if="$route.path !== '/home'"></Backtop>
  </div>
</template>

<script>
import Header from "@/components/Header";
import CopyRight from "@/components/CopyRight";
import Backtop from "@/components/Backtop";

export default {
  name: "App",
  components: {
    Header,
    CopyRight,
    Backtop,
  },
};
</script>

<style lang="less">
</style>
