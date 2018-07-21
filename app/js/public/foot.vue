<template lang="html">
<Panel title="公司信息" :class="$style.panel">
  <ul :class='$style.list'>
    <li :class="$style.kf">
      <router-link :to="{ name:kf.href }">
          <img :src="kf.kfimg" alt="">
      </router-link>
    </li>
    <li>
      <smallList :items="items"></smallList>
    </li>
    <li><p> Copyright © 2004-2018 京东JD.com 版权所有</p></li>
    <li><p> 投资有风险，购买需谨慎</p></li>
    <li><p> 京东金融平台服务协议</p></li>
    <li><p> 京东金融隐私政策</p></li>
  </ul>
</Panel>
</template>

<script>
import Panel from '../core/panel'
import smallList from '../core/smallList'
export default {
  data(){
    return {
      kf:{
        kfimg:'//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252',
        href:''
      },
      items:[
        {href:'home',title:'客户端',src:'//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108'},
        {href:'home',title:'触屏版',src:'//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108'},
        {href:'home',title:'电脑版',src:'//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108'}
      ]
    }
  },
  components:{
    Panel,smallList
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  background: #F5F5F5;
  margin-bottom: 100px;
  >h4{display:none;}
  section{
      background: #F5F5F5;
  }
}
.kf{
  img{
    height: 144px;
    width:100%;
  }
}
.list{
  @include list(column);
  li{
    min-height: 86px;
    p{
      font-size: 24px;
      line-height: 1.6;
      padding: 24px 32px;
      text-align: center;
      color: #999;
      position: relative;
      box-sizing: border-box;
      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        display: block;
        transform: scaleY(.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        background: #DDD;
      }
    }
  }
}
</style>
