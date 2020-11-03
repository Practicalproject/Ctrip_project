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
      <div class="header_go">
        上海出发
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>
    <!-- 内容主体 -->
    <div class="hotList_sub">
      <div class="sub_nav">
        <ul>
          <li>境内</li>
          <li>日本</li>
          <li>东南亚</li>
          <li>欧洲</li>
          <li>美洲</li>
          <li>澳中东非</li>
        </ul>
      </div>
      <div class="sub_img">
        <!-- 左侧区域 -->
        <div class="sub_body">
          <div class="body_item">
            <img src="./image/01.jpg" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">三亚</span>
                <div class="mask_rule"></div>
                ￥
                <span>876</span>/人起
              </div>
            </div>
          </div>
          <div class="body_item">
            <img src="./image/01.jpg" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">三亚</span>
                <div class="mask_rule"></div>
                ￥
                <span>876</span>/人起
              </div>
            </div>
          </div>
          <div class="body_item">
            <img src="./image/01.jpg" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">三亚</span>
                <div class="mask_rule"></div>
                ￥
                <span>876</span>/人起
              </div>
            </div>
          </div>
          <div class="body_item">
            <img src="./image/01.jpg" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">三亚</span>
                <div class="mask_rule"></div>
                ￥
                <span>876</span>/人起
              </div>
            </div>
          </div>
          <div class="body_item">
            <img src="./image/01.jpg" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">三亚</span>
                <div class="mask_rule"></div>
                ￥
                <span>876</span>/人起
              </div>
            </div>
          </div>
          <div class="body_item">
            <img src="./image/01.jpg" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">三亚</span>
                <div class="mask_rule"></div>
                ￥
                <span>876</span>/人起
              </div>
            </div>
          </div>
          <div class="body_item">
            <img src="./image/01.jpg" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">三亚</span>
                <div class="mask_rule"></div>
                ￥
                <span>876</span>/人起
              </div>
            </div>
          </div>
          <div class="body_item">
            <img src="./image/01.jpg" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">三亚</span>
                <div class="mask_rule"></div>
                ￥
                <span>876</span>/人起
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧大图 -->
        <div class="sub_big">
          <img src="./image/02.jpg" alt="" />
        </div>
      </div>
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
  margin: 0 auto;
  line-height: 30px;

  //   头部列表
  .header_list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #3983e5;
    ul {
      display: flex;
      li {
        margin-right: 30px;
      }
    }
    .header_go {
      height: 22px;
      color: #3983e4;
      font-size: 13px;
      .icon-xiala {
        font-size: 13px;
      }
    }
  }
  // 主体内容
  .hotList_sub {
    padding: 15px 19px 0;
    width: 100%;
    border: 1px solid #ddd;
    .sub_nav {
      margin-bottom: 15px;
      ul {
        display: flex;
        li {
          text-align: center;
          padding: 0 8px;
          margin-right: 15px;
          line-height: 20px;
          color: #3983e5;
          font-size: 13px;
        }
      }
    }
    .sub_img {
      display: flex;
      justify-content: space-between;
      .sub_body {
        width: 910px;
        margin: 0 0 10px 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .body_item {
          width: 220px;
          height: 160px;
          position: relative;
          margin-bottom: 10px;
          img {
            width: 100%;
            height: 100%;
          }
          .item_mask {
            border-radius: 50%;
            width: 112px;
            height: 112px;
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 12px;
            color: white;
            span {
              font-size: 22px;
              color: #f60;
            }
            .title {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 5px;
              .title_text {
                font-size: 18px;
                color: white;
                font-weight: 900;
              }
              .mask_rule {
                width: 102px;
                height: 1px;
                background-color: white;
              }
            }
          }
        }
      }
      .sub_big {
        width: 210px;
        height: 330px;
        // background-color: yellowgreen;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
