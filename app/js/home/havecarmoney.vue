<template lang="html">
  <Panel title='有车有钱' :class="$style.panel">
    <section :class="$style.imglist">
      <div :class="$style.item" v-for="item in items">
        <router-link :to="{ name: item.href}">
          <img :src="item.src">
        </router-link>
      </div>
    </section>
  <smallList :items='smallItems'></smallList>
  </Panel>
</template>

<script>
 import Panel from '../core/panel'
 import smallList from '../core/smallList'
export default {
  data(){
    return{
      items:[
        {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t22336/343/1857693704/77761/86fae46f/5b39bf53Nf43770cd.png?width=375&height=233'},
        {href:'home',src:'//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233'}
      ],
      smallItems:[
        {href:'home',title:'旅游',src:'//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90'},
        {href:'home',title:'医美',src:'//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90'},
        {href:'home',title:'驾校',src:'//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88'},
        {href:'home',title:'房贷',src:'//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90'},
        {href:'home',title:'分期用',src:'//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88'}
      ]
    }
  },
  components:{Panel,smallList}
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  >h4{
    font-weight: 700
  }
}
.imglist{
  @include list(row);
  img{
      width: 100%;
      display: block;
      height:198px;
  }
  .item{
    flex:1;
  }
}

</style>
