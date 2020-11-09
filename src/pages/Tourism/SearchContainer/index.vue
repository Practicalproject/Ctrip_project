<template>
  <!-- 搜索区域 -->
  <div class="searchContainer">
    <img src="../images/03.png" alt="" />
    <dl class="cityContainer">
      <dt @click="showBlock">
        <i class="iconfont icon-dingweiweizhi posit"></i>
        <span class="city">北京</span>
        <span class="station">站</span>
        <b
          class="iconfont icon-downlist downAndUp"
          @click="checkCity((num = 0))"
          v-if="this.isShow"
        ></b>
        <b class="iconfont icon-shang downAndUp" v-else></b>
      </dt>
      <!-- style="display:none" -->
      <dd v-if="isShow">
        <div class="hotStation">
          <h4>热门出发城市</h4>
          <p>
            <a href="javascript:;">北京</a><a href="javascript:;">上海</a
            ><a href="javascript:;">天津</a><a href="javascript:;">重庆</a
            ><a href="javascript:;">西安</a><a href="javascript:;">南京</a
            ><a href="javascript:;">杭州</a><a href="javascript:;">厦门</a
            ><a href="javascript:;">成都</a><a href="javascript:;">深圳</a
            ><a href="javascript:;">广州</a><a href="javascript:;">昆明</a
            ><a href="javascript:;">长沙</a><a href="javascript:;">沈阳</a
            ><a href="javascript:;">武汉</a>
          </p>
        </div>
        <div class="station_search">
          <div class="station_search_box">
            <input type="text" placeholder="搜索城市（支持汉字、首字母查询）" />
          </div>
          <div class="station_wordsselect">
            <a
              href="javascript:void(0);"
              @click="checkCity((num = 0))"
              :class="{ active: num == 0 }"
              >ABCDEFGH</a
            >
            <a
              href="javascript:void(0);"
              @click="checkCity((num = 1))"
              :class="{ active: num == 1 }"
              >JKLMNOPQ</a
            >
            <a
              href="javascript:void(0);"
              @click="checkCity((num = 2))"
              :class="{ active: num == 2 }"
              >RSTWX</a
            >
            <a
              href="javascript:void(0);"
              @click="checkCity((num = 3))"
              :class="{ active: num == 3 }"
              >YZ</a
            >
          </div>
          <div>
            <ul class="station_search_list" v-show="num == 0">
              <li>
                <span>A</span><a href="javascript:;">澳门</a
                ><a href="javascript:;">阿里</a><a href="javascript:;">安康</a
                ><a href="javascript:;">阿克苏</a
                ><a href="javascript:;">阿勒泰</a><a href="javascript:;">安庆</a
                ><a href="javascript:;">鞍山</a><a href="javascript:;">安顺</a
                ><a href="javascript:;">安溪</a><a href="javascript:;">安阳</a
                ><a href="javascript:;">安吉</a><a href="javascript:;">安达</a
                ><a href="javascript:;">阿拉山口</a
                ><a href="javascript:;">安图</a><a href="javascript:;">安陆</a
                ><a href="javascript:;">阿尔山</a><a href="javascript:;">阿坝</a
                ><a href="javascript:;">阿图什</a><a href="javascript:;">安化</a
                ><a href="javascript:;">安龙</a><a href="javascript:;">阿拉善</a
                ><a href="javascript:;">安宁</a
                ><a href="javascript:;">阿巴嘎旗</a
                ><a href="javascript:;">阿克塞</a
                ><a href="javascript:;">阿拉善左旗</a
                ><a href="javascript:;">阿克陶</a
                ><a href="javascript:;">阿克苏市</a
                ><a href="javascript:;">安多</a><a href="javascript:;">敖汉旗</a
                ><a href="javascript:;">安仁</a><a href="javascript:;">安乡</a
                ><a href="javascript:;">阿合奇</a
                ><a href="javascript:;">阿拉善右旗</a
                ><a href="javascript:;">安新</a
                ><a href="javascript:;">阿勒泰市</a>
              </li>
              <li>
                <span>B</span><a href="javascript:;">北京</a
                ><a href="javascript:;">保亭</a><a href="javascript:;">宝鸡</a
                ><a href="javascript:;">包头</a><a href="javascript:;">北安</a
                ><a href="javascript:;">蚌埠</a><a href="javascript:;">保定</a
                ><a href="javascript:;">北海</a><a href="javascript:;">白河</a
                ><a href="javascript:;">保山</a><a href="javascript:;">霸州</a
                ><a href="javascript:;">亳州</a><a href="javascript:;">白城</a
                ><a href="javascript:;">百色</a><a href="javascript:;">本溪</a
                ><a href="javascript:;">白银</a><a href="javascript:;">勃利</a
                ><a href="javascript:;">滨州</a><a href="javascript:;">巴楚</a
                ><a href="javascript:;">北票</a><a href="javascript:;">博乐</a
                ><a href="javascript:;">布尔津</a><a href="javascript:;">白山</a
                ><a href="javascript:;">巴彦淖尔</a
                ><a href="javascript:;">彬州</a><a href="javascript:;">巴中</a
                ><a href="javascript:;">博兴</a><a href="javascript:;">宝应</a
                ><a href="javascript:;">北川</a><a href="javascript:;">泊头</a
                ><a href="javascript:;">北镇</a><a href="javascript:;">滨海</a
                ><a href="javascript:;">白沙</a><a href="javascript:;">宾阳</a
                ><a href="javascript:;">八宿</a><a href="javascript:;">宝清</a
                ><a href="javascript:;">本溪县</a><a href="javascript:;">巴彦</a
                ><a href="javascript:;">博白</a><a href="javascript:;">北流</a
                ><a href="javascript:;">博罗</a><a href="javascript:;">拜泉</a
                ><a href="javascript:;">巴东</a><a href="javascript:;">宾县</a
                ><a href="javascript:;">毕节</a><a href="javascript:;">北屯</a>
              </li>
              <li>
                <span>C</span><a href="javascript:;">重庆</a
                ><a href="javascript:;">淳安</a><a href="javascript:;">成都</a
                ><a href="javascript:;">昌江</a><a href="javascript:;">常熟</a
                ><a href="javascript:;">长治</a><a href="javascript:;">长春</a
                ><a href="javascript:;">常德</a><a href="javascript:;">赤峰</a
                ><a href="javascript:;">长沙</a><a href="javascript:;">朝阳</a
                ><a href="javascript:;">常州</a><a href="javascript:;">滁州</a
                ><a href="javascript:;">潮州</a><a href="javascript:;">沧州</a
                ><a href="javascript:;">池州</a><a href="javascript:;">承德</a
                ><a href="javascript:;">昌都</a><a href="javascript:;">巢湖</a
                ><a href="javascript:;">郴州</a><a href="javascript:;">辰溪</a
                ><a href="javascript:;">昌图</a><a href="javascript:;">昌黎</a
                ><a href="javascript:;">长兴</a><a href="javascript:;">慈溪</a
                ><a href="javascript:;">茶陵</a><a href="javascript:;">赤壁</a
                ><a href="javascript:;">慈利</a><a href="javascript:;">曹县</a
                ><a href="javascript:;">崇左</a><a href="javascript:;">城固</a
                ><a href="javascript:;">长垣</a><a href="javascript:;">册亨</a
                ><a href="javascript:;">楚雄市</a><a href="javascript:;">长汀</a
                ><a href="javascript:;">昌吉市</a><a href="javascript:;">赤水</a
                ><a href="javascript:;">常山</a><a href="javascript:;">长泰</a
                ><a href="javascript:;">长葛</a><a href="javascript:;">苍南</a
                ><a href="javascript:;">崇州</a><a href="javascript:;">昌乐</a
                ><a href="javascript:;">澄迈</a><a href="javascript:;">长武</a
                ><a href="javascript:;">澄江</a><a href="javascript:;">长宁</a
                ><a href="javascript:;">从江</a><a href="javascript:;">崇仁</a
                ><a href="javascript:;">长阳</a><a href="javascript:;">长海</a
                ><a href="javascript:;">察右中旗</a
                ><a href="javascript:;">澄城</a><a href="javascript:;">岑溪</a
                ><a href="javascript:;">崇阳</a><a href="javascript:;">苍溪</a
                ><a href="javascript:;">楚雄</a><a href="javascript:;">磁县</a
                ><a href="javascript:;">沧源</a><a href="javascript:;">长丰</a
                ><a href="javascript:;">长岭</a
                ><a href="javascript:;">承德县</a>
              </li>
              <li>
                <span>D</span><a href="javascript:;">大连</a
                ><a href="javascript:;">敦煌</a><a href="javascript:;">大理市</a
                ><a href="javascript:;">东方</a><a href="javascript:;">定安</a
                ><a href="javascript:;">儋州</a><a href="javascript:;">迪庆</a
                ><a href="javascript:;">都江堰</a><a href="javascript:;">丹凤</a
                ><a href="javascript:;">大同</a><a href="javascript:;">敦化</a
                ><a href="javascript:;">丹东</a><a href="javascript:;">东莞</a
                ><a href="javascript:;">大庆</a><a href="javascript:;">东营</a
                ><a href="javascript:;">德阳</a><a href="javascript:;">丹阳</a
                ><a href="javascript:;">德宏</a><a href="javascript:;">东阳</a
                ><a href="javascript:;">东海</a><a href="javascript:;">砀山</a
                ><a href="javascript:;">定南</a><a href="javascript:;">德安</a
                ><a href="javascript:;">大石桥</a><a href="javascript:;">都匀</a
                ><a href="javascript:;">东安</a><a href="javascript:;">当涂</a
                ><a href="javascript:;">定西</a><a href="javascript:;">邓州</a
                ><a href="javascript:;">定州</a><a href="javascript:;">独山</a
                ><a href="javascript:;">当阳</a><a href="javascript:;">稻城</a
                ><a href="javascript:;">达州</a><a href="javascript:;">东明</a
                ><a href="javascript:;">德清</a><a href="javascript:;">德州</a
                ><a href="javascript:;">德昌</a><a href="javascript:;">代县</a
                ><a href="javascript:;">大安</a><a href="javascript:;">灯塔</a
                ><a href="javascript:;">德惠</a><a href="javascript:;">大厂</a
                ><a href="javascript:;">大通</a><a href="javascript:;">大关</a
                ><a href="javascript:;">德令哈</a><a href="javascript:;">大英</a
                ><a href="javascript:;">东山</a><a href="javascript:;">东台</a
                ><a href="javascript:;">大冶</a><a href="javascript:;">德兴</a
                ><a href="javascript:;">大新</a><a href="javascript:;">东港</a
                ><a href="javascript:;">大兴安岭</a
                ><a href="javascript:;">丹江口</a><a href="javascript:;">大邑</a
                ><a href="javascript:;">达拉特旗</a
                ><a href="javascript:;">丹巴</a><a href="javascript:;">东至</a
                ><a href="javascript:;">大余</a><a href="javascript:;">调兵山</a
                ><a href="javascript:;">定远</a><a href="javascript:;">达茂旗</a
                ><a href="javascript:;">德保</a><a href="javascript:;">东辽</a
                ><a href="javascript:;">定襄</a><a href="javascript:;">大荔</a
                ><a href="javascript:;">磴口</a><a href="javascript:;">东丰</a
                ><a href="javascript:;">都昌</a><a href="javascript:;">定边</a
                ><a href="javascript:;">大埔</a><a href="javascript:;">东光</a
                ><a href="javascript:;">杜尔伯特</a
                ><a href="javascript:;">大方</a><a href="javascript:;">岱山</a
                ><a href="javascript:;">东宁</a>
              </li>
              <li>
                <span>E</span><a href="javascript:;">峨眉山</a
                ><a href="javascript:;">恩施</a><a href="javascript:;">鄂州</a
                ><a href="javascript:;">恩平</a
                ><a href="javascript:;">鄂尔多斯</a
                ><a href="javascript:;">二连浩特</a
                ><a href="javascript:;">恩施市</a><a href="javascript:;">额敏</a
                ><a href="javascript:;">额济纳旗</a
                ><a href="javascript:;">鄂托克前旗</a
                ><a href="javascript:;">峨边</a
                ><a href="javascript:;">鄂伦春旗</a
                ><a href="javascript:;">鄂温克族旗</a>
              </li>
              <li>
                <span>F</span><a href="javascript:;">福鼎</a
                ><a href="javascript:;">佛山</a><a href="javascript:;">抚顺</a
                ><a href="javascript:;">阜新</a><a href="javascript:;">富蕴</a
                ><a href="javascript:;">阜阳</a><a href="javascript:;">福州</a
                ><a href="javascript:;">凤凰</a><a href="javascript:;">丰顺</a
                ><a href="javascript:;">扶余</a><a href="javascript:;">丰城</a
                ><a href="javascript:;">分宜</a><a href="javascript:;">凤阳</a
                ><a href="javascript:;">丰宁</a><a href="javascript:;">富裕</a
                ><a href="javascript:;">富锦</a><a href="javascript:;">防城港</a
                ><a href="javascript:;">扶绥</a><a href="javascript:;">富县</a
                ><a href="javascript:;">福泉</a><a href="javascript:;">抚州</a
                ><a href="javascript:;">福清</a><a href="javascript:;">福安</a
                ><a href="javascript:;">佛坪</a><a href="javascript:;">汾阳</a
                ><a href="javascript:;">凤城</a><a href="javascript:;">肥东</a
                ><a href="javascript:;">丰县</a><a href="javascript:;">扶沟</a
                ><a href="javascript:;">方正</a><a href="javascript:;">阜宁</a
                ><a href="javascript:;">佛冈</a><a href="javascript:;">费县</a
                ><a href="javascript:;">抚松</a><a href="javascript:;">阜城</a
                ><a href="javascript:;">阜南</a><a href="javascript:;">凤县</a
                ><a href="javascript:;">富宁</a><a href="javascript:;">丰镇</a
                ><a href="javascript:;">富源</a><a href="javascript:;">福海</a
                ><a href="javascript:;">富川</a><a href="javascript:;">阜平</a
                ><a href="javascript:;">抚远</a><a href="javascript:;">繁峙</a>
              </li>
              <li>
                <span>G</span><a href="javascript:;">广州</a
                ><a href="javascript:;">桂林</a><a href="javascript:;">贵阳</a
                ><a href="javascript:;">格尔木</a><a href="javascript:;">广德</a
                ><a href="javascript:;">广元</a><a href="javascript:;">赣州</a
                ><a href="javascript:;">固原</a><a href="javascript:;">高州</a
                ><a href="javascript:;">高雄</a><a href="javascript:;">广汉</a
                ><a href="javascript:;">固镇</a><a href="javascript:;">甘谷</a
                ><a href="javascript:;">巩义</a><a href="javascript:;">贵定</a
                ><a href="javascript:;">古田</a><a href="javascript:;">高密</a
                ><a href="javascript:;">公主岭</a><a href="javascript:;">广安</a
                ><a href="javascript:;">高碑店</a><a href="javascript:;">贵港</a
                ><a href="javascript:;">古交</a><a href="javascript:;">皋兰</a
                ><a href="javascript:;">甘泉</a><a href="javascript:;">高邑</a
                ><a href="javascript:;">高平</a><a href="javascript:;">谷城</a
                ><a href="javascript:;">古浪</a><a href="javascript:;">高台</a
                ><a href="javascript:;">根河</a><a href="javascript:;">贵溪</a
                ><a href="javascript:;">桂平</a><a href="javascript:;">高安</a
                ><a href="javascript:;">甘孜</a><a href="javascript:;">高邮</a
                ><a href="javascript:;">盖州</a><a href="javascript:;">光山</a
                ><a href="javascript:;">沽源</a><a href="javascript:;">甘南</a
                ><a href="javascript:;">灌南</a><a href="javascript:;">广南</a
                ><a href="javascript:;">光泽</a><a href="javascript:;">固始</a
                ><a href="javascript:;">恭城</a><a href="javascript:;">广平</a
                ><a href="javascript:;">灌云</a><a href="javascript:;">共青城</a
                ><a href="javascript:;">广宁</a><a href="javascript:;">固安</a
                ><a href="javascript:;">高阳</a><a href="javascript:;">甘孜县</a
                ><a href="javascript:;">瓜州</a><a href="javascript:;">广水</a
                ><a href="javascript:;">古丈</a><a href="javascript:;">果洛</a
                ><a href="javascript:;">故城</a><a href="javascript:;">关岭</a
                ><a href="javascript:;">甘洛</a>
              </li>
              <li>
                <span>H</span><a href="javascript:;">哈尔滨</a
                ><a href="javascript:;">杭州</a><a href="javascript:;">黄山</a
                ><a href="javascript:;">海口</a><a href="javascript:;">海宁</a
                ><a href="javascript:;">湖州</a
                ><a href="javascript:;">呼和浩特</a
                ><a href="javascript:;">华阴</a><a href="javascript:;">黄陵</a
                ><a href="javascript:;">韩城</a><a href="javascript:;">汉中</a
                ><a href="javascript:;">虎林</a><a href="javascript:;">惠安</a
                ><a href="javascript:;">淮北</a><a href="javascript:;">邯郸</a
                ><a href="javascript:;">合肥</a><a href="javascript:;">黑河</a
                ><a href="javascript:;">怀化</a><a href="javascript:;">哈密市</a
                ><a href="javascript:;">淮南</a><a href="javascript:;">衡水</a
                ><a href="javascript:;">鹤山</a><a href="javascript:;">黄石</a
                ><a href="javascript:;">和田市</a><a href="javascript:;">衡阳</a
                ><a href="javascript:;">惠州</a><a href="javascript:;">海晏</a
                ><a href="javascript:;">汉寿</a><a href="javascript:;">淮安</a
                ><a href="javascript:;">海盐</a><a href="javascript:;">衡山</a
                ><a href="javascript:;">河源</a><a href="javascript:;">和平</a
                ><a href="javascript:;">黄梅</a><a href="javascript:;">鹤壁</a
                ><a href="javascript:;">海城</a><a href="javascript:;">海阳</a
                ><a href="javascript:;">葫芦岛</a><a href="javascript:;">菏泽</a
                ><a href="javascript:;">潢川</a><a href="javascript:;">侯马</a
                ><a href="javascript:;">红河</a><a href="javascript:;">河口</a
                ><a href="javascript:;">怀仁</a><a href="javascript:;">汉源</a
                ><a href="javascript:;">鹤岗</a><a href="javascript:;">海林</a
                ><a href="javascript:;">海伦</a><a href="javascript:;">淮滨</a
                ><a href="javascript:;">汉阴</a><a href="javascript:;">获嘉</a
                ><a href="javascript:;">和静</a><a href="javascript:;">会同</a
                ><a href="javascript:;">怀远</a><a href="javascript:;">湟源</a
                ><a href="javascript:;">桦南</a><a href="javascript:;">黄冈</a
                ><a href="javascript:;">海安</a><a href="javascript:;">河池</a
                ><a href="javascript:;">珲春</a><a href="javascript:;">贺州</a
                ><a href="javascript:;">呼伦贝尔</a
                ><a href="javascript:;">花莲</a><a href="javascript:;">和龙</a
                ><a href="javascript:;">海西</a><a href="javascript:;">贺兰</a
                ><a href="javascript:;">海东</a><a href="javascript:;">河津</a
                ><a href="javascript:;">海南</a><a href="javascript:;">海北</a
                ><a href="javascript:;">红原</a><a href="javascript:;">桓台</a
                ><a href="javascript:;">怀集</a><a href="javascript:;">怀安</a
                ><a href="javascript:;">衡南</a><a href="javascript:;">华亭</a
                ><a href="javascript:;">杭锦后旗</a
                ><a href="javascript:;">和田</a><a href="javascript:;">横峰</a
                ><a href="javascript:;">会昌</a><a href="javascript:;">汉川</a
                ><a href="javascript:;">洪洞</a
                ><a href="javascript:;">霍林郭勒</a
                ><a href="javascript:;">霍州</a><a href="javascript:;">合阳</a
                ><a href="javascript:;">霍邱</a><a href="javascript:;">和硕</a
                ><a href="javascript:;">霍城</a><a href="javascript:;">红安</a
                ><a href="javascript:;">海原</a><a href="javascript:;">华容</a
                ><a href="javascript:;">湖口</a><a href="javascript:;">桦川</a
                ><a href="javascript:;">鹤庆</a><a href="javascript:;">霍山</a
                ><a href="javascript:;">徽县</a><a href="javascript:;">华蓥</a
                ><a href="javascript:;">合作</a><a href="javascript:;">桓仁</a
                ><a href="javascript:;">含山</a><a href="javascript:;">辉县</a
                ><a href="javascript:;">怀来</a><a href="javascript:;">合浦</a
                ><a href="javascript:;">黄平</a><a href="javascript:;">黑水</a
                ><a href="javascript:;">化德</a><a href="javascript:;">惠东</a
                ><a href="javascript:;">惠民</a><a href="javascript:;">化州</a
                ><a href="javascript:;">霍尔果斯</a>
              </li>
            </ul>
            <ul class="station_search_list" v-show="num == 1">
              <li>
                <span>J</span><a href="javascript:;">九江</a
                ><a href="javascript:;">九寨沟</a><a href="javascript:;">介休</a
                ><a href="javascript:;">济南</a><a href="javascript:;">鸡西</a
                ><a href="javascript:;">吉林市</a><a href="javascript:;">集安</a
                ><a href="javascript:;">景德镇</a
                ><a href="javascript:;">井冈山</a><a href="javascript:;">金华</a
                ><a href="javascript:;">景洪</a><a href="javascript:;">江门</a
                ><a href="javascript:;">佳木斯</a><a href="javascript:;">济宁</a
                ><a href="javascript:;">江阴</a><a href="javascript:;">嘉峪关</a
                ><a href="javascript:;">锦州</a><a href="javascript:;">荆州</a
                ><a href="javascript:;">嘉兴</a><a href="javascript:;">嘉善</a
                ><a href="javascript:;">缙云</a><a href="javascript:;">建德</a
                ><a href="javascript:;">酒泉</a><a href="javascript:;">吉安</a
                ><a href="javascript:;">揭阳</a><a href="javascript:;">进贤</a
                ><a href="javascript:;">江山</a><a href="javascript:;">绩溪</a
                ><a href="javascript:;">胶州</a><a href="javascript:;">江油</a
                ><a href="javascript:;">晋城</a><a href="javascript:;">焦作</a
                ><a href="javascript:;">吉首</a><a href="javascript:;">荆门</a
                ><a href="javascript:;">金昌</a><a href="javascript:;">晋中</a
                ><a href="javascript:;">济源</a><a href="javascript:;">蛟河</a
                ><a href="javascript:;">靖远</a><a href="javascript:;">晋江</a
                ><a href="javascript:;">景泰</a><a href="javascript:;">建昌</a
                ><a href="javascript:;">靖州</a><a href="javascript:;">建水</a
                ><a href="javascript:;">精河</a><a href="javascript:;">句容</a
                ><a href="javascript:;">靖江</a><a href="javascript:;">建瓯</a
                ><a href="javascript:;">靖边</a><a href="javascript:;">嘉义市</a
                ><a href="javascript:;">金门</a><a href="javascript:;">景宁</a
                ><a href="javascript:;">金湖</a><a href="javascript:;">莒南</a
                ><a href="javascript:;">简阳</a><a href="javascript:;">莒县</a
                ><a href="javascript:;">靖宇</a><a href="javascript:;">旌德</a
                ><a href="javascript:;">建始</a><a href="javascript:;">江陵</a
                ><a href="javascript:;">将乐</a><a href="javascript:;">泾阳</a
                ><a href="javascript:;">晋州</a><a href="javascript:;">景县</a
                ><a href="javascript:;">吉水</a><a href="javascript:;">巨鹿</a
                ><a href="javascript:;">金寨</a><a href="javascript:;">巨野</a
                ><a href="javascript:;">交城</a><a href="javascript:;">集贤</a
                ><a href="javascript:;">鄄城</a><a href="javascript:;">江口</a
                ><a href="javascript:;">靖西</a><a href="javascript:;">嘉荫</a
                ><a href="javascript:;">建平</a><a href="javascript:;">江华</a
                ><a href="javascript:;">京山</a><a href="javascript:;">建湖</a
                ><a href="javascript:;">建宁</a><a href="javascript:;">井陉</a
                ><a href="javascript:;">嘉祥</a><a href="javascript:;">江永</a
                ><a href="javascript:;">剑阁</a><a href="javascript:;">鸡东</a
                ><a href="javascript:;">泾川</a><a href="javascript:;">泾县</a
                ><a href="javascript:;">稷山</a>
              </li>
              <li>
                <span>K</span><a href="javascript:;">昆明</a
                ><a href="javascript:;">昆山</a><a href="javascript:;">喀什市</a
                ><a href="javascript:;">克拉玛依</a
                ><a href="javascript:;">库车</a><a href="javascript:;">库尔勒</a
                ><a href="javascript:;">开封</a><a href="javascript:;">凯里</a
                ><a href="javascript:;">开平</a><a href="javascript:;">岢岚</a
                ><a href="javascript:;">奎屯</a><a href="javascript:;">开原</a
                ><a href="javascript:;">开江</a><a href="javascript:;">康定</a
                ><a href="javascript:;">开化</a><a href="javascript:;">宽甸</a
                ><a href="javascript:;">开阳</a><a href="javascript:;">康平</a
                ><a href="javascript:;">克东</a><a href="javascript:;">克山</a
                ><a href="javascript:;">喀什</a
                ><a href="javascript:;">科右前旗</a
                ><a href="javascript:;">开鲁</a>
              </li>
              <li>
                <span>L</span><a href="javascript:;">丽江</a
                ><a href="javascript:;">拉萨</a><a href="javascript:;">乐东</a
                ><a href="javascript:;">陵水</a><a href="javascript:;">兰州</a
                ><a href="javascript:;">林芝</a><a href="javascript:;">灵石</a
                ><a href="javascript:;">临汾</a><a href="javascript:;">廊坊</a
                ><a href="javascript:;">龙海</a><a href="javascript:;">庐山</a
                ><a href="javascript:;">乐山</a><a href="javascript:;">丽水</a
                ><a href="javascript:;">龙岩</a><a href="javascript:;">洛阳</a
                ><a href="javascript:;">辽阳</a><a href="javascript:;">辽源</a
                ><a href="javascript:;">连云港</a><a href="javascript:;">柳州</a
                ><a href="javascript:;">泸州</a><a href="javascript:;">隆化</a
                ><a href="javascript:;">临沂</a><a href="javascript:;">兰溪</a
                ><a href="javascript:;">六盘水</a><a href="javascript:;">罗平</a
                ><a href="javascript:;">庐江</a><a href="javascript:;">兰考</a
                ><a href="javascript:;">娄底</a><a href="javascript:;">龙川</a
                ><a href="javascript:;">乐昌</a><a href="javascript:;">耒阳</a
                ><a href="javascript:;">陇西</a><a href="javascript:;">龙游</a
                ><a href="javascript:;">醴陵</a><a href="javascript:;">灵宝</a
                ><a href="javascript:;">莱阳</a><a href="javascript:;">滦县</a
                ><a href="javascript:;">略阳</a><a href="javascript:;">聊城</a
                ><a href="javascript:;">梁山</a><a href="javascript:;">漯河</a
                ><a href="javascript:;">乐平</a><a href="javascript:;">龙南</a
                ><a href="javascript:;">凌源</a><a href="javascript:;">临澧</a
                ><a href="javascript:;">临海</a><a href="javascript:;">临沧</a
                ><a href="javascript:;">临江</a><a href="javascript:;">临西</a
                ><a href="javascript:;">澧县</a><a href="javascript:;">溧阳</a
                ><a href="javascript:;">连城</a><a href="javascript:;">滦平</a
                ><a href="javascript:;">陆川</a><a href="javascript:;">涞源</a
                ><a href="javascript:;">灵丘</a><a href="javascript:;">隆昌</a
                ><a href="javascript:;">六安</a><a href="javascript:;">荔波</a
                ><a href="javascript:;">莱西</a><a href="javascript:;">龙里</a
                ><a href="javascript:;">鹿寨</a><a href="javascript:;">来宾</a
                ><a href="javascript:;">隆安</a><a href="javascript:;">陇县</a
                ><a href="javascript:;">临城</a><a href="javascript:;">黎城</a
                ><a href="javascript:;">鲁山</a><a href="javascript:;">卢龙</a
                ><a href="javascript:;">涟源</a><a href="javascript:;">临泽</a
                ><a href="javascript:;">轮台</a><a href="javascript:;">两当</a
                ><a href="javascript:;">龙山</a><a href="javascript:;">柳河</a
                ><a href="javascript:;">林口</a><a href="javascript:;">龙泉</a
                ><a href="javascript:;">阆中</a><a href="javascript:;">黎平</a
                ><a href="javascript:;">陆良</a><a href="javascript:;">连州</a
                ><a href="javascript:;">龙口</a><a href="javascript:;">陆丰</a
                ><a href="javascript:;">浏阳</a><a href="javascript:;">龙胜</a
                ><a href="javascript:;">凉山</a><a href="javascript:;">林州</a
                ><a href="javascript:;">泸定</a><a href="javascript:;">吕梁</a
                ><a href="javascript:;">栾川</a><a href="javascript:;">涟水</a
                ><a href="javascript:;">陇南</a><a href="javascript:;">理县</a
                ><a href="javascript:;">利川</a><a href="javascript:;">灵武</a
                ><a href="javascript:;">临朐</a><a href="javascript:;">临沭</a
                ><a href="javascript:;">林西</a><a href="javascript:;">临高</a
                ><a href="javascript:;">禄丰</a><a href="javascript:;">岚县</a
                ><a href="javascript:;">龙江</a><a href="javascript:;">邻水</a
                ><a href="javascript:;">芦溪</a><a href="javascript:;">龙门</a
                ><a href="javascript:;">涞水</a><a href="javascript:;">龙陵</a
                ><a href="javascript:;">临湘</a><a href="javascript:;">凌海</a
                ><a href="javascript:;">辽阳县</a><a href="javascript:;">乐安</a
                ><a href="javascript:;">雷山</a><a href="javascript:;">临邑</a
                ><a href="javascript:;">娄烦</a><a href="javascript:;">灵璧</a
                ><a href="javascript:;">临县</a><a href="javascript:;">连江</a
                ><a href="javascript:;">龙井</a><a href="javascript:;">罗山</a
                ><a href="javascript:;">廉江</a><a href="javascript:;">临颍</a
                ><a href="javascript:;">蠡县</a><a href="javascript:;">澜沧</a
                ><a href="javascript:;">泸县</a><a href="javascript:;">罗城</a
                ><a href="javascript:;">来凤</a><a href="javascript:;">礼泉</a
                ><a href="javascript:;">罗江</a><a href="javascript:;">郎溪</a
                ><a href="javascript:;">雷州</a><a href="javascript:;">利津</a
                ><a href="javascript:;">临清</a><a href="javascript:;">罗源</a>
              </li>
              <li>
                <span>M</span><a href="javascript:;">牡丹江</a
                ><a href="javascript:;">漠河</a><a href="javascript:;">绵阳</a
                ><a href="javascript:;">明光</a><a href="javascript:;">民权</a
                ><a href="javascript:;">马鞍山</a><a href="javascript:;">渑池</a
                ><a href="javascript:;">勉县</a><a href="javascript:;">麻城</a
                ><a href="javascript:;">满洲里</a><a href="javascript:;">茂名</a
                ><a href="javascript:;">梅河口</a><a href="javascript:;">眉山</a
                ><a href="javascript:;">米易</a><a href="javascript:;">穆棱</a
                ><a href="javascript:;">密山</a><a href="javascript:;">米脂</a
                ><a href="javascript:;">麻阳</a><a href="javascript:;">蒙自</a
                ><a href="javascript:;">民和</a><a href="javascript:;">玛纳斯</a
                ><a href="javascript:;">绵竹</a><a href="javascript:;">梅州</a
                ><a href="javascript:;">芒市</a><a href="javascript:;">弥勒</a
                ><a href="javascript:;">汨罗</a><a href="javascript:;">马祖</a
                ><a href="javascript:;">茂县</a><a href="javascript:;">蒙阴</a
                ><a href="javascript:;">马龙</a><a href="javascript:;">牟定</a
                ><a href="javascript:;">勐腊</a><a href="javascript:;">岷县</a
                ><a href="javascript:;">弥渡</a><a href="javascript:;">勐海</a
                ><a href="javascript:;">闽清</a><a href="javascript:;">门源</a
                ><a href="javascript:;">眉县</a><a href="javascript:;">冕宁</a
                ><a href="javascript:;">墨玉</a><a href="javascript:;">玛沁</a
                ><a href="javascript:;">民乐</a><a href="javascript:;">茫崖</a>
              </li>
              <li>
                <span>N</span><a href="javascript:;">南京</a
                ><a href="javascript:;">南通</a><a href="javascript:;">农安</a
                ><a href="javascript:;">宁波</a><a href="javascript:;">南昌</a
                ><a href="javascript:;">南充</a><a href="javascript:;">宁德</a
                ><a href="javascript:;">南宁</a><a href="javascript:;">南阳</a
                ><a href="javascript:;">南平</a><a href="javascript:;">宁国</a
                ><a href="javascript:;">宁乡</a><a href="javascript:;">嫩江</a
                ><a href="javascript:;">宁蒗</a><a href="javascript:;">宁海</a
                ><a href="javascript:;">宁武</a><a href="javascript:;">讷河</a
                ><a href="javascript:;">内江</a><a href="javascript:;">南丹</a
                ><a href="javascript:;">宁明</a><a href="javascript:;">南召</a
                ><a href="javascript:;">宁安</a><a href="javascript:;">那曲</a
                ><a href="javascript:;">南投</a><a href="javascript:;">宁城</a
                ><a href="javascript:;">宁阳</a><a href="javascript:;">宁强</a
                ><a href="javascript:;">尼木</a><a href="javascript:;">宁远</a
                ><a href="javascript:;">宁陵</a><a href="javascript:;">奈曼旗</a
                ><a href="javascript:;">南部县</a><a href="javascript:;">南靖</a
                ><a href="javascript:;">南华</a><a href="javascript:;">纳雍</a
                ><a href="javascript:;">南丰</a><a href="javascript:;">南雄</a
                ><a href="javascript:;">宁化</a><a href="javascript:;">内乡</a
                ><a href="javascript:;">南城</a><a href="javascript:;">南陵</a
                ><a href="javascript:;">南昌县</a><a href="javascript:;">南宫</a
                ><a href="javascript:;">尼勒克</a
                ><a href="javascript:;">南江</a>
              </li>
              <li>
                <span>P</span><a href="javascript:;">平遥</a
                ><a href="javascript:;">盘锦</a><a href="javascript:;">平凉</a
                ><a href="javascript:;">普宁</a><a href="javascript:;">平潭</a
                ><a href="javascript:;">凭祥</a><a href="javascript:;">莆田</a
                ><a href="javascript:;">浦江</a><a href="javascript:;">攀枝花</a
                ><a href="javascript:;">平泉</a><a href="javascript:;">平果</a
                ><a href="javascript:;">平湖</a><a href="javascript:;">濮阳</a
                ><a href="javascript:;">磐石</a><a href="javascript:;">萍乡</a
                ><a href="javascript:;">蒲城</a><a href="javascript:;">蓬安</a
                ><a href="javascript:;">蓬溪</a><a href="javascript:;">平顶山</a
                ><a href="javascript:;">平山</a><a href="javascript:;">邳州</a
                ><a href="javascript:;">平度</a><a href="javascript:;">普洱</a
                ><a href="javascript:;">屏东</a><a href="javascript:;">平阳</a
                ><a href="javascript:;">平邑</a><a href="javascript:;">平南</a
                ><a href="javascript:;">彭州</a><a href="javascript:;">平定</a
                ><a href="javascript:;">平罗</a><a href="javascript:;">平原</a
                ><a href="javascript:;">盘州</a><a href="javascript:;">普定</a
                ><a href="javascript:;">彭阳</a><a href="javascript:;">屏南</a
                ><a href="javascript:;">盘山</a><a href="javascript:;">屏山</a
                ><a href="javascript:;">平乡</a><a href="javascript:;">皮山</a
                ><a href="javascript:;">沛县</a><a href="javascript:;">蒲江</a
                ><a href="javascript:;">平昌</a><a href="javascript:;">彭泽</a
                ><a href="javascript:;">屏边</a><a href="javascript:;">平江</a
                ><a href="javascript:;">普安</a><a href="javascript:;">鄱阳</a
                ><a href="javascript:;">澎湖</a>
              </li>
              <li>
                <span>Q</span><a href="javascript:;">青岛</a
                ><a href="javascript:;">琼海</a><a href="javascript:;">琼中</a
                ><a href="javascript:;">岐山</a><a href="javascript:;">曲阜</a
                ><a href="javascript:;">秦皇岛</a
                ><a href="javascript:;">齐齐哈尔</a
                ><a href="javascript:;">且末</a><a href="javascript:;">庆阳</a
                ><a href="javascript:;">泉州</a><a href="javascript:;">衢州</a
                ><a href="javascript:;">青县</a><a href="javascript:;">启东</a
                ><a href="javascript:;">青田</a><a href="javascript:;">全州</a
                ><a href="javascript:;">曲靖</a><a href="javascript:;">祁东</a
                ><a href="javascript:;">祁门</a><a href="javascript:;">青铜峡</a
                ><a href="javascript:;">青州</a><a href="javascript:;">蕲春</a
                ><a href="javascript:;">清原</a><a href="javascript:;">清涧</a
                ><a href="javascript:;">清远</a><a href="javascript:;">七台河</a
                ><a href="javascript:;">钦州</a><a href="javascript:;">千阳</a
                ><a href="javascript:;">沁县</a><a href="javascript:;">沁阳</a
                ><a href="javascript:;">渠县</a><a href="javascript:;">迁安</a
                ><a href="javascript:;">清水</a><a href="javascript:;">曲水</a
                ><a href="javascript:;">潜江</a><a href="javascript:;">邛崃</a
                ><a href="javascript:;">清镇</a><a href="javascript:;">栖霞</a
                ><a href="javascript:;">齐河</a><a href="javascript:;">庆元</a
                ><a href="javascript:;">祁连</a><a href="javascript:;">青神</a
                ><a href="javascript:;">潜山</a><a href="javascript:;">黔南</a
                ><a href="javascript:;">黔西</a><a href="javascript:;">犍为</a
                ><a href="javascript:;">祁阳</a><a href="javascript:;">秦安</a
                ><a href="javascript:;">祁县</a><a href="javascript:;">青川</a
                ><a href="javascript:;">黔西南</a><a href="javascript:;">乾县</a
                ><a href="javascript:;">乾安</a><a href="javascript:;">黔东南</a
                ><a href="javascript:;">清徐</a><a href="javascript:;">庆安</a
                ><a href="javascript:;">丘北</a><a href="javascript:;">全椒</a
                ><a href="javascript:;">青龙</a><a href="javascript:;">确山</a
                ><a href="javascript:;">清河</a>
              </li>
            </ul>
            <ul class="station_search_list" v-show="num == 2">
              <li>
                <span>R</span><a href="javascript:;">日喀则</a
                ><a href="javascript:;">瑞安</a><a href="javascript:;">瑞丽</a
                ><a href="javascript:;">荣成</a><a href="javascript:;">汝州</a
                ><a href="javascript:;">任丘</a><a href="javascript:;">日照</a
                ><a href="javascript:;">瑞昌</a><a href="javascript:;">汝阳</a
                ><a href="javascript:;">瑞金</a><a href="javascript:;">如皋</a
                ><a href="javascript:;">乳山</a><a href="javascript:;">如东</a
                ><a href="javascript:;">汝城</a><a href="javascript:;">汝南</a
                ><a href="javascript:;">仁化</a><a href="javascript:;">饶阳</a
                ><a href="javascript:;">融水</a><a href="javascript:;">榕江</a
                ><a href="javascript:;">芮城</a><a href="javascript:;">乳源</a
                ><a href="javascript:;">仁布</a><a href="javascript:;">饶河</a
                ><a href="javascript:;">饶平</a><a href="javascript:;">融安</a
                ><a href="javascript:;">若羌</a><a href="javascript:;">容县</a>
              </li>
              <li>
                <span>S</span><a href="javascript:;">上海</a
                ><a href="javascript:;">苏州</a><a href="javascript:;">绍兴</a
                ><a href="javascript:;">深圳</a><a href="javascript:;">三亚</a
                ><a href="javascript:;">嵊泗</a><a href="javascript:;">施秉</a
                ><a href="javascript:;">上饶</a><a href="javascript:;">绥芬河</a
                ><a href="javascript:;">韶关</a><a href="javascript:;">石河子</a
                ><a href="javascript:;">石家庄</a><a href="javascript:;">石林</a
                ><a href="javascript:;">三门峡</a><a href="javascript:;">三明</a
                ><a href="javascript:;">四平</a><a href="javascript:;">商丘</a
                ><a href="javascript:;">泗水</a><a href="javascript:;">韶山</a
                ><a href="javascript:;">汕头</a><a href="javascript:;">邵武</a
                ><a href="javascript:;">沙县</a><a href="javascript:;">沈阳</a
                ><a href="javascript:;">十堰</a><a href="javascript:;">歙县</a
                ><a href="javascript:;">宿州</a><a href="javascript:;">神农架</a
                ><a href="javascript:;">鄯善</a><a href="javascript:;">寿阳</a
                ><a href="javascript:;">宿松</a><a href="javascript:;">沙河市</a
                ><a href="javascript:;">顺昌</a><a href="javascript:;">肃宁</a
                ><a href="javascript:;">舒城</a><a href="javascript:;">濉溪</a
                ><a href="javascript:;">邵阳</a><a href="javascript:;">随州</a
                ><a href="javascript:;">石门</a><a href="javascript:;">绥化</a
                ><a href="javascript:;">嵊州</a><a href="javascript:;">涉县</a
                ><a href="javascript:;">松原</a><a href="javascript:;">朔州</a
                ><a href="javascript:;">沈丘</a><a href="javascript:;">遂宁</a
                ><a href="javascript:;">松潘</a><a href="javascript:;">汕尾</a
                ><a href="javascript:;">宿迁</a><a href="javascript:;">石泉</a
                ><a href="javascript:;">松滋</a><a href="javascript:;">绥中</a
                ><a href="javascript:;">舒兰</a><a href="javascript:;">绥棱</a
                ><a href="javascript:;">绥阳</a><a href="javascript:;">双鸭山</a
                ><a href="javascript:;">三河</a><a href="javascript:;">孙吴</a
                ><a href="javascript:;">神木</a><a href="javascript:;">师宗</a
                ><a href="javascript:;">绥德</a><a href="javascript:;">三原</a
                ><a href="javascript:;">遂溪</a><a href="javascript:;">水富</a
                ><a href="javascript:;">邵东</a><a href="javascript:;">山丹</a
                ><a href="javascript:;">沙湾</a><a href="javascript:;">尚志</a
                ><a href="javascript:;">泗阳</a><a href="javascript:;">上杭</a
                ><a href="javascript:;">石嘴山</a><a href="javascript:;">商洛</a
                ><a href="javascript:;">三门</a><a href="javascript:;">四会</a
                ><a href="javascript:;">遂昌</a><a href="javascript:;">睢宁</a
                ><a href="javascript:;">石阡</a><a href="javascript:;">泗洪</a
                ><a href="javascript:;">三江</a><a href="javascript:;">肃北</a
                ><a href="javascript:;">泗县</a><a href="javascript:;">双辽</a
                ><a href="javascript:;">睢县</a><a href="javascript:;">商都</a
                ><a href="javascript:;">双牌</a><a href="javascript:;">双峰</a
                ><a href="javascript:;">三穗</a><a href="javascript:;">沭阳</a
                ><a href="javascript:;">松桃</a><a href="javascript:;">三都</a
                ><a href="javascript:;">思南</a><a href="javascript:;">始兴</a
                ><a href="javascript:;">石城</a
                ><a href="javascript:;">苏尼特左旗</a
                ><a href="javascript:;">松溪</a><a href="javascript:;">山阴</a
                ><a href="javascript:;">寿县</a><a href="javascript:;">神池</a
                ><a href="javascript:;">商河</a><a href="javascript:;">嵩明</a
                ><a href="javascript:;">什邡</a><a href="javascript:;">射阳</a
                ><a href="javascript:;">遂平</a><a href="javascript:;">商南</a
                ><a href="javascript:;">商城</a><a href="javascript:;">莎车</a
                ><a href="javascript:;">疏勒</a><a href="javascript:;">松阳</a
                ><a href="javascript:;">桑植</a><a href="javascript:;">深州</a
                ><a href="javascript:;">绥宁</a
                ><a href="javascript:;">苏尼特右旗</a
                ><a href="javascript:;">绥滨</a>
              </li>
              <li>
                <span>T</span><a href="javascript:;">天津</a
                ><a href="javascript:;">吐鲁番</a><a href="javascript:;">屯昌</a
                ><a href="javascript:;">太原</a><a href="javascript:;">潼关</a
                ><a href="javascript:;">泰安</a><a href="javascript:;">塔城</a
                ><a href="javascript:;">通化</a><a href="javascript:;">通辽</a
                ><a href="javascript:;">铜陵</a><a href="javascript:;">桐庐</a
                ><a href="javascript:;">图们</a><a href="javascript:;">天水</a
                ><a href="javascript:;">唐山</a><a href="javascript:;">天台</a
                ><a href="javascript:;">台州</a><a href="javascript:;">泰州</a
                ><a href="javascript:;">桐乡</a><a href="javascript:;">台北</a
                ><a href="javascript:;">太仓</a><a href="javascript:;">台山</a
                ><a href="javascript:;">滕州</a><a href="javascript:;">桐城</a
                ><a href="javascript:;">太湖</a><a href="javascript:;">汤阴</a
                ><a href="javascript:;">桐梓</a><a href="javascript:;">同心</a
                ><a href="javascript:;">铁岭</a><a href="javascript:;">台前</a
                ><a href="javascript:;">泰来</a><a href="javascript:;">泰顺</a
                ><a href="javascript:;">洮南</a><a href="javascript:;">铁力</a
                ><a href="javascript:;">塔河</a><a href="javascript:;">腾冲</a
                ><a href="javascript:;">田东</a><a href="javascript:;">田林</a
                ><a href="javascript:;">通道</a><a href="javascript:;">天祝</a
                ><a href="javascript:;">台南</a><a href="javascript:;">台东</a
                ><a href="javascript:;">台中</a><a href="javascript:;">天门</a
                ><a href="javascript:;">泰兴</a><a href="javascript:;">天长</a
                ><a href="javascript:;">天全</a><a href="javascript:;">太和</a
                ><a href="javascript:;">通渭</a><a href="javascript:;">郯城</a
                ><a href="javascript:;">泰和</a><a href="javascript:;">铜鼓</a
                ><a href="javascript:;">台安</a><a href="javascript:;">藤县</a
                ><a href="javascript:;">通榆</a><a href="javascript:;">天镇</a
                ><a href="javascript:;">通海</a><a href="javascript:;">桃源</a
                ><a href="javascript:;">泰宁</a><a href="javascript:;">桐柏</a
                ><a href="javascript:;">托里</a><a href="javascript:;">唐河</a
                ><a href="javascript:;">通化县</a><a href="javascript:;">桃江</a
                ><a href="javascript:;">汤原</a><a href="javascript:;">通河</a
                ><a href="javascript:;">太谷</a
                ><a href="javascript:;">图木舒克</a
                ><a href="javascript:;">同江</a><a href="javascript:;">塔城市</a
                ><a href="javascript:;">铜仁</a>
              </li>
              <li>
                <span>W</span><a href="javascript:;">无锡</a
                ><a href="javascript:;">武夷山</a
                ><a href="javascript:;">乌鲁木齐</a
                ><a href="javascript:;">文昌</a><a href="javascript:;">万宁</a
                ><a href="javascript:;">五指山</a
                ><a href="javascript:;">五大连池</a
                ><a href="javascript:;">潍坊</a><a href="javascript:;">武汉</a
                ><a href="javascript:;">芜湖</a><a href="javascript:;">威海</a
                ><a href="javascript:;">五华</a
                ><a href="javascript:;">乌兰浩特</a
                ><a href="javascript:;">婺源</a><a href="javascript:;">温州</a
                ><a href="javascript:;">梧州</a><a href="javascript:;">温岭</a
                ><a href="javascript:;">武威</a><a href="javascript:;">吴桥</a
                ><a href="javascript:;">武义</a><a href="javascript:;">瓦房店</a
                ><a href="javascript:;">万年</a><a href="javascript:;">渭南</a
                ><a href="javascript:;">武功</a><a href="javascript:;">万源</a
                ><a href="javascript:;">乌海</a><a href="javascript:;">武山</a
                ><a href="javascript:;">武穴</a><a href="javascript:;">文山市</a
                ><a href="javascript:;">五常</a><a href="javascript:;">汪清</a
                ><a href="javascript:;">武乡</a><a href="javascript:;">望都</a
                ><a href="javascript:;">武安</a><a href="javascript:;">乌兰</a
                ><a href="javascript:;">乌苏</a><a href="javascript:;">五原</a
                ><a href="javascript:;">闻喜</a
                ><a href="javascript:;">乌兰察布</a
                ><a href="javascript:;">吴忠</a><a href="javascript:;">吴川</a
                ><a href="javascript:;">五莲</a><a href="javascript:;">文成</a
                ><a href="javascript:;">武陟</a><a href="javascript:;">围场</a
                ><a href="javascript:;">吴堡</a><a href="javascript:;">旺苍</a
                ><a href="javascript:;">乌拉特中旗</a
                ><a href="javascript:;">五台</a><a href="javascript:;">武胜</a
                ><a href="javascript:;">武宁</a><a href="javascript:;">乌什</a
                ><a href="javascript:;">渭源</a><a href="javascript:;">涡阳</a
                ><a href="javascript:;">乌拉特前旗</a
                ><a href="javascript:;">万全</a><a href="javascript:;">五寨</a
                ><a href="javascript:;">文水</a><a href="javascript:;">文安</a
                ><a href="javascript:;">务川</a><a href="javascript:;">无为</a
                ><a href="javascript:;">威宁</a><a href="javascript:;">万安</a
                ><a href="javascript:;">汶川</a><a href="javascript:;">威信</a
                ><a href="javascript:;">巫山</a>
              </li>
              <li>
                <span>X</span><a href="javascript:;">西安</a
                ><a href="javascript:;">厦门</a
                ><a href="javascript:;">西双版纳</a
                ><a href="javascript:;">香港</a><a href="javascript:;">咸阳</a
                ><a href="javascript:;">西宁</a><a href="javascript:;">西昌</a
                ><a href="javascript:;">襄阳</a><a href="javascript:;">夏河</a
                ><a href="javascript:;">兴隆</a
                ><a href="javascript:;">锡林浩特</a
                ><a href="javascript:;">新乡</a><a href="javascript:;">信阳</a
                ><a href="javascript:;">徐州</a><a href="javascript:;">忻州</a
                ><a href="javascript:;">湘潭</a><a href="javascript:;">新余</a
                ><a href="javascript:;">香格里拉</a
                ><a href="javascript:;">盱眙</a><a href="javascript:;">仙居</a
                ><a href="javascript:;">新昌</a><a href="javascript:;">新沂</a
                ><a href="javascript:;">辛集</a><a href="javascript:;">湘乡</a
                ><a href="javascript:;">新化</a><a href="javascript:;">溆浦</a
                ><a href="javascript:;">新干</a><a href="javascript:;">兴国</a
                ><a href="javascript:;">信丰</a><a href="javascript:;">咸宁</a
                ><a href="javascript:;">邢台</a><a href="javascript:;">夏邑</a
                ><a href="javascript:;">兴宁</a><a href="javascript:;">荥阳</a
                ><a href="javascript:;">宣威</a><a href="javascript:;">宣城</a
                ><a href="javascript:;">兴平</a><a href="javascript:;">兴城</a
                ><a href="javascript:;">西乡</a><a href="javascript:;">新县</a
                ><a href="javascript:;">许昌</a><a href="javascript:;">兴义</a
                ><a href="javascript:;">孝感</a><a href="javascript:;">旬阳</a
                ><a href="javascript:;">新民</a><a href="javascript:;">浠水</a
                ><a href="javascript:;">兴安县</a><a href="javascript:;">象山</a
                ><a href="javascript:;">仙桃</a><a href="javascript:;">修文</a
                ><a href="javascript:;">襄垣</a><a href="javascript:;">新乐</a
                ><a href="javascript:;">修武</a><a href="javascript:;">宣汉</a
                ><a href="javascript:;">新和</a><a href="javascript:;">新兴</a
                ><a href="javascript:;">新安</a><a href="javascript:;">襄汾</a
                ><a href="javascript:;">湘西</a><a href="javascript:;">孝义</a
                ><a href="javascript:;">夏津</a><a href="javascript:;">新密</a
                ><a href="javascript:;">锡林郭勒盟</a
                ><a href="javascript:;">兴化</a><a href="javascript:;">响水</a
                ><a href="javascript:;">岫岩</a><a href="javascript:;">新晃</a
                ><a href="javascript:;">兴文</a><a href="javascript:;">信宜</a
                ><a href="javascript:;">霞浦</a><a href="javascript:;">休宁</a
                ><a href="javascript:;">新郑</a><a href="javascript:;">兴安盟</a
                ><a href="javascript:;">新绛</a><a href="javascript:;">息烽</a
                ><a href="javascript:;">徐闻</a><a href="javascript:;">西平</a
                ><a href="javascript:;">项城</a><a href="javascript:;">修水</a
                ><a href="javascript:;">西峡</a><a href="javascript:;">喜德</a
                ><a href="javascript:;">峡江</a><a href="javascript:;">萧县</a
                ><a href="javascript:;">新源</a><a href="javascript:;">仙游</a
                ><a href="javascript:;">西丰</a><a href="javascript:;">小金</a
                ><a href="javascript:;">咸丰</a><a href="javascript:;">息县</a
                ><a href="javascript:;">西林</a><a href="javascript:;">兴业</a
                ><a href="javascript:;">隰县</a><a href="javascript:;">兴和</a
                ><a href="javascript:;">兴县</a><a href="javascript:;">祥云</a
                ><a href="javascript:;">西乌旗</a>
              </li>
            </ul>
            <ul class="station_search_list" v-show="num == 3">
              <li>
                <span>Y</span><a href="javascript:;">扬州</a
                ><a href="javascript:;">永嘉</a><a href="javascript:;">伊犁</a
                ><a href="javascript:;">银川</a><a href="javascript:;">延安</a
                ><a href="javascript:;">运城</a><a href="javascript:;">玉溪</a
                ><a href="javascript:;">永安</a><a href="javascript:;">宜宾</a
                ><a href="javascript:;">宜昌</a><a href="javascript:;">伊春</a
                ><a href="javascript:;">宜春</a><a href="javascript:;">延吉</a
                ><a href="javascript:;">榆林</a><a href="javascript:;">依兰</a
                ><a href="javascript:;">伊宁市</a><a href="javascript:;">烟台</a
                ><a href="javascript:;">鹰潭</a><a href="javascript:;">义乌</a
                ><a href="javascript:;">宜兴</a><a href="javascript:;">岳阳</a
                ><a href="javascript:;">余姚</a><a href="javascript:;">阳江</a
                ><a href="javascript:;">乐清</a><a href="javascript:;">延边</a
                ><a href="javascript:;">阳朔</a><a href="javascript:;">英德</a
                ><a href="javascript:;">禹城</a><a href="javascript:;">虞城</a
                ><a href="javascript:;">阳泉</a><a href="javascript:;">永修</a
                ><a href="javascript:;">偃师</a><a href="javascript:;">永康</a
                ><a href="javascript:;">永州</a><a href="javascript:;">玉屏</a
                ><a href="javascript:;">玉山</a><a href="javascript:;">弋阳</a
                ><a href="javascript:;">义马</a><a href="javascript:;">阳春</a
                ><a href="javascript:;">玉林</a><a href="javascript:;">益阳</a
                ><a href="javascript:;">牙克石</a><a href="javascript:;">义县</a
                ><a href="javascript:;">盐城</a><a href="javascript:;">仪征</a
                ><a href="javascript:;">营口</a><a href="javascript:;">永济</a
                ><a href="javascript:;">玉门</a><a href="javascript:;">营山</a
                ><a href="javascript:;">原平</a><a href="javascript:;">榆树</a
                ><a href="javascript:;">依安</a><a href="javascript:;">玉田</a
                ><a href="javascript:;">永福</a><a href="javascript:;">洋县</a
                ><a href="javascript:;">榆社</a><a href="javascript:;">元氏</a
                ><a href="javascript:;">焉耆</a><a href="javascript:;">彝良</a
                ><a href="javascript:;">盐津</a><a href="javascript:;">永登</a
                ><a href="javascript:;">永宁</a><a href="javascript:;">雅安</a
                ><a href="javascript:;">玉环</a><a href="javascript:;">阳山</a
                ><a href="javascript:;">云浮</a><a href="javascript:;">应城</a
                ><a href="javascript:;">扬中</a><a href="javascript:;">永城</a
                ><a href="javascript:;">阳城</a><a href="javascript:;">玉树市</a
                ><a href="javascript:;">元阳</a><a href="javascript:;">宜兰</a
                ><a href="javascript:;">沂水</a><a href="javascript:;">郓城</a
                ><a href="javascript:;">沂南</a><a href="javascript:;">禹州</a
                ><a href="javascript:;">云和</a><a href="javascript:;">宜良</a
                ><a href="javascript:;">阳谷</a><a href="javascript:;">永泰</a
                ><a href="javascript:;">阳信</a><a href="javascript:;">元谋</a
                ><a href="javascript:;">鄢陵</a><a href="javascript:;">炎陵</a
                ><a href="javascript:;">应县</a><a href="javascript:;">友谊</a
                ><a href="javascript:;">姚安</a><a href="javascript:;">阳曲</a
                ><a href="javascript:;">蔚县</a><a href="javascript:;">阳西</a
                ><a href="javascript:;">永昌</a><a href="javascript:;">宜城</a
                ><a href="javascript:;">攸县</a><a href="javascript:;">易县</a
                ><a href="javascript:;">云霄</a><a href="javascript:;">越西</a
                ><a href="javascript:;">英吉沙</a><a href="javascript:;">于都</a
                ><a href="javascript:;">榆中</a><a href="javascript:;">郁南</a
                ><a href="javascript:;">盐池</a><a href="javascript:;">永吉</a
                ><a href="javascript:;">永仁</a><a href="javascript:;">岳池</a
                ><a href="javascript:;">云梦</a><a href="javascript:;">叶城</a
                ><a href="javascript:;">阳新</a><a href="javascript:;">阳高</a
                ><a href="javascript:;">尤溪</a><a href="javascript:;">永寿</a
                ><a href="javascript:;">英山</a><a href="javascript:;">颍上</a
                ><a href="javascript:;">伊通</a
                ><a href="javascript:;">伊宁县</a>
              </li>
              <li>
                <span>Z</span><a href="javascript:;">镇江</a
                ><a href="javascript:;">舟山</a><a href="javascript:;">张家界</a
                ><a href="javascript:;">珠海</a><a href="javascript:;">淄博</a
                ><a href="javascript:;">自贡</a><a href="javascript:;">湛江</a
                ><a href="javascript:;">诸暨</a><a href="javascript:;">张家口</a
                ><a href="javascript:;">驻马店</a><a href="javascript:;">肇庆</a
                ><a href="javascript:;">中山</a><a href="javascript:;">昭通</a
                ><a href="javascript:;">中卫</a><a href="javascript:;">遵义</a
                ><a href="javascript:;">郑州</a><a href="javascript:;">漳州</a
                ><a href="javascript:;">漳平</a><a href="javascript:;">株洲</a
                ><a href="javascript:;">枣庄</a><a href="javascript:;">张家港</a
                ><a href="javascript:;">张掖</a><a href="javascript:;">樟树</a
                ><a href="javascript:;">镇远</a><a href="javascript:;">中宁</a
                ><a href="javascript:;">扎兰屯</a><a href="javascript:;">资中</a
                ><a href="javascript:;">彰武</a><a href="javascript:;">镇赉</a
                ><a href="javascript:;">枣阳</a><a href="javascript:;">枝江</a
                ><a href="javascript:;">资阳</a><a href="javascript:;">肇东</a
                ><a href="javascript:;">庄河</a><a href="javascript:;">柞水</a
                ><a href="javascript:;">镇安</a><a href="javascript:;">子长</a
                ><a href="javascript:;">正定</a><a href="javascript:;">紫阳</a
                ><a href="javascript:;">梓潼</a><a href="javascript:;">周口</a
                ><a href="javascript:;">芷江</a><a href="javascript:;">钟祥</a
                ><a href="javascript:;">诸城</a><a href="javascript:;">邹城</a
                ><a href="javascript:;">资源</a><a href="javascript:;">涿州</a
                ><a href="javascript:;">正镶白旗</a
                ><a href="javascript:;">泽普</a><a href="javascript:;">柘荣</a
                ><a href="javascript:;">资溪</a><a href="javascript:;">中牟</a
                ><a href="javascript:;">卓资</a><a href="javascript:;">镇平</a
                ><a href="javascript:;">肇源</a><a href="javascript:;">枣强</a
                ><a href="javascript:;">肇州</a><a href="javascript:;">镇雄</a
                ><a href="javascript:;">秭归</a><a href="javascript:;">织金</a
                ><a href="javascript:;">张家川</a><a href="javascript:;">镇宁</a
                ><a href="javascript:;">诏安</a><a href="javascript:;">钟山</a
                ><a href="javascript:;">漳县</a><a href="javascript:;">紫金</a
                ><a href="javascript:;">政和</a><a href="javascript:;">涿鹿</a
                ><a href="javascript:;">张北</a><a href="javascript:;">周宁</a
                ><a href="javascript:;">漳浦</a><a href="javascript:;">子洲</a>
              </li>
            </ul>
          </div>
        </div>
      </dd>
    </dl>
    <div class="search_wrap">
      <div class="searchContent">
        <dl class="catalogList">
          <dt @mousemove="toDDblock">
            <i>{{ searchName ? searchName : "自由行" }}</i>
            <b class="iconfont icon-downlist downAndUp"></b>
          </dt>
          <dd @click="searchChange" ref="dd">
            <a data-id="126" href="javascript:;">全部产品</a
            ><a data-id="64" href="javascript:;">出发地参团</a
            ><a data-id="512" href="javascript:;">目的地参团</a
            ><a data-id="65536" href="javascript:;">目的地自由行</a
            ><a data-id="1048576" href="javascript:;">私家团</a
            ><a data-id="2097152" href="javascript:;">目的地私家团</a
            ><a data-id="4" href="javascript:;">邮轮</a
            ><a data-id="8192" href="javascript:;">游学</a
            ><a data-id="-16" href="javascript:;">高端游</a
            ><a data-id="-2" href="javascript:;">当地玩乐</a
            ><a data-id="-4" href="javascript:;">门票</a
            ><a data-id="1024" href="javascript:;">一日游</a
            ><a data-id="32" href="javascript:;">签证</a>
          </dd>
        </dl>
        <div>
          <input type="text" name="" placeholder="请输入目的地、主题或关键字" />
        </div>
      </div>
      <div href="javascript:;" class="searchBtn">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜 索</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchContainer",
  data() {
    return {
      isShow: false,
      num: 0,
      tab: 0,
      searchName: "",
    };
  },
  methods: {
    //下拉框的显现
    toDDblock() {
      this.$refs.dd.style.display = "block";
    },
    // 下拉框的点击当前显示
    searchChange($event) {
      this.searchName = $event.target.innerHTML;
      this.$refs.dd.style.display = "none";
    },
    // 城市列表的显示与隐藏
    showBlock() {
      this.isShow = !this.isShow;
    },
    // 多个城市列表的切换
    checkCity(index) {
      this.num = index;
    },
  },
};
</script>

