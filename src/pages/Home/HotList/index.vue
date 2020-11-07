<template>
  <div class="hotList_wrapper">
    <!-- 头部列表 -->
    <div class="header_list">
      <h2>
        <span :class="{ current: currNum === 1 }" @click="tab(1)">
          热门
          <i></i>
        </span>
        <span :class="{ current: currNum === 2 }" @click="tab(2)">
          周边游
          <i></i>
        </span>
        <!-- <span :class="{ current: currNum === 3 }" @click="tab(3)">
          门票
          <i></i>
        </span>
        <span :class="{ current: currNum === 4 }" @click="tab(4)">
          出境游
          <i></i>
        </span> -->
      </h2>
    </div>

    <!-- 热门内容主体 -->
    <div class="hotList_sub" v-if="currNum === 1">
      <!-- 热门 -->
      <!-- 内容导航 -->
      <div class="sub_nav">
        <ul>
          <li
            :class="{ active: number === index }"
            v-for="(item, index) in destCitys"
            :key="item.pinyin"
            @click="change(index, item.pinyin, currNum)"
          >
            <a href="javascript:;">{{ item.nme }}</a>
          </li>
        </ul>
      </div>
      <!-- 图片显示区域 -->
      <div class="sub_img">
        <!-- 左侧多图区域 -->
        <div class="sub_body">
          <div
            class="body_item"
            v-for="(tabContentItem, index) in tabContentLst"
            :key="tabContentItem.sort"
          >
            <a :href="tabContentItem.prdLnk">
              <img v-lazy="tabContentItem.img" alt="" />
              <div class="item_mask">
                <div class="title">
                  <span class="title_text">{{ tabContentItem.prdNme }}</span>
                  <div class="mask_rule"></div>
                  ￥
                  <span>{{ tabContentItem.price.amt }}</span
                  >/人起
                </div>
              </div>
              <!-- 鼠标滑过遮罩 -->
              <div class="product-detail">
                <p class="title">{{ tabContentItem.prdNme }}</p>
                <p class="info">
                  <i class="icon-scenic"></i>{{ tabContentItem.sight }}
                </p>
                <p class="info">
                  <i class="icon-food"></i>{{ tabContentItem.food }}
                </p>
                <p class="link">立即查看3000条产品&gt;</p>
              </div>
            </a>
          </div>
        </div>
        <!-- 右侧大图 -->
        <div
          class="sub_big"
          v-for="imgItem in indexHot.adLst"
          :key="imgItem.img"
        >
          <a :href="imgItem.url">
            <img v-lazy="imgItem.img" alt="" />
          </a>
        </div>
      </div>
    </div>

    <!-- 周边游内容主体 -->
    <div v-else class="mod-bd-panel" idx="3" style="display: block" eb="1">
      <div class="entrance">
        <dl class="keyword-short">
          <dt>热门主题游</dt>
          <dd>
            <span
              class="entrance-item"
              :title="themeItem.nme"
              v-for="(themeItem, index) in themeLst"
              :key="themeItem.pinyin"
            >
              <a :href="themeItem.url" target="_blank">{{ themeItem.nme }} </a>
            </span>

            <!-- <span class="entrance-item" title="古镇">
              <a
                href="https://vacations.ctrip.com/list/whole/sc2.html?sv=%e5%8f%a4%e9%95%87&amp;st=%e5%8f%a4%e9%95%87#ctm_ref=ssc_hp_tour_rt_txt_02"
                target="_blank"
                >古镇
              </a>
            </span> -->
            <!-- <span class="entrance-item" title="蜜月"
              ><a
                href="https://vacations.ctrip.com/list/whole/sc2.html?sv=%e8%9c%9c%e6%9c%88&amp;st=%e8%9c%9c%e6%9c%88#ctm_ref=ssc_hp_tour_rt_txt_02"
                target="_blank"
                >蜜月</a
              ></span
            > -->
            <!-- <span class="entrance-item" title="亲子"
              ><a
                href="https://vacations.ctrip.com/list/whole/sc2.html?sv=%e4%ba%b2%e5%ad%90&amp;st=%e4%ba%b2%e5%ad%90#ctm_ref=ssc_hp_tour_rt_txt_02"
                target="_blank"
                >亲子</a
              ></span
            > -->
            <!-- <span class="entrance-item" title="爸妈游"
              ><a
                href="https://vacations.ctrip.com/list/whole/sc2.html?sv=%e7%88%b8%e5%a6%88%e6%b8%b8&amp;st=%e7%88%b8%e5%a6%88%e6%b8%b8#ctm_ref=ssc_hp_tour_rt_txt_02"
                target="_blank"
                >爸妈游</a
              ></span
            > -->
            <!-- <span class="entrance-item" title="美食"
              ><a
                href="https://vacations.ctrip.com/list/whole/sc2.html?sv=%e7%be%8e%e9%a3%9f&amp;st=%e7%be%8e%e9%a3%9f#ctm_ref=ssc_hp_tour_rt_txt_02"
                target="_blank"
                >美食</a
              ></span
            > -->
          </dd>
        </dl>
        <dl class="keyword-short">
          <dt>热门目的地</dt>
          <dd>
            <span
              class="entrance-item"
              :title="hotLnk.nme"
              v-for="(hotLnk, index) in hotLnks"
              :key="hotLnks.pinyin"
              ><a :href="hotLnks.lnk" target="_blank">{{ hotLnk.nme }}</a></span
            >
            <!-- <span class="entrance-item" title="上海"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-shanghai-2.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >上海</a
              ></span
            ><span class="entrance-item" title="杭州"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-hangzhou-14.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >杭州</a
              ></span
            ><span class="entrance-item" title="苏州"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-suzhou-11.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >苏州</a
              ></span
            ><span class="entrance-item" title="黄山"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-huangshan-120061.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >黄山</a
              ></span
            ><span class="entrance-item" title="南京"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-nanjing-9.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >南京</a
              ></span
            ><span class="entrance-item" title="舟山"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-zhoushan-479.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >舟山</a
              ></span
            ><span class="entrance-item" title="无锡"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-wuxi-10.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >无锡</a
              ></span
            ><span class="entrance-item" title="宁波"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-ningbo-83.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >宁波</a
              ></span
            ><span class="entrance-item" title="安吉"
              ><a
                href="https://vacations.ctrip.com/list/whole/d-anji-686.html?salecity=2#ctm_ref=ssc_hp_tour_rt_txt_03"
                target="_blank"
                >安吉</a
              ></span
            > -->
          </dd>
        </dl>
      </div>
      <div class="product">
        <div class="product-hd">
          <ul class="inner-tabs-nav">
            <li
              :class="{ active: number === index }"
              v-for="(destCity, index) in destCitysList"
              :key="destCity.pinyin"
              @click="change(index, destCity.pinyin)"
            >
              <a href="javascript:void(0);" :pinyin="destCity.pinyin">{{
                destCity.nme
              }}</a>
            </li>
            <!-- <li><a href="javascript:void(0);" pinyin="ShangHai">上海</a></li>
            <li><a href="javascript:void(0);" pinyin="HangZhou">杭州</a></li>
            <li><a href="javascript:void(0);" pinyin="SuZhou">苏州</a></li>
            <li><a href="javascript:void(0);" pinyin="HuangShan">黄山</a></li>
            <li><a href="javascript:void(0);" pinyin="NanJing">南京</a></li>
            <li><a href="javascript:void(0);" pinyin="ZhouShan">舟山</a></li>
            <li><a href="javascript:void(0);" pinyin="WuXi">无锡</a></li> -->
            <!-- <li class="dropdown-li">
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle dropdown-toggle_border"
                  >更多<span class="caret"></span
                ></a>
                <div class="dropdown-cont">
                  <div class="dropdown-menu-list">
                    <a href="javascript:void(0);" pinyin="NingBo">宁波</a
                    ><a href="javascript:void(0);" pinyin="AnJi">安吉</a>
                  </div>
                </div>
              </div>
            </li> -->
          </ul>
        </div>

        <div class="product-bd">
          <div class="inner-tab-panel active inner-tab-panel_noextra">
            <div
              class="product-item"
              title="苏州+乌镇+杭州3日2晚跟团游(5钻)·万人纯玩明星线 『夜宿乌镇 2晚5钻酒店+三5A景+蟹意满满』留园+网红乌镇+漫游西湖 甄选明星阵容丨打卡乌镇西栅日与夜【三宴·高餐标50元丨苏式&amp;乌镇水乡宴&amp;龙井御茶宴】双11爆单款"
              v-for="(tabContentItem, index) in tabContentLstInfo"
              :key="index"
            >
              <a :href="tabContentItem.prdLnk" target="_blank"
                ><div class="item-thumbnail">
                  <img v-lazy="tabContentItem.img" :alt="tabContentItem.prdNme" />
                </div>
                <p class="item-name">
                  {{ tabContentItem.prdNme }}
                </p>
                <p class="item-info">
                  <span class="price"
                    ><dfn>¥</dfn>{{ tabContentItem.price.amt
                    }}<i class="price_info">起</i></span
                  ><span class="diamond diamond05"></span></p
              ></a>
            </div>

            <!-- <div
              class="product-item"
              title="上海2日1晚自由行(4钻)·【亲子自驾】住海昌海洋公园度假酒店1晚+上海海昌海洋公园门票2张·跨日无限次入园！畅游2日玩到爽！海豚 企鹅 美人鱼|和海洋生物亲密接触！"
            >
              <a
                href="https://vacations.ctrip.com/tour/detail/p26413903s2.html#ctm_ref=ssc_hp_tour_rt_pro_01"
                target="_blank"
                ><div class="item-thumbnail">
                  <img
                    src="https://dimg04.c-ctrip.com/images/300v0x000000liuks9C9C_C_228_132.jpg"
                    alt="上海2日1晚自由行(4钻)·【亲子自驾】住海昌海洋公园度假酒店1晚+上海海昌海洋公园门票2张·跨日无限次入园！畅游2日玩到爽！海豚 企鹅 美人鱼|和海洋生物亲密接触！"
                  />
                </div>
                <p class="item-name">
                  上海2日1晚自由行(4钻)·【亲子自驾】住海昌海洋公园度假酒店1晚+上海海昌海洋公园门票2张·跨日无限次入园！畅游2日玩到爽！海豚
                  企鹅 美人鱼|和海洋生物亲密接触！
                </p>
                <p class="item-info">
                  <span class="price"
                    ><dfn>¥</dfn>641<i class="price_info">起</i></span
                  ><span class="diamond diamond04"></span></p
              ></a>
            </div>
            <div
              class="product-item"
              title="浙江普陀山2日1晚跟团游·【疫情过后·佛岛祈福】登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
            >
              <a
                href="https://vacations.ctrip.com/tour/detail/p3566821s2.html#ctm_ref=ssc_hp_tour_rt_pro_01"
                target="_blank"
                ><div class="item-thumbnail">
                  <img
                    src="https://dimg03.c-ctrip.com/images/100p0b00000057x0o1540_C_228_132.jpg"
                    alt="浙江普陀山2日1晚跟团游·【疫情过后·佛岛祈福】登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】"
                  />
                </div>
                <p class="item-name">
                  浙江普陀山2日1晚跟团游·【疫情过后·佛岛祈福】登佛顶山，拜普济寺、法雨寺、南海观音，宿“海边”客栈，人民广场/松江郊区，上车点自由选择【浙里好玩】
                </p>
                <p class="item-info">
                  <span class="price"
                    ><dfn>¥</dfn>335<i class="price_info">起</i></span
                  >
                </p></a
              >
            </div>
            <div
              class="product-item"
              title="安徽黄山+宏村3日2晚跟团游(4钻)·【高铁直达·人气产品】精致小团·上限16人！2人立减100！『1晚夜宿山顶』登黄山观日出/星空&amp;穿越西海大峡谷 『网评高钻酒店+人气必游景点』『儿童享亲子礼遇』1对1携程目的地管家服务"
            >
              <a
                href="https://vacations.ctrip.com/tour/detail/p20273786s2.html#ctm_ref=ssc_hp_tour_rt_pro_01"
                target="_blank"
                ><div class="item-thumbnail">
                  <img
                    src="https://dimg04.c-ctrip.com/images/300112000000ss9w496C6_C_228_132.jpg"
                    alt="安徽黄山+宏村3日2晚跟团游(4钻)·【高铁直达·人气产品】精致小团·上限16人！2人立减100！『1晚夜宿山顶』登黄山观日出/星空&amp;穿越西海大峡谷 『网评高钻酒店+人气必游景点』『儿童享亲子礼遇』1对1携程目的地管家服务"
                  />
                </div>
                <p class="item-name">
                  安徽黄山+宏村3日2晚跟团游(4钻)·【高铁直达·人气产品】精致小团·上限16人！2人立减100！『1晚夜宿山顶』登黄山观日出/星空&amp;穿越西海大峡谷
                  『网评高钻酒店+人气必游景点』『儿童享亲子礼遇』1对1携程目的地管家服务
                </p>
                <p class="item-info">
                  <span class="price"
                    ><dfn>¥</dfn>1641<i class="price_info">起</i></span
                  ><span class="diamond diamond04"></span></p
              ></a>
            </div>
            <div
              class="product-item"
              title="苏州+乌镇+杭州3日2晚跟团游(5钻)·年终甩尾！真立减！『携程自营·安心公筷·20%空座率』金秋“蟹”礼 宿乌镇&amp;品牌5钻 5A西塘 VIP通道|小众西湖&amp;合影雷峰塔【明星漫游·步入江南百景】宋城自选『餐标50 三顿特色宴』"
            >
              <a
                href="https://vacations.ctrip.com/tour/detail/p17065524s2.html#ctm_ref=ssc_hp_tour_rt_pro_01"
                target="_blank"
                ><div class="item-thumbnail">
                  <img
                    src="https://dimg04.c-ctrip.com/images/0306g1200080ihzo11868_C_228_132.jpg"
                    alt="苏州+乌镇+杭州3日2晚跟团游(5钻)·年终甩尾！真立减！『携程自营·安心公筷·20%空座率』金秋“蟹”礼 宿乌镇&amp;品牌5钻 5A西塘 VIP通道|小众西湖&amp;合影雷峰塔【明星漫游·步入江南百景】宋城自选『餐标50 三顿特色宴』"
                  />
                </div>
                <p class="item-name">
                  苏州+乌镇+杭州3日2晚跟团游(5钻)·年终甩尾！真立减！『携程自营·安心公筷·20%空座率』金秋“蟹”礼
                  宿乌镇&amp;品牌5钻 5A西塘
                  VIP通道|小众西湖&amp;合影雷峰塔【明星漫游·步入江南百景】宋城自选『餐标50
                  三顿特色宴』
                </p>
                <p class="item-info">
                  <span class="price"
                    ><dfn>¥</dfn>499<i class="price_info">起</i></span
                  ><span class="diamond diamond05"></span></p
              ></a>
            </div>
            <div
              class="product-item"
              title="乌镇+杭州2日1晚跟团游·立减100  升级4钻酒店·赏西栅日夜全景 纯玩无购物【一整天360打卡网红乌镇】拒绝走马观花+【泛舟西湖赏美景】+A线住乌镇自营5钻客栈+多次入园+赠晚餐，可升级C线入住乌镇西栅景区内5钻酒店"
            >
              <a
                href="https://vacations.ctrip.com/tour/detail/p19460594s2.html#ctm_ref=ssc_hp_tour_rt_pro_01"
                target="_blank"
                ><div class="item-thumbnail">
                  <img
                    src="https://dimg04.c-ctrip.com/images/300g0s000000hzkxa432D_C_228_132.jpg"
                    alt="乌镇+杭州2日1晚跟团游·立减100  升级4钻酒店·赏西栅日夜全景 纯玩无购物【一整天360打卡网红乌镇】拒绝走马观花+【泛舟西湖赏美景】+A线住乌镇自营5钻客栈+多次入园+赠晚餐，可升级C线入住乌镇西栅景区内5钻酒店"
                  />
                </div>
                <p class="item-name">
                  乌镇+杭州2日1晚跟团游·立减100 升级4钻酒店·赏西栅日夜全景
                  纯玩无购物【一整天360打卡网红乌镇】拒绝走马观花+【泛舟西湖赏美景】+A线住乌镇自营5钻客栈+多次入园+赠晚餐，可升级C线入住乌镇西栅景区内5钻酒店
                </p>
                <p class="item-info">
                  <span class="price"
                    ><dfn>¥</dfn>258<i class="price_info">起</i></span
                  ><span class="diamond diamond03"></span></p
              ></a>
            </div>
            <div
              class="product-item"
              title="丽水3日2晚跟团游(4钻)·『浙西南慢生活摄影之旅』畅游仙都全景鼎湖峰·朱潭山·倪翁洞·小赤壁·仙都观&amp;观赏醉美云和梯田&amp;船游瓯江千年古堰画乡&amp;秀水丽水经典景点一网打尽&amp;连住两晚丽水四钻酒店【携程自营赏秋季】"
            >
              <a
                href="https://vacations.ctrip.com/tour/detail/p22832691s2.html#ctm_ref=ssc_hp_tour_rt_pro_01"
                target="_blank"
                ><div class="item-thumbnail">
                  <img
                    src="https://dimg04.c-ctrip.com/images/0306j1200085osvti80C5_C_228_132.png"
                    alt="丽水3日2晚跟团游(4钻)·『浙西南慢生活摄影之旅』畅游仙都全景鼎湖峰·朱潭山·倪翁洞·小赤壁·仙都观&amp;观赏醉美云和梯田&amp;船游瓯江千年古堰画乡&amp;秀水丽水经典景点一网打尽&amp;连住两晚丽水四钻酒店【携程自营赏秋季】"
                  />
                </div>
                <p class="item-name">
                  丽水3日2晚跟团游(4钻)·『浙西南慢生活摄影之旅』畅游仙都全景鼎湖峰·朱潭山·倪翁洞·小赤壁·仙都观&amp;观赏醉美云和梯田&amp;船游瓯江千年古堰画乡&amp;秀水丽水经典景点一网打尽&amp;连住两晚丽水四钻酒店【携程自营赏秋季】
                </p>
                <p class="item-info">
                  <span class="price"
                    ><dfn>¥</dfn>799<i class="price_info">起</i></span
                  ><span class="diamond diamond04"></span></p
              ></a>
            </div>
            <div
              class="product-item"
              title="江西婺源+三清山3日2晚跟团游(5钻)·【赏枫晒秋特惠 2成人同行享 每单立减100】上限12人安心小团 赠特产礼盒  A线1晚开元1晚希尔顿|B线2晚希尔顿|C线2晚开元 浓味乡俗.鲜花小镇-篁岭 仙境三清山 纯玩无购物 双高/双动"
            >
              <a
                href="https://vacations.ctrip.com/tour/detail/p22314129s2.html#ctm_ref=ssc_hp_tour_rt_pro_01"
                target="_blank"
                ><div class="item-thumbnail">
                  <img
                    src="https://dimg04.c-ctrip.com/images/300q15000000ym6v074FD_C_228_132.jpg"
                    alt="江西婺源+三清山3日2晚跟团游(5钻)·【赏枫晒秋特惠 2成人同行享 每单立减100】上限12人安心小团 赠特产礼盒  A线1晚开元1晚希尔顿|B线2晚希尔顿|C线2晚开元 浓味乡俗.鲜花小镇-篁岭 仙境三清山 纯玩无购物 双高/双动"
                  />
                </div>
                <p class="item-name">
                  江西婺源+三清山3日2晚跟团游(5钻)·【赏枫晒秋特惠 2成人同行享
                  每单立减100】上限12人安心小团 赠特产礼盒
                  A线1晚开元1晚希尔顿|B线2晚希尔顿|C线2晚开元
                  浓味乡俗.鲜花小镇-篁岭 仙境三清山 纯玩无购物 双高/双动
                </p>
                <p class="item-info">
                  <span class="price"
                    ><dfn>¥</dfn>1578<i class="price_info">起</i></span
                  ><span class="diamond diamond05"></span></p
              ></a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotList",
  data() {
    return {
      indexHot: {},
      indexSurrounding: {},
      number: 0,
      currNum: 1,
    };
  },
  mounted() {
    this.getIndexHot("JingNei");
    this.getIndexSurrounding("JingXuan");
  },
  methods: {
    tab(num) {
      this.currNum = num;
      if (num === 1) {
        this.getIndexHot("JingNei");
      } else {
        this.getIndexSurrounding("JingXuan");
      }
    },
    // 请求热门的函数
    async getIndexHot(diqu) {
      let result = await this.$API.index.getIndexHot(diqu);
      if (result.code === 200) {
        this.indexHot = result.data;
      }
    },
    //  请求周边游
    async getIndexSurrounding(diqu) {
      let result = await this.$API.index.getIndexSurrounding(diqu);
      if (result.code === 200) {
        this.indexSurrounding = result.data;
      }
    },
    // 点击切换各大洲并发请求
    change(index, diqu, currNum) {
      this.number = index;
      if (currNum === 1) {
        this.getIndexHot(diqu);
      } else {
        this.getIndexSurrounding(diqu);
      }
    },
  },
  computed: {
    tabContentLst() {
      return this.indexHot.tabContentLst;
    },
    destCitys() {
      return this.indexHot.destCitys;
    },
    tabContentLstInfo() {
      return this.indexSurrounding.tabContentLst;
    },
    themeLst() {
      return this.indexSurrounding.themeLst;
    },
    destCitysList() {
      return this.indexSurrounding.destCitys;
    },
    hotLnks() {
      return this.indexSurrounding.hotLnks;
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
    padding-bottom: 3px;
    justify-content: space-between;
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
          width: 0;
          height: 0;
          overflow: hidden;
          line-height: 0;
          font-size: 0;
          vertical-align: middle;
          border-bottom: 6px solid #3983e5;
          border-top: 0 none;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
      }
    }
  }

  // 热门主体内容
  .hotList_sub {
    padding: 15px 19px 0;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #fff;

    .sub_nav {
      margin-bottom: 15px;
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
            border-radius: 3px;
            a {
              color: #fff;
            }
          }
        }
        .active {
          background: #3983e5;
          color: #fff;
          border-radius: 3px;
          a {
            color: #fff;
          }
        }
      }
    }

    // 图片显示区域
    .sub_img {
      display: flex;
      justify-content: space-between;

      // 左侧多图区域
      .sub_body {
        width: 910px;
        margin: 0 0 10px 0px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: hidden;
        height: 330px;
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
          .product-detail {
            display: none;
            position: absolute;
            padding: 26px 10px 10px;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
            font-family: PingFangSC-Regular;
            color: #fff;
            line-height: 16px;
            .title {
              text-align: center;
              font-size: 22px;
              color: #fff;
              line-height: 18px;
              font-weight: bold;
              margin-bottom: 16px;
            }
            .info {
              position: relative;
              padding-left: 28px;
              margin-bottom: 8px;
              line-height: 16px;
              height: 16px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: -o-ellipsis-lastline;
              text-overflow: ellipsis;
              i {
                position: absolute;
                left: 6px;
                top: 2px;
                width: 12px;
                height: 12px;
                display: inline-block;
                overflow: hidden;
                vertical-align: middle;
                background: url(//pic.c-ctrip.com/platform/online/home/un_index_20180209.png)
                  no-repeat;
                &.icon-scenic {
                  background-position: 0 -208px;
                }
                &.icon-food {
                  background-position: -26px -208px;
                }
              }
            }
            .link {
              margin-top: 18px;
              text-align: center;
            }
          }
          &:hover .product-detail {
            display: block;
          }
          &:hover .item_mask {
            display: none;
          }
        }
      }

      // 右侧大图
      .sub_big {
        width: 210px;
        height: 330px;
        // background-color: yellowgreen;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  // 周边游内容主体
  .mod-bd-panel {
    padding: 0px 0px 10px 0;
    width: 100%;
    border: 1px solid #ddd;
    background-color: #fff;
    // 左侧
    .entrance {
      position: relative;
      float: left;
      display: inline;
      width: 187px;
      height: 360px;
      padding: 0 20px 15px;
      overflow: hidden;
      a {
        color: #666;
        &:hover {
          text-decoration: none;
          color: #3983e6;
        }
      }
      .keyword-short {
        width: 187px;
        margin: 0px 0 7px 0;
        overflow: hidden;
        position: relative;
        dt {
          padding: 4px 0 0 0;
          font: 700 14px/34px "Microsoft yahei";
        }
        dd {
          margin-left: -10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          position: relative;
          zoom: 1;
          .entrance-item {
            position: relative;
            float: left;
            display: block;
            border-left: 1px solid #ececec;
            padding: 0 10px;
            line-height: 18px;
            height: 18px;
            margin: 7px 0;
            *margin: 8px 0;
          }
          a {
            display: inline-block;
            max-width: 72px;
            cursor: pointer;
          }
        }
      }
    }
    // 右侧
    .product {
      position: relative;
      *zoom: 1;
      height: 375px;
      margin-left: 229px;
      padding: 15px 19px 0;
      border-left: 1px dotted #a3a3a3;
      .product-hd {
        .inner-tabs-nav {
          height: 20px;
          margin-bottom: 10px;
          li {
            float: left;
            display: inline-block;
            line-height: 20px;
            margin-right: 15px;
            padding: 0 8px;
            &.active {
              background: #3983e5;
              color: #fff;
              border-radius: 3px;
              a {
                color: #fff;
              }
            }
            &:hover {
              background: #3983e5;
              color: #fff;
              border-radius: 3px;
              a {
                color: #fff;
              }
            }
            a {
              color: #3983e5;
              z-index: 81;
            }
            .dropdown-li {
              margin-top: -1px;
              width: 40px;
              position: relative;
              z-index: 10;
              .dropdown-toggle {
                border: none;
                .caret {
                  margin-left: 5px;
                  display: inline-block;
                  width: 0;
                  height: 0;
                  overflow: hidden;
                  line-height: 0;
                  font-size: 0;
                  vertical-align: middle;
                  border-top: 5px solid #3983e4;
                  border-bottom: 0 none;
                  border-left: 5px solid transparent;
                  border-right: 5px solid transparent;
                }
              }
              .dropdown-cont {
                z-index: 80;
                left: -10px;
                right: auto;
                display: none;
                position: absolute;
                top: 22px;
                background: #fff;
                .dropdown-menu-list {
                  width: 80px;
                  padding: 4px;
                  height: auto;
                  border: 1px solid #999;
                  max-height: 176px;
                  overflow: hidden;
                  a {
                    display: none;
                    padding: 0 10px;
                    height: 22px;
                    line-height: 22px;
                    color: #333 !important;
                    white-space: nowrap;
                    overflow: hidden;
                  }
                }
              }
            }
          }
        }
      }
      .product-bd {
        .inner-tab-panel_noextra {
          margin-left: -10px;
          padding-right: 0;
          .product-item {
            position: relative;
            width: 220px;
            height: 160px;
            float: left;
            margin: 0 0 10px 10px;
            overflow: hidden;
            -webkit-transition: all 0.2s linear;
            transition: all 0.2s linear;
            a {
              text-decoration: none;
              color: #666;
              display: block;
              .item-thumbnail {
                position: relative;
                width: 220px;
                height: 110px;
                margin-bottom: 3px;
                overflow: hidden;
                img {
                  transition: transform 0.3s ease 0s;
                  width: 220px;
                  border: none;
                  vertical-align: middle;
                }
              }
              .item-name {
                position: relative;
                height: 20px;
                line-height: 20px;
                text-align: left;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 0 5px;
              }
              .item-info {
                position: relative;
                height: 35px;
                text-align: right;
                padding: 0 5px;
                .price {
                  position: relative;
                  float: right;
                  font: 22px/1.5 tahoma;
                  color: #f60;
                  dfn {
                    vertical-align: 7px;
                    font: 12px/1.5 arial;
                    color: #666;
                  }
                  .price_info {
                    margin-left: 3px;
                    vertical-align: 2px;
                    font: 12px/1.5 "Microsoft yahei";
                    color: #666;
                  }
                }
                .diamond05 {
                  width: 59px;
                  position: absolute;
                  left: 5px;
                  top: 50%;
                  margin-top: -4px;
                  height: 8px;
                  display: inline-block;
                  overflow: hidden;
                  vertical-align: middle;
                  background: url(//pic.c-ctrip.com/platform/online/home/un_index_20180209.png)
                    no-repeat;
                  background-position: 0 0;
                }
              }
            }
            &:hover {
              box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
              img {
                transform: scale(1.1);
              }
            }
          }
        }
        .inner-tab-panel {
          height: 340px;
          overflow: hidden;
          position: relative;
        }
      }
    }
  }
}
</style>
