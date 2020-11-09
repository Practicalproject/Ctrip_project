<template>
  <div>
    <div class="wrap">
      <!-- 轮播图 -->
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://dimg04.c-ctrip.com/images/zg0q1f000001gjjivDABE.jpg"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://dimg04.c-ctrip.com/images/0zg1t12000833o02a78D4.jpg"
                alt=""
              />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 轮播下方小图 -->
      <div class="smallIcon">
        <div class="smallWrap">
          <a href="https://car.ctrip.com/jiazhao/index?channelId=14256">
            <img src="./images/download.jpg" alt="" />
          </a>
        </div>
      </div>
      <!-- 租车搜索框 -->
      <div class="searchOut">
        <!-- 上侧 -->
        <div class="searchBox">
          <ul class="searchTag">
            <li :class="{ active: tabNum === 0 }" @click="changImndex(0)">
              <a>境外租车</a>
            </li>
            <li :class="{ active: tabNum === 1 }" @click="changImndex(1)">
              <a>国内租车</a>
            </li>
            <li :class="{ active: tabNum === 2 }" @click="changImndex(2)">
              <a>接送机</a>
            </li>
            <li :class="{ active: tabNum === 3 }" @click="changImndex(3)">
              <a>接送火车</a>
            </li>
            <li :class="{ active: tabNum === 4 }" @click="changImndex(4)">
              <a>按天包车</a>
            </li>
          </ul>
        </div>
        <!-- 下侧 -->
        <div class="searchs">
          <!-- 境外租车 -->
          <div class="searchItem">
            <form>
              <ul>
                <li>
                  <span>取车地点</span>
                  <!--  class="s-input s-jj-input-w3 w1 points-ltlb focus in ui-placeholder"              data-picker="osdselector" -->
                  <input data-picker type="text" />
                </li>
                <li>
                  <span>还车地点</span>
                  <input type="text" data-picker />
                </li>
                <li>
                  <span>取车时间</span>
                  <input
                    style="width: 268px; margin-right: 2px"
                    type="text"
                    data-picker
                  />
                  <input style="width: 154px" type="text" data-picker />
                </li>
                <li>
                  <span>还车时间</span>
                  <input
                    style="width: 268px; margin-right: 2px"
                    type="text"
                    data-picker
                  />
                  <input style="width: 154px" type="text" data-picker />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <!-- 地图 -->
      <div class="platWrap">
        <div class="platTit">
          <span class="wire"></span>
          <h2>国内 · <span>热门租车城市</span></h2>
        </div>
        <div class="BottomConent">
          <!-- 公鸡 -->
          <div class="plat">
            <!-- 定位标志 -->
            <div>
              <a
                href="https://car.ctrip.com/city/wulumuqi39?channelid=16605"
                target="_blank"
                class="ci_icon more wlmq"
                title="乌鲁木齐租车"
                >乌鲁<br />木齐</a
              >
              <a
                href="https://car.ctrip.com/city/chengdu28?channelid=16605"
                target="_blank"
                class="ci_icon cd"
                title="成都租车"
                >成都</a
              >
              <a
                href="https://car.ctrip.com/city/kunming34?channelid=16605"
                target="_blank"
                class="ci_icon km"
                title="昆明租车"
                >昆明</a
              >
              <a
                href="https://car.ctrip.com/city/xian10?channelid=16605"
                target="_blank"
                class="ci_icon xa"
                title="西安租车"
                >西安</a
              >
              <a
                href="https://car.ctrip.com/city/wuhan477?channelid=16605"
                target="_blank"
                class="ci_icon wh"
                title="武汉租车"
                >武汉</a
              >
              <a
                href="https://car.ctrip.com/city/changsha206?channelid=16605"
                target="_blank"
                class="ci_icon cs"
                title="长沙租车"
                >长沙</a
              >
              <a
                href="https://car.ctrip.com/city/shenzhen30?channelid=16605"
                target="_blank"
                class="ci_icon sz"
                title="深圳租车"
                >深圳</a
              >
              <a
                href="https://car.ctrip.com/city/sanya43?channelid=16605"
                target="_blank"
                class="ci_icon sy"
                title="三亚租车"
                >三亚</a
              >
              <a
                href="https://car.ctrip.com/city/beijing1?channelid=16605"
                target="_blank"
                class="ci_icon bj"
                title="北京租车"
                >北京</a
              >
              <a
                href="https://car.ctrip.com/city/dalian6?channelid=16605"
                target="_blank"
                class="ci_icon dl"
                title="大连租车"
                >大连</a
              >
              <a
                href="https://car.ctrip.com/city/qingdao7?channelid=16605"
                target="_blank"
                class="ci_icon qd"
                title="青岛租车"
                >青岛</a
              >
              <a
                href="https://car.ctrip.com/city/nanjing12?channelid=16605"
                target="_blank"
                class="ci_icon nj"
                title="南京租车"
                >南京</a
              >
              <a
                href="https://car.ctrip.com/city/shanghai2?channelid=16605"
                target="_blank"
                class="ci_icon sh"
                title="上海租车"
                >上海</a
              >
              <a
                href="https://car.ctrip.com/city/hangzhou17?channelid=16605"
                target="_blank"
                class="ci_icon hz"
                title="杭州租车"
                >杭州</a
              >
              <a
                href="https://car.ctrip.com/city/haerbin5?channelid=16605"
                target="_blank"
                class="ci_icon heb"
                title="哈尔滨租车"
                >哈尔滨</a
              >
              <a
                href="https://car.ctrip.com/hwzijia/osdsearch/index?pcity=617&amp;channelid=16605"
                target="_blank"
                class="ci_icon tb"
                title="台北租车"
                >台北</a
              >
              <a
                href="https://car.ctrip.com/hwzijia/osdsearch/index?pcity=58&amp;channelid=16605"
                target="_blank"
                class="ci_icon xg"
                title="香港租车"
                >香港</a
              >
            </div>
          </div>
          <!-- 地名 -->
          <div class="place">
            <a
              href="https://car.ctrip.com/city/haikou42?channelid=16605"
              target="_blank"
              class="ml"
              title="海口租车"
              ><em class="ci_icon"></em><span>海口</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/tianjin3?channelid=16605"
              target="_blank"
              title="天津租车"
              ><em class="ci_icon"></em><span>天津</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/suzhou14?channelid=16605"
              target="_blank"
              title="苏州租车"
              ><em class="ci_icon"></em><span>苏州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/ningbo375?channelid=16605"
              target="_blank"
              title="宁波租车"
              ><em class="ci_icon"></em><span>宁波</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/zhuhai31?channelid=16605"
              target="_blank"
              title="珠海租车"
              ><em class="ci_icon"></em><span>珠海</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/guangzhou32?channelid=16605"
              target="_blank"
              title="广州租车"
              ><em class="ci_icon"></em><span>广州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/fuzhou258?channelid=16605"
              target="_blank"
              title="福州租车"
              ><em class="ci_icon"></em><span>福州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/dali36?channelid=16605"
              target="_blank"
              title="大理租车"
              ><em class="ci_icon"></em><span>大理</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/shenyang451?channelid=16605"
              target="_blank"
              title="沈阳租车"
              ><em class="ci_icon"></em><span>沈阳</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/xishuangbanna35?channelid=16605"
              target="_blank"
              title="西双版纳租车"
              style="width: 108px"
              ><em class="ci_icon"></em><span>西双版纳</span
              ><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/lijiang37?channelid=16605"
              target="_blank"
              class="ml"
              title="丽江租车"
              ><em class="ci_icon"></em><span>丽江</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/taiyuan105?channelid=16605"
              target="_blank"
              title="太原租车"
              ><em class="ci_icon"></em><span>太原</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/changchun158?channelid=16605"
              target="_blank"
              title="长春租车"
              ><em class="ci_icon"></em><span>长春</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/shijiazhuang428?channelid=16605"
              target="_blank"
              title="石家庄租车"
              style="width: 94px"
              ><em class="ci_icon"></em><span>石家庄</span
              ><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/hefei278?channelid=16605"
              target="_blank"
              title="合肥租车"
              ><em class="ci_icon"></em><span>合肥</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/guiyang38?channelid=16605"
              target="_blank"
              title="贵阳租车"
              ><em class="ci_icon"></em><span>贵阳</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/wuxi13?channelid=16605"
              target="_blank"
              title="无锡租车"
              ><em class="ci_icon"></em><span>无锡</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/nanning380?channelid=16605"
              target="_blank"
              title="南宁租车"
              ><em class="ci_icon"></em><span>南宁</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/jinan144?channelid=16605"
              target="_blank"
              title="济南租车"
              ><em class="ci_icon"></em><span>济南</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/xining124?channelid=16605"
              target="_blank"
              title="西宁租车"
              ><em class="ci_icon"></em><span>西宁</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/luoyang350?channelid=16605"
              target="_blank"
              class="ml"
              title="洛阳租车"
              ><em class="ci_icon"></em><span>洛阳</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/jiuzhaigou91?channelid=16605"
              target="_blank"
              title="九寨沟租车"
              style="width: 94px"
              ><em class="ci_icon"></em><span>九寨沟</span
              ><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/wenzhou491?channelid=16605"
              target="_blank"
              title="温州租车"
              ><em class="ci_icon"></em><span>温州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/dongguan223?channelid=16605"
              target="_blank"
              title="东莞租车"
              ><em class="ci_icon"></em><span>东莞</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/guilin33?channelid=16605"
              target="_blank"
              title="桂林租车"
              ><em class="ci_icon"></em><span>桂林</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/xiamen25?channelid=16605"
              target="_blank"
              title="厦门租车"
              ><em class="ci_icon"></em><span>厦门</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/lanzhou100?channelid=16605"
              target="_blank"
              title="兰州租车"
              ><em class="ci_icon"></em><span>兰州</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/nanchang376?channelid=16605"
              target="_blank"
              title="南昌租车"
              ><em class="ci_icon"></em><span>南昌</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city/chongqing4?channelid=16605"
              target="_blank"
              title="重庆租车"
              ><em class="ci_icon"></em><span>重庆</span><i class="ci_icon"></i
            ></a>

            <a
              href="https://car.ctrip.com/city?channelid=16605"
              target="_blank"
              title="更多租车"
              style="width: 90.13px; border-color: #06c; color: #06c"
              ><em
                class="ci_icon"
                style="background-position: -36px -261px !important"
              ></em
              ><span style="border-color: #06c; color: #06c">更多...</span
              ><i
                class="ci_icon"
                style="background-position: -54px -261px !important"
              ></i
            ></a>
          </div>
        </div>
      </div>

      <!-- 境外租车 -->
      <div class="hot_mod">
        <div class="area">
          <h2>
            <span class="wire"></span>
            <p>
              热门 ·
              <span>境外租车城市</span>
            </p>
          </h2>
          <div class="hot_useCart">
            <p>
              <a
                href="https://car.ctrip.com/city/losangeles347?channelid=16605"
                target="_blank"
                title="洛杉矶租车"
              >
                <img
                  src="//images3.c-ctrip.com/dj/201612/cityimg/losangeles_200_150.jpg"
                />
                <span>洛杉矶</span>
              </a>
              <a
                href="https://car.ctrip.com/city/newyork633?channelid=16605"
                target="_blank"
                title="纽约租车"
              >
                <img
                  src="//images3.c-ctrip.com/dj/201612/cityimg/newyork_200_150.jpg"
                />
                <span>纽约</span>
                <em></em>
              </a>
              <a
                href="https://car.ctrip.com/city/melbourne358?channelid=16605"
                target="_blank"
                title="墨尔本租车"
              >
                <img
                  src="//images3.c-ctrip.com/dj/201612/cityimg/melbourne_200_150.jpg"
                />
                <span>墨尔本</span>
                <em></em>
              </a>
              <a
                href="https://car.ctrip.com/city/phuket725?channelid=16605"
                target="_blank"
                title="普吉岛租车"
              >
                <img
                  src="//images3.c-ctrip.com/dj/201612/cityimg/phuket_200_150.jpg"
                />
                <span>普吉岛</span>
                <em></em>
              </a>
              <a
                href="https://car.ctrip.com/city/london338?channelid=16605"
                target="_blank"
                title="伦敦租车"
              >
                <img
                  src="//images3.c-ctrip.com/dj/201612/cityimg/london_200_150.jpg"
                />
                <span>伦敦</span>
                <em></em>
              </a>
              <a
                href="https://car.ctrip.com/city/paris192?channelid=16605"
                target="_blank"
                title="巴黎租车"
              >
                <img
                  src="//images3.c-ctrip.com/dj/201612/cityimg/paris_200_150.jpg"
                />
                <span>巴黎</span>
                <em></em>
              </a>
            </p>
            <div>
              <a
                href="https://car.ctrip.com/city/sanfrancisco313?channelid=16605"
                class="ml"
                target="_blank"
                title="旧金山租车"
                ><em class="ci_icon"></em><span>旧金山</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/auckland678?channelid=16605"
                target="_blank"
                title="奥克兰租车"
                ><em class="ci_icon"></em><span>奥克兰</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/lisbon1231?channelid=16605"
                target="_blank"
                title="里斯本租车"
                ><em class="ci_icon"></em><span>里斯本</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/frankfurt250?channelid=16605"
                target="_blank"
                title="法兰克福租车"
                ><em class="ci_icon"></em><span>法兰克福</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/vancouver476?channelid=16605"
                target="_blank"
                title="温哥华租车"
                ><em class="ci_icon"></em><span>温哥华</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/bangkok359?channelid=16605"
                target="_blank"
                title="曼谷租车"
                ><em class="ci_icon"></em><span>曼谷</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/orlando1187?channelid=16605"
                target="_blank"
                title="奥兰多租车"
                ><em class="ci_icon"></em><span>奥兰多</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/sydney501?channelid=16605"
                target="_blank"
                title="悉尼租车"
                ><em class="ci_icon"></em><span>悉尼</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/prague1288?channelid=16605"
                target="_blank"
                title="布拉格租车"
                ><em class="ci_icon"></em><span>布拉格</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/amsterdam176?channelid=16605"
                target="_blank"
                class="ml"
                title="阿姆斯特丹租车"
                ><em class="ci_icon"></em><span>阿姆斯特丹</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/munich363?channelid=16605"
                target="_blank"
                title="慕尼黑租车"
                ><em class="ci_icon"></em><span>慕尼黑</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/barcelona707?channelid=16605"
                target="_blank"
                title="巴塞罗那租车"
                ><em class="ci_icon"></em><span>巴塞罗那</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/boston703?channelid=16605"
                target="_blank"
                title="波士顿租车"
                ><em class="ci_icon"></em><span>波士顿</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/rome343?channelid=16605"
                target="_blank"
                title="罗马租车"
                ><em class="ci_icon"></em><span>罗马</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/seoul274?channelid=16605"
                target="_blank"
                title="首尔租车"
                ><em class="ci_icon"></em><span>首尔</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/lasvegas675?channelid=16605"
                target="_blank"
                title="拉斯维加斯租车"
                ><em class="ci_icon"></em><span>拉斯维加斯</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/athens710?channelid=16605"
                target="_blank"
                title="雅典租车"
                ><em class="ci_icon"></em><span>雅典</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/capetown683?channelid=16605"
                target="_blank"
                title="开普敦租车"
                ><em class="ci_icon"></em><span>开普敦</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/bordeaux776?channelid=16605"
                target="_blank"
                class="ml"
                title="波尔多租车"
                ><em class="ci_icon"></em><span>波尔多</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/vienna651?channelid=16605"
                target="_blank"
                title="维也纳租车"
                ><em class="ci_icon"></em><span>维也纳</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/copenhagen260?channelid=16605"
                target="_blank"
                title="哥本哈根租车"
                ><em class="ci_icon"></em><span>哥本哈根</span
                ><i class="ci_icon"></i
              ></a>
              <a
                href="https://car.ctrip.com/city/gothenburg804?channelid=16605"
                target="_blank"
                title="哥德堡租车"
                ><em class="ci_icon"></em><span>哥德堡</span
                ><i class="ci_icon"></i
              ></a>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <!-- 用车点评.问题,伙伴 -->
      <div class="sundry">
        <!-- 点评 -->
        <div class="remark">
          <span></span>
          <h2>用车点评</h2>
        </div>
      </div>

      <!-- 点评内容 -->
      <div class="remark_box">
        <div class="box_item">
          <!-- 左侧图片 -->
          <div class="item_left">
            <img src="./images/01.png" alt="" />
          </div>
          <!-- 右侧文本 -->
          <div class="item_right">
            <!-- 上侧文本 -->
            <div class="right_top">
              <span class="top_title">境外租车</span>
              <span>林女士</span>
              <span class="iconfont icon-zu2350"> 2020-11-09 </span>
            </div>
            <!-- 下方文本 -->
            <div class="right_bottom">
              所有租车公司柜台在同一个楼里，取车很顺利，只要了护照和驾照，主动给了驾照翻译件。德州理论上应该可以自驾90天，给的National的车，提车时看我们的价格说不是SUV，我们只给她看SUV几个字，于是在FULLSIZE的SUV去让我们自选一辆，我们选了量北美版的道奇酷威，驾驶感受不错。还车前装了十个箱子3个人去机场竟然神奇的装的下，就是还车附近没有加油站，我们跑了两圈在附近也没找到，最后去还车时说明了情况，工作人员很NICE的算了我们满箱油（实际半箱）。
              就是200元返现一直没到账，不懂为什么？到达门店的方式:乘坐穿梭巴士到达机场外的柜台取车
            </div>
          </div>
        </div>
        <div class="box_item">
          <!-- 左侧图片 -->
          <div class="item_left">
            <img src="./images/02.png" alt="" />
          </div>
          <!-- 右侧文本 -->
          <div class="item_right">
            <!-- 上侧文本 -->
            <div class="right_top">
              <span class="top_title">境外接送机</span>
              <span>侯先生</span>
              <span class="iconfont icon-zu2350"> 2020-11-09 </span>
            </div>
            <!-- 下方文本 -->
            <div class="right_bottom">
              早上6点半，司机很准时就到了，只是我们睡过头了，他也没打电话也没发消息，没有联系我，自己走掉了，后来我们赶紧打电话给司机，至少他又开回来载我们了。顺利赶上飞机，总是还是感谢的。
            </div>
          </div>
        </div>
        <div class="box_item">
          <!-- 左侧图片 -->
          <div class="item_left">
            <img src="./images/03.png" alt="" />
          </div>
          <!-- 右侧文本 -->
          <div class="item_right">
            <!-- 上侧文本 -->
            <div class="right_top">
              <span class="top_title">国内租车</span>
              <span>唐先生</span>
              <span class="iconfont icon-zu2350"> 2020-11-09 </span>
            </div>
            <!-- 下方文本 -->
            <div class="right_bottom">
              一嗨的服务态度不错，在机场取车还车都很方便，只是1.6的自排车辆在上山时就感觉动力不够，油门踩得比较费力。最奇葩的是导航，人生地不熟的我们从揭阳到南澳来回居然被导了两条完全不同的路线（高速去国道回，不是我们故意安排的），结果意料之外地把去时漏过的景点都补齐了，甚至看到了汕头大学，买到了价廉物美的杨桃，所以还是要给“智能”导航点赞。只是去时2小时不到的车程回来开了3个多小时，还是赶紧给导航仪升级吧，它连南澳大桥都不知道。其它的都挺不错，下次还会考虑选一嗨的，如果能早点把扣押的定金还给我就更好了。
            </div>
          </div>
        </div>
      </div>

      <!-- 常见问题 -->
      <div class="sundry">
        <!-- 点评 -->
        <div class="remark">
          <span></span>
          <h2>常见问题</h2>
        </div>
      </div>

      <!-- 常见问题内容 -->
      <div class="question">
        <!-- 接送机 -->
        <div class="question_item">
          <div class="item_top">
            <img src="./images/04.png" alt="" />
            <span>接送机</span>
          </div>
          <div class="item_bottom">
            <ul>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  航班延误的话，司机还会不会继续等我，有没有额外等候的费用需要我支付？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  使用接送机产品时所要到达的区域不在可选择的范围内怎么办？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  使用接送机产品时不知道所要送达的区域怎么办？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  我如何找到我的司机、车辆或接送地点？
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 境外租车 -->
        <div class="question_item">
          <div class="item_top">
            <img src="./images/05.png" alt="" />
            <span>境外租车</span>
          </div>
          <div class="item_bottom">
            <ul>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  境外租车的取车流程是怎样的？怎么取车？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  境外自驾租车需提前多久预订？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  境外租车的附加设备/附加服务有哪些？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                 境外租车资格和所需驾照\证件是哪些？
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 国内租车 -->
        <div class="question_item">
          <div class="item_top">
            <img src="./images/06.png" alt="" />
            <span>国内租车</span>
          </div>
          <div class="item_bottom">
            <ul>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  什么是异地还车？是否需收费？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  用车时间超出了预订的时间怎么收费？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  香港、台湾以及外籍人士如何预订国内自驾产品？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  若提前还车，已经预付的金额可以退还吗？
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 按天包车 -->
        <div class="question_item">
          <div class="item_top">
            <img src="./images/07.png" alt="" />
            <span>按天包车</span>
          </div>
          <div class="item_bottom">
            <ul>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  什么是夜间服务费？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  长途行驶费是如何计算的？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  日用车仅限在市内使用及上下车地点只可在市内该怎么理解？
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-fangkuai"></i>
                  出发下车地点不在主市区之内是否可以使用日用车及半日用车服务？
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
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
export default {
  name: "useCart",
  data() {
    return {
      tabNum: 0,
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true,

      // 如果需要分页器
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "bullets",
      //   clickable: true,
      // },
    });
  },
  methods: {
    changImndex(index) {
      this.tabNum = index;
    },
  },
};
</script>


