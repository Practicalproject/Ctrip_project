<template>
  <div class="hotList_wrapper">
    <!-- 头部列表 -->
    <div class="header_list">
      <h2>
        <span :class="{current:tabNum===1}" @click="tab(1)">
          海外酒店
          <i></i>
        </span>
        <span :class="{current:tabNum===2}" @click="tab(2)" >
          海外民宿+短租
          <i class="iconfont icon-shang"></i>
        </span>
        <span :class="{current:tabNum===3}" @click="tab(3)">
          国内酒店
          <i></i>
        </span>
        <span :class="{current:tabNum===4}" @click="tab(4)">
          客栈民宿
          <i></i>
        </span>
      </h2>
    </div>
    <!-- 内容主体 -->
    <div class="hotList_sub">
      <div class="sub_img">
        <!-- 左侧区域 -->
        <div class="sub_left">
          <dl class="keyword-long">
            <dt>{{ tagUpName }}</dt>
            <dd v-for="(list, index) in tagupItemLst" :key="index">
              <span class="entrance-item" :title="list.nme">
                <a href="javaspript:;">{{ list.nme }}</a>
              </span>
            </dd>
          </dl>
          <dl class="keyword-long">
            <dt>{{ tagDownName }}</dt>
            <dd v-for="(tag, index) in tagDownList" :key="index">
              <span class="entrance-item" :title="tag.nme">
                <a href="javascript:;">{{ tag.nme }}</a>
              </span>
            </dd>
          </dl>
        </div>
        <!-- 右侧区域 -->
        <div class="sub_right">
          <!-- 右侧区域上侧区域 -->
          <div class="right_top">
            <!-- 境内 -->
            <div class="sub_nav">
              <ul>
                <li @click="changeIndex(index)" v-for="(item,index) in tabs" :key="index" :class="{nav_action:index === numIndex}">
                  {{ item.tabNme }}
                </li>
              </ul>
            </div>
          </div>
          <!-- 右侧区域下侧区域 -->
          <div class="right_bottom">
            <!-- 中间 -->
            <div class="sub_body">
              <div class="body_item" v-for="item in prdLst" :key="item.count">
                <img :src="item.img" alt="" />
                <div class="item_mask">
                  <div class="title">
                    <span class="title_text">{{ item.nme }}</span>
                    <div class="mask_rule"></div>
                    ￥
                    <span>{{ item.price.amt }}</span
                    >/人起
                  </div>
                </div>
              </div>
            </div>
            <!-- 右侧大图 -->
            <div class="sub_big">
              <img :src="adLst.img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutHotels",
  data() {
    return {
      indexHotel: [],
      adLst: {},
      tagupItemLst: [],
      tagUpName: "",
      tagDownName: "",
      tagDownList: [],
      numIndex: 0,
      tabNum:1
    };
  },
  mounted() {
    this.getIndexHotel();
  },
  methods: {
    tab(num){
      this.tabNum = num
    },
    async getIndexHotel() {
      const result = await this.$API.index.getIndexHotel();
      this.indexHotel = result.data[0];
      this.adLst = result.data[0].adLst[0];
      this.tagupItemLst = result.data[0].tagUp.itemLst;
      this.tagUpName = result.data[0].tagUp.nme;
      this.tagDownName = result.data[0].tagDown.nme;
      this.tagDownList = result.data[0].tagDown.itemLst;
    },
    changeIndex(index){
      this.numIndex = index
    }
  },
  computed: {
    tabs() {
      return this.indexHotel.tabs;
    },
    prdLst() {
      return this.indexHotel.prdLst;
    },
    tagup() {
      return this.indexHotel.tagUp;
    },
    tagDown() {
      return this.indexHotel.tagDown;
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
    justify-content: space-between;
    padding-bottom: 3px;
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
  // 主体内容
  .hotList_sub {
    padding: 15px 19px 0;
    width: 100%;
    border: 1px solid #ddd;

    .sub_img {
      display: flex;
      // justify-content: space-between;
      .sub_left {
        height: 360px;
        width: 227px;
        border-right: 1px dashed #ddd;
        box-sizing: border-box;
        overflow: hidden;
        .keyword-long {
          dt {
            font-weight: 700;
          }
          a {
            color: #333;
            font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
            &:hover {
              color: #3983e5;
            }
          }
        }
      }
      .sub_right {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        .right_top {
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
                font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
                &:hover {
                  background-color: #3983e5;
                  color: #fff;
                  border-radius: 5px;
                }
              }
              .nav_action {
                background-color: #3983e5;
                color: #fff;
                border-radius: 5px;
              }
            }
          }
        }
        .right_bottom {
          display: flex;
          justify-content: space-between;
          .sub_body {
            width: 680px;
            height: 360px;
            margin: 0 10px 10px 10px;
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
            width: 200px;
            height: 340px;
            // background-color: yellowgreen;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
