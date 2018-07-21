<template lang="html">
  <article class="">
    <slider :cname='$style.slider' :items='items'></slider>
    <sliderlist :items="slideritem"></sliderlist>
  </article>
</template>

<script>
import slider from '../core/slider'
import sliderlist from '../core/smallList'
export default {
  data(){return {
    items:[
      {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t21940/3/1947471621/38047/b038a502/5b3f4989N5fe3f8f9.jpg?width=750&height=320'},
      {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t23797/102/713594633/42355/56c96026/5b3f49a3N6922ff51.jpg?width=750&height=320'},
      {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t20821/5/1944349577/50700/8c800389/5b3f49cbNbb5c2f03.jpg?width=750&height=320'},
      {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t24163/48/721193047/41544/edc196a6/5b3f4962N5cd5c73f.jpg?width=750&height=320'},
    ],
    slideritem:[
      {
      href:'home',
      src:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
      title:'优惠券'
    },{
      href:'home',
      src:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
      title:'领红包'
    },{
      href:'home',
      src:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
      title:'抢钢镚'
    },{
      href:'home',
      src:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
      title:'白条提额'
    }
    ]
  }},
  components:{slider,sliderlist}
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.slider{
  margin-top:120px;
  img{
    width:100%;
  }
}
</style>
