<template>
  <div class="w">
    <!-- 搜索区域start -->
    <div class="searchBox">
      <ul class="searchTitle">
        <li class="active">国际/国内机票</li>
        <li>特价机票</li>
        <li>航班动态</li>
        <li>在线选座</li>
        <li>退票改签</li>
        <li>更多服务</li>
      </ul>
      <div class="announcement">
        <span class="iconfont icon-warn"></span>
        <div class="title">重要公告：</div>
        <div class="content">
          由于新冠疫情影响，各国及地区入境政策变化频繁，客服电话呼入激增，为更快解决您的问题，建议优先使用自助方式查询相关入境政策，点此详情查看。
        </div>
        <div class="detail">详情</div>
      </div>
      <div class="search-form">
        <div class="search-form-top">
          <ul class="form-select-radio">
            <li>
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
          <div class="hide-animate">
            
          </div>
        </div>
        <div class="search-form-input"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="less" scoped>
// 版心
.w {
  width: 1180px;
  height: 2000px;
  margin: 0 auto;
  background: pink;
}

// 搜索区域start
.searchBox {
  width: 1180px;
  height: 284px;
  border-radius: 8px 8px 8px 8px;
  margin-bottom: 60px;
  background: blue;
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
  .search-form {
    .search-form-top {
      width: 1132px;
      height: 33px;
      line-height: 33px;
      background: chartreuse;
      margin: 0 auto;
    }
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
          display: none;
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
                  background: #0086f6;
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
      }
      &:hover .question-container {
        display: block;
        width: 252px;
        height: 320px;
      }
    }
  }
}
</style>
