<template>
  <div class="localProWrap">
    <div
      class="localPro"
      v-for="item in areaPlay.displayWindowModels"
      :key="item.catgoryID"
    >
      <div class="localHeader">
        <i class="china"></i>
        <h2>{{ item.catgoryName }}</h2>
        <div
          class="city"
          v-for="(itemTab, index) in item.tabList"
          :key="itemTab.name"
          @click="checkTab(index)"
        >
          <a href="javascript:;" :class="{ active: active === index }">{{
            itemTab.name
          }}</a>
          <!-- <a href="javascript:;">北京</a>
          <a href="javascript:;">云南</a>
          <a href="javascript:;">成都</a>
          <a href="javascript:;">厦门</a>
          <a href="javascript:;">古北水镇</a>
          <a href="javascript:;">重庆</a>
          <a href="javascript:;">海南</a>
          <a href="javascript:;">桂林</a>
          <a href="javascript:;">上海</a> -->
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
          <!-- <a href="javascript:;" class="localItem">
            <div class="localImg">
              <img src="../images/travelPic.jpg" alt="" />
            </div>
            <div class="localDetail">
              <h3>
                上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
              </h3>
              <div class="price">
                <span>
                  <i>￥</i>
                  1700
                  <em>起</em>
                </span>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="localItem">
            <div class="localImg">
              <img src="../images/travelPic.jpg" alt="" />
            </div>
            <div class="localDetail">
              <h3>
                上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
              </h3>
              <div class="price">
                <span>
                  <i>￥</i>
                  1700
                  <em>起</em>
                </span>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="localItem">
            <div class="localImg">
              <img src="../images/travelPic.jpg" alt="" />
            </div>
            <div class="localDetail">
              <h3>
                上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
              </h3>
              <div class="price">
                <span>
                  <i>￥</i>
                  1700
                  <em>起</em>
                </span>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="localItem">
            <div class="localImg">
              <img src="../images/travelPic.jpg" alt="" />
            </div>
            <div class="localDetail">
              <h3>
                上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
              </h3>
              <div class="price">
                <span>
                  <i>￥</i>
                  1700
                  <em>起</em>
                </span>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="localItem">
            <div class="localImg">
              <img src="../images/travelPic.jpg" alt="" />
            </div>
            <div class="localDetail">
              <h3>
                上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
              </h3>
              <div class="price">
                <span>
                  <i>￥</i>
                  1700
                  <em>起</em>
                </span>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="localItem">
            <div class="localImg">
              <img src="../images/travelPic.jpg" alt="" />
            </div>
            <div class="localDetail">
              <h3>
                上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
              </h3>
              <div class="price">
                <span>
                  <i>￥</i>
                  1700
                  <em>起</em>
                </span>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="localItem">
            <div class="localImg">
              <img src="../images/travelPic.jpg" alt="" />
            </div>
            <div class="localDetail">
              <h3>
                上海迪士尼（Disney）3-5日自由行(4钻)·【11·11
                放心Go！立减100！玩具总动员&迪士尼乐园酒店任选】专属特权·提前30分钟入园·迪士尼0距离·玩累随时回酒店休息·可加购迪士尼门票！『双飞』
              </h3>
              <div class="price">
                <span>
                  <i>￥</i>
                  1700
                  <em>起</em>
                </span>
              </div>
            </div>
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalPro",
  data() {
    return {
      areaPlay: {},
      active: 0,
    };
  },
  mounted() {
    this.getIndependentOverseas();
  },
  methods: {
    // 请求数据
    async getIndependentOverseas() {
      let result = await this.$API.index.getIndependentOverseas();
      this.areaPlay = result.data;
    },
    // 点击切换tab
    checkTab(index) {
      this.active = index;
    },
  },
  computed: {
    tabFirst() {
      return this.areaPlay.displayWindowModels[0].tabList;
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
        background: url("../images/China.png") center center no-repeat;
        width: 24px;
        display: block;
        height: 24px;
        margin: 3px 8px 3px 0;
      }
      h2 {
        font: 24px/30px PingFangSC-Medium;
        width: 200px;
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
          margin: 3px 12px;

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
