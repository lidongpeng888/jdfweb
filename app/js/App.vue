<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
#app{
      height: 100%;
      background-color: #f5f5f5;
}
.router-link-active >p{
  color:red!important;
}
</style>
