<template>
  <div class="localProWrap">
    <div
      class="localPro"
      v-for="item in aroundPlay.displayWindowModels"
      :key="item.catgoryID"
    >
      <div class="localHeader">
        <i class="china"></i>
        <h2>{{ item.catgoryName }}</h2>
        <div class="city">
          <a
            href="javascript:;"
            :class="{ active: active === index }"
            v-for="(itemTab, index) in item.tabList"
            :key="itemTab.name"
            @click="checkTab(index)"
            >{{ itemTab.name }}</a
          >
        </div>
        <a href="javascript:;" class="to_more">
          更多{{ tabFirst[active].name }}产品
          <i class="more"></i>
        </a>
      </div>
      <div class="localCon">
        <div class="localWrap">
          <a
            :href="playItem.htef"
            class="localItem"
            v-for="playItem in productsList"
            :key="playItem.id"
          >
            <div class="localImg">
              <img :src="playItem.img" alt="" />
            </div>
            <div class="localDetail">
              <h3>
                {{ playItem.name }}
              </h3>
              <div class="price">
                <span>
                  <i>￥</i>
                  {{ playItem.price }}
                  <em>起</em>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AroundPro",
  data() {
    return {
      aroundPlay: {},
      active: 0,
    };
  },
  mounted() {
    this.getIndependentTerritory();
  },
  methods: {
    // 请求数据
    async getIndependentTerritory() {
      let result = await this.$API.index.getIndependentTerritory();
      this.aroundPlay = result.data;
    },
    // 点击切换tab
    checkTab(index) {
      this.active = index;
    },
  },
  computed: {
    tabFirst() {
      return this.aroundPlay.displayWindowModels[0].tabList;
    },
    productsList() {
      return this.tabFirst[this.active].products;
    },
  },
};
</script>

<style lang="less" scoped>
// 地区旅游点
.localProWrap {
  .localPro {
    margin: 0 auto;
    width: 1180px;
    padding: 30px 0 5px;
    .localHeader {
      border-bottom: 1px solid #dee2e5;
      display: block;
      display: flex;
      .china {
        background: url("https://pic.c-ctrip.com/pic/VacationOnlinePic/tourpic/home/freehome_dw_around.png")
          center center no-repeat;
        width: 24px;
        display: block;
        height: 24px;
        margin: 3px 8px 3px 0;
      }
      h2 {
        font: 24px/30px PingFangSC-Medium;
        width: 180px;
        height: 30px;
        margin-bottom: 8px;
        color: #333;
      }
      .city {
        height: 33px;
        margin-top: 5px;
        // // width: 800px;
        // // display: flex;
        // align-content: space-around;
        a {
          text-decoration: none;
          margin: 3px 10px;

          position: relative;
          float: left;
          font: 16px/22px Microsoft Yahei;
          height: 30px;
          padding: 0 8px;
          cursor: pointer;
          color: #666;
        }
        .active {
          border-bottom: 3px solid #ffb80f;
        }
      }
      .to_more {
        text-decoration: none;
        margin-top: 8px;
        padding-right: 10px;
        font: 14px/20px Microsoft Yahei;
        color: #999;
        cursor: pointer;
        position: relative;
        .more {
          width: 7px;
          height: 10px;
          display: block;
          background: url("../images/sprit.png") no-repeat 0 -980px;
          position: absolute;
          top: 5px;
          right: 0;
        }
      }
    }
    .localCon {
      .localWrap {
        margin: 0 -12px;
        padding: 16px 0;
        background: #fff;
        font-size: 12px;
        display: flex;
        flex-wrap: wrap;
        align-content: sapce-evenly;
        .localItem {
          width: 277px;
          height: 260px;
          margin: 0 12px;
          margin-bottom: 24px;
          text-decoration: none;
          &:hover {
            box-shadow: 2px 2px 2px 2px #eee;
          }
          .localImg {
            overflow: hidden;
            img {
              width: 277px;
              height: 156px;
              &:hover {
                transition: transform 0.3s ease, -webkit-transform 0.3s ease;
                width: 277px;
                height: 156px;
                transform: scale(1.1);
              }
            }
          }
          .localDetail {
            width: 277px;
            height: 104px;
            border: 1px solid #eee;
            border-top: none;
            h3 {
              font: 16px/24px "Microsoft Yahei";
              padding: 8px 12px 0;
              height: 56px;
              overflow: hidden;
              color: #222;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              text-overflow: ellipsis;
            }
            .price {
              padding-left: 12px;
              padding-right: 12px;
              padding-top: 4px;
              span {
                font-size: 24px;
                display: inline-block;
                color: #f60;
                i {
                  font: 14px/1.5 Microsoft YaHei;
                }
                em {
                  font: 14px Microsoft Yahei, sans-serif;
                  margin: 0 3px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
