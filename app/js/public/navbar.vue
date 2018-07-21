<template lang="html">
  <Panel :class="$style.panel" title="导航条">
    <ul :class="$style.content">
      <li v-for='item in items'>
        <router-link :to="{ path:item.href }" exact>
            <img :src="item.src" :alt="item.title">
            <p :class="$style.title">{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
import smallList from '../core/smallList'
export default {
  components:{Panel,smallList},
  data(){
    return {
      items:[
        {title:'首页',href:'/',src:'//img12.360buyimg.com/jrpmobile/jfs/t17587/158/1300523690/1908/eabacaac/5ac4850bNdf876dd8.png?width=60&height=60'},
        {title:'赚钱',href:'/money',src:'//img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60'},
        {title:'借钱',href:'/borrow',src:'//img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60'},
        {title:'金融会员',href:'/me',src:'//img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60'}
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  position: fixed;
  left: 0;
  right:0;
  bottom:0;
  margin: 0;
  height: 100px;
  z-index: 100;
  >h4{
    display:none;
  }
  .content{
    @include list(row)
    height:100px;
    background: #fff;
    font-size: 22px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    li{
      text-align: center;
      flex:1;
      .title{
        font-size: 26px;
        text-align: center;
        display: block;
        color: #B1B4BB;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      img{
        display: inline-block;
        width: 44px;
        height:44px;
        margin:12px auto 6px;
      }
    }
  }
}
</style>
