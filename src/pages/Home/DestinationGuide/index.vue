<template>
  <!--   租车区域 -->
  <div class="modcar">
    <!-- 标题行 -->
    <div class="modhd">
      <h2>
        <span :class="{ current: tabNum === 1 }" @click="tab(1)">
          目的地攻略
          <i></i>
        </span>
        <span :class="{ current: tabNum === 2 }" @click="tab(2)">
          旅游旗舰店
          <i></i>
        </span>
      </h2>
    </div>
    <!-- 内容区 -->
    <div class="mod_body" v-if="resData.tags">
      <!-- 内容区左侧 -->
      <div class="entrance">
        <dl class="keyword">
          <dt class="keywordTitle">{{ resData.tags.nme }}</dt>
          <dd
            class="keywordContainer"
            v-for="(item, index) in resData.tags.itemLst"
            :key="index"
          >
            <span class="bgspan">
              <a :href="item.lnk">{{ item.nme }}</a>
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
                  :class="{ active: index === subIndex }"
                  v-for="(tab, index) in resData.tabs"
                  :key="index"
                  @click="chengSubIndex(index, tab.pinyin)"
                >
                  <a href="javascript: ;">{{ tab.tabNme }}</a>
                </li>
              </ul>
            </div>

            <div class="more">
              <a href="javascript: ;">
                <i class="iconfont icon-next"></i>
              </a>
            </div>
          </div>
          <!-- 主题内容 -->
          <div class="priduct_body" v-if="resData.prdLst">
            <!-- 图片详情区域 -->
            <ul class="pri_carContainer">
              <li
                class="carList"
                v-for="(prdLstItem, index) in resData.prdLst"
                :key="index"
              >
                <a :href="prdLstItem.lnk">
                  <p class="carImg">
                    <img :src="prdLstItem.img" alt="" />
                  </p>
                </a>
                <div class="carList_posi">{{ prdLstItem.nme }}</div>
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
  name: "DestinationGuide",
  data() {
    return {
      tabNum: 1,
      destinationGuide: {},
      subIndex: 0,
      resData: {},
      QingQiQiuZhuanLan: "QingQiQiuZhuanLan",
    };
  },
  mounted() {
    this.getDes(this.QingQiQiuZhuanLan);
  
  },
  methods: {
    async getDes(qqq) {
      let result = await this.$API.index.refDes(qqq);
      if (result.code === 200) {
        this.resData = result.data;
      }
    },
    chengSubIndex(subIndex, flag) {
      this.subIndex = subIndex;
      this.getDes(flag);
    },
    tab(num) {
      this.tabNum = num;
    },
  },
  computed: {},
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
      }
      .current {
        cursor: default;
        color: #06c;
        i {
          position: absolute;
          left: 50%;
          margin-left: -6px;
          bottom: -8px;
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
  }
  /* 主内容区 */
  .mod_body {
    width: 1180px;
    height: 200px;
    border: 1px solid #ddd;
    display: flex;
    background-color: #fff;

    /* 左侧 */
    .entrance {
      width: 227px;
      height: 200px;
      padding: 0 20px 15px 20px;
      border-right: 1px dashed #ddd;
      .keyword {
        width: 187px;
        height: 200px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
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
                /* background: #3983e5; */
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
        /* 图片区域 */
        .priduct_body {
          .pri_carContainer {
            display: flex;
            justify-content: space-between;

            .carList {
              margin-left: 10px;
              width: 210px;
              overflow: hidden;
              position: relative;
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
              }
              .carList_posi {
                background-color: rgba(0, 0, 0, 0.3);
                height: 60px;
                width: 100%;
                position: absolute;
                bottom: -40px;
                left: 0;
                color: white;
                text-align: center;
                line-height: 30px;
                transition: all 0.5s linear;
                font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
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
}
</style>


