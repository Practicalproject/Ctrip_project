<template>
  <!--   租车区域 -->
  <div class="modcar">
    <!-- 标题行 -->
    <div class="modhd">
      <h2>
        <span class="current">
          全球购
          <i></i>
        </span>
      </h2>
    </div>
    <!-- 内容区 -->
    <div class="modbd">
      <!-- 内容区左侧 -->
      <div class="entrance">
        <dl class="keyword">
          <dt class="keywordTitle">热门目的地</dt>
          <dd
            class="keywordContainer"
            v-for="(tagsItem, index) in tagsItemLst"
            :key="index"
          >
            <span class="bgspan">
              <a href="javascript: ;">{{ tagsItem.nme }}</a>
            </span>
          </dd>
        </dl>
      </div>

      <!-- 内容右侧区域 -->
      <div class="product">
        <!-- 版心 -->
        <div class="carContainer">
          <!-- 标题 -->
          <div class="priducthd">
            <div class="pri_list">
              <ul class="inner-tabs">
                <li
                  :class="{active:index === numIndex}"
                  v-for="(tabsItem, index) in tabs"
                  :key="index"
                  @click="changeIndex(index)"
                >
                  <a href="javascript: ;">{{ tabsItem.tabNme }}</a>
                </li>
              </ul>
            </div>

            <div class="more">
              <a href="javascript: ;">
                更多
                <i class="iconfont icon-next"></i>
              </a>
            </div>
          </div>
          <!-- 主题内容 -->
          <div class="priductbd">
            <!-- 图片详情区域 -->
            <ul class="carContainer">
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
                      <dfn>¥</dfn>
                      {{ prdLstItem.price.amt }}
                      <i class="priceInfo"></i>
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
  name: "GlobalPurchasing",
  data() {
    return {
      globalPurchasing: {},
      tagsItemLst: [],
      numIndex: 0,
    };
  },
  mounted() {
    this.getGlobalPurchasing();
  },
  methods: {
    async getGlobalPurchasing() {
      const resule = await this.$API.index.getGlobalPurchasing();
      this.globalPurchasing = resule.data;
      this.tagsItemLst = resule.data.tags.itemLst;
    },
    changeIndex(index){
      this.numIndex = index
    }
  },
  computed: {
    tabs() {
      return this.globalPurchasing.tabs;
    },
    prdLst() {
      return this.globalPurchasing.prdLst;
    },
  },
};
</script>

<style  lang ='less' scoped>
/* 租车区域 */
.modcar {
  width: 1180px;
  margin: 28px auto;
  background-color: #fff;

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
            }
          }
        }
      }
    }
    /* 右侧 */
    .product {
      width: 950px;
      height: 245px;
      position: relative;
      padding: 15px 15px 0;
      /* 标题区域 */
      .priducthd {
        font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .pri_list {
          .inner-tabs {
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
                  color: #ddd;
                }
              }
            }
            .active {
              background-color: #007aff;
              font-weight: 700;
              a {
                color: #ddd;
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
      /* 汽车详情区域 */
      .priductbd {
        .carContainer {
          display: flex;
          justify-content: space-between;
          .carList {
            margin-left: 10px;
            width: 200px;
            &:hover {
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
              img {
                transform: scale(1.1);
                transition: transform 0.3s ease, -webkit-transform 0.3s ease;
              }
            }
            a .carImg {
              display: block;
              width: 100%;
              height: 110px;
              overflow: hidden;
              img {
                width: 200px;
              }
            }
            /* .carImg:hover img {
              transition: transform 0.3s ease, -webkit-transform 0.3s ease;
              width: 200px;
              height: 130px;
              transform: scale(1.1);
            } */
            .carName {
              position: relative;
              height: 20px;
              line-height: 20px;
              text-align: left;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              padding: 0 5px;
            }
            .carPrice {
              height: 35px;
              display: flex;
              justify-content: space-between;
            }
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
              position: relative;
              float: right;
              font: 22px/1.5 tahoma;
              color: #f60;
              .miniLogo {
                vertical-align: 7px;
                font: 12px/1.5 arial;
                color: #666;
              }
            }
          }
        }
      }
    }
  }
}
</style>


