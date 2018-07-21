<template lang="html">
  <Panel :class="$style.panel" :title="'理财精选'">
    <section :class="$style.finmanageWrapper">
      <div :class="$style.item" v-for="item in finmanage">
        <h4 :class="$style.title"><span >{{item.title}}</span><label>{{item.subtitle}}</label></h4>
        <p>{{item.perc}}</p>
        <h5>{{item.desc}}</h5>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
  data(){
    return {
      finmanage:[
        {title:'京渤随享盈',subtitle:'90天可质押',perc:'5.50%',desc:'历史年化收益率'},
        {title:'年年盈',subtitle:'理财推荐',perc:'4.94%',desc:'综合年化收益率'},
        {title:'建信养老飞益鑫',subtitle:'1000起投',perc:'4.57%',desc:'近7日年化收益'},
        {title:'小白基金',subtitle:'超短期',perc:'4.50%',desc:'7日年化收益率'}
      ]
    }
  },
  components:{
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
  .panel{
    @include panel;
    margin-top:0!important;
    >h4{
      font-weight: 700
    }
  }
  .finmanageWrapper{
    @include list(row);
    height:436px;
    margin-bottom: 20px;
    .item{
      flex:50%;
      padding-left: 32px;
      height: 218px;
      box-sizing: border-box;
      .title{
        font-family: PingFangSC-Medium;
        color: #333;
        height: 42px;
        line-height: 42px;
        box-sizing: border-box;
        margin: 34px 0 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        >span{
          color: #333;
          font-weight: 700;
          font-size: 30px;
          display: block;
          float: left;
          height: 42px;
          line-height: 42px;
        }
        label{
          float: left;
          height: 34px;
          line-height: 34px;
          font-size: 22px;
          padding: 0 8px;
          color: #FF5155;
          position: relative;
          top: 3px;
          left: 8px;
          text-align: center;
          &:before{
            min-width: 104px;
            line-height: 34px;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 200%;
            display: block;
            -webkit-transform: scale(.5,.5);
            -ms-transform: scale(.5,.5);
            transform: scale(.5,.5);
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            box-sizing: border-box;
            border: 1px solid #FF5155;
          }
        }
      }
      >p{
        font-weight: 700;
        font-size: 44px;
        height: 58px;
        line-height: 58px;
        color: #FF5155;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      h5{
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

    }
  }
</style>
