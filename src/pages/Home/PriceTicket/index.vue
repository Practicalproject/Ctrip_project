<template>
  <div class="flightC">
    <div class="flyHeader">
      <h2>
        <span :class="{current:currNum===1} " @click="tab(1)">
          国际•港澳台特价机票
          <i></i>
        </span>
        <span :class="{current:currNum===2}" @click="tab(2)">
          国内特价机票
          <i></i>
        </span>
      </h2>
      <div class="pullRight">
        <a class="dropdown">
          上海出发
          <!-- <i class="iconfont icon-shang"></i> -->
          <span class="iconfont icon-downlist"></span>
        </a>
        <div class="dropCon">
          <div class="dropList">
            <a href="javascript:;">北京</a>
            <a href="javascript:;">上海</a>
            <a href="javascript:;">广州</a>
            <a href="javascript:;">深圳</a>
            <a href="javascript:;">杭州</a>
            <a href="javascript:;">成都</a>
            <a href="javascript:;">南京</a>
            <a href="javascript:;">武汉</a>
          </div>
        </div>
      </div>
    </div>
    <div class="ticketsDetail">
      <!-- 机票详情 -->
      <div class="product_hd">
        <ul>
          <li
            :class="{ active: index === number }"
            v-for="(item, index) in tabLst"
            :key="index"
            @click="change(index, item.pinyin)"
          >
            {{ item.tabNme }}
          </li>
          <!-- <li>亚洲</li>
          <li>欧洲</li>
          <li>美洲</li>
          <li>非洲</li> -->
        </ul>
        <span> 更多国际•港澳台特价机票 > </span>
      </div>
      <div class="product_con">
        <div class="conList">
          <div
            class="conItem"
            v-for="(caleLstItem, index) in caleLst"
            :key="index"
          >
            <a href="InternationalTicket.url" class="detail">
              <p class="cityInfo">
                {{ caleLstItem.acNme }}
                <i></i>
                {{ caleLstItem.dcNme }}
              </p>
              <p class="dayInfo">
                <span>{{ caleLstItem.dateTxt }}</span>
              </p>
              <p class="priceInfo">
                <span class="price" v-if="caleLstItem.price">
                  <dfn>￥</dfn>{{ caleLstItem.price.amt }}<i>起</i>
                </span>
                <span class="button">立抢</span>
              </p>
            </a>
          </div>
          <!-- <div class="conItem">
            <a href="javascript:;" class="detail">
              <p class="cityInfo">
                上海
                <i></i>
                北京
              </p>
              <p class="dayInfo">
                <span>11月4日 - 11月11日</span>
              </p>
              <p class="priceInfo">
                <span class="price"> <dfn>￥</dfn>690<i>起</i> </span>
                <span class="button">立抢</span>
              </p>
            </a>
          </div>
          <div class="conItem">
            <a href="javascript:;" class="detail">
              <p class="cityInfo">
                上海
                <i></i>
                北京
              </p>
              <p class="dayInfo">
                <span>11月4日 - 11月11日</span>
              </p>
              <p class="priceInfo">
                <span class="price"> <dfn>￥</dfn>690<i>起</i> </span>
                <span class="button">立抢</span>
              </p>
            </a>
          </div>
          <div class="conItem">
            <a href="javascript:;" class="detail">
              <p class="cityInfo">
                上海
                <i></i>
                北京
              </p>
              <p class="dayInfo">
                <span>11月4日 - 11月11日</span>
              </p>
              <p class="priceInfo">
                <span class="price"> <dfn>￥</dfn>690<i>起</i> </span>
                <span class="button">立抢</span>
              </p>
            </a>
          </div>
          <div class="conItem">
            <a href="javascript:;" class="detail">
              <p class="cityInfo">
                上海
                <i></i>
                北京
              </p>
              <p class="dayInfo">
                <span>11月4日 - 11月11日</span>
              </p>
              <p class="priceInfo">
                <span class="price"> <dfn>￥</dfn>690<i>起</i> </span>
                <span class="button">立抢</span>
              </p>
            </a>
          </div>
          <div class="conItem">
            <a href="javascript:;" class="detail">
              <p class="cityInfo">
                上海
                <i></i>
                北京
              </p>
              <p class="dayInfo">
                <span>11月4日 - 11月11日</span>
              </p>
              <p class="priceInfo">
                <span class="price"> <dfn>￥</dfn>690<i>起</i> </span>
                <span class="button">立抢</span>
              </p>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceTicket",
  data() {
    return {
      currNum:1,
      InternationalTicket:{},
      number:0,
    }
  },
  mounted() {
    this.getIndexInternational();
  },
  methods: {
    tab(num){
      this.currNum = num
    },
    // 请求热门栏目列表
    async getIndexInternational(gp) {
      let result = await this.$API.index.getIndexInternational(gp);
      if (result.code === 200) {
        this.InternationalTicket = result.data;
      }
      console.log(result);
    },
    change(index, gp) {
      this.number = index;
      this.getIndexInternational(gp);
    },
  },
  computed: {
    caleLst() {
      return this.InternationalTicket.caleLst;
    },
    tabLst() {
      return this.InternationalTicket.tabLst;
    },
  },
};
</script>


