<template lang="html">
    <div>
      <vheader></vheader>
      <mSlider></mSlider>
      <ada></ada>
      <money></money>
      <adb></adb>
      <finance></finance>
      <adc></adc>
      <vfooter cname="mfooter"></vfooter>
      <vnavbar></vnavbar>
    </div>
</template>

<script>
import vheader from '../public/header'
import vfooter from '../public/foot'
import vnavbar from '../public/navbar'
import mSlider from './mslider'
import ada from './ada'
import money from './money'
import adb from './adb'
import finance from './finance'
import adc from './adc'


export default {
    components: {
      vheader,vfooter,vnavbar,
      mSlider,ada,money,adb,finance,
      adc
    },
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';
  .mfooter{
    margin-top: 0!important;
    ul{
      li:first-child{
        display: none;
      }
    }
  }
</style>
