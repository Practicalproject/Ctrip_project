<template>
  <div class="w">
    <!-- 搜索区域start -->
    <div class="searchBox">
      <!-- 搜索标题 -->
      <ul class="searchTitle">
        <li class="active">国际/国内机票</li>
        <li>特价机票</li>
        <li>航班动态</li>
        <li>在线选座</li>
        <li>退票改签</li>
        <li>更多服务</li>
      </ul>

      <!-- 公告区域 -->
      <div class="announcement">
        <span class="iconfont icon-warn"></span>
        <div class="title">重要公告：</div>
        <div class="content">
          由于新冠疫情影响，各国及地区入境政策变化频繁，客服电话呼入激增，为更快解决您的问题，建议优先使用自助方式查询相关入境政策，点此详情查看。
        </div>
        <div class="detail">详情</div>
      </div>

      <!-- 搜索表单区域 -->
      <div class="search-form">
        <!-- 搜索上部 -->
        <div class="search-form-top">
          <ul class="form-select-radio">
            <li :class="{active:(number === index)}" @click="change(index)">
              <span class="radio-label">
                <i class="iconfont icon-RadioButton"></i>
                <i class="iconfont icon-RadioButton-1"></i>
                单程
              </span>
            </li>
            <li>
              <span class="radio-label">
                <i class="iconfont icon-RadioButton"></i>
                <i class="iconfont icon-RadioButton-1"></i>
                往返
              </span>
            </li>
            <li>
              <span class="radio-label">
                <i class="iconfont icon-RadioButton"></i>
                <i class="iconfont icon-RadioButton-1"></i>
                多程（含缺口程）
              </span>
            </li>
            <li class="flightWay">
              <i class="iconfont icon-question"></i>
              <div class="question-container">
                <div class="question-list">
                  <div class="tips_des">国内机票多程适用于以下场景：</div>
                  <div class="tips_item">
                    <div class="tips_title">
                      <span class="tips"></span>
                      前往多个目的地
                    </div>

                    <div class="tips_group">
                      <div class="tips_group_item">
                        去程：上海&nbsp;-&nbsp;
                        <span class="item">北京</span>
                      </div>
                      <div class="tips_group_item">
                        返程：<span class="item">天津</span>&nbsp;-&nbsp;上海
                      </div>
                    </div>
                  </div>
                  <div class="tips_item">
                    <div class="tips_title">
                      <span class="tips"></span>
                      出发地和返回地不同
                    </div>
                    <div class="tips_group">
                      <div class="tips_group_item">
                        去程：<span class="item">上海</span>&nbsp;-&nbsp;北京
                      </div>
                      <div class="tips_group_item">
                        返程：北京&nbsp;-&nbsp;<span class="item">杭州</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="flt-subclass">
            <div class="form-select-v3">
              <span>不限舱等</span>
              <i class="iconfont icon-arrow-down-bold"></i>
              <i class="iconfont icon-arrow-up-bold"></i>
              <i></i>
            </div>
            <div class="class-grade-select">
              <ul>
                <li class="active">
                  <div>
                    <span class="iconfont icon-select"></span>
                  </div>
                  <div>不限舱等</div>
                </li>
                <li>
                  <div></div>
                  <div>经济舱</div>
                </li>
                <li>
                  <div></div>
                  <div>公务/头等舱</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 搜索路线 -->
        <div class="search-form-line">
          <!-- 目的地 -->
          <div class="form-item-wrap">
            <div class="form-item">
              <div class="item-left">
                <label>
                  <div class="origin">出发地</div>
                  <div class="city">
                    <input
                      type="text"
                      placeholder="可输入城市或机场"
                      value="北京（BJS）"
                    />
                  </div>
                  <!-- 隐藏的城市下拉列表 -->
                  <div city-select-list></div>
                </label>
              </div>
              <div class="item-middle">
                <i class="iconfont icon-exchange"></i>
              </div>
              <div class="line"></div>

              <div class="item-right">
                <label>
                  <div class="origin">目的地</div>
                  <div class="city">
                    <input
                      type="text"
                      placeholder="可输入城市或机场"
                      value="北京（BJS）"
                    />
                  </div>
                  <!-- 隐藏的城市下拉列表 -->
                  <div city-select-list></div>
                </label>
              </div>
            </div>
          </div>

          <!-- 出发日期 -->
          <div class="form-item-wrap">
            <!-- 出发日期 -->
            <div class="departure-date">
              <div class="origin">出发日期</div>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
          </div>

          <!-- 乘客 -->
          <div class="form-item-wrap">
            <div class="customer">
              <label>
                <div class="customerType">乘客类型</div>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value2"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- 搜索按钮 -->
      <button class="search-btn" type="submit">
        <i class="iconfont icon-fangdajing"></i>搜索
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      value1: "2020-11-04",
      number: 0,
    };
  },
  methods: {
    change(index) {
      this.number = index;
    },
  }
};
</script>

