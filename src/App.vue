<template>
  <div>
    <Header v-if="($route.path !== '/login') && $route.path !== '/register'"></Header>
    <router-view></router-view>
    <CopyRight></CopyRight>
  </div>
</template>

<script>
import Header from "@/components/Header";
import CopyRight from "@/components/CopyRight";

export default {
  name: "App",
  components: {
    Header,
    CopyRight
  },
};
</script>

<style lang="less" scoped>
</style>
