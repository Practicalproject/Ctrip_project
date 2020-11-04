<template>
  <div>
    <Header v-if="$route.path !== '/login'"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
</style>