<style lang="less" scoped>
// 版心
.w {
  width: 1180px;
  margin: 0 auto;
  // background: pink;
}

// 搜索区域start
.searchBox {
  margin-top: -48px;
  position: relative;
  z-index: 100;
  width: 1180px;
  height: 284px;
  border-radius: 8px 8px 8px 8px;
  margin-bottom: 60px;
  background: #fff;
  .searchTitle {
    display: flex;
    border-radius: 8px 8px 0 0;
    background-color: rgba(0, 0, 0, 0.75);
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    font-weight: 600;
    color: #ddd;
    li {
      flex: 1;
      height: 48px;
      line-height: 48px;
      text-align: center;
      &.active {
        color: #333;
        background: #fff;
        border-radius: 6px 6px 0 0;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.95);
        border-radius: 6px 6px 0 0;
        color: #fff;
      }
    }
  }
  .announcement {
    margin: 20px auto 14px;
    width: 1132px;
    height: 44px;
    line-height: 44px;
    background: #fff8f2;
    color: #f70;
    font-size: 14px;
    text-align: left;
    border-radius: 4px;
    .iconfont {
      float: left;
      margin: 0 4px 0 16px;
    }
    .title {
      float: left;
      width: 70px;
      font-weight: 600;
    }
    .content {
      overflow: hidden;
      float: left;
      width: 974px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .detail {
      float: left;
      margin-left: 8px;
      color: #0086f6;
    }
  }

  // 搜索表单
  .search-form {
    // 搜索上部
    .search-form-top {
      width: 1132px;
      height: 33px;
      line-height: 33px;
      // background: chartreuse;
      margin: 0 auto;
      margin-bottom: 13px;
      .form-select-radio {
        float: left;
        li {
          float: left;
          margin-right: 32px;
          &:nth-child(3) {
            margin-right: 13px;
          }
          i {
            font-size: 16px;
          }
          .icon-RadioButton {
            // display: none;
          }
          &.active {
            color: #06c;
          }
        }
        .flightWay {
          position: relative;
          font-size: 16px;
          color: #89a0c2;
          cursor: help;
          .question-container {
            white-space: nowrap;
            width: 0px;
            position: absolute;
            top: 25px;
            left: 0;
            // background: red;
            z-index: 21;
            // display: none;
            height: 0px;
            transition: all 0.5s;
            overflow: hidden;
            .question-list {
              padding: 16px;
              width: 252px;
              background: #ffffff;
              border: 1px solid #dddddd;
              -webkit-box-shadow: 0 7px 22px -7px rgba(0, 0, 0, 0.34);
              box-shadow: 0 7px 22px -7px rgba(0, 0, 0, 0.34);
              border-radius: 4px;
              margin-top: 5px;
              .tips_des {
                font-size: 12px;
                color: #333333;
                line-height: 18px;
              }
              .tips_item {
                margin-top: 12px;
                .tips_title {
                  margin-bottom: 8px;
                  font-weight: 600;
                  font-size: 14px;
                  color: #333;
                  line-height: 32px;
                  .tips {
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    // background: #0086f6;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 3px;
                  }
                }
              }
              .tips_group {
                padding: 8px;
                background: #f8fafd;
                border-radius: 4px;
                .tips_group_item {
                  font-size: 12px;
                  color: #333333;
                  line-height: 17px;
                  .item {
                    color: #ff7528;
                  }
                }
              }
            }
          }
          &:hover .question-container {
            display: block;
            width: 252px;
            height: 320px;
          }
        }
      }
      .flt-subclass {
        float: right;
        position: relative;
        margin-left: 8px;
        padding: 0 16px;
        .form-select-v3 {
          position: relative;
          height: 32px;
          line-height: 32px;
          color: #333;
          font-size: 14px;
          cursor: pointer;
          .icon-arrow-up-bold {
            display: none;
          }
        }
        .class-grade-select {
          display: none;
          position: absolute;
          top: 33px;
          right: 0px;
          width: 158px;
          height: 122px;
          li {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: #ffffff;
            border-radius: 5px 5px 0 0;
            font-size: 14px;
            color: #333333;
            letter-spacing: 0;
            div {
              float: left;
              &:first-child {
                text-align: center;
                width: 34px;
                height: 100%;
              }
            }
            &.active {
              color: #0086f6;
            }
          }
        }
      }
    }

    // 搜索路线
    .search-form-line {
      width: 1132px;
      height: 64px;
      // background: orange;
      margin: 0 auto;
      margin-bottom: 16px;
      // 目的地
      .form-item-wrap {
        float: left;
        margin-right: 15px;
        position: relative;
        height: 64px;
        &:nth-child(1) {
          width: 508px;
          height: 64px;
          // background: palegreen;
          border: 1px solid #ddd;
          box-sizing: border-box;
        }
        &:nth-child(2) {
          width: 384px;
          height: 64px;
          // background: palegreen;
          border: 1px solid #ddd;
          box-sizing: border-box;
        }
        &:nth-child(3) {
          width: 208px;
          height: 64px;
          // background: palegreen;
          margin-right: 0;
          border: 1px solid #ddd;
          box-sizing: border-box;
        }
        .form-item {
          border: 1px #eee solid;
          -webkit-box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.06);
          box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.06);
          border-radius: 6px;
          height: 62px;
          position: relative;
          box-sizing: border-box;
          .item-left {
            position: absolute;
            left: 0;
            top: 0;
            width: 237px;
            height: 62px;
            box-sizing: border-box;
            .origin {
              font-size: 12px;
              color: #999;
              position: absolute;
              top: 10px;
              left: 16px;
            }
            .city {
              input {
                // display: block;
                position: absolute;
                top: 0px;
                left: 0px;
                padding: 29px 0 14px 16px;
                width: 237px;
                height: 100%;
                line-height: 20px;
                background-color: transparent;
                font-size: 16px;
                // text-overflow: ellipsis;
                border: 0;
                // outline: none;
              }
            }
          }
          .item-middle {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            width: 30px;
            height: 30px;
            text-align: center;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 50%;
            box-sizing: content-box;
            cursor: pointer;
            .icon-exchange {
              // font-size: 30px;
              line-height: 32px;
              color: #333;
            }
            &:hover {
              background: #ddd;
            }
          }
          .line {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 9;
            width: 1px;
            height: 64px;
            background-color: #ddd;
          }
          .item-right {
            position: absolute;
            right: 0;
            top: 0;
            width: 237px;
            height: 62px;
            box-sizing: border-box;
            .origin {
              font-size: 12px;
              color: #999;
              position: absolute;
              top: 10px;
              left: 16px;
            }
            .city {
              input {
                // display: block;
                position: absolute;
                top: 0px;
                left: 0px;
                padding: 29px 0 14px 16px;
                width: 237px;
                height: 100%;
                line-height: 20px;
                background-color: transparent;
                font-size: 16px;
                // text-overflow: ellipsis;
                border: 0;
                // outline: none;
              }
            }
          }
        }

        // 出发日期
        .departure-date {
          line-height: 64px;
          display: flex;
          padding: 0 20px;
          .origin {
            margin-right: 20px;
            // background: blue;
          }
          /deep/.el-input__inner {
            border: none;
            // background: pink;
            width: 278px;
            height: 58px;
          }
        }

        // 乘客类型
        .customer {
          position: relative;
          .customerType {
            font-size: 12px;
            color: #999;
            position: absolute;
            top: 10px;
            left: 16px;
          }
          /deep/.el-select {
            position: absolute;
            top: 23px;
            left: 0;
            /deep/.el-input__inner {
              border: none;
              height: 37px;
            }
          }
        }
      }
    }
  }

  // 搜索按钮
  .search-btn {
    position: absolute;
    left: 50%;

    transform: translateX(-50%);
    border-radius: 28px;
    background-color: #ff7700;
    background-image: -webkit-gradient(
      linear,
      right top,
      left top,
      from(#f70),
      to(#ffa50a)
    );
    background-image: -o-linear-gradient(right, #f70 0%, #ffa50a 100%);
    background-image: linear-gradient(-90deg, #f70 0%, #ffa50a 100%);
    -webkit-box-shadow: 0 4px 16px 0 rgba(255, 102, 0, 0.32);
    box-shadow: 0 4px 16px 0 rgba(255, 102, 0, 0.32);
    border-radius: 28px;
    box-shadow: 0 4px 16px 0 rgba(255, 102, 0, 0.32);
    width: 176px;
    height: 56px;
    border: none;
    display: block;
    outline: none;
    font-size: 18px;
    color: #ffffff;
    z-index: 2;
  }
}
</style>
