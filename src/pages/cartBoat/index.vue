<template>
  <div>
    <div class="header">
      <div class="left">
        <div class="titl">
          <a href="javascript:;" class="cart">汽车票查询</a>
          <a href="javascript:;" class="boat">船票查询</a>
        </div>
        <div class="userValue">
          <ul>
            <li>
              <span>出发城市</span>
              <input type="text" placeholder="中文/拼音/首字母" />
            </li>
            <li>
              <span>到达城市</span>
              <input type="text" placeholder="中文/拼音/首字母" />
            </li>
            <li>
              <span>出发日期</span>
              <input type="text" value="2020-11-2" />
            </li>
          </ul>
          <div class="search">
            <button>搜索</button>
          </div>
        </div>
        <dl>
          <dt>搜索历史</dt>
          <dd>测试-测试</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cartBoat",
};
</script>
<style lang='less' scoped>
.header {
  width: 1180px;
  height: 539px;
  margin: 100px auto;
  //   background: pink;
  .left {
    background: skyblue;
    width: 380px;
    .titl {
      display: flex;
      a {
        display: block;
        width: 189px;
        height: 43px;
        text-align: center;
        line-height: 43px;
        color: #06c;
        box-sizing: border-box;
      }
      a:hover {
        color: #fff;
        // border: 1px solid #92bbf0;
        background: #92bbf0;
      }
      .cart:hover {
        border-radius: 5px 0 0 0;
      }
      .boat:hover {
        border-radius: 0 5px 0 0;
      }
    }
    .userValue {
      width: 100%;
      ul {
        padding-top: 40px;
        width: 100%;
        li {
          padding: 6px 0 7px;
          span {
            color: #555;
            width: 80px;
            //   height: 29px;
            padding: 5px 15px 5px 5px;
            font: normal 14px "Microsoft Yahei";
            text-align: right;
            display: inline-block;
          }
          input {
            width: 224px;
            height: 22px;
            padding: 3px;
            border: solid 1px #ccc;
            box-shadow: 1px 1px 3px #dddddd inset;
            font: normal 12px/22px Tahoma, Simsun, sans-serif;
            vertical-align: middle;
          }
          input::-webkit-input-placeholder {
            /* placeholder颜色  */
            color: #ccc;
          }
        }
      }
      .search {
        padding: 4px 0;
        margin-left: 103px;
        button {
          background: #ffb000;
          width: 232px;
          height: 33px;
          border: 1px solid #e77c00;
          border-radius: 3px;
          box-shadow: 0 1px 0 rgba(95, 50, 0, 0.7);
          vertical-align: middle;
          font: bold 16px/32px "Microsoft Yahei";
          color: #fff;
          text-align: center;
          //   overflow: hidden;
          //   outline: none;
        }
      }
    }
  }
}
</style>