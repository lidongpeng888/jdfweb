<template lang="html">
    <div >
        <vheader></vheader>
        <hslider></hslider>
        <finmanage></finmanage>
        <crowdfunding></crowdfunding>
        <insurance></insurance>
        <havecarmoney></havecarmoney>
        <vfooter></vfooter>
        <vnavbar></vnavbar>
    </div>
</template>

<script>
import vheader from '../public/header'
import hslider from './hslider'
import finmanage from './finmanage'
import crowdfunding from './crowdfunding'
import insurance from './insurance'
import havecarmoney from './havecarmoney'
import vfooter from '../public/foot'
import vnavbar from '../public/navbar'

export default {
  components:{
    vheader,hslider,finmanage,crowdfunding,
    insurance,havecarmoney,vfooter,vnavbar
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    color: red;
    font-size: 80px;
  }
</style>
