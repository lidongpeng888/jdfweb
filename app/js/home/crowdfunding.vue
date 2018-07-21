<template lang="html">
  <Panel :class="$style.panel" :title="'众筹精品'" >
    <div :class="$style.arrow">更多尖货></div>
    <slider :items="items" :options="silderOptions" cname="crowd-slider"></slider>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
import slider from '../core/slider'
export default {
  data(){
    return {
      items:[
        {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t20368/53/1699227456/59616/e6a80ca4/5b30a580N130c8dfc.jpg?width=335&height=421'},
        {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t23338/182/473320295/44592/4835b8d8/5b30a593N32e80321.jpg?width=335&height=421'},
        {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t23323/199/462493049/28263/3d0f7cbf/5b30a5a5N3dec8fdc.jpg?width=335&height=421'}
      ],
      silderOptions:{
        freeMode : true,
        slidesPerView : 2.3,
        spaceBetween : 30
      }
    }
  },
  components:{
    Panel,slider
  }
}
</script>
<style lang="scss">
  .crowd-slider{
    .swiper-container{
      box-sizing: border-box;
      padding:0 24px;
      .swiper-slide{
        a{
          display: inline-block;
          width: 100%;
        }
        img{
            width: 100%;
            display: block;
            height:314px;
            border:1px solid #fafafa;
        }
      }
    }
  }
</style>
<style lang="scss" module>
@import '../../css/element.scss';
  .panel{
    @include panel;
    position: relative;
    >h4{
      font-weight: 700
    }
    .arrow{
      max-width: 40%;
      font-size: 28px;
      color: #999;
      height: 112px;
      line-height: 112px;
      margin-right: 32px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
      background-size: 18px 28px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
</style>
