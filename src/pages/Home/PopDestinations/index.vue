<template>
  <!--   租车区域 -->
  <div class="modcar">
    <!-- 标题行 -->
    <div class="modhd">
      <h2>
        <span :class="{ current: tabNum === 0 }" @click="tab(0)">
          当天玩乐/出境
          <i v-if="this.tabNum === 0" class="iconfont icon-shang"></i>
        </span>
        <span :class="{ current: tabNum === 1 }" @click="tab(1)">
          当天玩乐/境内
          <i v-if="this.tabNum === 1" class="iconfont icon-shang"></i>
        </span>
      </h2>
    </div>
    <!-- 内容区 -->
    <div class="modbd">
      <!-- 内容区左侧 -->
      <div class="entrance">
        <dl class="keyword" v-if="tags">
          <dt class="keywordTitle">{{ tags.nme }}</dt>
          <dd
            class="keywordContainer"
            v-for="(tagsItem, index) in tags.itemLst"
            :key="index"
          >
            <span class="bgspan">
              <a href="javascript: ;">{{ tagsItem.nme }}</a>
            </span>
          </dd>
        </dl>
      </div>

      <!-- 内容右侧区域 -->
      <div class="body_product">
        <!-- 版心 -->
        <div class="carContainer">
          <!-- 标题 -->
          <div class="priducthd">
            <div class="pri_list">
              <ul class="inner-tabs">
                <li
                  :class="{ active: index === numIndex }"
                  v-for="(tabsItem, index) in tabs"
                  :key="index"
                  @click="changeIndex(index, tabsItem.pinyin)"
                >
                  <a href="javascript: ;">{{ tabsItem.tabNme }}</a>
                </li>
              </ul>
            </div>

            <div class="more">
              <a href="javascript: ;" v-if="indexPlay">
                {{ indexPlay.exNme }}
                <i class="iconfont icon-next"></i>
              </a>
            </div>
          </div>
          <!-- 主题内容 -->
          <div class="priduct_body">
            <!-- 图片详情区域 -->
            <ul class="pri_carContainer">
              <li
                class="carList"
                v-for="(prdLstItem, index) in prdLst"
                :key="index"
              >
                <a href="javascript:;">
                  <p class="carImg">
                    <img :src="prdLstItem.img" alt="" />
                  </p>
                  <p class="carName">{{ prdLstItem.nme }}</p>
                  <p class="carPrice">
                    <span class="item-type">{{ prdLstItem.subNme }}</span>
                    <span class="price" v-if="prdLstItem.price">
                      <span>￥</span>
                      <span class="priceInfo">
                        {{ prdLstItem.price.amt }}
                      </span>
                      <span>起</span>
                    </span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopDestinations",
  data() {
    return {
      indexPlay: {}, // 页面数据
      tabNum: 0, // 标题切换
      numIndex: 0, // 小标题切换
      Territory: "", // 出境，境内
      // tagsItemLst: [],
      // tagsName: "",
      // tabs: [],
      // exNme: "",
    };
  },
  mounted() {
    this.getIndexPlay("YiRiYou");
  },
  methods: {
    // 发送请求获取函数
    async getIndexPlay(gp) {
      let { Territory } = this;
      const result = await this.$API.index.getIndexPlay(Territory, gp);
      // console.log(result);
      if (result.code === 200) this.indexPlay = result.data;
    },

    // tab标题切换
    tab(num) {
      this.tabNum = num;
      // this.Territory = num;
      // console.log(this.Territory);
      if (num === 0) {
        this.Territory = "";
      } else {
        this.Territory = "Territory";
      }
      this.getIndexPlay("YiRiYou");
      this.numIndex = 0;
    },

    // tab小标题切换
    changeIndex(index, gp) {
      this.numIndex = index;
      this.getIndexPlay(gp);
    },
    // async getIndexPlay() {
    //   const result = await this.$API.index.getIndexPlay();
    //   // console.log(result);
    //   this.indexPlay = result.data;
    //   this.tagsItemLst = result.data.tags.itemLst;
    //   this.tagsName = result.data.tags.nme;
    //   this.tabs = result.data.tabs;
    //   this.exNme = result.data.exNme;
    // },
  },
  computed: {
    // prdLst() {
    //   return this.indexPlay.prdLst;
    // },
    // 计算出 tags 数据
    tags() {
      return this.indexPlay.tags;
    },

    // 计算 prdLst 数据
    prdLst() {
      return this.indexPlay.prdLst;
    },

    // 计算 tabs 数据
    tabs() {
      return this.indexPlay.tabs;
    },
  },
};
</script>

