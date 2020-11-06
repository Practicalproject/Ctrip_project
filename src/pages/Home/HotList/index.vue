<template>
  <div class="hotList_wrapper">
    <!-- 头部列表 -->
    <div class="header_list">
      <h2>
        <span :class="{ current: currNum === 1 }" @click="tab(1)">
          热门
          <i></i>
        </span>
        <span :class="{ current: currNum === 2 }" @click="tab(2)">
          周边游
          <i></i>
        </span>
        <span :class="{ current: currNum === 3 }" @click="tab(3)">
          门票
          <i></i>
        </span>
        <span :class="{ current: currNum === 4 }" @click="tab(4)">
          出境游
          <i></i>
        </span>
      </h2>
    </div>

    <!-- 内容主体 -->
    <div class="hotList_sub">
      <!-- 热门 -->
      <!-- 内容导航 -->
      <div class="sub_nav">
        <ul>
          <li
            :class="{ active: number === index }"
            v-for="(item, index) in destCitys"
            :key="item.pinyin"
            @click="change(index, item.pinyin)"
          >
            <a href="javascript:;">{{ item.nme }}</a>
          </li>
        </ul>
      </div>
      <!-- 图片显示区域 -->
      <div class="sub_img">
        <!-- 左侧多图区域 -->
        <div class="sub_body">
          <div
            class="body_item"
            v-for="(tabContentItem, index) in tabContentLst"
            :key="tabContentItem.sort"
          >
            <a :href="tabContentItem.prdLnk">
              <img :src="tabContentItem.img" alt="" />
              <div class="item_mask">
                <div class="title">
                  <span class="title_text">{{ tabContentItem.prdNme }}</span>
                  <div class="mask_rule"></div>
                  ￥
                  <span>{{ tabContentItem.price.amt }}</span
                  >/人起
                </div>
              </div>
              <!-- 鼠标滑过遮罩 -->
              <div class="product-detail">
                <p class="title">{{ tabContentItem.prdNme }}</p>
                <p class="info">
                  <i class="icon-scenic"></i>{{ tabContentItem.sight }}
                </p>
                <p class="info">
                  <i class="icon-food"></i>{{ tabContentItem.food }}
                </p>
                <p class="link">立即查看3000条产品&gt;</p>
              </div>
            </a>
          </div>
        </div>
        <!-- 右侧大图 -->
        <div
          class="sub_big"
          v-for="imgItem in indexHot.adLst"
          :key="imgItem.img"
        >
          <a :href="imgItem.url">
            <img :src="imgItem.img" alt="" />
          </a>
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
      number: 0,
      currNum: 1,
    };
  },
  mounted() {
    this.getIndexHot("JingNei");
  },
  methods: {
    tab(num) {
      this.currNum = num;
    },
    // 请求各大洲的函数
    async getIndexHot(diqu) {
      let result = await this.$API.index.getIndexHot(diqu);
      if (result.code === 200) {
        this.indexHot = result.data;
      }
    },
    // 点击切换各大洲并发请求
    change(index, diqu) {
      this.number = index;
      this.getIndexHot(diqu);
    },
  },
  computed: {
    tabContentLst() {
      return this.indexHot.tabContentLst;
    },
    destCitys() {
      return this.indexHot.destCitys;
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
          width: 0;
          height: 0;
          overflow: hidden;
          line-height: 0;
          font-size: 0;
          vertical-align: middle;
          border-bottom: 6px solid #3983e5;
          border-top: 0 none;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
      }
    }
  }

  // 主体内容
  .hotList_sub {
    padding: 15px 19px 0;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #fff;

    .sub_nav {
      margin-bottom: 15px;
      ul {
        height: 20px;
        margin-bottom: 10px;
        // float: right;
        li {
          display: inline-block;
          line-height: 20px;
          margin-right: 15px;
          color: #3983e5;
          padding: 0 8px;
          &:hover {
            background: #3983e5;
            border-radius: 3px;
            a {
              color: #fff;
            }
          }
        }
        .active {
          background: #3983e5;
          color: #fff;
          border-radius: 3px;
          a {
            color: #fff;
          }
        }
      }
    }

    // 图片显示区域
    .sub_img {
      display: flex;
      justify-content: space-between;

      // 左侧多图区域
      .sub_body {
        width: 910px;
        margin: 0 0 10px 0px;
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
          .product-detail {
            display: none;
            position: absolute;
            padding: 26px 10px 10px;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
            font-family: PingFangSC-Regular;
            color: #fff;
            line-height: 16px;
            .title {
              text-align: center;
              font-size: 22px;
              color: #fff;
              line-height: 18px;
              font-weight: bold;
              margin-bottom: 16px;
            }
            .info {
              position: relative;
              padding-left: 28px;
              margin-bottom: 8px;
              line-height: 16px;
              height: 16px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: -o-ellipsis-lastline;
              text-overflow: ellipsis;
              i {
                position: absolute;
                left: 6px;
                top: 2px;
                width: 12px;
                height: 12px;
                display: inline-block;
                overflow: hidden;
                vertical-align: middle;
                background: url(//pic.c-ctrip.com/platform/online/home/un_index_20180209.png)
                  no-repeat;
                &.icon-scenic {
                  background-position: 0 -208px;
                }
                &.icon-food {
                  background-position: -26px -208px;
                }
              }
            }
            .link {
              margin-top: 18px;
              text-align: center;
            }
          }
          &:hover .product-detail {
            display: block;
          }
          &:hover .item_mask {
            display: none;
          }
        }
      }

      // 右侧大图
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