<style lang="less" scoped>
.flightC {
  width: 1180px;
  // height: 437px;
  margin: 28px auto 0;
  // background: #ffffff;
  .flyHeader {
    height: 36px;
    width: 1180px;
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
      .current {
        cursor: default;
           color: #06c;
        
      }
    }
    .pullRight {
      float: right;
      font-size: 12px;
      position: relative;
      .dropdown {
        position: relative;
        height: 22px;
        line-height: 22px;
        color: #3983e4;
        padding: 4px 5px 0;
        display: inline-block;
        overflow: hidden;
        // span {
        // display: block;
        // position: absolute;
        // top: -5px;
        // left: 0;
        // }
      }
      .dropCon {
        position: absolute;
        z-index: 10;
        top: 34px;
        right: 0;
        width: 90px;
        height: 186px;
        background: #fff;
        border: 1px solid #999;
        // display: none;
        .dropList {
          width: 87px;
          padding: 4px;
          height: auto;
          overflow: hidden;
          a {
            text-decoration: none;
            display: block;
            padding: 0 10px;
            height: 22px;
            line-height: 22px;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
            &:hover {
              color: white;
              background-color: #74a8ed;
            }
          }
        }
      }
    }
  }
  .ticketsDetail {
    background-color: white;
    padding: 15px 19px 0;
    font-size: 12px;
    .product_hd {
      width: 1140px;
      height: 20px;
      // background-color: pink;
      position: relative;
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
            color: #fff;
            border-radius: 3px;
          }
        }
        .active {
          background: #3983e5;
          color: #fff;
          border-radius: 3px;
        }
      }
      span {
        text-decoration: none;
        width: 160px;
        height: 26px;
        border: 1px solid #fff;
        line-height: 26px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        right: -10px;
        top: 0;
        color: #3983e5;
        &:hover {
          display: block;
          width: 160px;
          height: 26px;
          border: 1px solid #3983e5;
          border-radius: 5px;
        }
      }
    }

    .product_con {
      width: 1140px;
      // height: 353px;
      .conList {
        margin-right: -10px;
        margin-top: 10px;
        // height: 353px;
        display: flex;
        flex-wrap: wrap;
        .conItem {
          margin: 0 10px 10px 0;
          width: 220px;
          height: 106px;
          padding: 15px 12px;
          background: #f8f8f8;
          border: 1px solid #f8f8f8;
          cursor: pointer;
          .detail {
            display: block;
            width: 194px;
            height: 77px;
            text-decoration: none;
            color: #666;
            .cityInfo {
              color: #333;
              margin-bottom: 3px;
              position: relative;
              height: 20px;
              line-height: 20px;
              text-align: left;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              padding: 0 5px;
              i {
                width: 12px;
                height: 7px;
                margin: 0 5px;
                display: inline-block;
                overflow: hidden;
                vertical-align: middle;
                background: url("./images/spilt.png") -1px -116px;
              }
            }
            .dayInfo {
              height: 27px;
              text-align: left;
              padding: 0 5px;
              span {
                color: #999;
                height: 35px;
                text-align: left;
              }
            }
            .priceInfo {
              .price {
                float: left;
                font: 22px/1.5 tahoma;
                color: #f60;
                dfn {
                  vertical-align: 7px;
                  font: 12px/1.5 arial;
                  color: #666;
                  text-align: right;
                }
                i {
                  margin-left: 3px;
                  vertical-align: 2px;
                  font: 12px/1.5 "Microsoft yahei";
                  color: #666;
                }
              }
              .button {
                width: auto;
                float: right;
                height: 27px;
                padding: 0 15px;
                font: 14px/27px "Microsoft yahei";
                margin: 3px 0 0 0;
                background-color: #ffb000;
                color: #fff;
                border: none;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
}
</style>
