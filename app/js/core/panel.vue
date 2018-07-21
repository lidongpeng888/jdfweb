<template lang="html">
  <div :class="[panelClass,cname]">
    <h4>-{{title}}-</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      panelClass:'panelClass'
    }
  },
  props:{
    cname:{
      type:String,
      default:''
    },
    title:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss">
@import '../../css/element.scss';
.panelClass{
  @include panel;
}
</style>