<style lang="less" scoped>
.searchContainer {
  width: 100%;
  margin-bottom: 20px;
  padding-top: 6px;
  display: flex;
  // img {
  //   display: block;
  // }
  .cityContainer {
    position: relative;
    width: 176px;
    height: 48px;
    border: 1px solid #bbbbbb;
    display: inline-block;
    text-align: center;
    line-height: 39px;
    background-color: #eeeeee;
    vertical-align: bottom;
    z-index: 100;
    dt {
      position: relative;
      height: 47px;
      z-index: 62;
      .posit {
        position: absolute;
        width: 14px;
        height: 18px;
        left: 21px;
        top: 0px;
        color: #06c;
      }
      .city {
        color: #007aff;
        font-size: 16px;
        padding-right: 3px;
      }
      .downAndUp {
        color: #007aff;
        position: absolute;
        width: 8px;
        height: 7px;
        background-position: -41px -5px;
        top: 5px;
        right: 10px;
      }
      .station {
        font-size: 12px;
      }
    }
    &:hover {
      background-color: #ffffff;
      // border-bottom: 1px solid #ffffff;
    }
    dd {
      text-align: left;
      position: absolute;
      background-color: #fff;
      z-index: 110;
      border: 1px solid #d6d6d6;
      margin-top: -1px;
      padding: 14px;
      width: 350px;
      // height: 645px;
      .hotStation {
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 8px;
        h4 {
          font-weight: 400;
          color: #999;
          font-size: 12px;
          line-height: 20px;
        }
        p {
          line-height: 1;
          a {
            display: inline-block;
            line-height: 15px;
            margin-right: 8px;
            color: #666;
            font-size: 12px;
          }
        }
      }
      .station_search {
        margin-top: 10px;
        height: 523px;
        .station_search_box {
          height: 40px;
          border: 1px solid #d2d2d2;
          border-radius: 4px;
          box-shadow: 1px 1px 3px #ddd inset;
          z-index: 3;
          input {
            border: 0 !important;
            padding: 0 !important;
            background-color: transparent;
            box-shadow: none !important;
            width: 96%;
            height: 28px;
            margin: 0px 2%;
            outline: 0;
          }
        }
        .station_wordsselect {
          margin-top: 10px;
          padding-bottom: 10px;
          background-color: #fff;
          position: relative;
          z-index: 10;
          a {
            text-decoration: none;
            padding: 0 10px;
            line-height: 22px;
            height: 22px;
            white-space: nowrap;
            &:hover {
              background-color: #1d74e6;
              color: #fff !important;
            }
          }
          .active {
            background-color: #1d74e6;
            color: #fff !important;
          }
        }
        .station_search_list {
          margin-top: -1px;
          position: relative;
          z-index: 1;
          max-height: 442px;
          overflow: auto;
          padding-right: 1px;
          li {
            padding-left: 15px;
            line-height: 30px;
            border-top: 1px dotted #eaeaea;
            span {
              margin-left: -15px;
              font-size: 14px;
              color: #1d74e6;
              font-weight: 700;
              float: left;
              margin-top: 1px;
            }
            a {
              margin-left: 15px;
              color: #000;
            }
          }
        }
      }
    }
  }
  .search_wrap {
    width: 610px;
    height: 46px;
    right: 190px;
    border: 3px solid #fe9813;
    border-radius: 5px;
    box-sizing: border-box;
    margin-left: 20px;
    display: flex;
    z-index: 5;
    .searchContent {
      width: 486px;
      height: 100%;
      display: flex;
      input {
        width: 360px;
        height: 100%;
        font-size: 16px;
        border: none;
        padding-left: 10px;
      }
      .catalogList {
        width: 117px;
        height: 100%;
        border-color: #fe9813;
        border-right-width: 2px;
        border-width: 1px;
        border-style: solid;
        text-align: center;
        line-height: 38px;
        background-color: #fff8d5;
        z-index: 60;
        dt {
          z-index: 70;
          i {
            font-size: 14px;
            font-style: normal;
          }
          .iconfont {
            padding-left: 8px;
            color: #fe9813;
          }
        }
        dd {
          a {
            display: none;
          }
        }
        &:hover {
          background-color: #fff;
          dt {
            padding-bottom: 5px;
          }
          dd {
            background-color: #fff;
            z-index: 70;
            a {
              z-index: 70;
              display: block;
              font: 14px/28px microsoft yahei, simsun, sans-serif;
              color: #666;
              padding-left: 10px;
            }
          }
        }
      }
    }
    .searchBtn {
      display: block;
      height: 100%;
      width: 128px;
      color: #fff;
      text-align: center;
      line-height: 38px;
      background-color: #fb9125;
      box-shadow: inset 0 1px 0 0 #fcad5c;
      border: 1px solid #e08821;
      cursor: pointer;
      // border-radius: 0 5px 5px 0;
      text-decoration: none;
      i {
        font-weight: 400;
      }
      span {
        padding: 0 7px;
        font-size: 16px;
      }
    }
  }
}
</style>
