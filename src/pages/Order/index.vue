<template>
  <div class="orderContainer">
    <ul class="leftContainer">
      <li>
        <a href="##"><span>我的携程首页</span></a>
      </li>
      <li class="active">
        <a href="##" class=""><span>订单</span></a>
      </li>
      <li>
        <a href="##"><span>我的消息</span></a>
      </li>
      <li>
        <a href="##"><span>钱包</span></a>
      </li>
      <li>
        <a href="##"><span>优惠券</span></a>
      </li>
      <li>
        <a href="##"><span>积分</span></a>
      </li>
      <li>
        <a href="##"><span>我的收藏</span></a>
      </li>
      <li>
        <a href="##"><span>我的发票</span></a>
      </li>
      <li>
        <a href="##"><span>常用信息</span></a>
      </li>
      <li>
        <a href="##"><span>个人中心</span></a>
      </li>
    </ul>
    <div class="rightContainer">
      <!-- 头部 -->
      <div class="header">
        <a href="##" :class="{current:number === 1}" @click="change(1)">全部订单</a>
        <a href="##" :class="{current:number === 2}" @click="change(2)">未出行</a>
        <a href="##" :class="{current:number === 3}" @click="change(3)">待支付</a>
        <a href="##" :class="{current:number === 4}" @click="change(4)">待点评</a>
      </div>

      <!-- 主体 -->
      <ul class="orderBody">
        <li class="order-info" v-for="(item, index) in todos" :key="item.id">
          <!-- 标题 -->
          <h3>
            <label class="base_label">
              <input
                type="checkbox"
                :checked="item.isOver"
                @click="updateO(index)"
              />
            </label>
            <span class="order-number"
              >订单号：<a href="##">{{ item.order }}</a>
            </span>
            <span>预订日期：{{ item.orderDate }} </span>
            <span class="order-delete" @click="deleteO(index)"
              ><a href="##">删除订单</a></span
            >
          </h3>
          <!-- 内容区 -->
          <div class="order-content clearfix">
            <div class="order-detail">
              <ul>
                <li class="order-item-title">{{ item.city }}</li>
                <li class="order-item-txt">
                  {{ item.departureDate }}
                </li>
                <li class="order-item-txt">出行人：{{ item.name }}</li>
              </ul>
            </div>
            <div class="order-price">
              <div class="order-price-detail">￥{{ item.price }}</div>
              <div class="order-price-status">{{ item.state }}</div>
            </div>
          </div>
        </li>
      </ul>

      <!-- 底部 -->
      <div class="footer">
        <label class="base">
          <input type="checkbox" v-model="isCheckAll" />
          <span class="allChoose">全选</span>
        </label>
        <a href="javascript:;" class="allDelete" @click="deleteAll()">删除选中的商品</a>
        <a href="javascript:;" class="sum-btn">结算</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      todos: [
        {
          id: 1,
          order: 18502410702,
          orderDate: "2020-11-01",
          city: "北京-沈阳北",
          departureDate: "出发日期：2020-11-30 22:33 至 12-01 07:25 K53",
          name: "yyy",
          price: 182,
          state: "未出行",
          isOver: false,
        },
        {
          id: 2,
          order: 17702411234,
          orderDate: "2020-11-09",
          city: "北京-慕尼黑",
          departureDate: "出发日期：2020-11-20 07:20 至 11-20 18:25 CA167",
          name: "www",
          price: 8900,
          state: "待支付",
          isOver: true,
        },
        {
          id: 3,
          order: 13302410566,
          orderDate: "2020-09-01",
          city: "深圳-广州",
          departureDate: "出发日期：2020-09-30 12:33 至 09-30 13:25 T5",
          name: "aaa",
          price: 200,
          state: "待点评",
          isOver: false,
        },
      ],
      number:1
    };
  },
  methods: {
    // 修改单个todo的完成状态
    updateO(index) {
      this.todos[index].isOver = !this.todos[index].isOver;
    },
    // 删除单个
    deleteO(index) {
      this.todos.splice(index, 1);
    },
    // 全选,修改所有的完成状态
    updateAll(val) {
      // 遍历所有，拿一个修改一个
      this.todos.forEach(item => item.isOver = val)
    },
    // 删除全选
    deleteAll(){
      // 要把所有打钩的删除
      // 从原来的数组中过滤出未完成的所有，把这些所有组成一个数组，赋值给新的数组
      // 拿出所有为false的项，之后把数组重新赋值，重新显示
      this.todos=this.todos.filter(item =>!item.isOver)
    },
    change(num){
      this.number = num
    }
  },
  computed: {
    overNum() {
      return this.todos.filter((item) => item.isOver).length;
      // return this.todos.filter(function(item){
      //   return item.isOver
      // }).length
    },
    allNum() {
      return this.todos.length;
    },

    // 全选
    isCheckAll: {
      // 获取是否打钩，需要计算
      get() {
        return this.overNum === this.allNum && this.allNum > 0;
      },
      // 点击的时候，修改打钩的状态
      set(val) {
        // val是自动获取到的最新值
        //点击了全选，相当于在修改打勾的状态，修改后需要干点事
        //把我们的数据所有的修改状态
        // console.log(val);
        this.updateAll(val);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.clearfix::after {
  content: "";
  // 转换成块级元素
  display: block;
  // 高度为0
  height: 0;
  // 清除浮动的影响
  clear: both;
  // 元素隐藏
  visibility: hidden;
}
.orderContainer {
  width: 1180px;
  // height: 1000px;
  margin: 0 auto;
  // background: pink;
  display: flex;
  // 左侧
  .leftContainer {
    // background: yellowgreen;
    border: 1px solid #2577e3;
    width: 150px;
    box-sizing: border-box;
    margin-right: 20px;
    li {
      a {
        display: block;
        padding-left: 4px;
        font-size: 14px;
        color: #333;
        width: 148px;
        border-left: 2px solid transparent;
        padding: 13px 10px 13px 12px;
        background-color: #fcfcfc;
        font-family: simsun;
        &:hover {
          color: #06c;
          background: transparent;
          border-left: 2px solid transparent;
        }
      }
      &.active a {
        border-left: 2px solid #06c;
        color: #06c;
        background: transparent;
      }
    }
  }
  // 右侧
  .rightContainer {
    // background: skyblue;
    width: 1010px;

    // 头部
    .header {
      height: 39px;
      // background-color: pink;
      margin-bottom: 20px;
      a {
        float: left;
        margin-right: 5px;
        width: 138px;
        height: 37px;
        line-height: 37px;
        border: 2px solid #ccc;
        border-bottom: 0 none;
        font-family: Microsoft Yahei;
        font-size: 18px;
        color: #666;
        text-align: center;
        &.current {
          position: relative;
          top: 2px;
          margin-top: -2px;
          height: 39px;
          border-color: #2577e3;
          background-color: #fff;
          color: #06c;
          cursor: default;
        }
      }
    }

    // 主体
    .orderBody {
      .order-info {
        border: 1px solid #ddd;
        margin-bottom: 10px;
        // 标题
        h3 {
          height: 34px;
          line-height: 34px;
          font-size: 12px;
          padding-left: 10px;
          background-color: #f6f6f6;
          input {
            vertical-align: middle;
            margin-right: 3px;
          }
          span {
            margin-right: 20px;
            a {
              color: #06c;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        // 内容区
        .order-content {
          margin: 10px 0 10px 28px;
          .order-detail {
            max-width: 720px;
            float: left;
            ul {
              .order-item-title {
                font-size: 16px;
                line-height: 20px;
                color: #111;
                font-weight: 700;
                margin-bottom: 6px;
              }
              .order-item-txt {
                font-size: 12px;
                line-height: 16px;
                color: #333;
                margin-bottom: 6px;
              }
            }
          }
          .order-price {
            float: right;
            margin-right: 12px;
            .order-price-detail {
              display: inline-block;
              vertical-align: top;
              border-right: 1px solid #d8d8d8;
              padding-right: 7px;
              margin-right: 7px;
              color: #e56700;
              font-weight: 700;
            }
            .order-price-status {
              display: inline-block;
              vertical-align: top;
              color: #666;
            }
          }
        }
      }
    }

    // 底部
    .footer {
      .base {
        margin-left: 10px;
        font-size: 12px;
        color: #333;
        input {
          vertical-align: middle;
        }
        .allChoose {
          margin-left: 3px;
        }
      }
      .allDelete {
        margin-left: 15px;
        color: #333;
      }
      .sum-btn {
        display: block;
        float: right;
        width: 80px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #06c;
        color: #fff;
        font-size: 18px;
      }
    }
  }
}
</style>
