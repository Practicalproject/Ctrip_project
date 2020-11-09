<template>
  <el-backtop :bottom="80">
    <div class="box" title="回到顶部">顶部</div>
  </el-backtop>
</template>

<script>
export default {
  name: "Backtop",
};
</script>

<style lang='less' scoped>
.el-backtop {
  width: 40px;
  height: 40px;
  background-color: #2577e3;
  .box {
    display: block;
    font-size: 14px !important;
    color: #fff !important;
    text-align: center;
  }
  &:hover {
    background-color: skyblue;
  }
}
</style>
