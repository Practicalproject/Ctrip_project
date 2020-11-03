<template>
  <div class="hotList_wrapper">
    <!-- 头部列表 -->
    <div class="header_list">
      <ul>
        <li>热门</li>
        <li>周边游</li>
        <li>门票</li>
        <li>出境游</li>
        <li>境内游</li>
        <li>游轮</li>
        <li>当地玩乐</li>
        <li>主题游</li>
        <li>高端游</li>
      </ul>
    </div>
    <!-- 内容主体 -->
    <div class="hotList_sub">

    </div>
  </div>
</template>

<script>
export default {
  name: "HotList",
};
</script>

<style lang='less' scoped>
.hotList_wrapper {
  width: 1180px;
  background-color: pink;
  margin: 0 auto;
  height: 36px;
  line-height: 30px;
  border-bottom: 3px solid #3983e5;
  //   头部列表
  .header_list {
    ul {
      display: flex;
      li {
        margin-right: 30px;
      }
    }
  }
  .hotList_sub{
      
  }
}
</style>
