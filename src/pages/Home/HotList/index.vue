<template>
  <div class="hotList_wrapper">
    <!-- 头部列表 -->
    <div class="header_list">
      <h2>
        <span class="current">
          热门
          <i></i>
        </span>
        <span>
          周边游
          <i></i>
        </span>
        <span>
          门票
          <i></i>
        </span>
        <span>
          出境游
          <i></i>
        </span>
      </h2>
      <div class="header_go">
        上海出发
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>
    <!-- 内容主体 -->
    <div class="hotList_sub">
      <div class="sub_nav">
        <ul>
          <li
            class="sub_nav_action"
            v-for="(hotList, index) in destCitys"
            :key="index"
          >
            <a href="javascript:;">{{ hotList.nme }}</a>
          </li>
        </ul>
      </div>
      <div class="sub_img">
        <!-- 左侧区域 -->
        <div class="sub_body">
          <div
            class="body_item"
            v-for="(tabContent, index) in tabContentLst"
            :key="index"
          >
            <img :src="tabContent.img" alt="" />
            <div class="item_mask">
              <div class="title">
                <span class="title_text">{{ tabContent.prdNme }}</span>
                <div class="mask_rule"></div>
                ￥
                <span>{{ tabContent.price.amt }}</span
                >/人起
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
  data() {
    return {
      indexHot: {},
      // amt: "",
    };
  },
  mounted() {
    this.getIndexHot();
  },
  methods: {
    async getIndexHot() {
      const result = await this.$API.index.getIndexHot();
      console.log(result);
      this.indexHot = result.data;
    },
  },
  computed: {
    destCitys() {
      return this.indexHot.destCitys;
    },
    tabContentLst() {
      return this.indexHot.tabContentLst;
    },
  },
};
</script>

<style lang='less' scoped>
.hotList_wrapper {
  width: 1180px;
  margin: 30px auto;
  line-height: 30px;

  //   头部列表
  .header_list {
    width: 100%;
    display: flex;
    padding-bottom: 3px;
    justify-content: space-between;
    border-bottom: 2px solid #3983e5;
    h2 {
      text-align: left;
      float: left;
      span {
        color: #333;
        bottom: -3px;
        height: 36px;
        line-height: 30px;
        margin-right: 30px;
        cursor: pointer;
        font-size: 16px;
        position: relative;
        &:hover {
          color: #06c;
          cursor: default;
        }
      }
      .current {
        cursor: default;
        color: #06c;
        i {
          position: absolute;
          left: 50%;
          margin-left: -6px;
          bottom: -6px;
          width: 12px;
          height: 6px;
          overflow: hidden;
          line-height: 0;
          font-size: 0;
          border-bottom: 6px solid #3983e5;
          border-top: 0 none;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
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
          a {
            text-align: center;
            padding: 0 8px;
            margin-right: 15px;
            line-height: 20px;
            color: #3983e5;
            font-size: 14px;
            height: 20px;
            display: block;
          }
        }
        .sub_nav_action {
          a {
            background-color: #3983e5;
            color: #fff;
            border-radius: 5px;
          }
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
        overflow: hidden;
        height: 330px;
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
