<template lang="html">
  <section :class="$style.sliderList">
    <div :class="$style.item"  v-for="item in items" :key="item.href">
      <router-link :to="{ name:item.href }">
          <img :src="item.src" :alt="item.title">
          <span :class="$style.title">{{item.title}}</span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    items:{
      type:Array,
      default(){
        return [] //{href:'',src:'',title:''}
      }
    }
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.sliderList{
  @include list(row)
  background: #fff;
  padding-top:40px;
  font-size: 32px;
  min-height:142px;
  justify-content: space-around;
  a{
    text-decoration: none;
  }
  .item{
    text-align: center;
    flex:1;
    .title{
      font-size: 26px;
      text-align: center;
      display: block;
      color: #666;
      margin-top: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    img{
      display: inline-block;
      width: 90px;
      height:90px;
    }
  }
}
</style>