<style lang='less' scoped>
.wrap {
  position: relative;

  // 轮播
  .banner {
    width: 100%;
    height: 360px;
    .swiper-container {
      width: 100%;
      height: 100%;
      --swiper-theme-color: #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  // 小图
  .smallIcon {
    width: 1180px;
    height: 210px;
    margin: 0 auto 0;
    .smallWrap {
      padding: 10px 0 20px 0;
    }
  }

  // 搜索框
  .searchOut {
    z-index: 1;
    width: 583.16px;
    height: 323px;
    background: #fff;
    position: absolute;
    left: 170px;
    top: 18px;
    // 上侧
    .searchBox {
      background-color: #06c;
      .searchTag {
        display: flex;
        li {
          background-color: #06c;
          line-height: 46px;
          height: 46px;
          a {
            color: #fff;
            font-size: 16px;
            border-right: 1px solid #ddd;
            padding: 8px 19px 8px 20px;
          }
          &:hover {
            border-top: 3px solid #ff9a00;
            background-color: #fff;
            border-bottom: 1px solid #333;
            a {
              color: #06c;
            }
          }
        }
        .active {
          border-top: 3px solid #ff9a00;
          background-color: #fff;
          border-bottom: 1px solid #333;
          a {
            color: #06c;
          }
        }
      }
    }
    // 下侧
    .searchs {
      .searchItem {
        form {
          ul {
            padding: 15px 30px;
            min-height: 200px;
            li {
              padding-top: 10px;
              span {
                font: 14px Microsoft Yahei;
                width: 75px;
                text-align: right;
                padding-right: 12px;
                line-height: 30px;
              }
              input {
                outline: none;
                width: 432px;
                height: 30px;
                line-height: 18px;
                padding: 5px;
                border: 1px solid #d9d9d9;
                &:focus {
                  border-color: #5d9de5;
                }
              }
            }
          }
        }
      }
    }
  }

  // 地图
  .platWrap {
    width: 100%;
    height: 762px;
    background: #f2f4f6 url(//pic.ctrip.com/car/home/internalBot.jpg) center
      bottom no-repeat;
    // 地图title
    .platTit {
      font: 26px/1 Microsoft Yahei;
      width: 1180px;
      height: 80px;
      line-height: 80px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      .wire {
        display: block;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #d4d4d4;
        position: absolute;
        top: 39.5px;
      }
      h2 {
        width: 279.66px;
        background-color: #f2f4f6;
        position: relative;
        margin: 0 auto;
        span {
          color: #06c;
        }
      }
    }
    // 下方内容
    .BottomConent {
      box-sizing: border-box;
      width: 1180px;
      height: 772px;
      margin: 0 auto;
      // float: left;
      // 大公鸡
      .plat {
        display: block;
        width: 660px;
        height: 692px;
        float: left;
        background: url(https://pages.c-ctrip.com/commerce/promote/car/online/common/carSiteMapImg/home.png)
          no-repeat;
        position: relative;
        .ci_icon {
          width: 47px;
          height: 62px;
          padding: 16px 4px 0;
          display: inline-block;
          background: url(https://pic.ctrip.com/car/home/icon.png) no-repeat;
          background-position: 0 -198px;
          color: #326293;
          font: 13px/1.2 Microsoft Yahei;
          vertical-align: middle;
          text-align: center;
          position: absolute;
          font: 13px/1.2 Microsoft Yahei;
          // background-position: ;
        }
        a:hover {
          background-position: -47px -198px;
          color: #fff;
          text-decoration: none;
          z-index: 2;
        }
        .wlmq {
          top: 150px;
          left: 132px;
          padding: 11px 4px 0;
        }
        .cd {
          top: 293px;
          left: 285px;
        }
        .km {
          left: 272px;
          top: 358px;
        }
        .xa {
          top: 239px;
          left: 351px;
        }
        .wh {
          top: 276px;
          left: 396px;
        }
        .cs {
          top: 313px;
          left: 376px;
        }
        .sz {
          /* bottom: 58px; */
          left: 404px;
          top: 358px;
        }
        .sy {
          /* bottom: 10px; */
          left: 364px;
          top: 413px;
        }
        .bj {
          top: 156px;
          right: 176px;
        }
        .dl {
          top: 154px;
          right: 115px;
        }
        .qd {
          top: 193px;
          right: 127px;
        }
        .nj {
          top: 234px;
          right: 156px;
        }
        .sh {
          top: 272px;
          right: 122px;
          z-index: 2;
        }
        .hz {
          top: 300px;
          right: 145px;
          z-index: 1;
        }
        .heb {
          top: 52px;
          right: 50px;
        }
        .tb {
          left: 485px;
          top: 362px;
        }
        .xg {
          left: 429px;
          top: 378px;
        }
      }
      // 地名
      .place {
        float: left;
        width: 520px;
        height: 330px;
        // background-color: red;
        margin-top: 70px;
        .ml {
          margin-left: 40px;
        }
        a {
          display: inline-block;
          margin: 0 10px 20px 0;
          width: 80px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          em {
            width: 18px;
            height: 35px;
            display: inline-block;
            background-position: 0 -261px !important;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            font: 14px/33px Microsoft Yahei;
            border-top: #dcdcdc 1px solid;
            border-bottom: #dcdcdc 1px solid;
            padding: 0 8px;
            background-color: #fff;
            vertical-align: middle;
            color: #333;
          }
          i {
            display: inline-block;
            width: 18px;
            height: 35px;
            background-position: -18px -261px !important;
            vertical-align: middle;
          }
          .ci_icon {
            background: url(https://pic.ctrip.com/car/home/icon.png) no-repeat;
          }
        }
        a:hover span {
          border-color: #06c;
        }
        a:hover em {
          background-position: -36px -261px !important;
        }
        a:hover i {
          background-position: -54px -261px !important;
        }
      }
    }
  }

  // 境外租车
  .hot_mod {
    width: 100%;
    height: 360px;
    .area {
      width: 1180px;
      height: 360px;
      margin: 0 auto;
      // background-color: chocolate;
      overflow: hidden;
      position: relative;
      h2 {
        height: 40px;
        margin: 20px 0;
        font: 26px/1 Microsoft Yahei;
        text-align: center;
        .wire {
          width: 100%;
          height: 1px;
          display: inline-block;
          border-bottom: 1px solid #d4d4d4;
          position: absolute;
          top: 34px;
          left: 0;
        }
        p {
          background: #fff;
          width: 279.66px;
          margin: 0 auto;
          position: relative;
          span {
            color: #06c;
          }
        }
      }
      .hot_useCart {
        width: 100%;
        height: 100%;
        display: flex;
        p {
          width: 606px;
          a {
            display: inline-block;
            zoom: 1;
            width: 180px;
            height: 115px;
            margin: 0 15px 20px 0;
            position: relative;
            overflow: hidden;
            text-decoration: none;
            span {
              display: block;
              width: 85px;
              height: 85px;
              border-radius: 50%;
              background-color: rgba(255, 255, 255, 0.5);
              position: absolute;
              left: 50%;
              top: 50%;
              margin: -42px 0 0 -42px;
              text-align: center;
              font: 18px/85px Microsoft Yahei;
              color: #333;
              z-index: 2;
            }
          }
          a:hover img {
            transform: scale(1.15);
            transition: all 0.5s;
            // width: 150%;
            // height: 150%;
          }
        }
        div {
          width: 520px;
          height: 275px;
          a {
            margin: 0 10px 20px 0;
            display: inline-block;
            span {
              display: inline-block;
              font: 14px/33px Microsoft Yahei;
              border-top: #dcdcdc 1px solid;
              border-bottom: #dcdcdc 1px solid;
              padding: 0 8px;
              background-color: #fff;
              vertical-align: middle;
              color: #333;
            }
            em {
              background-position: 0 -261px !important;
              display: inline-block;
              width: 18px;
              height: 35px;
              vertical-align: middle;
            }
            i {
              background-position: -18px -261px !important;
              display: inline-block;
              width: 18px;
              height: 35px;
              vertical-align: middle;
            }
            .ci_icon {
              background: url(https://pic.ctrip.com/car/home/icon.png) no-repeat;
            }
          }
          a:hover em {
            background-position: -36px -261px !important;
          }
          a:hover i {
            background-position: -54px -261px !important;
          }
          a:hover span {
            border-color: #06c;
            color: #06c;
          }
          .ml {
            margin-left: 40px;
          }
        }
      }
    }
  }

  // 用车点评.问题,伙伴
  .sundry {
    width: 1180px;
    margin: 0 auto;
    // 点评
    .remark {
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
      position: relative;
      text-align: center;
      span {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #d4d4d4;
        position: absolute;
        top: 20px;
        left: 0;
      }
      h2 {
        width: 154px;
        height: 35px;
        line-height: 35px;
        font: 26px/1 Microsoft Yahei;
        padding: 0 25px;
        font-style: normal;
        background-color: #fff;
        position: relative;
        z-index: 1;
        margin: 0 auto;
      }
    }
  }

  // 点评内容
  .remark_box {
    width: 1180px;
    margin: 0 auto;
    // background-color: red;
    height: 200px;
    .box_item {
      display: flex;
      width: 590px;
      // background-color: skyblue;
      height: 90px;
      float: left;
      margin-bottom: 10px;
      // 左侧图片
      .item_left {
        height: 90px;
        width: 90px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      // 右侧文本
      .item_right {
        height: 90px;
        width: 500px;
        // background-color: orange;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 15px;
        cursor: pointer;
        .right_top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .top_title {
            font-weight: bold;
            font-size: 16px;
          }
        }
        .right_bottom {
          font: 14px Microsoft Yahei;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }

  // 常见问题
  .question {
    width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .question_item {
      width: 275px;
      .item_top {
        height: 36px;
        margin-bottom: 10px;
        span {
          line-height: 36px;
          font: 18px/36px Microsoft Yahei;
          font-weight: 700;
        }
        img {
          height: 20px;
          margin-right: 10px;
        }
      }
      .item_bottom {
        ul {
          li {
            margin-bottom: 10px;
            a {
              font: 12px/1.5 arial, Simsun, sans-serif;
              color: #333;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
          }
        }
      }
    }
  }

  //搜索框的属性选择器
  [data-picker] {
    background-image: url(//pic.c-ctrip.com/car/ui/picker_bg-2.png);
    background-repeat: no-repeat;
    background-position: right 0.1%;
  }
  [data-picker]:hover {
    background-position: right 39%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0) inset;
  }
}
</style>