<style  lang ='less' scoped>
/* 租车区域 */
.modcar {
  width: 1180px;
  margin: 28px auto;

  /* 标题行 */
  .modhd {
    width: 1180px;
    height: 38px;
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
        font-weight: 700;
        &:hover {
          color: #06c;
          cursor: default;
        }
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
      .current {
        cursor: default;
        color: #06c;
      }
    }
  }
  /* 主内容区 */
  .modbd {
    width: 1180px;
    height: 245px;
    border: 1px solid #ddd;
    display: flex;
    background-color: #fff;

    /* 左侧 */
    .entrance {
      width: 227px;
      height: 245px;
      padding: 0 20px 15px 20px;
      border-right: 1px dashed #ddd;
      .keyword {
        width: 187px;
        height: 230px;

        .keywordTitle {
          width: 100%;
          height: 38px;
          padding: 4px 0 0 0;
          font: 700 14px/34px "Microsoft yahei";
          color: #333;
        }
        dd {
          position: relative;
          float: left;
          display: block;
          border-left: 1px solid #ececec;
          line-height: 18px;
          height: 18px;
          font: 12px "Microsoft yahei", arial, Simsun, sans-serif;
          margin: 7px 10px;
          white-space: nowrap;
          .bgspan {
            display: block;
            width: 100%;
            height: 100%;
            a {
              text-decoration: none;
              color: #666;
              display: inline-block;
              max-width: 72px;
              &:hover {
                color: #007aff;
              }
            }
          }
        }
        /* .keyContainer {
          width: 197px;
          height: 190px;
        background: violet;
        } */
      }
    }
    /* 右侧 */
    .body_product {
      width: 950px;
      height: 200px;
      position: relative;
      padding: 10px 15px 0;
      .carContainer {
        /* 标题区域 */
        .priducthd {
          font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .pri_list {
            ul {
              float: left;
              height: 15px;
              line-height: 15px;
              display: block;
              li {
                list-style: none;
                color: #fff;
                border-radius: 3px;
                display: inline-block;
                line-height: 20px;
                margin-right: 15px;
                padding: 0 8px;
                &:hover {
                  background-color: #007aff;
                  font-weight: 700;
                  a {
                    color: #fff;
                  }
                }
              }
              .active {
                background-color: #007aff;
                font-weight: 700;
                a {
                  color: #fff;
                }
              }
            }
          }
          .more {
            float: right;
            text-decoration: none;
            height: 20px;
            a {
              float: left;
              i {
                display: inline-block;
                width: 6px;
                height: 9px;
                margin-right: 15px;
              }
            }
          }
        }
        /* 图片区域 */
        .priduct_body {
          height: 200px;
          .pri_carContainer {
            /* display: flex;
            justify-content: space-between; */
            /* width: 300px; */
            .carList {
              /* margin-left: 10px; */
              width: 210px;
              overflow: hidden;
              /* position: relative; */
              float: left;
              margin-right: 10px;
              &:hover {
                /* border: 1px solid #ddd; */
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
                img {
                  transform: scale(1.1);
                  transition: transform 0.3s linear, -webkit-transform 0.3s ease;
                }
                .carList_posi {
                  bottom: -30px;
                }
                &:nth-last-child(1) {
                  margin-right: 0;
                }
              }
              a .carImg {
                display: block;
                width: 100%;
                height: 145px;
              }
              .carName {
                position: relative;
                height: 20px;
                line-height: 20px;
                text-align: left;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 0 5px;
                color: #333;
              }
              .carPrice {
                height: 35px;
                display: flex;
                justify-content: space-between;
                /* color: #333; */
                .item-type {
                  display: block;
                  color: #999;
                  height: 35px;
                  line-height: 35px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  text-align: left;
                }
                .price {
                  line-height: 35px;
                  color: #333;
                  .priceInfo {
                    font: 22px/1.5 tahoma;
                    color: #f60;
                  }
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


