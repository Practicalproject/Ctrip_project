<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import useCart from '@/pages/useCart'
export default {
  name: "App",
  components: {
    Header,
    useCart
  },
};
</script>

<style lang="less" scoped>
</style>
